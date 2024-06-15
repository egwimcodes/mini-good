// import bell from "../../assets/bell.png";
import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
import PopUpComfirmationTask from "@/components/PopUpComfirmation";
import { useEffect, useState } from "react";
import { RetriveTasks } from "@/utils/requests";
//import { TaskCompletionType } from "@/types";
export default function Task() {
    const [isClaiming, setIsClaiming] = useState(false);
    // const [retriverTasks, setRetrivedTask] = useState<TaskCompletionType>()

    useEffect(()=> {
        try {
            RetriveTasks().then((e) =>
                alert(JSON.stringify(e, null, 2))
            )
        } catch {
         alert('error while fetching tasks')
        }
        }
    )
    return (
        <>
            <div className="task-container w-[100%] h-[100%] overflow-y-scroll scroll-smooth bg-transparent mt-4">
                <div className="boost-btn-container h-[100%] w-[100%]  flex flex-col items-center bg-transparent">
                    <div className="task-claim w-[95%] h-[13%]  flex flex-row items-center justify-between px-2 py-2 mb-1 " onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/facebook.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-main text-sm ml-1">+40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    <div className="task-claim w-[95%] h-[13%]  flex flex-row items-center justify-between px-2 py-2 mb-1 " onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/facebook.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-main text-sm ml-1">+40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    <div className="task-claim w-[95%] h-[13%]  flex flex-row items-center justify-between px-2 py-2 mb-1 " onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/facebook.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-main text-sm ml-1">+40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    <div className="task-claim w-[95%] h-[13%]  flex flex-row items-center justify-between px-2 py-2 mb-1 " onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/facebook.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-main text-sm ml-1">+40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    <div className="task-claim w-[95%] h-[13%]  flex flex-row items-center justify-between px-2 py-2 mb-1 " onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/facebook.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-main text-sm ml-1">+40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    <div className="task-claim w-[95%] h-[13%]  flex flex-row items-center justify-between px-2 py-2 mb-1 " onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/facebook.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-main text-sm ml-1">+40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    <div className="task-claim w-[95%] h-[13%]  flex flex-row items-center justify-between px-2 py-2 mb-1 " onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/facebook.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-main text-sm ml-1">+40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    <div className="task-claim w-[95%] h-[13%]  flex flex-row items-center justify-between px-2 py-2 mb-1 " onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/facebook.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-main text-sm ml-1">+40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    <div className="task-claim w-[95%] h-[13%]  flex flex-row items-center justify-between px-2 py-2 mb-1 " onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/facebook.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-main text-sm ml-1">+40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    <div className="task-claim w-[95%] h-[13%]  flex flex-row items-center justify-between px-2 py-2 mb-1 " onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/facebook.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-main text-sm ml-1">+40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                </div>
            </div>
            {isClaiming && <PopUpComfirmationTask isClose={() => setIsClaiming(false)} isopen={true} />}
        </>
    )
}
