import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
interface PopUpComfirmationProps {
    isopen: boolean;
    isClose: () => void;
    title?: string;
    content?: string;

}

export default function PopUpComfirmationTask({ isopen, isClose}: PopUpComfirmationProps) {
    return (
        <>{
            isopen && (

                <div className="absolute top-0 h-screen w-screen bg-black bg-opacity-50 flex flex-col items-center justify-center">
                    <div className="claim-content h-[50vh] w-[90vw] bg-slate-800 rounded flex flex-col items-center justify-evenly p-3">
                        <div className="claim-content-header w-full flex flex-row items-center justify-between" >
                            <h1 className="text-light text-3xl font-semibold">Join our Twitter</h1>
                            <IoCloseSharp className="text-light text-3xl" onClick={() => { isClose() }} />
                        </div>  

                        <div className="claim-guild">
                            <h4 className="text-light font-semibold">What To Be Done ?</h4>
                            <p className="text-gray text-sm">Subscribe to the GoodCoin on Twitter for the latest insight and get EXTRA coin.</p>
                            <p className="text-gray text-sm">Participate in various community activities, learn more about GoodCoin and reive fresh new about GoodCoin.</p>
                            
                        </div>

                        <div className="claim-gift w-[85vw] h-[10vh] bg-slate-800 flex flex-row items-center justify-start px-2 xsm:mb-2">
                            <Image className="shine-coin w-10" src="/good-coin.png" alt="" />
                            <div className="amount-to-claim ml-2">
                                <h3 className="text-light ">40,000</h3>
                                <p className=" font-semibold text-yellow-500">GoodCoin</p>
                            </div>

                        </div>
                        <div className="claim-gift-btn w-[85vw] h-[8vh] bg-orange flex flex-row items-center justify-center" >
                            <h4 className="text-light font-semibold">Start</h4>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}