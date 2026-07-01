import React from 'react'
import Navbar from './reuseable.jsx/Navbar'
import Aboutme from './Aboutme'
import Services from './Services'

export default function HomeALL() {
    return (
        <div>
            <Navbar />
            <Aboutme />
            <Services />
        </div>
    )
}
