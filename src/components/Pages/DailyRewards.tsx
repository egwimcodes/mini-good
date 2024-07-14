import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import DailyPopUpComfirmation from '../DailyPopUpComfirmation';
import ClaimDailyRewards from '../ClaimDailyRewards';
import { RetriveDailyStreak } from '@/utils/requests';
import MiniPreloader from "./MiniPleloader";
import { canClaim } from '@/utils/dateUtils';

interface DailyStreakRetrival {
    id: number,
    current_streak: number,
    date_started: string,
    last_checkin_date: string,
    owner: number
}

export default function DailyRewards() {
    const [dailyClaim, setDailyClaim] = useState(false);
    const [dailyRewardsClaimed, setDailyRewardsClaimed] = useState(false);
    const [streak, setStreak] = useState<DailyStreakRetrival>();
    const [stillFetching, setStillFetching] = useState<boolean>(true);
    const [coinAmountToClaim, setCoinAmountToClaim] = useState<number | undefined>();
    const [canClaimDay, setCanClaimDay] = useState(false);
    const [isClaimed, setIsClaimed] = useState(false);

    const fetchStreakData = () => {
        setStillFetching(true);
        RetriveDailyStreak()
            .then((streak) => {
                const streak_data = streak.last_checkin_date ?? streak.current_streak;
                setStreak(streak);
                const canClaimStatus = canClaim(streak_data);
                setCanClaimDay(canClaimStatus);
                setIsClaimed(!canClaimStatus);
                setStillFetching(false);
            })
            .catch(() => {
                console.log('Error while fetching streak data');
                setStillFetching(false);
            });
    };

    useEffect(() => {
        fetchStreakData();
    }, []);

    const handleClaimClick = () => {
        if (canClaimDay && streak?.current_streak) {
            setDailyRewardsClaimed(true);
            setCoinAmountToClaim(streak.current_streak * 500);
            // Mark as claimed immediately
            setIsClaimed(true);
            // Optionally, update the backend to reflect the claim here
        }
    };

    useEffect(() => {
        if (dailyRewardsClaimed) {
            fetchStreakData();
        }
    }, [dailyRewardsClaimed]);

    if (stillFetching) return <MiniPreloader />;

    return (
        <div className="rewards-container w-100% h-[100%] flex flex-col items-center justify-evenly">
            <div className="rewards-header w-[100%] h-[30%] flex flex-col items-center justify-between">
                <Image className="xxxsm:w-[25%] xxsm:w-[30%] xsm:w-[25%] sm:w-[17%]" draggable="false" src="https://ik.imagekit.io/egwimcodes/daily.png?updatedAt=1720197415331" width={100} height={100} alt="" />
                <h1 className="xxxsm:text-xs xxsm:text-2xl xsm:text-1rem sm:text-1rem text-light">Daily Rewards</h1>
                <p className="xxxsm:text-xxs xxsm:text-xs xsm:text-xs sm:text-xs text-light">Claim Good coin daily without missing a day</p>
                <p className="xxxsm:text-xxxs xxsm:text-xs xsm:text-xs sm:text-xs text-light">Check and Claim</p>
            </div>

            <div className="rewards-content h-[60%] w-[100%] mx-auto flex flex-row flex-wrap justify-between rounded-xl px-3 pb-5 border-2 border-main">
                <div className="boost-btn-container h-inherit w-inherit flex flex-col items-center">
                    <div className="reward-header w-[90vw] h-[20%] flex flex-row items-center justify-between mx-auto">
                        <h1 className="xxxsm:text-xs xxsm:text-2xl xsm:text-1rem sm:text-1rem font-bold text-light">DAILY CLAIM</h1>
                    </div>
                    <div className="reward-content flex flex-col w-[90%] h-[80%] mx-auto flex-center">
                        <div className="h-[100%] flex justify-center items-center">
                            <div className="reward-child w-[100%] h-[100%] z-10 flex-col justify-center">
                                <div
                                    id="diamond-narrow"
                                    className={`z-10 relative from-slate-600 bg-slate-900`}
                                    onClick={handleClaimClick}
                                >
                                    <div className={`content bg-orange-400 w-[100%]`}>
                                        <p className="text-white text-xs font-bold">Day {streak?.current_streak}</p>
                                        {isClaimed ? (
                                            <div className="text-claim rounded-[40px]">
                                                <h1 className="text-white text-xs font-bold bg-green-400 w-fit mx-auto p-1 rounded-[40px]">
                                                    CLAIMED
                                                </h1>
                                            </div>
                                        ) : (
                                            canClaimDay && (
                                                <div className="text-claim rounded-[40px]">
                                                    <h1 className="text-white text-xl font-bold bg-green-400 w-fit mx-auto p-1 rounded-[40px]">
                                                        Claim
                                                    </h1>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rewards-footer w-[100%] h-[10%] mx-auto flex-center">
                            <h1 className="text-main text-center xxxsm:text-xxxs xxsm:text-xs xsm:text-xs sm:text-xs">
                                Comeback Tomorrow <br /> and <br />keep Streak moving
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            {dailyClaim && (
                <DailyPopUpComfirmation isopen={true} isClose={() => setDailyClaim(false)} />
            )}
            {dailyRewardsClaimed && (
                <ClaimDailyRewards isopen={true} isClose={() => { setDailyRewardsClaimed(false);  setIsClaimed(true)}} amount={coinAmountToClaim} />
            )}
        </div>
    );
}
