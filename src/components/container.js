import React, { useEffect, useState } from "react";
import "../app/globals.css";

export default function AboutContainer({ header, text, img, direction}) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
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
                <img src={img} className="rounded-lg border-white border-4" alt="Carlos Augusto" />
            </div>
        );
    }
    return (
        <div className={`flex gap-10 ${direction}`}>
            <div className="text-left w-1/2 flex flex-col justify-between">
                <h1 className="text-[6.6vw] font-bold leading-none text-white">{header}</h1>
                <p className="text-[1.55vw] text-white">{text}</p>
            </div>
                <img src={img} className='w-1/2 rounded-lg border-white border-4' alt='Carlos Augusto' />
        </div>
    );
}
