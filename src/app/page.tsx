"use client"

import { useState } from "react";
import HomePage from "@/components/Pages/HomePage";
import _404 from "@/components/Pages/_404";

export default function Home() {
  const [show404, setShow404] = useState(false);

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
