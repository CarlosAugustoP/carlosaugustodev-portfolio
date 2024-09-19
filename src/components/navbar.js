import React, { useEffect, useState } from "react";
import "../app/globals.css";
import { useRouter } from "next/router";

export default function Navbar({ className }) {
    const router = useRouter();

    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);  
            setIsTablet(width >= 768 && width < 1024);  
        };

        checkDevice();

        window.addEventListener("resize", checkDevice);

        return () => {
            window.removeEventListener("resize", checkDevice);
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
        <div className={`top-3 flex justify-end items-center h-12 rounded-xl text-white 
        ${isMobile ? 'text-lg' : isTablet ? 'text-3xl' : 'text-2xl'} ${className}`} style={{ width: '98%' }}>
            <div className='flex space-x-4 bg-black p-3 rounded-lg'>
                <a href='#' onClick={() => handleNavigation('/')}>About</a>
                <a href='#' onClick={() => handleNavigation('/', 'Contact')}>Contact</a>
                <a href='#' onClick={() => handleNavigation('/projects')}>Projects</a>
            </div>
        </div>
    );
}
