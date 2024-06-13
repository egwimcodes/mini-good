// import bell from "../../assets/bell.png";
import { MdNavigateNext } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import PopUpComfirmationTask from "@/components/PopUpComfirmation";

export default function Boost() {
    const [isClaiming, setIsClaiming] = useState(false);
    return (
        <>
            <div className="boost-container w-full max-h-[90vh] ">
                <div className="boost-head w-full h-[15vh] flex flex-col items-center mt-20">
                    <h1 className="text-3xl font-bold text-light mt-4">Boost</h1>
                </div>
                <div className="boost-btn-container h-[300vh] w-[90vw] mx-auto flex flex-col items-center" >
                    <div className="normal-boost w-[100%] h-[12vh] flex flex-row items-center justify-between mb-3 px-2 border-2 border-orange-400 rounded-[10px]" data-aos="fade-right"
                        data-aos-delay="5000" data-aos-duration="1000" onClick={() => setIsClaiming(true)}>
                        <Image className="w-10" width={50} height={50} draggable="false" src="/rocket.png" alt="" />
                        <div className="boost-writeup flex flex-col items-center justify-center">
                            <h3 className="text-light text-2xl font-bold">Buy Boost</h3>
                            <h5 className="text-gray text-sm"><span className="font-bold">level 1</span></h5>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    <div className="normal-boost w-[100%] h-[12vh] flex flex-row items-center justify-between mb-3 px-2 border-2 border-orange-400 rounded-[10px]" data-aos="fade-right "
                        data-aos-delay="5000" data-aos-duration="1500" onClick={() => setIsClaiming(true)}>
                        <Image className="w-10" width={50} height={50} draggable="false" src="/robot.png" alt="" />
                        <div className="boost-writeup flex flex-col items-center justify-center">
                            <h3 className="text-light text-2xl font-bold">Buy Bots </h3>
                            <h5 className="text-gray text-sm"><span className="font-bold">level 1</span></h5>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                    {/* <div className="normal-boost w-[100%] h-[10vh] flex flex-row items-center justify-between px-2" data-aos="fade-right"
            data-aos-delay="5000" data-aos-duration="2000" onClick={() => setIsClaiming(true)}>
            <img className="w-10" draggable="false" src={diamond} alt="" />
            <div className="boost-writeup flex flex-col items-center justify-center">
              <h3 className="text-light text-2xl font-bold">Diamod</h3>
              <h5 className="text-gray text-sm"><span className="font-bold">2M</span> Good Coins</h5>
            </div>
            <MdNavigateNext className="text-light text-2xl font-bold" />
          </div> */}
                </div>


            </div>
            {isClaiming && <PopUpComfirmationTask isClose={() => setIsClaiming(false)} isopen={true} />}

        </>
    );
}
