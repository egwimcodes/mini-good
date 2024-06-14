"use client"
import { useState } from 'react'
import React from 'react'
import BottomNavigation from '../BottomNavigation'
// import Dashboard from './Dashboard'
// import Referral from './Referral'
// import TaskPage from './TaskPage'

export default function HomePage() {
  // const [tap, setTap] = useState(0)
  const [currentPage, setCurrentPage] = useState('home')
  const selectedBtn = (data: string) => {
    setCurrentPage(data);
  };
  // const handleTap = () => {
  //   setTap(prev => prev + 1)
  // }
  return (
    <>
      <div className="w-[100%] h-[100vh] flex flex-col items-center relative bg-slate-300">
        <div className="body-content h-[90%] w-[70vw] mx-auto">
         
        </div>
        <div className=" w-[60%] h-[10vh] absolute bottom-0 bg-transparent  flex-center ">
          <div className="gradient-border rounded-3xl w-[100vw]  bg-light gradient-border z--1">
            <BottomNavigation currentPage={selectedBtn} />
          </div>
        </div>
      </div>
    </>
  )
}
