// import bell from "../../assets/bell.png";
import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
import PopUpComfirmationTask from "@/components/PopUpComfirmation";
import { useState } from "react";
export default function Task() {
    const [isClaiming, setIsClaiming] = useState(false);
    return (
        <>
            <div className="task-container w-full max-h-[70vh] overflow-y-scroll scroll-smooth bg-transparent mt-4">
                <div className="boost-btn-container h-inherit w-full  flex flex-col items-center bg-transparent">
                    <div className="task-claim w-[95%] h-[9vh] flex flex-row items-center justify-between px-2 mt-2 " data-aos="fade-up"
                        data-aos-duration="3000" onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/facebook.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-yellow-500 text-sm ml-1">40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    <div className="task-claim w-[95%] h-[9vh] flex flex-row items-center justify-between px-2 mt-2 " data-aos="fade-up"
                        data-aos-duration="3000" onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/telegram.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-yellow-500 text-sm ml-1">40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    <div className="task-claim w-[95%] h-[9vh] flex flex-row items-center justify-between px-2 mt-2 " data-aos="fade-up"
                        data-aos-duration="3000" onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/instagram.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-yellow-500 text-sm ml-1">40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    <div className="task-claim w-[95%] h-[9vh] flex flex-row items-center justify-between px-2 mt-2 " data-aos="fade-up"
                        data-aos-duration="3000" onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/x.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-yellow-500 text-sm ml-1">40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    <div className="task-claim w-[95%] h-[9vh] flex flex-row items-center justify-between px-2 mt-2 " data-aos="fade-up"
                        data-aos-duration="3000" onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/youtube.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-yellow-500 text-sm ml-1">40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    <div className="task-claim w-[95%] h-[9vh] flex flex-row items-center justify-between px-2 mt-2 " data-aos="fade-up"
                        data-aos-duration="3000" onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/twitter.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-yellow-500 text-sm ml-1">40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div><div className="task-claim w-[95%] h-[9vh] flex flex-row items-center justify-between px-2 mt-2 " data-aos="fade-up"
                        data-aos-duration="3000" onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/instagram.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-yellow-500 text-sm ml-1">40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    <div className="task-claim w-[95%] h-[9vh] flex flex-row items-center justify-between px-2 mt-2 " data-aos="fade-up"
                        data-aos-duration="3000" onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/facebook.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-yellow-500 text-sm ml-1">40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    <div className="task-claim w-[95%] h-[9vh] flex flex-row items-center justify-between px-2 mt-2 " data-aos="fade-up"
                        data-aos-duration="3000" onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/x.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-yellow-500 text-sm ml-1">40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    <div className="task-claim w-[95%] h-[9vh] flex flex-row items-center justify-between mb-3 px-2 mt-2 " data-aos="fade-up"
                        data-aos-duration="3000" onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/facebook.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-yellow-500 text-sm ml-1">40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div><div className="task-claim w-[95%] h-[9vh] flex flex-row items-center justify-between mb-2 px-2 mt-2 " data-aos="fade-up"
                        data-aos-duration="3000" onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/facebook.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-yellow-500 text-sm ml-1">40,000</h3>
                                </div>
                            </div>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    <div className="task-claim w-[95%] h-[9vh] flex flex-row items-center justify-between mb-3 px-2 mt-2 " data-aos="fade-up"
                        data-aos-duration="3000" onClick={() => setIsClaiming(true)}>
                        <div className="boost-writeup flex flex-row items-center justify-center">
                            <div className="icon-container ">
                                <Image className="w-10" draggable="false" width={50} height={50} src="/facebook.png" alt="" />
                            </div>
                            <div className="task-writeup ml-3 flex flex-col justify-between">
                                <h3 className="text-light font-semibold">Join Our Facebook</h3>
                                <div className="coin-task-container flex flex-row items-center">
                                    <Image className="w-5" draggable="false" width={50} height={50} src="/good-coin.png" alt="" />
                                    <h3 className="text-yellow-500 text-sm ml-1">40,000</h3>
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
