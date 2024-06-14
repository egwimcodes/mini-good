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
                        <div className="reward-check flex flex-col justify-between w-[80%] h-[80%]">
                            <div className="rewardinput flex-between flex-row items-center justify-evenly ">
                                <p className="text-light xxxsm:text-xxxs xxsm:text-xsxs xsm:text-1rem sm:text-1rem">Day1</p>
                                <hr className='h-2 border-2 bg-green-500 border-orange-400 rounded-full w-[80%]' />
                                <input className="daily-check text-light border-orange-400 border-2" type="checkbox" name="" id="" checked />
                            </div>
                            <div className="rewardinput flex-between flex-row items-center justify-center">
                                <p className="text-light xxxsm:text-xxxs xxsm:text-xsxs xsm:text-1rem sm:text-1rem text-orange-400">Day2</p>
                                <hr className='h-2 border-2  border-orange-400 rounded-full w-[80%]' />
                                <input className="daily-check text-light border-light border-orange-400 border-2" type="checkbox" name="" id="" />
                            </div>
                            <div className="rewardinput flex-between flex-row items-center justify-center">
                                <p className="text-light xxxsm:text-xxxs xxsm:text-xsxs xsm:text-1rem sm:text-1rem text-orange-400">Day3</p>
                                <hr className='h-2 border-2  border-orange-400 rounded-full w-[80%]' />
                                <input className="daily-check text-light border-orange-400 border-2" type="checkbox" name="" id="" />
                            </div>
                            <div className="rewardinput flex-between flex-row items-center justify-center">
                                <p className="text-light xxxsm:text-xxxs xxsm:text-xsxs xsm:text-1rem sm:text-1rem text-orange-400">Day4</p>
                                <hr className='h-2 border-2  border-orange-400 rounded-full w-[80%]' />
                                <input className="daily-check text-light border-orange-400 border-2" type="checkbox" name="" id="" />
                            </div>
                            <div className="rewardinput flex-between flex-row items-center justify-center">
                                <p className="text-light xxxsm:text-xxxs xxsm:text-xsxs xsm:text-1rem sm:text-1rem text-orange-400">Day5</p>
                                <hr className='h-2 border-2  border-orange-400 rounded-full w-[80%]' />
                                <input className="daily-check text-light border-orange-400 border-2" type="checkbox" name="" id="" />
                            </div>
                            <div className="rewardinput flex-between flex-row items-center justify-center">
                                <p className="text-light xxxsm:text-xxxs xxsm:text-xsxs xsm:text-1rem sm:text-1rem text-orange-400">Day6</p>
                                <hr className='h-2 border-2  border-orange-400 rounded-full w-[80%]' />
                                <input className="daily-check twhite border-orange-400 border-2" type="checkbox" name="" id="" />
                            </div>
                            <div className="rewardinput flex-between flex-row items-center justify-center">
                                <p className="text-light xxxsm:text-xxxs xxsm:text-xsxs xsm:text-1rem sm:text-1rem text-orange-400">Day 7</p>
                                <hr className='h-2 border-2 border-orange-400 rounded-full w-[80%]' />
                                <input className="daily-check text-light border-orange-400 border-2" type="checkbox" name="" id="" />
                            </div>

                        </div>

                        <div className="reward-btn-claim h-[25%] w-[100%] flex flex-row items-center justify-center " >
                            <div className="reward-claim-btn bg-green-500 w-[80%] h-[70%] mx-auto rounded-[20px] flex-center">

                                <h3 className='xxxsm:text-xxxs xxsm:text-xs xsm:text-1rem sm:text-1rem text-white font-semibold'>CLAIM</h3></div>
                            </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

