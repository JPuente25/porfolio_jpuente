import { Context } from '@/app/Provider';
import About from '@/containers/About';
import Contact from '@/containers/Contact';
import Home from '@/containers/Home';
import Projects from '@/containers/Projects';
import Skills from '@/containers/Skills';
import views from '@/variables/views';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useRef } from 'react';
import { CarouselItem, Container } from '../styles/index.styled';
import getFirstLetterUppercase from '@/utils/functions/getFirstLetterUppercase';
import FirstLoader from '@/components/FirstLoader';

const Main = () => {
   const router = useRouter();
   const { currentView, setCurrentView } = useContext(Context);
   const carouselContainer = useRef<HTMLDivElement>(null);
   const homeRef = useRef<HTMLDivElement>(null);
   const aboutRef = useRef<HTMLDivElement>(null);
   const skillsRef = useRef<HTMLDivElement>(null);
   const projectsRef = useRef<HTMLDivElement>(null);
   const contactRef = useRef<HTMLDivElement>(null);

   const automaticScroll = (view: string) => {
      //Gets Location in Document of the Section selected based in 
      //the asPath from the router
      const scrollAmmount = 
         view === views.contact.label         
            ? contactRef.current!.offsetTop
            : view === views.about.label       
            ? aboutRef.current!.offsetTop
            : view === views.skills.label      
            ? skillsRef.current!.offsetTop
            : view === views.projects.label      
            ? projectsRef.current!.offsetTop
            : homeRef.current!.offsetTop;         

      window.scrollTo({
         top: scrollAmmount - 70,
         behavior: 'smooth',
      });
   };

   useEffect(() => {
      //Automatic Scrolling
      const viewLabel = router.asPath.split('/#')[1] || 'home';
      automaticScroll(viewLabel);
      (router);
      //Setting Current View
      setCurrentView(views[viewLabel as keyof typeof views]);

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [router.asPath]);

   return (
      <React.Fragment>
         <Head>
            <title>Jaime Puente - {getFirstLetterUppercase(currentView.label)}</title>
         </Head>

         <FirstLoader />

         <Container ref={carouselContainer}>
            <CarouselItem
               className={currentView.label === 'home' ? 'on-screen' : ''}
               ref={homeRef}>
               <Home />
            </CarouselItem>
            <CarouselItem
               className={currentView.label === 'about' ? 'on-screen' : ''}
               ref={aboutRef}>
               <About />
            </CarouselItem>
            <CarouselItem
               className={currentView.label === 'skills' ? 'on-screen' : ''}
               ref={skillsRef}>
               <Skills />
            </CarouselItem>
            <CarouselItem
               className={currentView.label === 'projects' ? 'on-screen' : ''}
               ref={projectsRef}>
               <Projects />
            </CarouselItem>
            <CarouselItem
               className={currentView.label === 'contact' ? 'on-screen' : ''}
               ref={contactRef}>
               <Contact />
            </CarouselItem>
         </Container>
      </React.Fragment>
   );
};

export default Main;
