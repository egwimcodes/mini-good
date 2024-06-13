"use client"
import Image from "next/image";
import HomePage from '@/components/Pages/HomePage'
import { useWebApp } from "@vkruglikov/react-telegram-web-app";
import { useEffect, useState } from "react";
import _404 from "@/components/Pages/_404";
// import { UserData } from "@/types";
export default function Home() {
  const [show404, setShow404] = useState(false);
  // const [userData, setUserData] = useState<UserData>();
  const data = useWebApp();


  useEffect(() => {
    console.log(data)
    
  }, [data]);

  return (
    <>
      {show404 ? (
        <_404 />
      ) : (
          <HomePage />
          
      //     data.platform &&
      //     (data.platform === "android" ||
      //       data.platform === "ios") &&
      // data.initDataUnsafe && <HomePage />
      
      )
      }
    </>
  );
}
