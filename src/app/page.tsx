"use client"

import { useEffect, useState } from "react";
import HomePage from "@/components/Pages/HomePage";
import _404 from "@/components/Pages/_404";
import { CgPassword } from "react-icons/cg";
import { Register } from "@/utils/requests";
import { UserData } from "@/types";
import { useWebApp, useCloudStorage } from "@vkruglikov/react-telegram-web-app";
import { UserContext } from "@/hooks/UserContext";


export default function Home() {
  let { getItem, setItem } = useCloudStorage();
  const [show404, setShow404] = useState(false);
  const [userDataHook, setUserDataHook] = useState<UserData | null>(null);
  const webApp = useWebApp();

  useEffect(() => {
    if (
      webApp.platform &&
      (webApp.platform === "unknown" ||
        webApp.platform === "tdesktop")
    ) {
      setShow404(true);
      return;
    }
    webApp.expand();
    const userData = webApp.initDataUnsafe;
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

            const userData = await getItem('userLocalData');
            setUserDataHook(JSON.parse(userData));

              alert(`Data stored successfully...: ${JSON.stringify(userDataHook)}`);

          } catch (error) {
            alert(`Error storing data: ${error}`);
          }
        }
        storeData();
      })
      .catch(
        (e) => alert(`Error from Register ${JSON.stringify(e)}`));
  });

  const userContextData = (typeof window !== 'undefined' && window.localStorage) ? window.localStorage.getItem('UserData') : null;
  const parsedUserDataContext = userContextData ? JSON.parse(userContextData) : {};

  return (
    <>
      {show404 ? (
        <_404 />
      ) : (userDataHook && (
        webApp.platform &&
        (webApp.platform === "android" ||
          webApp.platform === "ios") &&
        webApp.initDataUnsafe &&
        (
          <UserContext.Provider value={parsedUserDataContext}>
            <HomePage />
          </UserContext.Provider>
        )
      ))}
    </>
  );
}
