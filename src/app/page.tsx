"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useWebApp } from "@vkruglikov/react-telegram-web-app";
import _404 from "@/components/Pages/_404";
// import { Register } from "@/utils/requests";
// import { UserData } from "@/types";
import HomePage from "@/components/Pages/HomePage";
import { Register } from "@/utils/requests";
// import { UserContext } from "@/hooks/UserContext";

export default function Home() {
  // const userData = {
  //   user: {
  //     id: 1113269206,
  //     username: "Snowwisdom",
  //     first_name: "Wisdom",
  //     referral_code: "",
  //     is_premium_user: false,
  //   },
  // };

  // const { setItem, getItem } = useCloudStorage();
  const [show404] = useState(false);
  // const [userDataHook, setUserDataHook] = useState<UserData | null>(null);
  //TODO: create usestate to store registered user data

  const webAppData = useWebApp();



  useEffect(() => {

    if (
      webAppData.platform &&
      (webAppData.platform === "unknown" ||
        webAppData.platform === "tdesktop")
    ) {
      alert("Unsupported platform: " + webAppData.platform);
      // setShow404(true);
      return;
    }
    webAppData.expand();
    const userInfo = {
      password: `${webAppData.platform.user.id}`,
      username: webAppData.platform.user.username,
      first_name: webAppData.platform.user.first_name,
      referral_code: webAppData.platform.user.referral_code ?? "",
      is_premium_user: webAppData.platform.user.is_premium_user ?? false
    };
    alert(webAppData.platform)
    alert(userInfo)


    Register(userInfo)
      .then((e) => {
        const storeData = async () => {
          try {
            // const session = getSession()
            // Ensure userData is a JSON string before storing
            const dataToStore = typeof e === 'string' ? e : JSON.stringify(e);
            alert(`dataToStore: ${dataToStore}`);
            // const accessToken = JSON.parse(dataToStore).token.access;
            // localStorage.setItem("authToken", accessToken);
          } catch (error) {
            alert(`Error from rgister: ${error}`);
          }
        };

        storeData();
      }).catch((error) => alert(error.message));


    // const getStoreData = async () => {
    //   try {



    //     const storedData = await getItem('userData');
    //     const parsedValue = JSON.parse(storedData);
    //     if (parsedValue) {
    //       setUserDataHook(parsedValue);
    //     }
    //   } catch (error) {
    //     alert(`Error fetching data from localStorage: ${error}`);
    //   }
    // };

    // getStoreData();


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
        (webAppData?.platform && (
          webAppData.platform === "android" ||
          webAppData.platform === "ios") &&
          webAppData.initDataUnsafe && (
            // userDataHook ?
            // <UserContext.Provider value={userDataHook}>
            <HomePage />
            // </UserContext.Provider>
            //     :
            //     (
            //   <h1 className="text-3xl text-white flex items-center justify-center">Loading....</h1>
            // )
          ))
      )}
    </>
  );
}

