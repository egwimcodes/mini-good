import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
// import coinsack from "../../assets/coin-stack.png";

interface PopUpComfirmationProps {
    isopen: boolean;
    isClose: () => void;
    title?: string;
    content?: string;

}

export default function ClaimDailyRewards({ isopen, isClose }: PopUpComfirmationProps) {
    return (
        <>
            {isopen && (
                <div className="absolute top-0 h-screen w-screen bg-black bg-opacity-50 flex flex-col items-center justify-center">
                    <div className="claim-content min-h-fit w-[90vw] rounded-[10px] flex flex-col items-center justify-evenly p-3 bg-main ">
                        <div className="cancl-btn flex-1 place-self-end text-2xl">
                        <IoCloseSharp className="text-light" onClick={() => { isClose() }} /></div>
                        <div className="claim-content daily h-[90%] ">
                            <div className="claim-content-header w-full flex flex-col items-center justify-center" >
                                <h1 className="text-light text-3xl font-semibold">YOUR</h1>
                                <h1 className="text-light text-3xl font-semibold">DAILY REWARDS</h1>
                                <h4 className="text-neutral-500 text-sm font-semibold small-text">CLAIM REWARDS AND KEEP THE STREAK GOING!</h4>
                            </div>

                            <div className="scroll-container  claim-streak  w-[80vw] flex flex-row items-center justify-evenly overflow-x-auto my-5 py-2">
                                <div className="streak w-[25vw] min-w-[25vw] h-[23vh] relative flex flex-col item justify-center mr-1 ">
                                    <div className="coin-stack-content flex flex-col items-center mb-5">
                                        <Image className="shine-coin w-10" width={100} height={100} src="/good-coin.png" alt="" />
                                        <h1 className="text-yellow-500 text-3xl font-semibold ">10K</h1>
                                    </div>
                                   
                                </div>


                            </div>

                            <div className="daily-comfirmation-btn w-full flex flex-row items-center justify-evenly mb-4">
                                <div className="claim-gift-btn w-[35vw] h-[9vh] flex flex-row items-center justify-center border-2 border-red-200 bg-yellow-400 rounded-[10px]">
                                    <h4 className="text-light font-semibold">Claim</h4>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
