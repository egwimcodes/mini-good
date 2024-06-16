import React from 'react'
import Image from 'next/image'
export default function LoadingPage() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center relative">
        <Image className='coin-svg' src="/goodcoing.png" alt="" width={100} height={100} />
        <div className="absolute">
          <div className="loader "></div>

        </div>
      </div>
    </>
  )
}
