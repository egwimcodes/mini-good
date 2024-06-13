import Image from "next/image"
import { MdNavigateNext } from "react-icons/md"
type ProfileProps = {
    setShowProfile: (value: string) => void;
};

export default function Profile({ setShowProfile }: ProfileProps) {
    return (
        <div className='w-[100vw] h-[90vh] text-light flex-col ' onClick={() => setShowProfile("profile")}>
            <div className="profile-content w-[95vw] h-[30vh] flex-col flex-center">
                <div className="avater-profile w-[20vw] border-2 border-orange-400 rounded-[50%]">
                    <Image src="/robot.png" width={100} height={100} alt="" />
                </div>
                <p className='text-3xl font-bold'>DebugTitan</p>
                <div className="children-body xsm:flex-2 flex-col items-center justify-center w-full">
                    {/* <ChargeLevel level={100} availableGoodCoin={100} chargedGoodCoin={100} /> */}
                    <div className="level flex flex-row items-center justify-center flex-nowrap">
                        <Image className="w-8" width={100} height={100} src='/regendcup.png' draggable="false" alt="" />
                        <p className="text-base text-gray font-bold text-orange-400 mx-1">Gold</p>
                        <MdNavigateNext className="text-xl text-gray text-slate-400" />
                    </div>
                </div>
            </div>
            <hr className="w-[95vw] border-1 border-orange-400 mx-auto" />
            <div className="profile-content w-[95vw] h-[60vh] flex-col flex-center">
                <div className="profile-contnt-items flex-col flex-center">
                    <h4 className="text-1xl font-bold">Daily Earners</h4>
                    <div className="children-body flex flex-row items-center justify-center w-full" >
                        <Image className="w-5" width={50} height={50} src='/goodcoing.png' draggable="false" alt="" />
                        <p className="text-base text-gray font-bold text-orange-400 mx-1">900 MIllion</p>
                    </div>
                </div>
                <hr className="w-[70vw] border-1 my-3 border-orange-400 mx-auto" />
                <div className="profile-contnt-items flex-col flex-center">
                    <h4 className="text-1xl font-bold">Active</h4>
                    <div className="children-body flex flex-row items-center justify-center w-full" >
                        <p className="text-base text-gray font-bold text-orange-400 mx-1">2455675</p>
                    </div>
                </div>
                <hr className="w-[50vw] border-1 my-3 border-orange-400 mx-auto" />
                <div className="profile-contnt-items flex-col flex-center">
                    <h4 className="text-1xl font-bold">All Taps</h4>
                    <div className="children-body flex flex-row items-center justify-center w-full" >
                        <p className="text-base text-gray font-bold text-orange-400 mx-1">100M</p>
                    </div>
                </div>
                <hr className="w-[30vw] border-1 my-3 border-orange-400 mx-auto" />

            </div>
        </div>
    )
}
