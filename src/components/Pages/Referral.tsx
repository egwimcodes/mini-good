import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { RetriveReferrals } from '@/utils/requests'


interface ReferralType {
    total_refers: number
    referrals: []
}
export default function Referral() {
    const [totalReferrals, setTotalReferrals] = useState<ReferralType>()

    useEffect(() => {
        async function fetchData() {
            RetriveReferrals().then((e) => setTotalReferrals(e))
        }
        fetchData()
    })
    return (
        <>
            <div className="conatiner h-[100%] w-[100%] flex flex-col items-center justify-evenly text-xl text-bold text-light " >

                <div className="ref-head-container h-[15%] w-full flex flex-col items-center justify-center ">
                    <div className="greeting flex flex-row">
                        <p className="text-sm text-slate-300">REFERRAL</p>
                    </div>
                    <p className="text-2xl text-light font-bold">INVITE FRIENDS</p>
                </div>
                <div className="ref-body w-[95%] h-[30%]">
                    <div className="invite-content-container h-[100%] flex flex-col justify-center items-center">
                        <div className="cont-container w-full h-[100%] flex flex-row justify-between">
                            <div className="invite-cont w-[49%] h-[100%] flex rounded-[10px] flex-col items-start justify-between p-2  border-2 border-main ">
                                <h3 className="invite-h-text h-[20%] text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">Invite friends</h3>

                                <div className="coin-text h-[40%] flex flex-row items-center">
                                    <Image className="xxxsm:w-[20%] xxsm:w-[25%] xsm:w-[20%]  sm:w-[17%]" src="/good-coin.png" alt="" width={50} height={50} />
                                    <h3 className="invite-text text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl ml-1 font-bold text-main">+2000</h3>
                                </div>
                            </div>
                            <div className="invite-cont w-[49%] h-[100%] flex rounded-[10px] flex-col items-start justify-between p-2  border-2 border-main ">
                                <h3 className="invite-h-text h-[20%] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">Invite friends with <br /> premium</h3>

                                <div className="coin-text h-[40%] flex flex-row items-center">
                                    <Image className="xxxsm:w-[20%] xxsm:w-[25%] xsm:w-[20%]  sm:w-[17%]" src="/good-coin.png" alt="" width={50} height={50} />
                                    <h3 className="invite-text text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl ml-1 font-bold text-main">+10000</h3>
                                </div>
                            </div>
                        </div>
                        <div className="cont-cottom-text h-[10%] flex flex-col items-center justify-center">
                            <p className="text-sm text-main">Score 5% of your buddies</p>
                        </div>
                    </div>
                </div>

                <div className="ref-btn-container h-[50%] flex flex-col items-center justify-between ">
                    <div className="my-referals w-[100%] h-[80%] p-5 border-2 border-main rounded-[30px]">
                        <div className="referal-item">
                            <p className="text-light text-xl font-bold">MY REFERALS <span className="text-2xl text-purple-600">{totalReferrals?.total_refers}</span></p>
                            <div className="referal-head"></div>
                        </div>
                        {totalReferrals?.referrals ? (
                            <div className="referal-body w-inherit h-[15vh] w-[100%] flex flex-col overflow-y-auto">
                                {totalReferrals?.referrals?.map((e, i) => (
                                    <p key={i} className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-main">
                                        {JSON.stringify(e)}
                                    </p>
                                ))}
                            </div>
                        ) : (
                            <div className="referal-body w-inherit h-[15vh] flex flex-col items-center justify-center">
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-slate-600">
                                    You Don't Have Referrals Yet
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="referal-btn flex w-[95vw] h-[18%] flex-col justify-center items-center border-2 border-main rounded-[20px]">
                        <p>INIVITE FRIENDS</p>
                    </div>
                </div>
            </div>
        </>
    )
}
