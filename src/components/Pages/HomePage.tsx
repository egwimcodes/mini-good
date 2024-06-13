"use client"
import Image from 'next/image'
import { useState } from 'react'
import React from 'react'
import BottomNavigation from '../BottomNavigation'
import Dashboard from './Dashboard'
import Referral from './Referral'
import TaskPage from './TaskPage'

export default function HomePage() {
  const [tap, setTap] = useState(0)
  const [currentPage, setCurrentPage] = useState('home')

  const selectedBtn = (data: string) => {
    setCurrentPage(data);
  };
  const handleTap = () => {
    setTap(prev => prev + 1)
  }
  return (
    <>
      <div className="container w-[100vw] h-[100vh] flex flex-col justify-between items-center relative">
        <div className="body-content">
          {currentPage === 'task' && <TaskPage />}
          {currentPage === 'home' && <Dashboard />}
          {currentPage === 'refer' && <Referral />}
        </div>
        <div className=" w-full h-[10vh] absolute bottom-0 bg-transparent">
          <div className="gradient-border  rounded-tl-3xl rounded-tr-3xl w-[100vw] h-[10vh] bg-light gradient-border z--1">
            <BottomNavigation currentPage={selectedBtn} />
          </div>
        </div>
      </div>
    </>
  )
}
