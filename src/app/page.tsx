"use client";

import HomePage from '@/components/Pages/HomePage';
import _404 from '@/components/Pages/_404';
import { useWebApp } from '@vkruglikov/react-telegram-web-app';
import React, { useState, useEffect } from 'react';

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

          alert(` User web data ${JSON.stringify(webAppData, null, 2)}`);

          const userInfo = {
            password: `${webAppData.platform.user.id}`,
            username: webAppData.platform.user.username,
            first_name: webAppData.platform.user.first_name,
            referral_code: webAppData.platform.user.referral_code ?? "",
            is_premium_user: webAppData.platform.user.is_premium_user ?? false
          };
          alert(` User info ${JSON.stringify(userInfo)}`);

          // Register(userInfo)
          //   .then((e) => {
          //     const storeData = async () => {
          //       try {
          //         const dataToStore = typeof e === 'string' ? e : JSON.stringify(e);
          //         // Handle storing data logic here
          //       } catch (error) {
          //         console.error("Error storing user data:", error);
          //       }
          //     };

          //     storeData();
          //   })
          //   .catch((error) => console.error(error.message));
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
