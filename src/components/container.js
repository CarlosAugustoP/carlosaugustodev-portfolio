import React, { useEffect, useState } from "react";
import Image from 'next/image';
import "../app/globals.css";

export default function AboutContainer({ header, text, img, direction }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        // Initial check
        checkMobile();

        // Add event listener to handle resize
        window.addEventListener("resize", checkMobile);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    if (isMobile) {
        return (
            <div className="flex flex-col gap-5">
                <h1 className="text-10xl font-bold leading-none text-white">{header}</h1>
                <p className="text-white">{text}</p>
                <div className="relative w-full h-64">
                    <Image 
                        src={img} 
                        alt="Carlos Augusto" 
                        layout="fill"
                        className="rounded-lg border-white border-4 object-cover"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className={`flex gap-10 ${direction}`}>
            <div className="text-left w-1/2 flex flex-col justify-between">
                <h1 className="text-[6.6vw] font-bold leading-none text-white">{header}</h1>
                <p className="text-[1.55vw] text-white">{text}</p>
            </div>
            <div className="relative w-1/2 h-auto">
                <Image 
                    src={img} 
                    alt="Carlos Augusto" 
                    layout="fill"
                    className="rounded-lg border-white border-4 object-cover"
                    loading="lazy"
                />
            </div>
        </div>
    );
}
