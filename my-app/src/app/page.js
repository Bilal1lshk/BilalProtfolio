"use client"

import localsekuya from "next/font/local";
import HomeALL from "./-components/Home.jsx";
const fontsekuya = localsekuya({
  src: "./font/Sekuya-Regular.ttf",
});
import Loader from "./-components/Loader.jsx";
import Navbar from "./-components/reuseable.jsx/Navbar.jsx";
import { useState } from "react";
export default function Home() {
  const [navbar, setnavbar] = useState(false)
  setTimeout(() => {
    setnavbar(true)
  },6000)
return (
  <div className={`min-h-screen ${fontsekuya.className} w-full bg-[#FFFFFF] text-black`}>
    {navbar && <HomeALL />}
    <Loader />
  </div>
);
}
