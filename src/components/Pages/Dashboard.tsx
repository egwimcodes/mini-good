import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoMdWallet } from 'react-icons/io';
import { IoMdAdd } from 'react-icons/io';
import Profile from './Profile';
import Wallet from './Wallet';
import { useUserContext } from '@/hooks/UserContext';
import BuyBot_Boost from './BuyBot_Boost';
import { MdNavigateNext } from 'react-icons/md';
import { TopUpCreateType } from '@/types';
import { TopUpCreate } from '@/utils/requests';
//import { TopUpCreate } from '@/utils/requests';

interface ClickEffect {
    id: number;
    x: number;
    y: number;
}

export default function Dashboard() {
    const user = useUserContext();
    // const storageBalance = localStorage.getItem('balance');
    const [clickEffects, setClickEffects] = useState<ClickEffect[]>([]);
    const [showProfile, setShowProfile] = useState('dashboard');
    const [balance, setBalance] = useState(user.balance);
    const [isClaiming, setIsClaiming] = useState(false);
    const [charge, setCharge] = useState(5000);
    const [taps, setTaps] = useState(0);
    const [claimChange, setClaimChange] = useState(false);
    const [progressBar, setProgressBar] = useState(user.tap_energy);
    const balanceString = balance.toString().length;

    useEffect(() => {

    }, [balance, user]); // Include user as a dependency if user might change

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
        // Increment balance when image is clicked
        if (taps > 0) {
            setClaimChange(false);
        }
        if (progressBar > 0) {
          
            setBalance(prev => prev + user.earn_per_tap);
            setTaps(prev => prev + user.earn_per_tap);
           
        }
        setCharge(prev => prev - 50);
        setProgressBar(prev => prev - user.earn_per_tap);


    };

    const claimTaps = () => {
        if (user.user_id && user) {
            if (taps > 0) {
                const topUpData: TopUpCreateType = {
                    amount: taps, // Use the current value of balance
                };
                // Call TopUpCreate with the latest topUpData
                TopUpCreate(topUpData)
                    .then(() => {
                        setClaimChange(true);
                        setTaps(0);
                        // Handle success if needed
                    })
                    .catch((error) => {
                        alert(`Error Updating Balance: ${JSON.stringify(error)}`);
                    });
            }

        }
    }
    console.log(charge)
    return (
        <>
            {showProfile === 'dashboard' && (
                <div className='w-[100%] h-[100%] text-light flex-col flex-start'>
                    <div className="dashboard-section w-[100%] h-[30%] justify-self-start mx-auto">
                        <div className="dashbord-up h-[40%] flex-between flex-row">
                            <div className="left-child flex flex-row items-center w-[50%]" onClick={() => setShowProfile("profile")}>
                                <div className="profile w-[10vw]">
                                    <Image className='profile-avatar p-1' src="/robot.png" width={50} height={50} alt="" />
                                </div>
                                <p className='text-base font-semibold ml-1'>{user.username}</p>
                            </div>
                            <div className="right-child w-[35%] flex-end">
                                <div className="icon-container p-1">
                                    <IoMdWallet className='text-4xl xs:text-2xl' onClick={() => setShowProfile("wallet")} />
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-down h-[60%] w-full flex-row flex-between">
                            <div className="balance-section flex flex-col justify-between h-[80%] min-h-fit w-[49%] bg-gradient-to-b from-gray-800 rounded-[10px] p-2 border-2 border-main">
                                <h1 className='text-sm'>Balance</h1>
                                <div className="balance-coin-amount flex-row flex-between h-[60%]">
                                    <div className="coin-balance w-[80%] h-[100%] flex-center">
                                        <Image src="/goodcoing.png" className="coin-icon sm:w-[17%]" width={25} height={25} alt="" />
                                        <p className={`text-2xl h-[100%] w-[70%] flex-row flex-evenly`} style={{ fontSize: balanceString > 6 ? 'smaller' : 'inherit' }}>{balance}</p>
                                    </div>
                                    <div className="icon-add border-1 w-[20%] h-[80%] rounded-[5px] border-white p-1 bg-gradient-to-b from-slate-600 bg-slate-900 flex-center">
                                        <IoMdAdd className='text-main' />
                                    </div>
                                </div>
                            </div>

                            <div className="balance-section flex flex-col justify-between h-[80%] min-h-fit w-[49%] bg-gradient-to-b from-gray-800  rounded-[10px] p-2 border-2 border-main ">
                                <p className='text-sm font-base h-[40%] '>Earning Per hour</p>
                                <div className="balance-coin-amount flex-row flex-between h-[60%] ">
                                    <p className='text-2xl h-[100%] w-[60%] flex-row flex-start'>{user.profit_per_hour}</p>
                                    <div className="border-1 xxxsm:w-[50%] xxsm:w-[60%] xsm:w-[50%] h-[80%] rounded-[5px] border-white p-1  bg-gradient-to-b from-slate-600 bg-slate-900 flex-center " onClick={() => setIsClaiming(true)}>
                                        <p className='text-main flex flex-center xxxsm:text-xs xxsm:text-text-sm xsm:text-0.5rem sm:text-1rem'>Buy Bot</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tap-section w-[100%] h-[70%] relative rounded-[20px] border-2 border-main flex justify-center items-center justify-self-start mx-auto">
                        <div className="tap w-[60%] relative">
                            <Image src="/goodcoing.svg" className="coin-svg mx-auto sm:w-[40%]" width={500} height={100} alt="" />
                            <div className="png-coin w-[100%] h-[100%] bg-red-800">
                                <Image src="/goodcoing.png" className="coin-png shrink-on-click absolute sm:w-[40%]" width={500} height={100} alt="" onClick={handleImageClick} />
                                {clickEffects.map(effect => (
                                    <span
                                        key={effect.id}
                                        className="click-effect text-2xl text-light font-bold"
                                        style={{ left: `${effect.x}px`, top: `${effect.y}px` }}
                                        draggable="false"
                                    >
                                        {progressBar > 0 ? `+${user.earn_per_tap}` : ""}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className='h-[20%] absolute bottom-0 w-[80%] flex flex-col'>
                            <div className="border-1 xxxsm:w-[50%] xxsm:w-[60%] xsm:w-[50%] h-[40%] rounded-[5px] p-1  bg-gradient-to-b from-slate-400 bg-slate-900 flex-center mx-auto flex-evenly border-2 border-main"  onClick={claimTaps}>
                                <p className='text-main flex flex-center xxxsm:text-xs xxsm:text-text-sm xsm:text-0.5rem sm:text-1rem' style={{ color: claimChange ? "orange" : "" }}>{taps}</p>  <p className='text-main flex flex-center xxxsm:text-xs xxsm:text-text-sm xsm:text-0.5rem sm:text-1rem' style={{ color: claimChange ? "orange" : "" }}>{ claimChange ? "Claimed" : "Claim" }</p>
                            </div>
                            <div className="progress-text w-[100%] flex justify-between items-center">
                                <div className="left-progress-text flex flex-nowrap">
                                    <p className='text-sm font-semibold'>{user.rank}</p>
                                    <MdNavigateNext className="r-arrow text-2xl font-bold" />
                                </div>
                                <div className="right-progress-text flex flex-row">
                                    <p className='text-sm font-semibold'>Level</p>
                                    <p className='ml-1 text-sm font-semibold'>{user.tap_energy_level}/10</p>
                                </div>
                            </div>
                            <div className="leverl w-[100%] h-[16%] bg-slate-800 rounded-lg">
                                <div className={`level-child h-[100%]  progress rounded-lg`} style={{ width: `${progressBar}%` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showProfile === "profile" && <Profile setShowProfile={setShowProfile} />}
            {showProfile === "wallet" && <Wallet setShowProfile={setShowProfile} />}
            {isClaiming && <BuyBot_Boost isClose={() => setIsClaiming(false)} isopen={true} title={"Buy Bot"} content={"Buy Bots"} avatar={"https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"} />}
        </>
    );
}
