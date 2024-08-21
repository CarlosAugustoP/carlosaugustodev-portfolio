import React from 'react'
import '../app/globals.css';
import Navbar from '../components/navbar';
import {About, Hr } from '@/components/about';
import AboutContainer from '@/components/container';

export default function home() {
  return (
    <div className='bg-gradient-to-b from-black to-blue-400 flex flex-col items-center justify-center gap-40'>
      <Navbar />
      <img className  = 'absolute h-64 right-0 bottom-24 rotate-12' src = 'img/neural.svg'/>
      <img className  = 'absolute h-64 left-0 top-24 rotate-12' src = 'img/code.svg'/>
      <div className='h-[100vh] w-full flex items-center justify-center'>
      <div className='w-full flex items-center justify-center'>
        <div className='flex gap-16 w-3/5'>
          <About />
        </div>
      </div>
      </div>
      <div className='w-full flex items-center justify-center'>
        <div className='flex gap-16 w-3/5'>
        <AboutContainer header = 'CESAR school' text = 'I study Computer Science at CESAR School, which prioritizes innovation and teamwork and directly integrates us with Porto Digital, one of the biggest digital centers in South America. I am currently in my 5th semester!' img = 'img/cesar.png' direction='flex-row-reverse'/>
        </div>
      </div>
      <div className='w-full flex items-center justify-center mb-40'>
        <div className='flex gap-16 w-3/5'>
        <AboutContainer header = 'About Me (:' text = "Ever since i was little, i've been in love with computers. Whether it's the internet, games, hardware or software, working with Computer Science is a dream come true! In my free time, i love playing games, drawing, hitting the gym and travelling!" img = 'img/viagem.jpeg'/>
        </div>
      </div>
    </div>
    )
}