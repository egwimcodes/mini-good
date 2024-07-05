import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { MdNavigateNext } from 'react-icons/md';
import { useUserContext } from '@/hooks/UserContext';
import { RetriveStats } from '@/utils/requests';
import MiniPreloader from "./MiniPleloader";

type ProfileProps = {
    setShowProfile: (value: string) => void;
};

interface statType {
    users_count: number,
    active_tappers: number,
    total_coins_grabbed: number
};
const Profile: React.FC<ProfileProps> = ({ setShowProfile }) => {
    const user = useUserContext();
    const [stillFetching, setStillFetching] = useState<boolean>(true);
    const [stats, setStat] = useState<statType>()

    useEffect(() => {
        try {
            RetriveStats().then((stat) => {
                setStat(stat)
                setStillFetching(false);
            })
        } catch (error) {
            console.log(error)
            setStillFetching(false);
        }
    }, [])

    if (stillFetching) return <MiniPreloader />;
    return (
        <div className='w-[100vw] h-[90vh] text-light flex-col' onClick={() => setShowProfile("profile")}>
            <div className="profile-content w-[95vw] h-[30vh] flex-col flex-center">
                <div className="avatar-profile w-[20vw] border-2 border-main rounded-[50%]">
                    <Image src="https://ik.imagekit.io/egwimcodes/robot.png?updatedAt=1720197417330" width={100} height={100} alt="" />
                </div>
                <p className='text-3xl font-bold'>{user.username}</p>
                <div className="children-body xsm:flex-2 flex-col items-center justify-center w-full">
                    <div className="level flex flex-row items-center justify-center flex-nowrap">
                        <Image className="w-8" width={100} height={100} src='https://ik.imagekit.io/egwimcodes/regendcup.png?updatedAt=1720197417374' draggable="false" alt="" />
                        <p className="text-base text-gray font-bold text-main mx-1">{user.rank}</p>
                        <MdNavigateNext className="text-xl text-gray text-slate-400" />
                    </div>
                </div>
            </div>
            <hr className="w-[95vw] border-1 border-main mx-auto" />
            <div className="profile-content w-[95vw] h-[60vh] flex-col flex-center">
                <div className="profile-content-items flex-col flex-center">
                    <h4 className="text-1xl font-bold">Daily Earners</h4>
                    <div className="children-body flex flex-row items-center justify-center w-full">
                        <Image className="w-5" width={50} height={50} src='https://ik.imagekit.io/egwimcodes/goodcoing.png?updatedAt=1720197417578' draggable="false" alt="" />
                        <p className="text-base text-gray font-bold text-main mx-1">{ stats?.users_count}</p>
                    </div>
                </div>
                <hr className="w-[70vw] border-1 my-3 border-main mx-auto" />
                <div className="profile-content-items flex-col flex-center">
                    <h4 className="text-1xl font-bold">Active</h4>
                    <div className="children-body flex flex-row items-center justify-center w-full">
                        <p className="text-base text-gray font-bold text-main mx-1">{stats?.active_tappers }</p>
                    </div>
                </div>
                <hr className="w-[50vw] border-1 my-3 border-main mx-auto" />
                <div className="profile-content-items flex-col flex-center">
                    <h4 className="text-1xl font-bold">All Taps</h4>
                    <div className="children-body flex flex-row items-center justify-center w-full">
                        <p className="text-base text-gray font-bold text-main mx-1">{ stats?.total_coins_grabbed}</p>
                    </div>
                </div>
                <hr className="w-[70vw] border-1 my-3 border-main mx-auto" />
            </div>
        </div>
    );
};

export default Profile;
