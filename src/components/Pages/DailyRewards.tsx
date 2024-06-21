import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoMdTime } from "react-icons/io";
import DailyPopUpComfirmation from '../DailyPopUpComfirmation';
import ClaimDailyRewards from '../ClaimDailyRewards';
import { RetriveDailyStreak } from '@/utils/requests';
import { checkLastCheckin } from '@/utils/dateUtils';
import MiniPreloader from "./MiniPleloader";

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
    const [streak, setStreak] = useState<DailyStreakRetrival | null>(null);
    const [canClaim, setCanClaim] = useState<number>(0);
    const [stillFetching, setStillFetching] = useState<boolean>(true);
    const [coinAmountToClaim, setCoinAmountToClaim] = useState<number | undefined>();

    useEffect(() => {
        RetriveDailyStreak()
            .then((streak) => {
                alert(`${streak.date_started},,,,,,,,,${streak.last_checkin_date}`);

                const lastCheckin = streak.last_checkin_date ?? streak.date_started;
                const canClaim = checkLastCheckin(lastCheckin);
                setCanClaim(canClaim);
                setStreak(streak);
                setStillFetching(false);
                if (canClaim === 2) {
                    const lastCheckinDate = new Date(lastCheckin);
                    const currentDate = new Date();
                    const timeDifference = currentDate.getTime() - lastCheckinDate.getTime();
                    const hoursDifference = timeDifference / (1000 * 3600);
                    if (hoursDifference > 24) {
                        alert('You missed a day');
                    }
                }
            })
            .catch(() => {
                alert('Error while fetching streak data');
                setStillFetching(false);
            });
    }, []);

    if (stillFetching) return <MiniPreloader />;

    const handleClaim = (day: number) => {
        if (streak && canClaim === 1 && streak.current_streak + 1 === day) {
            setDailyRewardsClaimed(true);
            setCoinAmountToClaim(day * 500);

            // Update the streak state to reflect the new claim
            setStreak((prevStreak) => prevStreak ? {
                ...prevStreak,
                current_streak: prevStreak.current_streak + 1,
                last_checkin_date: new Date().toISOString().split('T')[0]
            } : null);

            // Reset canClaim for the next day
            setCanClaim(0);
        }
    };

    const renderReward = (day: number) => {
        const isClaimed = streak?.current_streak && streak?.current_streak >= day;
        const canClaimDay = !isClaimed && canClaim === 1 && streak?.current_streak  === day;

        return (
            <div
                key={day}
                id="diamond-narrow"
                className={`z-10 relative ${canClaimDay ? 'from-slate-600 bg-slate-900' : ''}`}
                onClick={() => { if (canClaimDay) handleClaim(day); }}
            >
                <div className={`content ${canClaimDay ? 'bg-gradient-to-b from-cyan-600' : 'bg-orange-400'} w-[100%]`}>
                    <p className="text-white text-xs font-bold">Day {day}</p>
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
        );
    };

    return (
        <div className="rewards-container w-100% h-[100%] flex flex-col items-center justify-evenly">
            <div className="rewards-header w-[100%] h-[20%] flex flex-col items-center justify-between">
                <Image className="xxxsm:w-[25%] xxsm:w-[30%] xsm:w-[25%] sm:w-[17%]" draggable="false" src="/daily.png" width={100} height={100} alt="" />
                <h1 className="xxxsm:text-xs xxsm:text-2xl xsm:text-1rem sm:text-1rem text-light">Daily Rewards</h1>
                <p className="xxxsm:text-xxs xxsm:text-xs xsm:text-xs sm:text-xs text-light">Claim Good coin daily without missing a day</p>
                <p className="xxxsm:text-xxxs xxsm:text-xs xsm:text-xs sm:text-xs text-light">Check and Claim</p>
            </div>

            <div className="rewards-content h-fit w-[100%] mx-auto flex flex-row flex-wrap justify-between rounded-xl px-3 pb-5 border-2 border-main">
                <div className="boost-btn-container h-inherit w-inherit flex flex-col items-center">
                    <div className="reward-header w-[90vw] h-[20%] flex flex-row items-center justify-between mx-auto">
                        <h1 className="xxxsm:text-xs xxsm:text-2xl xsm:text-1rem sm:text-1rem font-bold text-light">DAILY CLAIM</h1>
                        <div className="time-remaining flex flex-row items-center flex-nowrap">
                            <div className="time-remainig-header h-[3vh]">
                                <p className="text-sm timing-show text-light">Available in</p>
                                <p className="xxxsm:text-xxxs xxsm:text-xsxs xsm:text-1rem sm:text-1rem timing-show text-light font-semibold">9:00:00 PM</p>
                            </div>
                            <div className="timing ml-3">
                                <IoMdTime className="text-light" />
                            </div>
                        </div>
                    </div>
                    <div className="reward-content flex flex-col w-[90%] h-[80%] mx-auto flex-center">
                        <div className="h-[100%] flex justify-center items-center">
                            <div className="reward-child w-[100%] h-[100%] z-10 flex-col justify-center">
                                {[1, 2, 3, 4, 5, 6, 7].map(day => renderReward(day))}
                            </div>
                        </div>
                        <div className="rewards-footer w-[100%] h-[10%] mx-auto flex-center">
                            <h1 className="text-main">
                                Comeback Tomorrow
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            {dailyClaim && (
                <DailyPopUpComfirmation isopen={true} isClose={() => setDailyClaim(false)} />
            )}
            {dailyRewardsClaimed && (
                <ClaimDailyRewards isopen={true} isClose={() => setDailyRewardsClaimed(false)} amount={coinAmountToClaim} last_checkin_date={streak?.last_checkin_date} />
            )}
        </div>
    );
}
