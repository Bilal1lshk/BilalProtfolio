import React from 'react'
import Navbar from './reuseable.jsx/Navbar'
import Aboutme from './Aboutme'
import Services from './Services'
import Projects from './Projects'

export default function HomeALL() {
    return (
        <div>
            <Navbar />
            <Aboutme />
            <Services />
            <Projects/>
        </div>
    )
}
