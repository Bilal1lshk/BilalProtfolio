
"use client"
import { useRef } from "react";
import React, { useEffect } from 'react'
import Navbar from './reuseable.jsx/Navbar'
import Aboutme from './Aboutme'
import Services from './Services'
import Projects from './Projects'
import Expertise from './Skills'
import TechStack from './TechStack'
import QA from './QA'
import Contact from './Contact'
import Process from './Process'
import Lenis from "lenis"
export default function HomeALL() {
    const cursorRef = useRef()
    console.log(cursorRef.current)
    useEffect(() => {
        const handleMouseMove = (e) => {
            cursorRef.current.style.left = `${e.clientX}px`;
            cursorRef.current.style.top = `${e.clientY}px`;
        };
        window.addEventListener("mousemove", handleMouseMove)
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            lenis.destroy();
        };
    }, []);

    return (
        <div className='bg-white'>
            <div ref={cursorRef} className="w-5 h-5 rounded-full bg-black z-99 fixed">

            </div>
            <Navbar />
            <Aboutme />
            <Services />
            <Expertise />
            <TechStack />
            <QA />
            <Process />
            <Contact />

        </div>
    )
}
