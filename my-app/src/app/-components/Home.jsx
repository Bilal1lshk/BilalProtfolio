
"use client"

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
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);
    return (
        <div>
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
