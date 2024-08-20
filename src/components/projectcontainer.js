import React, { useState, useEffect } from "react";
import "../app/globals.css";

export const ProjectInfo = ({ title, description, image1, image2, image3, githubLink, deployLink, stack = [], className }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => {
            setAnimate(false);
        }, 500); // Matches the duration of the animation

        return () => clearTimeout(timer);
    }, [title, description, image1, image2, image3, githubLink, deployLink, stack]);

    return (
        <div className={`flex flex-col gap-4 mt-64 rounded-lg bg-black absolute bottom-10 px-10 w-1/3 py-5 ${className}`}>
            <div className="flex items-center justify-between">
                <h1 className="text-6xl font-bold text-white">{title}</h1>
                <div className="flex items-center gap-4">
                    <a href={githubLink} className="text-white"><img src='img/github.svg' className="h-12 w-12" /></a>
                    <a href={deployLink} className="text-white"><img src='img/deploy.svg' className="h-12 w-12" /></a>
                </div>
            </div>
            <p className="text-white text-xl">{description}</p>
            <hr className="border-white" />
            <div className="flex gap-4">
                <img src={image1} alt="Project Image" className="w-36 h-36 rounded-lg" />
                <img src={image2} alt="Project Image" className="w-36 h-36 rounded-lg" />
                <img src={image3} alt="Project Image" className="w-36 h-36 rounded-lg" />
            </div>
            <hr className="border-white" />
            <div className="flex items-center gap-4">
                <h1 className="text-2xl text-white">Stack</h1>
                <div className="flex gap-4">
                    {stack.map((image, index) => (
                        <img key={index} src={image} alt={`Stack Image ${index + 1}`} className="w-6 h-6 rounded-lg" />
                    ))}
                </div>
            </div>
        </div>
    );
}
