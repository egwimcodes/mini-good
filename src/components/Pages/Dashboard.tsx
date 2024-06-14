"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { IoMdWallet } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import Profile from './Profile';
import Wallet from './Wallet';
// import { useUserContext } from '@/hooks/UserContext';

interface ClickEffect {
    id: number;
    x: number;
    y: number;
}

const user = {
    username: "anony",
    profit_per_hour: 1,
    earn_per_tap: 1
}
export default function Dashboard() {
    // const user = useUserContext();
    const prevBalance = '0';
    const [clickEffects, setClickEffects] = useState<ClickEffect[]>([]);
    const [showProfile, setShowProfile] = useState("dashboard");
    const [balance, setBalance] = useState(0 + parseInt(prevBalance || '0'));

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
        setBalance(prev => prev + 5);
    };

    return (
        <>
            {showProfile === "dashboard" && (
                <div className='w-[100%] h-[100%] text-light flex-col flex-start'>
                    <div className="dashboard-section w-[95vw] h-[25%] justify-self-start  mx-auto mb-[10%] ">
                        <div className="dashbord-up h-[10vh]  flex-between flex-row">
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
                        <div className="dashboard-down h-[15vh] w-full flex-row flex-between">
                            <div className="balance-section flex flex-col justify-between h-[10vh] min-h-fit w-[49%] bg-gradient-to-b from-gray-800  rounded-[10px] p-2 border-2 border-orange-400">
                                <p className='text-sm font-base'>Balance</p>
                                <div className="balance-coin-amount flex-row flex-between">
                                    <div className="coin-balance w-[30vw] flex flex-row">
                                        <Image src="/goodcoing.png" width={25} height={25} alt="" />
                                        <p className='ml-1'>{balance}</p>
                                    </div>
                                    <div className="icon-add border-1 w-[5vw] rounded-[5px] border-white p-1  bg-gradient-to-b from-slate-600 bg-slate-900">
                                        <IoMdAdd className='text-purple-700' />
                                    </div>
                                </div>
                            </div>
                            <div className="balance-section flex flex-col justify-between h-[10vh] min-h-fit w-[49%] bg-gradient-to-b from-gray-800  rounded-[10px] p-2 border-2 border-orange-400">
                                <p className='text-sm font-base'>Earning Per hour</p>
                                <div className="balance-coin-amount flex-row flex-between">
                                    <p>{user.profit_per_hour}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tap-section w-[95vw] h-[70%] rounded-[20px]  border-2 border-orange-400  flex justify-center items-center justify-self-start mx-auto">
                        <div className="tap w-[60vw] relative" >
                            <Image src="/goodcoing.svg" className="coin-svg" width={500} height={100} alt="" />
                            <div className="png-coin w-full h-[100%] bg-red-800 ">
                                <Image src="/goodcoing.png" className="coin-png shrink-on-click absolute" width={500} height={100} alt="" onClick={handleImageClick} />
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
