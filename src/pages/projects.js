import React, { useState, useEffect } from 'react';
import '../app/globals.css';
import Navbar from '@/components/navbar';
import { ProjectInfo } from '@/components/projectcontainer';

function Projects() {
  const images = [
    'img/sample/PV/main.png',
    'https://via.placeholder.com/1920x1080?text=Image+2',
    'https://via.placeholder.com/1920x1080?text=Image+3',
    'https://via.placeholder.com/1920x1080?text=Image+4',
    'img/sample/GymBro/main.png',
    'https://via.placeholder.com/1920x1080?text=Image+6',
    'https://via.placeholder.com/1920x1080?text=Image+7',
    'https://via.placeholder.com/1920x1080?text=Image+8'
  ];

  const projects = [
    {
      title: 'Construtora P&V',
      description: 'It was an honor to develop and create the Peixoto and Vasconcelos Constructing company website!',
      image1: 'https://via.placeholder.com/1920x1080?text=Project+1+Image+1',
      image2: 'https://via.placeholder.com/1920x1080?text=Project+1+Image+2',
      image3: 'https://via.placeholder.com/1920x1080?text=Project+1+Image+3',
      githubLink: 'https://github.com',
      deployLink: 'https://peixotoevasconcelosbr.com.br',
      stack : ['img/html.svg', 'img/css.svg', 'img/js.svg', 'img/react.svg', 'img/next.svg']
    },
    {
      title: 'eHospital',
      description: 'eHospital was a Hospital Management system built for my DB discipline. It utilizes a sleek next, react and tailwind interfaceto comunicate with a Spring-Boot built API, using JDBC template for sql manipulation.',
      image1: 'https://via.placeholder.com/1920x1080?text=Project+2+Image+1',
      image2: 'https://via.placeholder.com/1920x1080?text=Project+2+Image+2',
      image3: 'https://via.placeholder.com/1920x1080?text=Project+2+Image+3',
      githubLink: 'https://github.com',
      deployLink: 'https://deploy.com',
      stack : ['img/css.svg', 'img/js.svg', 'img/react.svg', 'img/next.svg', 'img/mysql.svg', 'img/springboot.svg', 'img/tailwind.svg', 'img/java.svg']
    },
    {
      title: 'Morfeu',
      description: 'Built for Banco do Brasil and CESAR org, Morfeu utilized machine learning to generate synthetic data, in a user-friendly manner.',
      image1: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+1',
      image2: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+2',
      image3: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+3',
      githubLink: 'https://github.com',
      deployLink: 'https://deploy.com',
      stack : ['img/react.svg', 'img/python.svg', 'img/tailwind.svg', 'img/tensorflow.svg', 'img/keras.svg', 'img/js.svg', 'img/css.svg'] 
    },
    {
        title: 'this.website',
        description: 'My Portfolio! Had quite a lot of fun building it, and I hope you enjoy it as much as I did!',
        image1: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+1',
        image2: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+2',
        image3: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+3',
        githubLink: 'https://github.com',
        deployLink: 'https://deploy.com',
        stack : ['img/react.svg', 'img/next.svg', 'img/tailwind.svg', 'img/js.svg', 'img/css.svg']

      },
      {
        title: 'GymBro',
        description: 'GymBro was my first ever software project, and it was built to help people track their workouts and progress. It was built using Django, Python, AWS and SQLite with unit tests using Selenium.',
        image1: 'img/sample/GymBro/1.png',
        image2: 'img/sample/GymBro/2.png',
        image3: 'img/sample/GymBro/3.png',
        githubLink: 'https://github.com',
        deployLink: 'https://deploy.com',
        stack: ['img/html.svg', 'img/css.svg', 'img/js.svg', 'img/django.svg', 'img/python.svg', 'img/aws.svg', 'img/sqlite.svg']

      },
      {
        title: 'PetGram',
        description: 'PetGram is a social media platform for pets! It was built using Django, Python, and standard html and css. I built it to practice my basic developing skills and to have a bit of fun!',
        image1: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+1',
        image2: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+2',
        image3: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+3',
        githubLink: 'https://github.com',
        deployLink: 'https://deploy.com',
        stack: ['img/html.svg', 'img/css.svg', 'img/js.svg', 'img/django.svg', 'img/python.svg', 'img/sqlite.svg']

      },
      {
        title: 'Bridge',
        description: 'Bridge is a project built for the discipline of Projects 3 for the client Caçadores de bons exemplos, using html, css and Django once again.',
        image1: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+1',
        image2: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+2',
        image3: 'https://via.placeholder.com/1920x1080?text=Project+3+Image+3',
        githubLink: 'https://github.com',
        deployLink: 'https://deploy.com',
        stack: ['img/html.svg', 'img/css.svg', 'img/js.svg', 'img/tailwind.svg','img/django.svg', 'img/python.svg', 'img/sqlite.svg']
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
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
      }}
    >
        <Navbar />
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${images[imageIndex]})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            transition: 'background-image 0.5s ease-in-out',
            backgroundColor: 'black',
          }}
        />
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
