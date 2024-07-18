// import bell from "../../assets/bell.png";
import { MdNavigateNext } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
//import PopUpComfirmationTask from "@/components/PopUpComfirmation";
import BuyBot_Boost from "./BuyBot_Boost";
import BuyBot_Energy from "./BuyBot_Energy";

export default function Boost() {
    const [isClaimingBoost, setIsClaimingBoost] = useState(false);
    const [isClaimingEnergy, setIsClaimingEnergy] = useState(false);
    
    return (
        <>
            <div className="boost-container w-full max-h-[90vh] ">
                <div className="boost-head w-full h-[15vh] flex flex-col items-center mt-20">
                    <h1 className="text-3xl font-bold text-light mt-4">Boost</h1>
                </div>
                <div className="boost-btn-container h-[300vh] w-[90vw] mx-auto flex flex-col items-center" >
                    <div className="normal-boost w-[100%] h-[12vh] flex flex-row items-center justify-between mb-3 px-2 border-2 border-main rounded-[10px]" onClick={() => setIsClaimingBoost(true)}>
                        <Image className="w-10" width={50} height={50} draggable="false" src="https://ik.imagekit.io/egwimcodes/rocket.png?updatedAt=1720197417327" alt="" />
                        <div className="boost-writeup flex flex-col items-center justify-center">
                            <h3 className="text-main text-2xl font-bold">Buy Boost</h3>
                            <h5 className="text-orange-400 text-sm"><span className="font-bold">level 1</span></h5>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                </div>

                <div className="boost-btn-container h-[300vh] w-[90vw] mx-auto flex flex-col items-center mt-1" >
                    <div className="normal-boost w-[100%] h-[12vh] flex flex-row items-center justify-between mb-3 px-2 border-2 border-main rounded-[10px]" onClick={() => setIsClaimingEnergy(true)}>
                        <Image className="w-10" width={50} height={50} draggable="false" src="https://ik.imagekit.io/egwimcodes/energy.avif?updatedAt=1721334603294" alt="" />
                        <div className="boost-writeup flex flex-col items-center justify-center">
                            <h3 className="text-main text-2xl font-bold">Buy Energy</h3>
                            <h5 className="text-orange-400 text-sm"><span className="font-bold">level 1</span></h5>
                        </div>
                        <MdNavigateNext className="r-arrow text-2xl font-bold" />
                    </div>
                </div>


            </div>
            {isClaimingBoost && <BuyBot_Boost isClose={() => setIsClaimingBoost(false)} isopen={true} />}
            {isClaimingEnergy && <BuyBot_Energy isClose={() => setIsClaimingEnergy(false)} isopen={true} />}

        </>
    );
}
