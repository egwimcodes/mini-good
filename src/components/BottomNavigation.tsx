"use client"
import React, { useState } from 'react'
import Image from 'next/image'

type BottomNavigationProps = {
    currentPage: (value: string) => void;
};

export default function BottomNavigation(props: BottomNavigationProps) {
    const [active, setActive] = useState('home')

  return (
      <div className='b_nav z-10 w-[100%] h-[100%] bottom-0 flex-row flex-evenly'>
          <div className={`b_nav-item  w-[15vw] h-[7vh] flex-col flex-center ${active === 'task' ? 'active  text-dark' : ''}`}  onClick={() => (setActive('task'), props.currentPage('task'))}>
              <Image className='xxsm:w-[30%] xsm:w-[40%] sm:w-[35%]' src="/data-mining.png" alt="" width={25} height={20} />
              <h4 className='text-light text-xs font-semibold'>Task</h4>
          </div>
          <div className={`b_nav-item  w-[15vw] h-[7vh] flex-col flex-center ${active === 'home' ? 'active' : ''}`} onClick={() => (setActive('home'), props.currentPage('home'))}>
              <Image className='xxsm:w-[30%] xsm:w-[40%] sm:w-[35%]' src="/goodcoing.png" alt="" width={25} height={20} />
              <h4 className='text-light text-xs font-semibold'>Tap</h4>
          </div>
          <div className={`b_nav-item  w-[15vw] h-[7vh] flex-col flex-center ${active === 'referral' ? 'active' : ''}`} onClick={() => (setActive('referral'), props.currentPage('referral'))}>
              <Image className='xxsm:w-[30%] xsm:w-[40%] sm:w-[35%]' src="/customer.png" alt="" width={25} height={20} />
              <h4 className='text-light text-xs font-semibold '>Refer</h4>
          </div>
          
      </div>
  )
}
