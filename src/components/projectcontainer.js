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
        <div className={`flex flex-col gap-3 mt-64 rounded-lg bg-black absolute bottom-0 px-10 w-full py-5 ${className}`}>
            <div className="flex items-center justify-between">
                <h1 className="text-[2vw] font-bold text-white">{title}</h1>
                <div className="flex items-center gap-4">
                    <a href={githubLink} className="text-white"><img src='img/github.svg' className="h-10 w-10" /></a>
                    <a href={deployLink} className="text-white"><img src='img/deploy.svg' className="h-10 w-10" /></a>
                </div>
            </div>
            <div className="flex items-center justify-between w-full">
                <p className="text-white text-[1.vw] w-2/5">{description}</p>
                <div className="flex gap-4">
                    <img src={image1} alt="Project Image" className=" w-24 h-24 rounded-lg object-cover" />
                    <img src={image2} alt="Project Image" className=" w-24 h-24 rounded-lg object-cover" />
                    <img src={image3} alt="Project Image" className=" w-24 h-24 rounded-lg object-cover" />
                </div>
            </div>
            <hr className="border-white w-2/5" />
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
