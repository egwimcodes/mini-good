"use client"
import { useState } from 'react'
import React from 'react'
import BottomNavigation from '../BottomNavigation'
import Referral from './Referral'
import TaskPage from './TaskPage'
import Dashboard from './Dashboard'

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
      <div className="w-[100%] h-[100vh] bg-black s flex flex-col items-center relative bg-gradient-to-br from-gray-800">
        <div className="body-content h-[85%] w-[95vw] mx-auto ">
          {currentPage === 'referral' ? <Referral /> : null}
          {currentPage === 'home' ? <Dashboard /> : null}
          {currentPage === 'task' ? <TaskPage /> : null}
        </div>
        <div className=" w-[60%] h-[15%] absolute bottom-0 bg-transparent  flex-center ">
          <div className="gradient-border rounded-3xl w-[100vw]  bg-light gradient-border z--1">
            <BottomNavigation currentPage={selectedBtn} />
          </div>
        </div>
      </div>
    </>
  )
}
