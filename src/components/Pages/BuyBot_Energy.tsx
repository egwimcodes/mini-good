import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
import { useEffect, useState } from "react";
//import BuyUSDTBoostNow from "../BuyUSDTBoostNow";
import { useUserContext } from "@/hooks/UserContext";
import BuyGCEnergyNow from "../BuyGCEnergyNow";
import { CanBoostProps } from "@/types";
import { Boost_status } from "@/utils/requests";
import MiniPleloader from "./MiniPleloader";
interface PopUpComfirmationProps {
    isopen: boolean;
    isClose: () => void;
    title?: string;
    content?: string;
    avatar?: string;
    reward?: number;

}

export default function BuyBot_Energy({ isopen, isClose }: PopUpComfirmationProps) {
    const user = useUserContext();
    const [buyGCNow, setBuyGCNow] = useState(false);
    const [status, setStatus] = useState<CanBoostProps>();
    const [isLoading, setIsLoading] = useState(true);
    // const [buyUSDTNow, setBuyUSDTNow] = useState(false);
    const handleBuyGCNow = () => {
        setBuyGCNow(true);
    }
    useEffect(() => {
        Boost_status().then((res) => {
            setStatus(res)
            setIsLoading(false)
        })
    }, [isLoading, status])
    // const handleBuyUSDTNow = () => {
    //     setBuyUSDTNow(true);

    // }
    if (isLoading) {
        return <MiniPleloader />;
    }
    return (
        <>{
            isopen && (
                <div className="absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="claim-content h-[60vh] w-[90%] bg-black border-2 border-main rounded-[10px] flex flex-col items-center justify-evenly p-3 relative">
                        <div className="claim-content-header w-[100%] flex flex-row items-center justify-between">
                            <h1 className="text-light xxxsm:text-xs xxsm:text-2xl xsm:text-0.5rem sm:text-1rem font-semibold w-[80%]">BUY ENERGY</h1>
                            <IoCloseSharp className="text-main text-3xl w-[20%] " onClick={() => { isClose() }} />
                        </div>

                        <div className="claim-guild text-center">
                            <h4 className="text-main xxxsm:text-xxxs xxsm:text-xs xsm:text-xs sm:text-xs font-semibold">Buy Energy With:</h4>
                            <p className="text-gray xxxsm:text-xxxs xxsm:text-xs xsm:text-xs sm:text-xs text-slate-100">Tappers can buy boost with any of the following</p>
                        </div>

                        <div className="claim-gift w-[100%] h-[20%] min-h[max-content] bg-emerald-700 flex items-center justify-evenly px-2 xsm:mb-2 rounded-[10px]" onClick={() => { handleBuyGCNow() }}>
                            <Image className="shine-coin w-10" width={50} height={50} src={"https://ik.imagekit.io/egwimcodes/goodcoing.png?updatedAt=1720197417578"} alt="" />
                            <div className="amount-to-claim ml-2 text-center">
                                <p className="font-semibold text-white">GOODCOIN (GC)</p>
                                <h3 className="text-light xxxsm:text-xxxs xxsm:text-xs xsm:text-xs sm:text-xs text-orange-500 font-semibold">Buy with {status?.tap_fee && status?.tap_fee } GC</h3>
                            </div>
                            <MdNavigateNext className="text-2xl text-light font-bold" />
                        </div>
                        {/* <div className="claim-gift w-[100%] h-[20%] min-h[max-content] bg-emerald-700 flex items-center justify-evenly px-2 xsm:mb-2 rounded-[10px]" onClick={() => { handleBuyUSDTNow() }}>
                            <Image className="shine-coin w-10" width={50} height={50} src={"https://ik.imagekit.io/egwimcodes/usdt.png?updatedAt=1720353087479"} alt="" />
                            <div className="amount-to-claim ml-2 text-center">
                                <p className="font-semibold text-white">USDT (USDt)</p>
                                <h3 className="text-light xxxsm:text-xxxs xxsm:text-xs xsm:text-xs sm:text-xs text-orange-500 font-semibold">Buy with 1 USDT</h3>
                            </div>
                            <MdNavigateNext className="text-2xl text-light font-bold" />
                        </div> */}


                        {/* <div className="claim-gift-btn w-[100%] bg-orange flex items-center justify-center h-[8vh] bg-main rounded-[10px] flex-evenly">
                            <div></div>
                            <h4 className="text-light font-semibold">Buy Now</h4>
                            <MdNavigateNext className="text-2xl text-light font-bold" />
                        </div> */}
                    </div>
                </div>
            )}

            {buyGCNow && (
                <BuyGCEnergyNow isopen={true} isClose={() => { isClose() }} balance={user?.balance} tap_fee={(status?.tap_fee ?? 0)} />
            )}
            {/* {buyUSDTNow && (
                <BuyUSDTBoostNow isopen={true} isClose={() => { isClose() }}/>
            )} */}
        </>
    )
}