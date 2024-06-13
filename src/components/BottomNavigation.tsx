"use client"
import React, { useState } from 'react'
import Image from 'next/image'



export default function BottomNavigation(props: any) {
    const [active, setActive] = useState('home')
    
  return (
        <div className='b_nav z-10 absolute w-[100vw] h-[9vh] bottom-0 flex-row flex-evenly'>
          <div className={`b_nav-item  w-[15vw] h-[7vh] flex-col flex-center ${active === 'task' ? 'active' : ''}`}  onClick={() => (setActive('task'), props.currentPage('task'))}>
              <Image src="/data-mining.png" alt="" width={25} height={20} />
              <h4 className='text-light text-xs '>Task</h4>
          </div>
          <div className={`b_nav-item  w-[15vw] h-[7vh] flex-col flex-center ${active === 'home' ? 'active' : ''}`} onClick={() => (setActive('home'), props.currentPage('home'))}>
              <Image src="/goodcoing.png" alt="" width={25} height={20} />
              <h4 className='text-light text-xs '>Tap</h4>
          </div>
          <div className={`b_nav-item  w-[15vw] h-[7vh] flex-col flex-center ${active === 'refer' ? 'active' : ''}`} onClick={() => (setActive('refer'), props.currentPage('refer'))}>
              <Image src="/customer.png" alt="" width={25} height={20} />
              <h4 className='text-light text-xs '>Refer</h4>
          </div>
          
      </div>
  )
}
