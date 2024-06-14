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
