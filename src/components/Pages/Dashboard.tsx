import React, { useState } from 'react'
import Image from 'next/image'
import { IoMdWallet } from "react-icons/io";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";


interface ClickEffect {
    id: number;
    x: number;
    y: number;
}

export default function Dashboard() {
    const [clickEffects, setClickEffects] = useState<ClickEffect[]>([]);
    const handleImageClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const newEffect: ClickEffect = { id: Date.now(), x, y };

        setClickEffects((prevEffects) => [...prevEffects, newEffect]);

        setTimeout(() => {
            setClickEffects((prevEffects) => prevEffects.filter(effect => effect.id !== newEffect.id));
        }, 2000);
    };
   
    return (
        <div className='w-[100vw] h-[90vh] text-light'>
            <div className="dashboard-section w-[95vw] h-[25vh]  mx-auto">
                <div className="dashbord-up h-[10vh]  flex-between flex-row">
                    <div className="left-child flex flex-row items-center  w-[50%]">
                        <div className="profile w-[10vw] ">
                            <Image className='profile-avater p-1' src="/robot.png" width={50} height={50} alt="" />
                        </div>
                        <p className='text-base font-semibold ml-1'>DebugTitan</p>
                    </div>
                    <div className="right-child w-[35%] flex-end ">
                        <div className="icon-container p-1">
                            <IoMdWallet className='text-4xl xs:text-2xl' />
                        </div>
                    </div>
                </div>
                <div className="dashboard-down h-[15vh] w-full flex-row flex-between">
                    <div className="balance-section flex flex-col justify-between h-[10vh] w-[49%] bg-gradient-to-b from-slate-600  rounded-[10px] p-2 border-2 border-orange-400">
                        <p className='text-sm font-base'>Balance</p>
                        <div className="balance-coin-amount flex-row flex-between">
                            <div className="coin-balance w-[30vw] flex flex-row">
                                <Image src="/goodcoing.png" width={25} height={25} alt="" />
                                <p className='ml-1'>116,066</p>
                            </div>
                            <div className="icon-add border-1 w-[5vw] rounded-[5px] border-white p-1  bg-gradient-to-b from-slate-600 bg-slate-900">
                                <IoMdAdd className='text-purple-700' />
                            </div>
                        </div>
                    </div>
                    <div className="balance-section flex flex-col justify-between h-[10vh] w-[49%] bg-gradient-to-b from-slate-600 rounded-[10px] p-2 border-2 border-orange-400">
                        <p className='text-sm font-base'>Earning Per hour</p>
                        <div className="balance-coin-amount flex-row flex-between">
                            <p>116,066</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="tap-section w-[100vw] h-[63vh] rounded-[20px]  border-2 border-orange-400  flex justify-center items-center">
                <div className="tap w-[60vw] relative" >
                    <Image src="/goodcoing.svg" className="coin-svg" width={500} height={100} alt="" />
                    <div className="png-coin w-full h-[100%] bg-red-800 ">
                        <Image src="/goodcoing.png" className="coin-png shrink-on-click absolute" width={500} height={100} alt="" onClick={handleImageClick} />
                        {clickEffects.map(effect => (
                            <span
                                key={effect.id}
                                className="click-effect text-2xl text-light font-bold"
                                style={{ left: `${effect.x}px`, top: `${effect.y}px` }}
                                data-aos="zoom-in"
                                draggable="false"
                            >
                               +1
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
