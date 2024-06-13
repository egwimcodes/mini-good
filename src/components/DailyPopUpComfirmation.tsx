import Image from "next/image";
interface PopUpComfirmationProps {
    isopen: boolean;
    isClose: () => void;
    title?: string;
    content?: string;

}

export default function DailyPopUpComfirmation({ isopen }: PopUpComfirmationProps) {
    return (
        <>{
            isopen && (

                <div className="absolute top-0 h-screen w-screen bg-black bg-opacity-50 flex flex-col items-center justify-center">
                    <div className="claim-content h-[50vh] w-[90vw] bg-slate-800 rounded flex flex-col items-center justify-evenly p-3">
                        <div className="claim-content-header w-full flex flex-row items-center justify-center" >
                            <h1 className="text-light text-3xl font-semibold">Missed A Day !!!</h1>
                        </div>

                        <div className="claim-guild">
                            <h4 className="text-light font-semibold">Oh no! You missed a day!</h4>
                        </div>
                        <div className="daily-comfirmation-btn w-full flex flex-row items-center justify-between">
                            <div className="claim-gift-btn w-[40vw] h-[10vh] bg-orange flex flex-row items-center justify-center" >
                                <h4 className="text-light font-semibold">Start Over</h4>

                            </div>
                            <div className="claim-gift w-[40vw] h-[10vh] bg-slate-800 flex flex-col items-center justify-start px-2">
                                <h3 className=" text-2xl text-yellow-500">Continue</h3>
                                <div className="amount-to-claim ml-2 flex flex-row items-center justify-between">
                                    <p className=" font-semibold text-light"> 10</p>
                                    <Image className="shine-coin w-5" src="/good-coin.png"  alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}