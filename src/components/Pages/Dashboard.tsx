import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoMdWallet, IoMdAdd } from 'react-icons/io';
import Profile from './Profile';
import Wallet from './Wallet';
import { useUserContext } from '@/hooks/UserContext';
import BuyBot_Boost from './BuyBot_Boost';
import { MdNavigateNext } from 'react-icons/md';
import useWebSocket from '@/utils/useWebSocket';

interface ClickEffect {
    id: number;
    x: number;
    y: number;
}

type DashboardProps = {
    token: string;
};
export default function Dashboard({ token }: DashboardProps) {
    const user = useUserContext();
    const { sendMessage } = useWebSocket('wss://api.goodcoin.tech/ws/balance/?token=' + token);
    const [clickEffects, setClickEffects] = useState<ClickEffect[]>([]);
    const [showProfile, setShowProfile] = useState('dashboard');
    const [balance, setBalance] = useState(user.balance);
    const [isClaiming, setIsClaiming] = useState(false);
    const [taps, setTaps] = useState(0);
    const [charged] = useState(user.tap_energy);
    const [recivedCharges, setRecivedCharges] = useState(user.tap_energy);
    const [earnPerTap] = useState(user.earn_per_tap)
    const [level, setLevel] = useState(user.tap_energy_level)
    const balanceString = balance.toString().length;




    useEffect(() => {
        if (user.earn_per_tap === 1) {
            const earn = user.earn_per_tap / 2;
            setLevel(earn);
        }
        if (user.earn_per_tap === 2) {
            const earn = user.earn_per_tap / 4;
            setLevel(earn);
        }
        if (user.earn_per_tap === 3) {
            const earn = user.earn_per_tap / 6;
            setLevel(earn);
        }
        if (user.earn_per_tap === 4) {
            const earn = user.earn_per_tap / 8;
            setLevel(earn);
        }
        if (user.earn_per_tap === 5) {
            const earn = user.earn_per_tap / 10;
            setLevel(earn);
        }
        if (user.earn_per_tap === 6) {
            const earn = user.earn_per_tap / 12;
            setLevel(earn);
        }
        if (user.earn_per_tap === 7) {
            const earn = user.earn_per_tap / 14;
            setLevel(earn);
        }
        if (user.earn_per_tap === 8) {
            const earn = user.earn_per_tap / 16;
            setLevel(earn);
        }
        if (user.earn_per_tap === 9) {
            const earn = user.earn_per_tap / 18;
            setLevel(earn);
        }
        if (user.earn_per_tap === 10) {
            const earn = user.earn_per_tap / 20;
            setLevel(earn);
        }
        if (user.earn_per_tap === 11) {
            const earn = user.earn_per_tap / 22;
            setLevel(earn);
        }
        if (user.earn_per_tap === 12) {
            const earn = user.earn_per_tap / 24;
            setLevel(earn);
        }
        if (user.earn_per_tap === 13) {
            const earn = user.earn_per_tap / 26;
            setLevel(earn);
        }
        if (user.earn_per_tap === 14) {
            const earn = user.earn_per_tap / 28;
            setLevel(earn);
        }
        if (user.earn_per_tap === 15) {
            const earn = user.earn_per_tap / 30;
            setLevel(earn);
        }
        if (user.earn_per_tap === 16) {
            const earn = user.earn_per_tap / 32;
            setLevel(earn);
        }
        if (user.earn_per_tap === 17) {
            const earn = user.earn_per_tap / 34;
            setLevel(earn);
        }
        if (user.earn_per_tap === 18) {
            const earn = user.earn_per_tap / 36;
            setLevel(earn);
        }
        if (user.earn_per_tap === 19) {
            const earn = user.earn_per_tap / 38;
            setLevel(earn);
        }
        if (user.earn_per_tap === 20) {
            const earn = user.earn_per_tap / 40;
            setLevel(earn);
        }




    }, [taps, user.balance])
    const handleImageClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const newEffect: ClickEffect = { id: Date.now(), x, y };
        setClickEffects((prevEffects) => [...prevEffects, newEffect]);

        setTimeout(() => {
            setClickEffects((prevEffects) => prevEffects.filter(effect => effect.id !== newEffect.id));
        }, 2000);

        // Update taps and claimChange based on conditions
        if (recivedCharges >= earnPerTap) {
            const updatedTapEnergy = JSON.parse(`{"balance": ${earnPerTap},"tap_energy": ${- earnPerTap}}`);
            sendMessage(JSON.stringify(updatedTapEnergy));
            setRecivedCharges(prev => prev - earnPerTap);
            setTaps(prev => prev + earnPerTap);
            setBalance(prev => prev + earnPerTap);
        }

    };


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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tap-section w-[100%] h-[70%] relative rounded-[20px] border-2 border-main flex justify-center items-center justify-self-start mx-auto">
                        <div className="tap w-[60%] relative">
                            <Image src="/goodcoing.svg" className="coin-svg mx-auto sm:w-[40%]" width={500} height={100} alt="" />
                            <div className="png-coin w-[100%] h-[100%] bg-red-800">
                                <Image src="https://ik.imagekit.io/egwimcodes/goodcoing.png?updatedAt=1720197417578" className="coin-png shrink-on-click absolute sm:w-[40%]" width={500} height={100} alt="" onClick={handleImageClick} />
                                {clickEffects.map(effect => (
                                    <span
                                        key={effect.id}
                                        className="click-effect text-2xl text-light font-bold"
                                        style={{ left: `${effect.x}px`, top: `${effect.y}px` }}
                                        draggable="false"
                                    >
                                        {recivedCharges >= earnPerTap ? `+${earnPerTap}` : ''}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className='h-[20%] absolute top-0 right-0 w-[40vw] flex flex-row flex-center'>
                            <Image src="/charge.png" className="shrink-on-click  w-5 h-5" width={20} height={10} alt="" />
                            <div className="charge-stat flex-between">
                                <p className='text-white flex flex-center xxxsm:text-xs xxsm:text-text-sm xsm:text-0.5rem sm:text-1rem font-semibold'>{recivedCharges}</p>/
                                <p className='text-main flex flex-center xxxsm:text-xs xxsm:text-text-sm xsm:text-0.5rem sm:text-1rem font-semibold'>{charged}</p>
                            </div>
                        </div>
                        <div className='h-[15%] absolute bottom-0 w-[80%] flex flex-col'>
                            <div className="progress-text w-[100%] flex justify-between items-center">
                                <div className="left-progress-text flex flex-nowrap">
                                    <p className='text-sm font-semibold'>{user.rank}</p>
                                    <MdNavigateNext className="r-arrow text-2xl font-bold" />
                                </div>
                                <div className="right-progress-text flex flex-row">
                                    <p className='text-sm font-semibold'>Level</p>
                                    <p className='ml-1 text-sm font-semibold'>{user.earn_per_tap}/20</p>
                                </div>
                            </div>
                            <div className="leverl w-[100%] h-[16%] bg-slate-600 rounded-lg">
                                <div className={`level-child h-[100%]  progress rounded-lg`} style={{ width: `${level}%` }}></div>
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


