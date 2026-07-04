import React from 'react'
import Navbar from './reuseable.jsx/Navbar'
import Aboutme from './Aboutme'
import Services from './Services'
import Projects from './Projects'
import Expertise from './Skills'
import TechStack from './TechStack'
import QA from './QA'
import Contact from './Contact'
import Process from './Process'

export default function HomeALL() {
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
