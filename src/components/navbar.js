import React from "react";
import "../app/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar({ className }) {
    const router = useRouter();

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();

        window.addEventListener("resize", checkMobile);

        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

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
        <div className={`top-0 flex justify-end items-center h-12
        rounded-xl text-white ${isMobile ? 'text-lg' : 'text-2xl'} ${className}`} style={{ width: '98%' }}>
            <div className='flex space-x-4 bg-black p-3 rounded-lg'>
                <a href='#' onClick={() => handleNavigation('/')}>About</a>
                <a href='#' onClick={() => handleNavigation('/','Contact')}>Contact</a>
                <a href='#' onClick={() => handleNavigation('/projects')}>Projects</a>
            </div>
        </div>
    );
}
