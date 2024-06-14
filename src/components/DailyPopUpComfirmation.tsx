import Image from "next/image";
interface PopUpComfirmationProps {
    isopen: boolean;
    isClose: () => void;
    title?: string;
    content?: string;

}

export default function DailyPopUpComfirmation({ isopen , isClose }: PopUpComfirmationProps) {
    return (
        <>{
            isopen && (

                <div className="absolute top-0 h-screen w-screen bg-black bg-opacity-50 flex flex-col items-center justify-center">
                    <div className="claim-content h-[50vh] w-[90vw] bg-main rounded-[10px] flex flex-col items-center justify-evenly p-3">
                        <div className="claim-content-header w-full flex flex-row items-center justify-center" >
                            <h1 className="text-light text-3xl font-semibold">Missed A Day !!!</h1>
                        </div>

                        <div className="claim-guild">
                            <h4 className="text-light font-semibold">Oh no! You missed a day!</h4>
                        </div>
                        <div className="daily-comfirmation-btn w-full flex flex-row items-center justify-between">
                            <div className="claim-gift-btn w-[35vw] h-[9vh] flex flex-row items-center justify-center border-2 border-red-200 bg-yellow-400 rounded-[10px]">
                                <h4 className="text-light font-semibold">Start Over</h4>
                            </div>
                            <div className="claim-gift w-[35vw] h-[9vh] bg-black flex flex-col rounded-[10px] items-center justify-start px-2" onClick={() => { isClose() }}>
                                <h3 className=" text-1xl text-yellow-500 font-semibold">Continue</h3>
                                <div className="amount-to-claim ml-2 flex flex-row items-center justify-between">
                                    <p className=" font-semibold text-light"> 10</p>
                                    <Image className="shine-coin w-5" width={100} height={100} src="/good-coin.png"
                                        alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}