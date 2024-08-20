import React, { useState, useEffect } from 'react';
import '../app/globals.css';
import Navbar from '@/components/navbar';
import { ProjectInfo } from '@/components/projectcontainer';
function Projects() {
  const images = [
    'https://via.placeholder.com/1920x1080?text=Image+1',
    'https://via.placeholder.com/1920x1080?text=Image+2',
    'https://via.placeholder.com/1920x1080?text=Image+3',
    'https://via.placeholder.com/1920x1080?text=Image+4',
    'https://via.placeholder.com/1920x1080?text=Image+5',
    'https://via.placeholder.com/1920x1080?text=Image+6',
    'https://via.placeholder.com/1920x1080?text=Image+7',
    'https://via.placeholder.com/1920x1080?text=Image+8'
  ];

  const projects = [
    {
      title: 'Construtora P&V',
      description: 'Em Fevereiro de 2024, tive o prazer de contribuir em um projeto freelance para a criação do site oficial da construtora Peixoto e Vasconcelos',
      image1: 'https://via.placeholder.com/1920x1080?text=Project+1+Image+1',
      image2: 'https://via.placeholder.com/1920x1080?text=Project+1+Image+2',
      image3: 'https://via.placeholder.com/1920x1080?text=Project+1+Image+3',
      githubLink: 'https://github.com',
      deployLink: 'https://peixotoevasconcelosbr.com.br',
      stack : ['img/html.svg', 'img/css.svg', 'img/js.svg', 'img/react.svg', 'img/next.svg']
    },
    {
      title: 'eHospital',
      description: 'Description 2',
      image1: 'https://via.placeholder.com/1920x1080?text=Project+2+Image+1',
      image2: 'https://via.placeholder.com/1920x1080?text=Project+2+Image+2',
      image3: 'https://via.placeholder.com/1920x1080?text=Project+2+Image+3',
      githubLink: 'https://github.com',
      deployLink: 'https://deploy.com'
    },
    {
      title: 'Morfeu',
      description: 'Description 3',
      image1: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+1',
      image2: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+2',
      image3: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+3',
      githubLink: 'https://github.com',
      deployLink: 'https://deploy.com'
    },
    {
        title: 'this.website',
        description: 'Description 3',
        image1: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+1',
        image2: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+2',
        image3: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+3',
        githubLink: 'https://github.com',
        deployLink: 'https://deploy.com'
      },
      {
        title: 'GymBro',
        description: 'Description 3',
        image1: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+1',
        image2: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+2',
        image3: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+3',
        githubLink: 'https://github.com',
        deployLink: 'https://deploy.com'
      },
      {
        title: 'PetGram',
        description: 'Description 3',
        image1: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+1',
        image2: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+2',
        image3: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+3',
        githubLink: 'https://github.com',
        deployLink: 'https://deploy.com'
      },
      {
        title: 'Bridge',
        description: 'Description 3',
        image1: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+1',
        image2: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+2',
        image3: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+3',
        githubLink: 'https://github.com',
        deployLink: 'https://deploy.com'
      },
      {
        title: 'Other Project',
        description: 'Description 3',
        image1: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+1',
        image2: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+2',
        image3: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+3',
        githubLink: 'https://github.com',
        deployLink: 'https://deploy.com'
      },
  ];

  const [imageIndex, setImageIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(Date.now());
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault(); // Impede o comportamento padrão de rolagem

      const currentScrollTime = Date.now();
      if (currentScrollTime - lastScrollTime < 500) {
        return; // Adiciona um intervalo mínimo entre as transições
      }

      if (event.deltaY > 0 && imageIndex < images.length - 1) {
        setImageIndex((prevIndex) => prevIndex + 1);
        setProjectIndex((prevIndex) => prevIndex + 1);
        setAnimate(true);
      } else if (event.deltaY < 0 && imageIndex > 0) {
        setImageIndex((prevIndex) => prevIndex - 1);
        setProjectIndex((prevIndex) => prevIndex - 1);
        setAnimate(true);
      }

      setLastScrollTime(currentScrollTime);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [imageIndex, images.length, lastScrollTime]);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [animate]);

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
        <ProjectInfo 
          title={projects[projectIndex].title}
          description={projects[projectIndex].description}
          image1={projects[projectIndex].image1}
          image2={projects[projectIndex].image2}
          image3={projects[projectIndex].image3}
          githubLink={projects[projectIndex].githubLink}
          deployLink={projects[projectIndex].deployLink}
          stack={projects[projectIndex].stack}
          className={animate ? 'animate-swipe' : ''}
        />
    </div>
  );
}

export default Projects;