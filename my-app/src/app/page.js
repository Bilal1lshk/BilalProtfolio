"use client";

import HomeALL from "./-components/Home.jsx";
import Loader from "./-components/Loader.jsx";
import { useState, useEffect } from "react";

export default function Home() {
  const [navbar, setnavbar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setnavbar(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-black font-sans">
      {navbar && <HomeALL />}
      <Loader />
    </div>
  );
}
