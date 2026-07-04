"use client"
import { motion } from "framer-motion"; import Link from "next/link";
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
    return (
        <div className="bg-g-light text-white flex justify-between items-start w-full">
            <div className="ml-4">
                <img className={"h-[120px] w-[150px]"} src={"/bilalimg.png"} alt="img" />
            </div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="text-white flex justify-end items-start w-full"
            >
                <motion.div variants={itemVariants} className="h-[60px] bg-g-accent p-3.5">
                    <Link href={"#Services"}>Services</Link>
                </motion.div>

                <motion.div variants={itemVariants} className="h-[80px] bg-g-accent p-3.5">
                    <Link href={"#Experise"}> Experise</Link>
                </motion.div>

                <motion.div variants={itemVariants} className="h-[100px] bg-g-accent p-3.5">
                    <Link href={"#Skills"}>Skills</Link>
                </motion.div>

                <motion.div variants={itemVariants} className="h-[110px] bg-g-accent p-3.5">
                 <Link href={"#Process"}>Process</Link>   
                </motion.div>
                <motion.div variants={itemVariants} className="h-[120px] bg-g-accent p-3.5">
                  <Link href={"#Hireme"}> Hire me</Link>  
                </motion.div>
            </motion.div>

        </div>

    );
}