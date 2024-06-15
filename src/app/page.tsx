"use client";
import HomePage from '@/components/Pages/HomePage';
import _404 from '@/components/Pages/_404';
import { useWebApp } from '@vkruglikov/react-telegram-web-app';
import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

export default function Home() {
  const webAppData = useWebApp();
  const [show404, setShow404] = useState(false);

  useEffect(() => {
    if (webAppData) {
      if (webAppData.platform && (webAppData.platform === "unknown" || webAppData.platform === "tdesktop")) {
        setShow404(true);
        return;
      }

      if (webAppData.platform) {
        webAppData.expand();
        const userData = webAppData.initDataUnsafe;
        const userInfo = {
          password: `${userData.user.id}`,
          username: userData.user.username,
          first_name: userData.user.first_name,
          referral_code: userData.start_param ?? "",
          is_premium_user: userData.user.is_premium_user
            ?? false
        };
        console.log('user', userInfo)
        const cookies = new Cookies();
        const token = cookies.get('accessToken');
        if (token !== null) {
          alert(token)
          cookies.remove("accessToken", { path: '/' })
          }else alert("null token")
        alert(`New Token ${token}`)
         
      }
    }
  }, [webAppData]);

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      {show404 ? (
        <_404 />
      ) : (
        webAppData?.platform && (webAppData.platform === "android" || webAppData.platform === "ios") && webAppData.initDataUnsafe && (
          <HomePage />
        )
      )}
    </>
  );
}

