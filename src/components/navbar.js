import React from "react";
import "../app/globals.css";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };

    return (
        <div className='absolute top-0 flex bg-black justify-between items-center h-16 px-4 rounded-xl text-white text-xl' style={{ width: '98%' }}>
            <h1>this.guy</h1>
            <div className='flex space-x-4'>
                <a href='#' onClick={()=>handleNavigation('/')}>Home</a>
                <a href='#'>About</a>
                <a href='#' onClick={() => handleNavigation('/projects')}>Projects</a>
            </div>
        </div>
    );
}
