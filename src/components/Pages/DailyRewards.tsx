import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { RetriveDailyStreak, DailyStreakCreate } from '@/utils/requests';
import { isStreakContinued } from '@/utils/dateUtils'; // Remove isWithin24Hours import
import MiniPreloader from './MiniPleloader';
import DailyPopUpComfirmation from '../DailyPopUpComfirmation';
import ClaimDailyRewards from '../ClaimDailyRewards';

interface DailyStreakRetrieval {
    id: number;
    current_streak: number;
    date_started: string;
    last_checkin_date: string;
    owner: number;
}

const DailyRewards: React.FC = () => {
    const [dailyClaim, setDailyClaim] = useState(false);
    const [dailyRewardsClaimed, setDailyRewardsClaimed] = useState(false);
    const [streak, setStreak] = useState<DailyStreakRetrieval | null>(null);
    const [canClaim, setCanClaim] = useState(false);
    const [claimedDays, setClaimedDays] = useState<number[]>([]);
    const [stillFetching, setStillFetching] = useState<boolean>(true);

    useEffect(() => {
        RetriveDailyStreak()
            .then((streakData) => {
                const lastCheckin = streakData.last_checkin_date || streakData.date_started;
                const canClaimStreak = isStreakContinued(lastCheckin); // Use only isStreakContinued

                setCanClaim(canClaimStreak);
                setStreak(streakData);
                setStillFetching(false);
            })
            .catch(() => {
                console.error('Error while fetching streak data');
                setStillFetching(false);
            });
    }, []);

    if (stillFetching) return <MiniPreloader />;

    const handleClaim = async (day: number) => {
        if (!claimedDays.includes(day) && streak && canClaim) {
            try {
                const currentDate = new Date().toISOString().split('T')[0];
                await DailyStreakCreate({
                    last_checkin_date: currentDate,
                    owner: streak.owner ?? 0,
                });

                // Update the streak state with the new last_checkin_date and current_streak
                setStreak((prevStreak) => ({
                    ...prevStreak!,
                    last_checkin_date: currentDate,
                    current_streak: (prevStreak!.current_streak || 0) + 1,
                }));

                setClaimedDays([...claimedDays, day]);
                setDailyRewardsClaimed(true);
                setCanClaim(false); // Prevent further claims until the next day
            } catch (error) {
                console.error('Error claiming daily reward:', error);
                alert('Error claiming daily reward');
            }
        }
    };

    const renderReward = (day: number) => {
        const currentDate = new Date().toISOString().split('T')[0];
        const isCurrentDay = streak?.current_streak === day;
        const canClaimDay = canClaim && isCurrentDay;
        const isClaimed = claimedDays.includes(day) || (streak && streak.last_checkin_date === currentDate);

        return (
            <div
                key={day}
                className={`reward-item ${canClaimDay ? 'claimable' : ''}`}
                onClick={() => {
                    if (canClaimDay) handleClaim(day);
                }}
            >
                <p className="day-text">Day {day}</p>
                <div className={`claim-button ${canClaimDay ? 'claimable' : ''}`}>
                    <h1>{isClaimed ? <span className="claimed-text">Claimed</span> : 'Claim'}</h1>
                </div>
            </div>
        );
    };

    return (
        <div className="daily-rewards-container">
            <div className="header">
                <Image src="/daily.png" width={100} height={100} alt="Daily Rewards" />
                <h1>Daily Rewards</h1>
                <p>Claim Good coin daily without missing a day</p>
            </div>
            <div className="content">
                {[1, 2, 3, 4, 5, 6, 7].map((day) => renderReward(day))}
            </div>
            <div className="footer">
                <h1>Come back tomorrow!</h1>
            </div>
            {dailyClaim && <DailyPopUpComfirmation isopen={true} isClose={() => setDailyClaim(false)} />}
            {dailyRewardsClaimed && (
                <ClaimDailyRewards isopen={true} isClose={() => setDailyRewardsClaimed(false)} />
            )}
        </div>
    );
};

export default DailyRewards;
