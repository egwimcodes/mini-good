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
                    <div className="claim-content min-h-fit w-[90vw] rounded flex flex-col items-center justify-evenly p-3">
                        <div className="cancl-btn flex-1 place-self-end text-2xl">
                        <IoCloseSharp className="text-light" onClick={() => { isClose() }} /></div>
                        <div className="claim-content daily h-[90%]">
                            <div className="claim-content-header w-full flex flex-col items-center justify-center" >
                                <h1 className="text-light text-3xl font-semibold">YOUR</h1>
                                <h1 className="text-light text-3xl font-semibold">DAILY REWARDS</h1>
                                <h4 className="text-neutral-500 text-sm font-semibold small-text">CLAIM REWARDS AND KEEP THE STREAK GOING!</h4>
                            </div>

                            <div className="scroll-container claim-streak  w-[80vw] flex flex-row items-center justify-evenly overflow-x-auto my-5 py-2">
                                <div className="streak w-[25vw] min-w-[25vw] h-[23vh] relative flex flex-col item justify-center mr-1 ">
                                    <div className="coin-stack-content flex flex-col items-center mb-5">
                                        <Image className="shine-coin w-10" src="/good-coin.png" alt="" />
                                        <h1 className="text-yellow-500 text-3xl font-semibold ">10K</h1>
                                    </div>
                                    <div className="streak-bg-down absolute bottom-0 h-10 w-full bg-zinc-500 flex flex-row items-center justify-center">
                                        <h3 className="text-yellow-500 font-semibold">day 1</h3>
                                    </div>
                                </div>

                                <div className="streak w-[25vw] min-w-[25vw] h-[23vh] relative flex flex-col item justify-center mr-1 ">
                                    <div className="coin-stack-content flex flex-col items-center mb-5">
                                        <Image className="shine-coin w-10" src="/good-coin.png" alt="" />
                                        <h1 className="text-yellow-500 text-3xl font-semibold ">10K</h1>
                                    </div>
                                    <div className="streak-bg-down absolute bottom-0 h-10 w-full bg-zinc-500 flex flex-row items-center justify-center">
                                        <h3 className="text-yellow-500 font-semibold">day 1</h3>
                                    </div>
                                </div>

                                <div className="streak w-[25vw] min-w-[25vw] h-[23vh] relative flex flex-col item justify-center mr-1 ">
                                    <div className="coin-stack-content flex flex-col items-center mb-5">
                                        <Image className="shine-coin w-10" src="/good-coin.png" alt="" />
                                        <h1 className="text-yellow-500 text-3xl font-semibold ">10K</h1>
                                    </div>
                                    <div className="streak-bg-down absolute bottom-0 h-10 w-full bg-zinc-500 flex flex-row items-center justify-center">
                                        <h3 className="text-yellow-500 font-semibold">day 1</h3>
                                    </div>
                                </div>

                                <div className="streak w-[25vw] min-w-[25vw] h-[23vh] relative flex flex-col item justify-center mr-1 ">
                                    <div className="coin-stack-content flex flex-col items-center mb-5">
                                        <Image className="shine-coin w-10" src="/good-coin.png" alt="" />
                                        <h1 className="text-yellow-500 text-3xl font-semibold ">10K</h1>
                                    </div>
                                    <div className="streak-bg-down absolute bottom-0 h-10 w-full bg-zinc-500 flex flex-row items-center justify-center">
                                        <h3 className="text-yellow-500 font-semibold">day 1</h3>
                                    </div>
                                </div>

                                <div className="streak w-[25vw] min-w-[25vw] h-[23vh] relative flex flex-col item justify-center mr-1 ">
                                    <div className="coin-stack-content flex flex-col items-center mb-5">
                                        <Image className="shine-coin w-10" src="/good-coin.png" alt="" />
                                        <h1 className="text-yellow-500 text-3xl font-semibold ">10K</h1>
                                    </div>
                                    <div className="streak-bg-down absolute bottom-0 h-10 w-full bg-zinc-500 flex flex-row items-center justify-center">
                                        <h3 className="text-yellow-500 font-semibold">day 1</h3>
                                    </div>
                                </div>

                                <div className="streak w-[25vw] min-w-[25vw] h-[23vh] relative flex flex-col item justify-center mr-1 ">
                                    <div className="coin-stack-content flex flex-col items-center mb-5">
                                        <Image className="shine-coin w-10" src="/good-coin.png" alt="" />
                                        <h1 className="text-yellow-500 text-3xl font-semibold ">10K</h1>
                                    </div>
                                    <div className="streak-bg-down absolute bottom-0 h-10 w-full bg-zinc-500 flex flex-row items-center justify-center">
                                        <h3 className="text-yellow-500 font-semibold">day 1</h3>
                                    </div>
                                </div>

                                <div className="streak w-[25vw] min-w-[25vw] h-[23vh] relative flex flex-col item justify-center mr-1 ">
                                    <div className="coin-stack-content flex flex-col items-center mb-5">
                                        <Image className="shine-coin w-10" src="/good-coin.png" alt="" />
                                        <h1 className="text-yellow-500 text-3xl font-semibold ">10K</h1>
                                    </div>
                                    <div className="streak-bg-down absolute bottom-0 h-10 w-full bg-zinc-500 flex flex-row items-center justify-center">
                                        <h3 className="text-yellow-500 font-semibold">day 1</h3>
                                    </div>
                                </div>



                            </div>

                            <div className="daily-comfirmation-btn w-full flex flex-row items-center justify-evenly mb-4">
                                <div className="claim-gift-btn w-[35vw] h-[9vh] bg-orange flex flex-row items-center justify-center">
                                    <h4 className="text-light font-semibold">Start Over</h4>
                                </div>
                                <div className="claim-gift w-[35vw] h-[9vh] bg-slate-800 flex flex-col items-center justify-start px-2">
                                    <h3 className=" text-1xl text-yellow-500 font-semibold">Continue</h3>
                                    <div className="amount-to-claim ml-2 flex flex-row items-center justify-between">
                                        <p className=" font-semibold text-light"> 10</p>
                                        <Image className="shine-coin w-5" src="/good-coin.png"
                                            alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
