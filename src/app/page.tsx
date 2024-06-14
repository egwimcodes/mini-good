"use client";
import HomePage from '@/components/Pages/HomePage';
import _404 from '@/components/Pages/_404';
import { useWebApp } from '@vkruglikov/react-telegram-web-app';
import React, { useState, useEffect } from 'react';
import { getAccessToken, useCookies } from '@/lib/cookies';

export default function Home() {
  const webAppData = useWebApp();
  const cookieStore = useCookies()
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
        
        const hasCookie = getAccessToken()

        if (hasCookie && hasCookie.value) {

          alert("You are already logged in")

        } else alert("You are not logged in")
         
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
