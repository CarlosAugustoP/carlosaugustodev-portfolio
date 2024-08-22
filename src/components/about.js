import React, { useState } from "react";
import "../app/globals.css";

export const ImageContainer = (props) => {
    return (
        <div className="flex justify-center items-center">
            <img src={props.src} alt={props.alt} className="rounded-full w-1/2" />
        </div>
    );
}

export function About() {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleImageError = () => {
        setIsLoading(false); // You might want to handle this differently if there's an error
    };

    return (
        <div className="flex gap-10">
            <div className="text-left w-1/2 flex flex-col justify-between">
                <h1 className="text-[6.6vw] font-bold leading-none text-white">Hello World!</h1>
                <p className="text-[1.55vw] text-white">My name is Carlos, and I'm a Computer Science student and FullStack Dev from Recife, Brazil, currently expanding my skills in React Native, Next.js and generative A.I! See some of my projects, learn more about me or get in contact!</p>
            </div>
            <div className="w-1/2 relative">
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-300 rounded-lg border-white border-4">
                        {/* Spinner */}
                        <div className="w-16 h-16 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin"></div>
                    </div>
                )}
                <img
                    src='/img/picture.jpeg'
                    alt='Carlos Augusto'
                    className='w-full h-auto rounded-lg border-white border-4'
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    style={{ display: isLoading ? 'none' : 'block' }}
                />
            </div>
        </div>
    );
}

export const Hr = ({ className = '' }) => {
    return (
        <div className={`h-48 bg-white w-full ${className}`}></div>
    );
}
