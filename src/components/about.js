import React from "react";
import "../app/globals.css";

export const ImageContainer = (props) => {
    return (
        <div className="flex justify-center items-center">
            <img src={props.src} alt={props.alt} className="rounded-full w-1/2" />
        </div>
    );
}

export function About() {
    return (
        <div className="flex gap-10">
            <div className="text-left w-1/2 flex flex-col justify-between ">
                <h1 className="text-[6.6vw] font-bold leading-none text-white">Hey there!</h1>
                <p className="text-[1.55vw] text-white">My name is Carlos, and I'm a Computer Science student and FullStack Dev from Recife, Brazil, currently expanding my skills in React Native, Next.js and generative A.I! See some of my projects, learn more about me or get in contact! </p>
            </div>
            <img src='img/picture.jpeg' className = 'w-1/2 rounded-lg  border-white border-4'alt='Carlos Augusto' />
        </div>
    );
}

export const Hr = ({ className = '' }) => {
    return (
        <div className={`h-48 bg-white w-full ${className}`}></div>
    );
}
