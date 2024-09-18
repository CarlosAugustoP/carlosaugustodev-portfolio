import React, { useState, useEffect } from "react";
import Image from 'next/image';
import "../app/globals.css";

export const ProjectInfo = ({ title, description, image1, image2, image3, githubLink, deployLink, stack = [], className, onImageHover, onImageMouseLeave, info }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => {
            setAnimate(false);
        }, 500); // Matches the duration of the animation

        return () => clearTimeout(timer);
    }, [title, description, image1, image2, image3, githubLink, deployLink, stack]);

    return (
        <div className={`flex flex-col gap-3 bg-black px-10 w-full py-5 border-2 border-white${className}`}>
            <div className="flex items-center justify-between">
                <div className="flex flex-col text-left">
                    <h1 className="text-[1.8vw] font-bold text-white">{title}</h1>
                    <p className="text-white font-light italic">{info}</p>
                </div>
                <div className="flex items-center gap-4">
                    {githubLink && (
                        <a href={githubLink} className="text-white">
                            <Image 
                                src='/img/github.svg' 
                                alt="GitHub Link" 
                                width={40} 
                                height={40} 
                                quality={50}
                                loading="lazy"
                            />
                        </a>
                    )}
                    {deployLink && (
                        <a href={deployLink} className="text-white">
                            <Image 
                                src='/img/deploy.svg' 
                                alt="Deploy Link" 
                                width={40} 
                                height={40} 
                                quality={50}
                                loading="lazy"
                            />
                        </a>
                    )}
                </div>
            </div>
            <div className="flex items-center justify-between w-full">
                <p className="text-white text-[1.vw] w-1/2">{description}</p>
                <div className="flex gap-4">
                    <Image 
                        src={image1} 
                        alt="Project Image 1" 
                        width={96} 
                        height={96} 
                        className="rounded-lg object-cover cursor-pointer h-20 border-2 border-white" 
                        onMouseEnter={() => onImageHover(image1)}
                        onMouseLeave={onImageMouseLeave}
                        loading="lazy"
                    />
                    <Image 
                        src={image2} 
                        alt="Project Image 2" 
                        width={96} 
                        height={96} 
                        className="rounded-lg object-cover cursor-pointer h-20 border-2 border-white" 
                        onMouseEnter={() => onImageHover(image2)}
                        onMouseLeave={onImageMouseLeave}
                        loading="lazy"
                    />
                    <Image 
                        src={image3} 
                        alt="Project Image 3" 
                        width={96} 
                        height={96} 
                        className="rounded-lg object-cover cursor-pointer h-20 border-2 border-white" 
                        onMouseEnter={() => onImageHover(image3)}
                        onMouseLeave={onImageMouseLeave}
                        loading="lazy"
                    />
                </div>
            </div>
            <hr className="border-white w-1/2" />
            <div className="flex items-center gap-4 mt-2">
                <div className="flex gap-4">
                    {stack.map((image, index) => (
                        <Image 
                            key={index} 
                            src={image} 
                            alt={`Stack Image ${index + 1}`} 
                            width={24} 
                            height={24} 
                            className="rounded-lg" 
                            quality={50} 
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
