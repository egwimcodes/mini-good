"use client"
import { useState } from 'react'
import React from 'react'
import BottomNavigation from '../BottomNavigation'
import Referral from './Referral'
import TaskPage from './TaskPage'
import Dashboard from './Dashboard'
import { DashboardProps } from '@/types'

export default function HomePage({sendMessage, message }: DashboardProps) {
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
      <div className="w-[100%] h-[100vh] bg-gray-800 flex flex-col items-center justify-between relative bg-gradient-to-br from-gray-800">
        <div className="body-content h-[85%] w-[95vw] mx-auto ">
          {currentPage === 'referral' ? <Referral /> : null}
          {currentPage === 'home' ? <Dashboard sendMessage={sendMessage} message={message}  /> : null}
          {currentPage === 'task' ? <TaskPage /> : null}
        </div>
        <div className="cyan-gradient  w-[100%] h-[12%] absolute bottom-0  left-0 flex-center gradient-border rounded-t-[20px] ">
          <div className="rounded-t-[20px] w-[99%] bg-gradient-to-br bg-gray-800 h-[99%] inset-1 relative bottom-0 left-0">
            <BottomNavigation currentPage={selectedBtn} />
          </div>
        </div>
      </div>
    </>
  )
}
