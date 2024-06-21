import { useUserContext } from "@/hooks/UserContext";
import {TopUpCreateType } from "@/types";
import {TopUpCreate } from "@/utils/requests";
import Image from "next/image";
import {useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

interface PopUpComfirmationProps {
    isopen: boolean;
    isClose: () => void;
    amount?: number;
    last_checkin_date?: string
}

export default function ClaimDailyRewards({ isopen, isClose, amount, last_checkin_date }: PopUpComfirmationProps) {
    const user = useUserContext()
    const [showWin, setShowWin] = useState(false);
    const handleClaim = () => {

        const topUpData: TopUpCreateType = {
            amount: amount || 0, // Use the current value of balance
        };

        // const streakData: DailyStreakCreateType = {
        //     last_checkin_date: last_checkin_date,
        //     owner: user.user_id
            
        // }

        // DailyStreakCreate(streakData).then(() => { })
        alert(last_checkin_date)
        alert(`owner ${user.user_id}`)
        TopUpCreate(topUpData)
            .then((e) => {
                alert( `after claim ${JSON.stringify(e)}`)
                // Handle success if needed
            })
            .catch((error) => {
                alert(`Error Updating Balance: ${JSON.stringify(error)}`);
            });
    };
    return (
        <>
            {isopen && (
                <div className="absolute top-0 h-screen w-screen bg-black bg-opacity-50 flex flex-col items-center justify-center z-20">
                    <div className="claim-content min-h-fit w-[90vw] rounded-[10px] flex flex-col items-center justify-evenly p-3 bg-gradient-to-b  from-gray-800 border-2 border-main bg-black">
                        <div className="cancl-btn flex-1 place-self-end text-2xl">
                            <IoCloseSharp className="text-light" onClick={() => { isClose() }} />
                        </div>
                        <div className="claim-content daily h-[100%] ">
                            <div className="claim-content-header w-full h-[30%] flex flex-col items-center justify-center">
                                <h1 className="text-light text-3xl font-semibold">YOUR</h1>
                                <h1 className="text-light text-3xl font-semibold">DAILY REWARDS</h1>
                                <h4 className="text-neutral-500 text-sm font-semibold small-text">CLAIM REWARDS AND KEEP THE STREAK GOING!</h4>
                            </div>

                            <div className="scroll-container  claim-streak h-[30%] w-[80vw] flex flex-row items-center justify-evenly overflow-x-auto my-5 py-2">
                                <div className="streak w-[25vw] min-w-[25vw] h-[23%] relative flex flex-col item justify-center mr-1">
                                    {showWin ? (
                                        <div className="coin-stack-content flex flex-col items-center mb-5">
                                            <Image className="shine-coin w-[100%]" width={200} height={200} src="/win.png" alt="" />
                                        </div>
                                    ) : (
                                        <div className="coin-stack-content flex flex-col items-center mb-5">
                                            <Image className="shine-coin w-10" width={100} height={100} src="/good-coin.png" alt="" />
                                            <h1 className="text-yellow-500 text-3xl font-semibold">
                                                {amount}
                                            </h1>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="daily-comfirmation-btn w-full h-[20%] flex flex-row items-center justify-evenly mb-4">
                                <div className="border-1 xxxsm:w-[50%] xxsm:w-[60%] xsm:w-[50%] h-[10vh] rounded-[5px] border-white p-1  bg-gradient-to-b from-slate-600 bg-slate-900 flex-center " onClick={() => { setShowWin(true);  handleClaim}}>
                                    <p className='text-main flex flex-center xxxsm:text-xs xxsm:text-text-sm xsm:text-0.5rem sm:text-1rem'>{showWin ? "CLAIMED" : "CLAIM NOW"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
