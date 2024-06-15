"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { IoMdWallet } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import Profile from './Profile';
import Wallet from './Wallet';
import { useUserContext } from '@/hooks/UserContext';

interface ClickEffect {
    id: number;
    x: number;
    y: number;
}

export default function Dashboard() {
    const user = useUserContext();
    const strorag = localStorage.getItem('balance');
    const prevBalance = '0';
    const [clickEffects, setClickEffects] = useState<ClickEffect[]>([]);
    const [showProfile, setShowProfile] = useState("dashboard");
    const [balance, setBalance] = useState(0 + (Number(strorag) || 0));

    useEffect(() => {
        localStorage.setItem('balance', String(balance));
    }, [balance])

    const handleImageClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const newEffect: ClickEffect = { id: Date.now(), x, y };

        setClickEffects((prevEffects) => [...prevEffects, newEffect]);

        setTimeout(() => {
            setClickEffects((prevEffects) => prevEffects.filter(effect => effect.id !== newEffect.id));
        }, 2000);

        // Increment balance when image is clicked
        setBalance(prev => prev + user.earn_per_tap);
    };

    return (
        <>
            {showProfile === "dashboard" && (
                <div className='w-[100%] h-[100%] text-light flex-col flex-start'>
                    <div className="dashboard-section w-[100%] h-[30%] justify-self-start  mx-auto ] ">
                        <div className="dashbord-up h-[40%]  flex-between flex-row ">
                            <div className="left-child flex flex-row items-center  w-[50%]" onClick={() => setShowProfile("profile")}>
                                <div className="profile w-[10vw] ">
                                    <Image className='profile-avater p-1' src="/robot.png" width={50} height={50} alt="" />
                                </div>
                                <p className='text-base font-semibold ml-1'>{user.username}</p>
                            </div>
                            <div className="right-child w-[35%] flex-end ">
                                <div className="icon-container p-1">
                                    <IoMdWallet className='text-4xl xs:text-2xl' onClick={() => setShowProfile("wallet")} />
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-down h-[60%] w-full flex-row flex-between">
                            <div className="balance-section flex flex-col justify-between h-[80%] min-h-fit w-[49%] bg-gradient-to-b from-gray-800  rounded-[10px] p-2 border-2 border-main ">
                                <h1 className='text-sm '>Balance</h1>
                                <div className="balance-coin-amount flex-row flex-between h-[60%] ">
                                    <div className="coin-balance w-[80%] h-[100%] flex-center">
                                        <Image src="/goodcoing.png" className="xxxsm:w-[20%] xxsm:w-[20%] xsm:w-[20%]  sm:w-[17%]" width={25} height={25} alt="" />
                                        <p className='text-2xl h-[100%] w-[70%] flex-row flex-evenly'>{balance}</p>
                                    </div>
                                    <div className="icon-add border-1 xxxsm:w-[20%] xxsm:w-[20%] xsm:w-[20%] h-[80%] rounded-[5px] border-white p-1  bg-gradient-to-b from-slate-600 bg-slate-900 flex-center ">
                                        <IoMdAdd className='text-main' />
                                    </div>
                                </div>
                            </div>
                            <div className="balance-section flex flex-col justify-between h-[80%] min-h-fit w-[49%] bg-gradient-to-b from-gray-800  rounded-[10px] p-2 border-2 border-main ">
                                <p className='text-sm font-base h-[40%] '>Earning Per hour</p>
                                <div className="balance-coin-amount flex-row flex-between h-[60%] ">
                                    <p className='text-2xl h-[100%] w-[70%] flex-row flex-start'>{user.profit_per_hour}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tap-section w-[100%] h-[70%] rounded-[20px]  border-2 border-main  flex justify-center items-center justify-self-start mx-auto">
                        <div className="tap w-[60%] relative" >
                            <Image src="/goodcoing.svg" className="coin-svg mx-auto sm:w-[40%]" width={500} height={100} alt="" />
                            <div className="png-coin w-[100%] h-[100%] bg-red-800 ">
                                <Image src="/goodcoing.png" className="coin-png shrink-on-click absolute sm:w-[40%]" width={500} height={100} alt="" onClick={handleImageClick} />
                                {clickEffects.map(effect => (
                                    <span
                                        key={effect.id}
                                        className="click-effect text-2xl text-light font-bold"
                                        style={{ left: `${effect.x}px`, top: `${effect.y}px` }}
                                        draggable="false"
                                    >
                                        {user.earn_per_tap}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showProfile === "profile" && <Profile setShowProfile={setShowProfile} />}
            {showProfile === "wallet" && <Wallet setShowProfile={setShowProfile} />}
        </>
    )
}
