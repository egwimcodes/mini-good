import React, { useEffect } from 'react'
import Image from 'next/image'
import { IoMdTime } from "react-icons/io";
import { GetDailyStreakCreate } from '@/utils/requests';
import { useUserContext } from '@/hooks/UserContext';

export default function DailyRewards() {
    const user = useUserContext();
    useEffect(() => {     
        GetDailyStreakCreate().then((e) => {
            alert(`Daily streak created: ${e}`);
        }).catch((e) => {
            alert(`Error: ${JSON.stringify(e.message)}`);
        })
    })

    return (
        <div className="rewards-container w-full h-[80vh]  flex flex-col items-center justify-evenly ">
            <div className="rewards-header w-full h-[30vh] flex flex-col items-center justify-between ">
                <Image className="w-1/3" draggable="false" src="/daily.png" width={100} height={100} alt="" />
                <h1 className="text-3xl font-bold text-light">Daily Rewards</h1>
                <p className="text-sm g   text-light">Claim Good coin daily without missing a day</p>
            </div>

            <div className="rewards-content h-[40vh] w-[95vw] mx-auto flex flex-row flex-wrap justify-between  rounded-xl px-3  pb-5 border-2 border-orange-400">
                <div className="boost-btn-container h-inherit w-inherit  flex flex-col items-center ">
                    <div className="reward-header w-[90vw] h-[50%] flex flex-row items-center justify-between mx-auto">
                        <h1 className="text-2xl font-bold text-light">DAILY CLAIM</h1>
                        <div className="time-remaining flex flex-row items-center flex-nowrap">
                            <div className="time-remainig-header h-[3vh]">
                                <p className="text-sm timing-show text-light">Available in</p>
                                <p className="text-sm timing-show text-light font-semibold">9:00:00 P:M</p>
                            </div>
                            <div className="timing ml-3">
                                <IoMdTime className="text-light" />
                            </div>
                        </div>
                    </div>
                    <div className="reward-content flex flex-col items-center justify-center">
                        <div className="reward-check flex flex-row justify-between w-[80vw] ">
                            <div className="rewardinput flex flex-col items-center justify-center">
                                <input className="daily-check text-light border-orange-400 border-2" type="checkbox" name="" id="" checked />
                                <p className="text-light text-sm">Day1</p>
                            </div>
                            <div className="rewardinput flex flex-col items-center justify-center">
                                <input className="daily-check text-light border-light border-orange-400 border-2" type="checkbox" name="" id="" />
                                <p className="text-light text-sm">Day2</p>
                            </div>
                            <div className="rewardinput flex flex-col items-center justify-center">
                                <input className="daily-check text-light border-orange-400 border-2" type="checkbox" name="" id="" />
                                <p className="text-light text-sm">Day3</p>
                            </div>
                            <div className="rewardinput flex flex-col items-center justify-center">
                                <input className="daily-check text-light border-orange-400 border-2" type="checkbox" name="" id="" />
                                <p className="text-light text-sm">Day4</p>
                            </div>
                            <div className="rewardinput flex flex-col items-center justify-center">
                                <input className="daily-check text-light border-orange-400 border-2" type="checkbox" name="" id="" />
                                <p className="text-light text-sm">Day5</p>
                            </div>
                            <div className="rewardinput flex flex-col items-center justify-center">
                                <input className="daily-check text-light border-orange-400 border-2" type="checkbox" name="" id="" />
                                <p className="text-light text-sm">Day6</p>
                            </div>
                            <div className="rewardinput flex flex-col items-center justify-center">
                                <input className="daily-check text-light border-orange-400 border-2" type="checkbox" name="" id="" />
                                <p className="text-light text-sm">Day 7</p>
                            </div>

                        </div>

                        <div className="reward-btn-claim w-full h-[7vh] flex flex-row items-center justify-center mt-3" ><h3>CLAIM</h3></div>
                    </div>
                </div>
            </div>


        </div>
    )
}

