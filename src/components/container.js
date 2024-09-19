import React, { useEffect, useState } from "react";
import "../app/globals.css";

export default function AboutContainer({ header, text, img, direction }) {
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
                <div className="flex flex-col gap-5">
                    <h1 className="text-[14vw] font-bold leading-none text-white">{header}</h1>
                    <p className={`text-white ${isMobile ? 'text-[4vw]' : 'text-[3vw]'}`}>{text}</p>
                    <img src={img} className="rounded-lg border-white border-4" alt={header} />
                </div>
            ) : (
                <div className={`flex gap-10 ${direction}`}>
                    <div className="text-left w-1/2 flex flex-col justify-between">
                        <h1 className="text-[6.6vw] font-bold leading-none text-white">{header}</h1>
                        <p className="text-[1.55vw] text-white">{text}</p>
                    </div>
                    <img src={img} className='w-1/2 rounded-lg border-white border-4' alt={header} />
                </div>
            )}
        </>
    );
}
