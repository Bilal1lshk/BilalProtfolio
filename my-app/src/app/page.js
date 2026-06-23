"use client"  // 👈 add this

import Loader from "./-components/Loader.jsx";
export default function Home() {
  return (
    <div className={`h-auto  w-full`}>
      <Loader />
    </div>
  );
}
