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
      <div className='w-full flex items-center justify-center'>
        <div className='flex gap-16 w-3/5 mt-40'>
          <About />
        </div>
      </div>
      <div className='w-full flex items-center justify-center'>
        <div className='flex gap-16 w-3/5'>
        <AboutContainer header = 'CESAR school' text = 'Estudo na CESAR school, faculdade nota 5 no conceito MEC que prioriza inovação e trabalho em equipe, nos integrando diretamente com o porto digital. Estou atualmente no 5 período e planejo me formar em 2026!' img = 'img/cesar.png' direction='flex-row-reverse'/>
        </div>
      </div>
    </div>
    )
}