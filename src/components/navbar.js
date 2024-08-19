import React from "react";
import "../app/globals.css";

export default function Navbar() {
    return (
        <div className = 'absolute top-0 flex bg-black justify-between items-center h-16 px-4 rounded-xl  text-white text-xl' style = {{width:'98%'}}>
            <h1>this.guy</h1>
            <div className = 'flex space-x-4 '>
                <a href = '#'>Home</a>
                <a href = '#'>About</a>
                <a href = '#'>Projects</a>
            </div>
        </div>
    );
    }