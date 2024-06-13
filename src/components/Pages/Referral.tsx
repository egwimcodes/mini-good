import React from 'react'
import Image from 'next/image'

export default function Referral() {
  return (
      <>
          <div className="conatiner h-[90vh] flex flex-col items-center justify-evenly w-full text-xl text-bold text-light " >

              <div className="ref-head-container h-[15vh] w-full flex flex-col items-center justify-center ">
                  <div className="greeting flex flex-row">
                      <p className="text-sm text-slate-300">REFERRAL</p>
                  </div>
                  <p className="text-2xl text-light font-bold">INVITE FRIENDS</p>
              </div>
              <div className="ref-body w-[95vw] h-[20vh]">
                  <div className="invite-content-container flex flex-col justify-center items-center">
                      <div className="cont-container w-full h-[18vh] flex flex-row justify-between">
                          <div className="invite-cont w-[49%] h-[17vh] flex rounded-[10px] flex-col items-start justify-around p-2  border-2 border-orange-400">
                              <h3 className=" invite-h-text text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">Invite friends</h3>

                              <div className="coin-text flex flex-row items-center">
                                  <Image className="w-8" src="/good-coin.png" alt="" width={50} height={50} />
                                  <h3 className="invite-text text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl ml-1 font-bold text-orange-400">+2000</h3>
                              </div>
                          </div>
                          <div className="invite-cont w-[49%] h-[17vh] flex rounded-[10px] flex-col items-start justify-around p-2  border-2 border-orange-400 ">
                              <h3 className="invite-h-text text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">Invite friends with <br /> premium</h3>

                              <div className="coin-text h-[8vh] flex flex-row items-center">
                                  <Image className="w-8" src="/good-coin.png" alt="" width={50} height={50} />
                                  <h3 className="invite-text text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl ml-1 font-bold text-orange-400">+10000</h3>
                              </div>
                          </div>
                      </div>
                      <div className="cont-cottom-text h-[3vh] flex flex-col items-center justify-center">
                          <p className="text-sm text-slate-300">Score 5% of your buddies</p>
                      </div>
                  </div>
              </div>

              <div className="ref-btn-container h-[40vh] flex flex-col items-center justify-between">
                  <div className="my-referals w-[95vw] h-[30vh] p-5 border-2 border-orange-400 rounded-[30px]">
                      <div className="referal-item">
                          <p className="text-light text-xl font-bold">MY REFERALS <span className="text-2xl text-purple-600">0</span></p>
                          <div className="referal-head"></div>
                      </div>
                      <div className="referal-body w-inherit h-[15vh] flex flex-col items-center justify-center">
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-slate-600">You Don't Have Referals Yet</p>
                      </div>

                  </div>
                  <div className="referal-btn flex w-[95vw] h-[9vh] flex-col justify-center items-center border-2 border-orange-400 rounded-[20px]">
                      <p>INIVITE FRIENDS</p>
                  </div>
              </div>
          </div>
      </>
  )
}
