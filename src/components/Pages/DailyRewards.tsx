import React from 'react'
import Image from 'next/image'
import { IoMdTime } from "react-icons/io";

export default function DailyRewards() {
   

    return (
        <div className="rewards-container w-100% h-[100%]  flex flex-col items-center justify-evenly ">
            <div className="rewards-header w-[100%] h-[3=20%] flex flex-col items-center justify-between ">
                <Image className="xxxsm:w-[25%] xxsm:w-[30%] xsm:w-[25%]  sm:w-[17%] " draggable="false" src="/daily.png" width={100} height={100} alt="" />
                <h1 className="xxxsm:text-xs xxsm:text-2xl xsm:text-1rem sm:text-1rem  text-light ">Daily Rewards</h1>
                <p className="xxxsm:text-xxs xxsm:text-xs xsm:text-xs sm:text-xs text-light">Claim Good coin daily without missing a day</p>
                <p className="xxxsm:text-xxxs xxsm:text-xs xsm:text-xs sm:text-xs text-light">Check and Claim</p>
            </div>

            <div className="rewards-content h-[60%] w-[100%] mx-auto flex flex-row flex-wrap justify-between  rounded-xl px-3  pb-5 border-2 border-orange-400">
                <div className="boost-btn-container h-inherit w-inherit  flex flex-col items-center ">
                    <div className="reward-header w-[90vw] h-[20%] flex flex-row items-center justify-between mx-auto">
                        <h1 className="xxxsm:text-xs xxsm:text-2xl xsm:text-1rem sm:text-1rem  font-bold text-light">DAILY CLAIM</h1>
                        <div className="time-remaining flex flex-row items-center flex-nowrap">
                            <div className="time-remainig-header h-[3vh]">
                                <p className="text-sm timing-show text-light">Available in</p>
                                <p className="xxxsm:text-xxxs xxsm:text-xsxs xsm:text-1rem sm:text-1rem  timing-show text-light font-semibold">9:00:00 P:M</p>
                            </div>
                            <div className="timing ml-3">
                                <IoMdTime className="text-light" />
                            </div>
                        </div>
                    </div>
                    <div className="reward-content flex flex-col w-[100%] h-[80%] items-center justify-center">
                        <div className="reward-check flex flex-col justify-between w-[50%]">
                            <div className="rewardinput flex-between flex-row items-center justify-evenly">
                                <p className="text-light xxxsm:text-xxxs xxsm:text-xsxs xsm:text-1rem sm:text-1rem">Day1</p>
                                <input className="daily-check text-light border-orange-400 border-2" type="checkbox" name="" id="" checked />
                            </div>
                            <div className="rewardinput flex-between flex-row items-center justify-center">
                                <p className="text-light xxxsm:text-xxxs xxsm:text-xsxs xsm:text-1rem sm:text-1rem">Day2</p>
                                <input className="daily-check text-light border-light border-orange-400 border-2" type="checkbox" name="" id="" />
                            </div>
                            <div className="rewardinput flex-between flex-row items-center justify-center">
                                <p className="text-light xxxsm:text-xxxs xxsm:text-xsxs xsm:text-1rem sm:text-1rem">Day3</p>
                                <input className="daily-check text-light border-orange-400 border-2" type="checkbox" name="" id="" />
                            </div>
                            <div className="rewardinput flex-between flex-row items-center justify-center">
                                <p className="text-light xxxsm:text-xxxs xxsm:text-xsxs xsm:text-1rem sm:text-1rem">Day4</p>
                                <input className="daily-check text-light border-orange-400 border-2" type="checkbox" name="" id="" />
                            </div>
                            <div className="rewardinput flex-between flex-row items-center justify-center">
                                <p className="text-light xxxsm:text-xxxs xxsm:text-xsxs xsm:text-1rem sm:text-1rem">Day5</p>
                                <input className="daily-check text-light border-orange-400 border-2" type="checkbox" name="" id="" />
                            </div>
                            <div className="rewardinput flex-between flex-row items-center justify-center">
                                <p className="text-light xxxsm:text-xxxs xxsm:text-xsxs xsm:text-1rem sm:text-1rem">Day6</p>
                                <input className="daily-check text-light border-orange-400 border-2" type="checkbox" name="" id="" />
                            </div>
                            <div className="rewardinput flex-between flex-row items-center justify-center">
                                <p className="text-light xxxsm:text-xxxs xxsm:text-xsxs xsm:text-1rem sm:text-1rem">Day 7</p>
                                <input className="daily-check text-light border-orange-400 border-2" type="checkbox" name="" id="" />
                            </div>

                        </div>

                        <div className="reward-btn-claim w-full h-[5%] flex flex-row items-center justify-center " ><h3>CLAIM</h3></div>
                    </div>
                </div>
            </div>


        </div>
    )
}

