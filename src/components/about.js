import React, { useEffect, useState } from "react";
import "../app/globals.css";

export const ImageContainer = (props) => {
    return (
        <div className="flex justify-center items-center">
            <img src={props.src} alt={props.alt} className="rounded-full w-1/2" />
        </div>
    );
}

export function About() {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);  // Mobile condition
            setIsTablet(width >= 768 && width < 1024);  // Tablet condition
        };

        // Initial check
        checkDevice();

        // Add event listener to handle resize
        window.addEventListener("resize", checkDevice);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", checkDevice);
        };
    }, []);
    return (
        <>
            {(isMobile || isTablet) ? (
                <div className="flex flex-col gap-5 ">
                    <h1 className="text-[14vw] font-bold leading-none text-white">Hello World!</h1>
                    <p className={`text-white ${isMobile ? 'text-[4vw]' : isTablet ? 'text-[3vw]' : 'w-3/5'}`}
                    >My name is Carlos, and I'm a Computer Science student and FullStack Dev from Recife, Brazil, currently expanding my skills in React Native, Next.js and generative A.I! See some of my projects, learn more about me or get in contact!</p>
                    <img src='img/picture.jpeg' className='rounded-lg border-white border-4' alt='Carlos Augusto' />
                </div>
            ) : (
                <div className="flex gap-10">
                <div className="text-left w-1/2 flex flex-col justify-between">
                    <h1 className="text-[6.6vw] font-bold leading-none text-white">Hello World!</h1>
                    <p className="text-[1.55vw] text-white">My name is Carlos, and I'm a Computer Science student and FullStack Dev from Recife, Brazil, currently expanding my skills in React Native, Next.js and generative A.I! See some of my projects, learn more about me or get in contact!</p>
                </div>
                <img src='img/picture.jpeg' className='w-1/2 rounded-lg border-white border-4' alt='Carlos Augusto' />
            </div>
            )}
        </>
    );
}

export const Hr = ({ className = '' }) => {
    return (
        <div className={`h-48 bg-white w-full ${className}`}></div>
    );
}
