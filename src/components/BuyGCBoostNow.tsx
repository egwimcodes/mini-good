import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";
import { BuyBoost } from "@/utils/requests";
interface BuyBoostNowProps {
    isopen: boolean;
    isClose?: () => void;
    balance?: number;
    energy_level: number;

}



export default function BuyBoostNow({ isopen, isClose, balance, energy_level }: BuyBoostNowProps) {
    const [btnText, setBtnText] = useState(false);
    const buyNow = () => {
        if (btnText === false) {
            BuyBoost({}).then(() => {
                setBtnText(true)
            })
        }
    }
    return (
        <>
            {
                isopen && (
                    <div className="absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="claim-content h-[60vh] w-[90%] bg-black border-2 border-main rounded-[10px] flex flex-col items-center justify-evenly p-3 relative">
                            <div className="claim-content-header w-[100%] flex flex-row items-center justify-between">
                                <h1 className="text-light xxxsm:text-xs xxsm:text-2xl xsm:text-0.5rem sm:text-1rem font-semibold w-[80%]">BOOST</h1>
                                <IoCloseSharp className="text-main text-3xl w-[20%] " onClick={() => { isClose && isClose() }} />
                            </div>
                            <h1 className="text-main xxxsm:text-xxxs xxsm:text-xs xsm:text-xs sm:text-xs  font-semibold">Balance: {balance} GoodCoin</h1>
                            <Image src="https://ik.imagekit.io/egwimcodes/boost_battery.png?updatedAt=1720353194317" width={100} height={100} alt="" />

                            <div className="claim-guild text-center">
                                {btnText ? (<div>
                                    <h4 className="text-main xxxsm:text-xxxs xxsm:text-xs xsm:text-xs sm:text-xs font-semibold">Successfully Purchased</h4>
                                    <h4 className="text-main xxxsm:text-xxxs xxsm:text-xs xsm:text-xs sm:text-xs font-semibold">Boost</h4>
                                </div>) : (<div>
                                    <h4 className="text-orange-400 xxxsm:text-xxxs xxsm:text-xs xsm:text-xs sm:text-xs font-semibold">pending...</h4>
                                    {balance && balance >= energy_level  ? (
                                        <h1 className="text-light xxxsm:text-xxxs xxsm:text-xs xsm:text-xs sm:text-xs text-main font-semibold">5000 GoodCoin Charge</h1>
                                    ) : (
                                        <div>
                                            <h1 className="text-light xxxsm:text-xxxs xxsm:text-xs xsm:text-xs sm:text-xs text-orange-400 font-semibold">Sorry you don't have enough GC</h1>

                                        </div>
                                    )}
                                </div>)}

                            </div>
                            {btnText ? (
                                <div className={`claim-gift-btn w-[100%] bg-orange flex items-center justify-center h-[8vh] ${balance && balance >= energy_level? 'bg-main' : 'bg-red-700'} rounded-[10px] flex-evenly`} onClick={() => { isClose && isClose() }}>
                                    <h4 className="text-light font-semibold">{btnText ? "Close" : "Buy Now"}</h4>
                                </div>
                            ) : (
                                <div className={`claim-gift-btn w-[100%] bg-orange flex items-center justify-center h-[8vh] ${balance && balance >= energy_level ? 'bg-main' : 'bg-red-700'} rounded-[10px] flex-evenly`} onClick={() => { balance && balance >= energy_level ? buyNow() : null }}>
                                    <h4 className="text-light font-semibold">{btnText ? "Claimed" : "Buy Now"}</h4>
                                </div>
                            )}
                        </div>
                    </div>
                )
            }
        </>
    )
}
