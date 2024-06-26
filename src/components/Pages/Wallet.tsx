import React, { useState } from 'react'
import Image from 'next/image'
import { BsCopy } from "react-icons/bs";

type WalletProps = {
    setShowProfile: (value: string) => void;
};

// interface UserWalletType {
//     balance: number;
//     profit_per_hour: number;
//     daily_income: number;
//     address: string;
//     rank: string;
// }

export default function Wallet({ setShowProfile }: WalletProps) {
    const [copyWallet, setCopyWallet] = useState(false)


  return (
      <>
          <div className='w-[100vw] h-[90vh] text-light flex-col ' onClick={() => setShowProfile("wallet")}>
              <div className="profile-content w-[95vw] h-[30vh] flex-col flex-center">
                  
                  <p className='text-3xl font-bold'>Wallet</p>
                  <div className="children-body xsm:flex-2 flex-col items-center justify-center w-full" >
                      {/* <ChargeLevel level={100} availableGoodCoin={100} chargedGoodCoin={100} /> */}
                      <div className="level flex flex-row items-center justify-center flex-nowrap">
                          <p className="text-base text-gray font-bold text-main mx-1">{0} USDc</p>
                      </div>
                      <div className="credit w-[50vw] mx-auto mt-1 flex-row flex-center h-[5vh] bg-main rounded-3xl" onClick={() => { setCopyWallet(true)}}>
                          <h3>{ copyWallet ? "Connect Wallet" : "Wallet Connected"}</h3>
                      </div>
                      
                  </div>
              </div>
              <hr className="w-[95vw] border-1 border-main mx-auto" />
              <div className="credit  mx-auto flex-col flex-center h-[10vh] ">
                  <h3 className='text-1xl font-semibold'>Credit Your Wallet</h3>
                  <p className='text-xxxs font-semibold'>creadit your goodcoin wallet</p>
              </div>
              <div className="profile-content w-[95vw] h-[50vh] flex-col flex-center">
                  <hr className="w-[70vw] border-1 my-3 border-main mx-auto" />
                  <div className="profile-contnt-items flex-col flex-center">
                      <h4 className="text-1xl font-bold">USDT</h4>
                      <div className="children-body flex flex-row items-center justify-evenly w-[95vw]" >
                          <Image className="w-5" width={50} height={50} src='/usdt.png' draggable="false" alt="" />
                          <p className="text-xxxs text-gray font-bold text-main mx-1">1A1zP1eP5QGe***</p>
                          <BsCopy className='text-xl text-gray text-slate-400'/>
                      </div>
                  </div>
                 
                  <hr className="w-[70vw] border-1 my-3 border-main mx-auto" />
              </div>

        </div>
      </>
  )
}
