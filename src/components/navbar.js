import React from "react";
import "../app/globals.css";
import { useRouter } from "next/router";

export default function Navbar({ className }) {  // Destructure className from props
    const router = useRouter();

    const handleNavigation = (path, hash = null) => {
        if (router.pathname === path) {
            if (hash) {
                document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            router.push(path).then(() => {
                if (hash) {
                    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
                }
            });
        }
    };


    return (
        <div className={`top-0 flex justify-end items-center h-16 px-4 rounded-xl text-white text-xl ${className}`} style={{ width: '98%' }}>
            <div className='flex space-x-4 bg-black p-5 rounded-lg'>
            <a href='#' onClick={() => handleNavigation('/')}>Home</a>
            <a href='#' onClick={() => handleNavigation('/', 'About')}>About</a>
            <a href='#' onClick={() => handleNavigation('/projects')}>Projects</a>
            </div>
        </div>
    );
}
