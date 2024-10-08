import React, { useState, useEffect } from 'react';
import '../app/globals.css';
import Navbar from '@/components/navbar';
import { ProjectInfo } from '@/components/projectcontainer';
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import MobilePC from '@/components/mobileprojcont';

function Projects() {
  
  const projects = [
    {
      title: 'Construtora P&V',
      description: 'In February 2024, it was an honor to develop and create the Peixoto and Vasconcelos Constructing company website!',
      image1: '/img/sample/PV/1.png',
      image2: '/img/sample/PV/2.png',
      image3: '/img/sample/PV/3.png',
      mainImage: '/img/sample/PV/main.png',
      githubLink: 'https://github.com/CarlosAugustoP/construtora-next',
      deployLink: 'https://peixotoevasconcelosbr.com.br',
      stack: ['/img/html.svg', '/img/css.svg', '/img/js.svg', '/img/react.svg', '/img/next.svg']
    },
    {
      title: 'eHospital',
      description: 'Created in May 2024, eHospital was a Hospital Management system built for my DB discipline. It utilizes a sleek next, react and tailwind interface to communicate with a Spring-Boot built API, using JDBC template for SQL manipulation.',
      image1: '/img/sample/eHospital/1.jpg',
      image2: '/img/sample/eHospital/2.jpg',
      image3: '/img/sample/eHospital/3.jpg',
      mainImage: '/img/sample/eHospital/main.jpg',
      githubLink: 'https://github.com/dan-albuquerque/Projeto-Banco-de-dados',
      stack: ['/img/css.svg', '/img/js.svg', '/img/react.svg', '/img/next.svg', '/img/mysql.svg', '/img/springboot.svg', '/img/tailwind.svg', '/img/java.svg']
    },
    {
      title: 'Morfeu',
      description: 'Developed in july 2024 for Banco do Brasil and CESAR, Morfeu uses machine learning to generate synthetic data in a user-friendly manner, utilizing React, Flask and multiple AI libraries. The complete app was presented in a pitch to major bank shareholders.',
      image1: '/img/sample/Morfeu/1.jpg',
      image2: '/img/sample/Morfeu/2.jpg',
      image3: '/img/sample/Morfeu/3.jpg',
      mainImage: '/img/sample/Morfeu/main.jpg',
      deployLink: 'https://www.youtube.com/watch?v=-ayOFJYTrEI',
      stack: ['/img/react.svg', '/img/python.svg', '/img/tailwind.svg', '/img/tensorflow.svg', '/img/keras.svg', '/img/js.svg', '/img/css.svg'] 
    },
    {
      title: 'this.website',
      description: 'My Portfolio! Had quite a lot of fun building it, and I hope you enjoy it as much as I did!',
      image1: '/img/sample/Portfolio/1.png',
      image2: '/img/sample/Portfolio/2.png',
      image3: '/img/sample/Portfolio/1.png',
      mainImage: '/img/sample/Portfolio/main.png',
      githubLink: 'https://github.com/CarlosAugustoP/carlosaugustodev-portfolio',
      deployLink: 'https://carlosaugustodev-portfolio.vercel.app/',
      stack: ['/img/react.svg', '/img/next.svg', '/img/tailwind.svg', '/img/js.svg', '/img/css.svg']
    },
    {
      title: 'GymBro',
      description: 'Built in early 2023, GymBro was my first ever software project, and it was built to help people track their workouts and progress. It was built using Django, Python, AWS and SQLite with tests using Selenium.',
      image1: '/img/sample/GymBro/1.png',
      image2: '/img/sample/GymBro/2.png',
      image3: '/img/sample/GymBro/3.png',
      mainImage: '/img/sample/GymBro/main.png',
      githubLink: 'https://github.com/dan-albuquerque/fds-gymbro',
      stack: ['/img/html.svg', '/img/css.svg', '/img/js.svg', '/img/django.svg', '/img/python.svg', '/img/aws.svg', '/img/sqlite.svg']
    },
    {
      title: 'PetGram',
      description: 'Built in November 2023, PetGram is a social media platform for pets! It was built using Django, Python, and standard HTML and CSS. I built it to practice my basic developing skills and to have a bit of fun!',
      image1: '/img/sample/PetGram/1.png',
      image2: '/img/sample/PetGram/2.png',
      image3: '/img/sample/PetGram/3.png',
      mainImage: '/img/sample/PetGram/main.png',
      githubLink: 'https://github.com/CarlosAugustoP/PetGram',
      stack: ['/img/html.svg', '/img/css.svg', '/img/js.svg', '/img/django.svg', '/img/python.svg', '/img/sqlite.svg']
    },
    {
      title: 'Bridge',
      description: 'Built in  built for the discipline of Projects 3 for the client Caçadores de bons exemplos, using HTML, CSS, and Django once again.',
      image1: '/img/sample/Bridge/1.png',
      image2: '/img/sample/Bridge/2.png',
      image3: '/img/sample/Bridge/3.png',
      mainImage: '/img/sample/Bridge/main.png',
      githubLink: 'https://github.com/edmaaralencar/bridge-projetos',
      stack: ['/img/html.svg', '/img/css.svg', '/img/js.svg', '/img/tailwind.svg', '/img/django.svg', '/img/python.svg', '/img/sqlite.svg']
    },
  ];
  

  const [backgroundImage, setBackgroundImage] = useState(projects[0].mainImage);
  const [projectIndex, setProjectIndex] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(Date.now());
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const { toast } = useToast();

  const handleImageHover = (image) => {
    setBackgroundImage(image);
  };

  const handleImageMouseLeave = () => {
    setBackgroundImage(projects[projectIndex].mainImage);
  };

  const handleProjectChange = (newIndex) => {
    setProjectIndex(newIndex);
    setBackgroundImage(projects[newIndex].mainImage);
  };

  useEffect(() => {
    if (!isMobile) {
      const handleScroll = (event) => {
        event.preventDefault();

        const currentScrollTime = Date.now();
        if (currentScrollTime - lastScrollTime < 500) {
          return; // Add a minimum interval between transitions
        }

        if (event.deltaY > 0 && projectIndex < projects.length - 1) {
          handleProjectChange(projectIndex + 1);
          setAnimate(true);
        } else if (event.deltaY < 0 && projectIndex > 0) {
          handleProjectChange(projectIndex - 1);
          setAnimate(true);
        }

        setLastScrollTime(currentScrollTime);
      };

      window.addEventListener('wheel', handleScroll, { passive: false });

      return () => {
        window.removeEventListener('wheel', handleScroll);
      };
    }
  }, [projectIndex, projects.length, lastScrollTime, isMobile]);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  useEffect(() => {
    toast({
      title: "Welcome to my Projects page! 🚀",
      description: "Scroll down to see the next project, and select the images to see them in full size!",
    });
  }, []);

  return (
    <>
      {isMobile ? (
        <div className='bg-gradient-to-b from-black to-blue-400 flex flex-col items-center justify-center gap-30'>
        <Navbar className='static' />

        {projects.map((project, index) => (
          <MobilePC
            key={index}
            mainImg={project.mainImage}
            title={project.title}
            description={project.description}
            image1={project.image1}
            image2={project.image2}
            image3={project.image3}
            githubLink={project.githubLink}
            deployLink={project.deployLink}
            stack={project.stack}
          />
        ))}
      </div>
      ) : (
        <div 
          style={{ 
            height: '100vh', 
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            
          }}
        >
          <Navbar className={'absolute'} />
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${backgroundImage})`,
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
            onImageHover={handleImageHover}  
            onImageMouseLeave={handleImageMouseLeave}  
          />
          <Toaster />
        </div>
      )}
    </>
  );

}
  export default Projects;