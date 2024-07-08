import React from 'react'
import Image from 'next/image'
import { useTypewriter } from 'react-simple-typewriter'
export default function LoadingPage() {


  const [text] = useTypewriter({
    words: ['Loading...', 'GoodCoin',],
    loop: 1,
    delaySpeed: 5000, 
    onDelay: () => { alert('Loading...') }

    
  })

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-gray-800">
        <Image className='coin-svg w-[30%]' src="https://ik.imagekit.io/egwimcodes/goodcoing.png?updatedAt=1720197417578" alt="" width={100} height={100} />
        <div className="absolute">
          <div className="loader "></div>

        </div>
        <div className='absolute bottom-10  w-[100%] h-[20%] flex-center'>
          <h1 className='text-cyan-200 text-2xl font-semibold text-shadow'>{text}</h1>
        </div>

      </div>
    </>
  )
}
