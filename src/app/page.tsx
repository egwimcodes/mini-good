"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useCloudStorage, useWebApp } from "@vkruglikov/react-telegram-web-app";
import _404 from "@/components/Pages/_404";
import { Register } from "@/utils/requests";
import { UserData } from "@/types";
import HomePage from "@/components/Pages/HomePage";
// import { MyLocalStorage } from "./localStorage/localStorage";

export default function Home() {
  const { setItem, getItem } = useCloudStorage()
  const [show404, setShow404] = useState(false);
  const [userDataHook, setUserDataHook] = useState<UserData>();
  //TODO: create usestate to store registered user data

  const data = useWebApp();

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener(
      "contextmenu",
      handleContextMenu
    );

    return () => {
      document.removeEventListener(
        "contextmenu",
        handleContextMenu
      );
    };
  }, []);

  useEffect(() => {
    if (
      data.platform &&
      (data.platform === "unknown" ||
        data.platform === "tdesktop")
    ) {
      setShow404(true);
      return;
    }
    data.expand();
    const userData = data.initDataUnsafe;
    const userInfo = {
      password: `${userData.user.id}`,
      username: userData.user.username,
      first_name: userData.user.first_name,
      referral_code: userData.start_param ?? "",
      is_premium_user: userData.user.is_premium_user
        ?? false
    };
    Register(userInfo)
      .then((e) => {
        const storeData = async () => {
          try {
            // Ensure userData is a JSON string before storing
            const dataToStore = typeof e === 'string' ? e : JSON.stringify(e);
            await setItem('userLocalData', dataToStore);

          } catch (error) {
            alert(`Error storing data: ${error}`);
          }
        }
        storeData();
      })
      .catch(
        (e) => alert(`Error from Register ${JSON.stringify(e)}`)
      );

    const getStoreData = async () => {
      try {
        const storedData = await getItem('userLocalData');
        if (storedData) {
          const parsedValue = JSON.parse(storedData);
          setUserDataHook(parsedValue);

          // alert(`Stored data from Register: ${JSON.stringify(parsedValue, null, 2)}`);
        }
      }
      catch (error) {
        alert(`Error fetching data from localStorage: ${error}`);
      }
    }

    getStoreData();
  }, [data, setItem, getItem]);

  return (
    <>
      {show404 ? (
        <_404 />
      ) : (
        // userDataHook !== null && (
        // webApp.platform &&
        // (webApp.platform === "android" ||
        //   webApp.platform === "ios") &&
        // webApp.initDataUnsafe &&
        (
          // <UserContext.Provider value={userDataHook}>
            <HomePage />
          // </UserContext.Provider>
        )
        // ))}
      )
}
    </>
  );
}
