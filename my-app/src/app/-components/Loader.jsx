"use client";

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion"

export default function Loader() {
    const [progress, setProgress] = useState(0)
    const [hide, sethide] = useState(false)
    const [unmount, setUnmount] = useState(false)
    const current = useRef(0)
    const rafRef = useRef(null)

    useEffect(() => {
        function animate() {
            const speed = current.current < 70 ? 1.2
                : current.current < 90 ? 0.4
                    : 0.15

            current.current = Math.min(current.current + speed, 100)
            setProgress(Math.floor(current.current))

            if (current.current < 100) {
                rafRef.current = requestAnimationFrame(animate)
            }
            if (current.current >= 100) {
                sethide(true)
                setTimeout(() => setUnmount(true), 1000) // unmount after animation
            }
        }

        rafRef.current = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(rafRef.current)
    }, [])

    if (unmount) return null  // fully gone from DOM

    return (
        <motion.div
            animate={{ opacity: hide ? 0 : 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            className="min-h-screen w-full bg-g-light fixed z-50"
        >
            {/* Left panel */}
            <motion.div
                animate={{ width: hide ? "50%" : "0%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="min-h-screen absolute left-0 top-0 bg-g-deep z-20"
            />

            {/* Right panel */}
            <motion.div
                animate={{ width: hide ? "50%" : "0%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="min-h-screen absolute right-0 top-0 bg-g-primary z-20"
            />

            {/* Content */}
            <div className="flex flex-col items-center h-screen w-full relative z-10">
                <div className="h-[400px] flex justify-center items-center text-6xl w-full">
                    <h1 className="text-g-deep mt-[140px]">Portfolio</h1>
                </div>

                {/* Loading bar */}
                <div className="w-[200px] h-[7px] relative bg-gray-400 mb-10 rounded-lg -mt-10">
                    <div
                        className="h-[7px] absolute top-0 bg-g-deep rounded-lg transition-none"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Percentage */}
                <p className="text-g-deep font-mono text-sm mb-4">{progress}%</p>

                <p className="text-white text-xl w-full flex justify-center">
                    BILAL AI Full Stack Developer
                </p>
            </div>
        </motion.div>
    )
}