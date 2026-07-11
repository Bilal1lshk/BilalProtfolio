"use client"
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.5,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: -20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { href: "#Services", label: "Services", height: "h-[60px]" },
        { href: "#Experise", label: "Expertise", height: "h-[80px]" },
        { href: "#Skills", label: "Skills", height: "h-[100px]" },
        { href: "#Process", label: "Process", height: "h-[110px]" },
        { href: "#Hireme", label: "Hire me", height: "h-[120px]" },
    ];

    return (
        <div className="relative flex w-full items-start justify-between bg-g-light text-white">
            <div className="ml-4">
                <img className="h-[90px] w-[150px] md:h-[120px]" src="/bilalimg.png" alt="img" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="hidden w-full items-start justify-end text-white lg:flex"
            >
                {menuItems.map((item) => (
                    <motion.div
                        key={item.href}
                        variants={itemVariants}
                        className={`${item.height} bg-g-accent p-3.5 hover:bg-g-deep transition duration-300 ease-in-out`}
                    >
                        <Link href={item.href}>{item.label}</Link>
                    </motion.div>
                ))}
            </motion.div>

            <div className="my-auto block pr-6 lg:hidden">
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="rounded-full p-2 text-white"
                    aria-label="Toggle navigation"
                >
                    {isOpen ? <RiCloseLine className="text-4xl font-bold" /> : <RiMenu3Line className="text-4xl font-bold" />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-g-primary px-6 text-white"
                    >
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="absolute right-6 top-6 rounded-full p-2 text-white"
                            aria-label="Close navigation"
                        >
                            <RiCloseLine className="text-4xl font-bold" />
                        </button>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.25 }}
                            className="flex w-full max-w-sm flex-col gap-4 mt-12  md:mt-1 "
                        >
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-2xl border border-white/20 bg-white/10  px-3 md:px-5 py-3 md:py-4 text-center text-md md:text-lg font-medium transition hover:bg-white/20"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}