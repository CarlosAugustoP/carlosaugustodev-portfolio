import React, { useState, useEffect } from 'react';
import '../app/globals.css';
import Navbar from '@/components/navbar';
function Projects() {
  const images = [
    'https://via.placeholder.com/1920x1080?text=Image+1',
    'https://via.placeholder.com/1920x1080?text=Image+2',
    'https://via.placeholder.com/1920x1080?text=Image+3'
  ];

  const [imageIndex, setImageIndex] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(Date.now());

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault(); // Impede o comportamento padrão de rolagem

      const currentScrollTime = Date.now();
      if (currentScrollTime - lastScrollTime < 500) {
        return; // Adiciona um intervalo mínimo entre as transições
      }

      if (event.deltaY > 0 && imageIndex < images.length - 1) {
        setImageIndex((prevIndex) => prevIndex + 1);
      } else if (event.deltaY < 0 && imageIndex > 0) {
        setImageIndex((prevIndex) => prevIndex - 1);
      }

      setLastScrollTime(currentScrollTime);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [imageIndex, images.length, lastScrollTime]);

  return (
    <div 
      style={{ 
        height: '100vh', 
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `url(${images[imageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
      }}
    >
        <Navbar />
        
      
    </div>
  );
}

export default Projects;
