"use client"

import localsekuya from "next/font/local";

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
  },7000)
return (
  <div className={`min-h-screen ${fontsekuya.className} w-full bg-text-body`}>
    {navbar && <Navbar />}
    <Loader />
  </div>
);
}
