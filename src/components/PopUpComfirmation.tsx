import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
interface PopUpComfirmationProps {
    isopen: boolean;
    isClose: () => void;
    title?: string;
    content?: string;
    avatar?: string;
    reward?: number;
    task_url?: string;

}

export default function PopUpComfirmationTask({ isopen, isClose, title, avatar, reward, task_url }: PopUpComfirmationProps) {

    return (
        <>{
            isopen && (

                <div className="absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="claim-content h-[60vh] w-[90%] bg-black border-2 border-main rounded-[10px] flex flex-col items-center justify-evenly p-3 relative">
                        <div className="claim-content-header w-[100%] flex flex-row items-center justify-between">
                            <h1 className="text-light xxxsm:text-xs xxsm:text-2xl xsm:text-0.5rem sm:text-1rem font-semibold w-[80%]">{title}</h1>
                            <IoCloseSharp className="text-main text-3xl w-[20%] " onClick={() => { isClose() }} />
                        </div>

                        <div className="claim-gift w-[100%] h-[20%] bg-emerald-700 flex items-center justify-start px-2 xsm:mb-2 rounded-[10px]">
                            <Image className="shine-coin w-10" width={50} height={50} src={avatar ? avatar : "/good-coin.png"} alt="" />
                            <div className="amount-to-claim ml-2">
                                <h3 className="text-light">+{reward}</h3>
                                <p className="font-semibold text-orange-400">GoodCoin</p>
                            </div>
                        </div>
                        <a target='_blank'
                            rel='noopener noreferrer' href={task_url} className="claim-gift-btn w-[100%] bg-orange flex items-center justify-center h-[8vh] bg-main rounded-[10px] flex-evenly">
                        <div className="claim-gift-btn w-[100%] ">
                            <div></div>
                            <h4 className="text-light font-semibold">Start</h4>
                            <MdNavigateNext className="text-2xl text-light font-bold" />
                            </div>
                        </a>
                    </div>
                </div>
            )}
        </>
    )
}