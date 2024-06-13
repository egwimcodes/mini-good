"use client"

import { useEffect, useState } from "react";
import HomePage from "@/components/Pages/HomePage";
import _404 from "@/components/Pages/_404";
import { CgPassword } from "react-icons/cg";
const myData = {
  username: "Snowwisdom",
  password: "1113269206",
  first_name: "Wisdom",
  referral_code: "",
  isPremium_user: false,

}
export default function Home() {
  const [show404, setShow404] = useState(false);


  useEffect(() => {
    alert(JSON.stringify(myData))
  })
  return (
    <>
      {show404 ? (
        <_404 />
      ) : (
          <HomePage />     
      )
      }
    </>
  );
}
