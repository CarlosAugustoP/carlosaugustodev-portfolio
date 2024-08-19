import React from "react";
import "../app/globals.css";

export default function AboutContainer({ header, text, img, direction}) {
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
