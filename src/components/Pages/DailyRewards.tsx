import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoMdTime } from "react-icons/io";
import DailyPopUpComfirmation from '../DailyPopUpComfirmation';
import ClaimDailyRewards from '../ClaimDailyRewards';
import { RetriveDailyStreak } from '@/utils/requests';
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
    const [stillFetching, setStillFetching] = useState<boolean>(true);
    const [coinAmountToClaim] = useState<number | undefined>();
    const [canClaimDay] = useState(false)
    const [isClaimed]=useState(false)

    useEffect(() => {
        const fetchStreakData = () => {RetriveDailyStreak()
            .then((streak) => {
                setStreak(streak);
                setStillFetching(false);
                alert(streak.current_streak)

            })
            .catch(() => {
                alert('Error while fetching streak data');
                setStillFetching(false);
            });
        };   
        fetchStreakData();
        // const intervalid = setInterval(fetchStreakData, 1000);
        // return () => clearInterval(intervalid);
    }, []);

    if (stillFetching) return <MiniPreloader />;

    return (
        <div className="rewards-container w-100% h-[100%] flex flex-col items-center justify-evenly">
            <div className="rewards-header w-[100%] h-[20%] flex flex-col items-center justify-between">
                <Image className="xxxsm:w-[25%] xxsm:w-[30%] xsm:w-[25%] sm:w-[17%]" draggable="false" src="/daily.png" width={100} height={100} alt="" />
                <h1 className="xxxsm:text-xs xxsm:text-2xl xsm:text-1rem sm:text-1rem text-light">Daily Rewards</h1>
                <p className="xxxsm:text-xxs xxsm:text-xs xsm:text-xs sm:text-xs text-light">Claim Good coin daily without missing a day</p>
                <p className="xxxsm:text-xxxs xxsm:text-xs xsm:text-xs sm:text-xs text-light">Check and Claim</p>
            </div>

            <div className="rewards-content h-[60%] w-[100%] mx-auto flex flex-row flex-wrap justify-between rounded-xl px-3 pb-5 border-2 border-main">
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

                                <div
                                    id="diamond-narrow"
                                    className={`z-10 relative from-slate-600 bg-slate-900`}
                                >
                                    <div className={`content bg-orange-400 w-[100%]`}>
                                        <p className="text-white text-xs font-bold">Day 1</p>
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
