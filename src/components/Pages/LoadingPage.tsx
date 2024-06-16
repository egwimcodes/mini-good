import React from 'react'
import Image from 'next/image'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
export default function LoadingPage() {


  const [text] = useTypewriter({
    words: ['Loading...', 'Good Coin',],
    loop: 1,
  })

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center relative">
        <Image className='coin-svg w-[30%]' src="/goodcoing.png" alt="" width={100} height={100} />
        <div className="absolute">
          <div className="loader "></div>

        </div>
        <div className='absolute bottom-10  w-[100%] h-[20%] flex-center'>
          <h1 className='text-main text-2xl font-semibold text-shadow'>{text}</h1>
        </div>

      </div>
    </>
  )
}
