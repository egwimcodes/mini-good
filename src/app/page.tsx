"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useCloudStorage, useWebApp } from "@vkruglikov/react-telegram-web-app";
import _404 from "@/components/Pages/_404";
import { Register } from "@/utils/requests";
import { UserData } from "@/types";
import HomePage from "@/components/Pages/HomePage";
import { UserContext } from "@/hooks/UserContext";

export default function Home() {
  const userData = {
    user: {
      id: 1113269206,
      username: "Snowwisdom",
      first_name: "Wisdom",
      referral_code: "",
      is_premium_user: false,
    },
  };

  const { setItem, getItem } = useCloudStorage();
  const [show404, setShow404] = useState(false);
  const [userDataHook, setUserDataHook] = useState<UserData | null>(null);
  //TODO: create usestate to store registered user data

  const data = useWebApp();

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  useEffect(() => {
    if (data) {
      data.expand();
      const userInfo = {
        password: `${userData.user.id}`,
        username: userData.user.username,
        first_name: userData.user.first_name,
        referral_code: userData.user.referral_code ?? "",
        is_premium_user: userData.user.is_premium_user ?? false
      };

      Register(userInfo)
        .then((e) => {
          const storeData = async () => {
            try {
              // Ensure userData is a JSON string before storing
              const dataToStore = typeof e === 'string' ? e : JSON.stringify(e);
              await setItem("userData", dataToStore);
              setUserDataHook(e);
            } catch (error) {
              console.error("Error storing user data:", error);
            }
          };

          storeData();
        })
        .catch((error) => alert(`Error from Register ${JSON.stringify(error, null, 2)}`));
    }

    const getStoreData = async () => {
      try {
        const tokenData = await getItem("userData");

        alert(`tokenData: ${JSON.parse(tokenData).token.access}`)
        

        const storedData = await getItem('userData');
        const parsedValue = JSON.parse(storedData);
        if (parsedValue) {
          setUserDataHook(parsedValue);
        }
      } catch (error) {
        alert(`Error fetching data from localStorage: ${error}`);
      }
    };

    getStoreData();
  }, [data, setItem, getItem]);

  useEffect(() => {
    if (userDataHook) {
      // alert(`from userDataHook: ${JSON.stringify(userDataHook, null, 2)}`);
    }
  }, [userDataHook]);

  return (
    <>
      {show404 ? (
        <_404 />
      ) : (
          userDataHook ?
            <UserContext.Provider value={userDataHook}>
              <HomePage />
            </UserContext.Provider>
            :
            (
          <h1 className="text-3xl text-white flex items-center justify-center">Loading</h1>
        )
      )}
    </>
  );
}
