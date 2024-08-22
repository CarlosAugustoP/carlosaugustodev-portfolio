import React, { useState, useEffect } from "react";
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
        <div className={`flex flex-col gap-3 bg-black px-10 w-full py-5 ${className}`}>
            <div className="flex items-center justify-between">
                <div className="flex flex-col text-left">
                    <h1 className="text-[1.8vw] font-bold text-white">{title}</h1>
                    <p className="text-white font-light italic">{info}</p>
                </div>
                <div className="flex items-center gap-4">
                    {githubLink && (
                        <a href={githubLink} className="text-white">
                            <img src='img/github.svg' className="h-10 w-10" alt="GitHub Link" />
                        </a>
                    )}
                    {deployLink && (
                        <a href={deployLink} className="text-white">
                            <img src='img/deploy.svg' className="h-10 w-10" alt="Deploy Link" />
                        </a>
                    )}
                </div>
            </div>
            <div className="flex items-center justify-between w-full">
                <p className="text-white text-[1.vw] w-1/2">{description}</p>
                <div className="flex gap-4">
                    <img 
                        src={image1} 
                        alt="Project Image" 
                        className="w-24 h-24 rounded-lg object-cover cursor-pointer" 
                        onMouseEnter={() => onImageHover(image1)}
                        onMouseLeave={onImageMouseLeave} 
                    />
                    <img 
                        src={image2} 
                        alt="Project Image" 
                        className="w-24 h-24 rounded-lg object-cover cursor-pointer" 
                        onMouseEnter={() => onImageHover(image2)}
                        onMouseLeave={onImageMouseLeave} 
                    />
                    <img 
                        src={image3} 
                        alt="Project Image" 
                        className="w-24 h-24 rounded-lg object-cover cursor-pointer" 
                        onMouseEnter={() => onImageHover(image3)}
                        onMouseLeave={onImageMouseLeave} 
                    />
                </div>
            </div>
            <hr className="border-white w-1/2" />
            <div className="flex items-center gap-4 mt-2">
                <div className="flex gap-4">
                    {stack.map((image, index) => (
                        <img key={index} src={image} alt={`Stack Image ${index + 1}`} className="w-6 h-6 rounded-lg" />
                    ))}
                </div>
            </div>
        </div>
    );
}
