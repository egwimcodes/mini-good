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
    console.log(data.platform)
    // if (
    //   data.platform &&
    //   (data.platform === "unknown" ||
    //     data.platform === "tdesktop")
    // ) {
    //   setShow404(true);
    //   return;
    // }

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
    alert(JSON.stringify(userInfo))
    alert("dev")
    // Register(userInfo)
    //   .then((e) => {
    //     const storeData = async () => {
    //       try {
    //         // Ensure userData is a JSON string before storing
    //         const dataToStore = typeof e === 'string' ? e : JSON.stringify(e);
    //         // await setItem('userLocalData', dataToStore);
    //         alert(JSON.stringify(dataToStore))
    //         console.log(dataToStore)

    //       } catch (error) {
    //         alert(`Error storing data: ${error}`);
    //         console.log(error);
    //       }
    //     }
    //     storeData();
    //   })
    //   .catch(
    //     (e) => alert(`Error from Register ${JSON.stringify(e)}`)
    //   );

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
