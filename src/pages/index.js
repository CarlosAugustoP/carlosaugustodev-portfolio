import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../app/globals.css';
import Navbar from '../components/navbar';
import { About, Hr } from '@/components/about';
import AboutContainer from '@/components/container';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className='bg-gradient-to-b from-black to-blue-400 flex flex-col items-center justify-center gap-40'>
      <Navbar className={'absolute'} />
      {!isMobile && (
        <>
          <div className='absolute h-56 right-0 bottom-24 rotate-12'>
            <Image 
              src='/img/neural.svg' 
              alt='Neural'
              width={224}
              height={224}
              className='2xl:w-64 xl:w-48 lg:w-40 md:w-36'
              priority={true}
              quality={50}
            />
          </div>
          <div className='absolute h-56 left-0 top-24 rotate-12'>
            <Image 
              src='/img/code.svg' 
              alt='Code'
              width={224}
              height={224}
              className='2xl:w-64 xl:w-48 lg:w-40 md:w-36'
              priority={true}
              quality={50}
            />
          </div>
        </>
      )}
      <div className='min-h-screen w-full flex items-center justify-center'>
        <div className='w-full flex items-center justify-center'>
          <div className={isMobile ? 'flex gap-16 w-4/5 md:w-3/5 sm:w-3/5 ' : 'flex gap-16 w-3/5'}>
            <About />
          </div>
        </div>
      </div>
      <div className='w-full flex items-center justify-center'>
        <div id="About" className={isMobile ? 'flex gap-16 w-4/5 md:w-3/5 sm:w-3/5' : 'flex gap-16 w-3/5'}>
          <AboutContainer header='CESAR school' text='I study Computer Science at CESAR School, which prioritizes innovation and teamwork and directly integrates us with Porto Digital, one of the biggest digital centers in South America. I am currently in my 5th semester!' img='/img/cesar.png' direction='flex-row-reverse' />
        </div>
      </div>
      <div className='w-full flex items-center justify-center'>
        <div className={isMobile ? 'flex gap-16 w-4/5 md:w-3/5 sm:w-3/5' : 'flex gap-16 w-3/5'}>
          <AboutContainer header='About Me (:' text="Ever since i was little, i've been in love with computers. Whether it's the internet, games, hardware or software, working with Computer Science is a dream come true! In my free time, i love playing games, drawing, hitting the gym and travelling!" img='/img/viagem.jpeg' />
        </div>
      </div>
      <div id="Contact" className='w-full flex flex-col items-center justify-center gap-3'>
        <h1 className='text-4xl font-bold text-white'>Contact me!</h1>
        <hr className='w-1/2 bg-white' />
        <div className='flex gap-4 items-center mb-10'>
          <a href="mailto:capv2004@gmail.com?subject=Portfolio%20Interest&body=Hi%20Carlos%2C%0D%0A%0D%0AI'm%20interested%in%20discussing%20your%20portfolio.%20Let's%20connect!%0D%0A%0D%0AThanks%2C%0D%0A[Your%20Name]">
            <Image 
              src='/img/gmail.svg' 
              alt='Gmail'
              width={40}
              height={40}
              quality={50}
              loading="lazy"
            />
          </a>
          <a href='https://github.com/CarlosAugustoP'>
            <Image 
              src='/img/github.svg' 
              alt='GitHub'
              width={40}
              height={40}
              quality={50}
              loading="lazy"
            />
          </a>
          <a href='https://www.linkedin.com/in/carlos-augusto-vasconcelos-6472a3240/'>
            <Image 
              src='/img/linkedin.svg' 
              alt='LinkedIn'
              width={40}
              height={40}
              quality={50}
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
