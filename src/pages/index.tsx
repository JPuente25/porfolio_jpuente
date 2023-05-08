import About from '@/containers/About';
import Contact from '@/containers/Contact';
import Home from '@/containers/Home';
import Projects from '@/containers/Projects';
import Skills from '@/containers/Skills';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { View } from '@/types';
import views from '@/variables/views';
import { Carousel, CarouselItem, Container, PassSlide } from './index.styled';
import { TbTriangleFilled } from 'react-icons/tb';
import Head from 'next/head';
import backgrounds from '@/variables/backgrounds';
import { Context } from '@/app/Provider';

const Main = () => {
   const router = useRouter();
   const { currentView, setCurrentView } = useContext(Context);
   const carouselContainer = useRef<HTMLDivElement>(null);

   const handleView = useCallback(({ next, prev }: { next?: boolean; prev?: boolean }) => {
      let nextViewIndex = 0;
      if (next) {
         if (currentView.id === views.length - 1) {
            nextViewIndex = 0;
         } else {
            nextViewIndex = currentView.id + 1;
         }
      } else if (prev) {
         if (currentView.id === 0) {
            nextViewIndex = views.length - 1;
         } else {
            nextViewIndex = currentView.id - 1;
         }
      }

      router.push(views[nextViewIndex].path);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [currentView]);

   const automaticScroll = useCallback(({
      next,
      prev,
      scrollAmmount,
   }: {
      next?: boolean;
      prev?: boolean;
      scrollAmmount?: number;
   }) => {
      const width = window.innerWidth;
      const element = carouselContainer.current!;
      const actualScroll = element.scrollLeft;

      element.scrollTo({
         left: next ? actualScroll + width : prev ? actualScroll - width : scrollAmmount,
         behavior: 'smooth',
      });
   }, []);

   const arrowSlide = useCallback((e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
         handleView({ next: true });
      } else if (e.key === 'ArrowLeft') {
         handleView({ prev: true });
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [currentView]);

   useEffect(() => {
      const width = window.innerWidth;
      const viewLabel = router.asPath.split('/#')[1] || 'home';
      const view: View = views.find((item) => item.label.toLowerCase() === viewLabel) || views[0];
      const scrollAmmount = view.id * width;

      automaticScroll({ scrollAmmount });
      setCurrentView(view);
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [router.asPath]);

   useEffect(() => {
      window.addEventListener('keyup', arrowSlide);
      return () => {
         window.removeEventListener('keyup', arrowSlide);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [currentView]);

   return (
      <React.Fragment>
         <Head>
            <title>Jaime Puente - {currentView.label}</title>
         </Head>
         <Container>
            <PassSlide
               className='prev'
               onClick={() => handleView({ prev: true })}>
               <TbTriangleFilled />
               {/* <p>{previousView.label}</p> */}
            </PassSlide>

            <Carousel
               ref={carouselContainer}
               bg={backgrounds[currentView.label.toLowerCase() as keyof typeof backgrounds]}>
               <CarouselItem className={currentView.label === 'home' ? 'on-screen' : ''}>
                  <Home />
               </CarouselItem>
               <CarouselItem className={currentView.label === 'about' ? 'on-screen' : ''}>
                  <About />
               </CarouselItem>
               <CarouselItem className={currentView.label === 'skills' ? 'on-screen' : ''}>
                  <Skills />
               </CarouselItem>
               <CarouselItem className={currentView.label === 'projects' ? 'on-screen' : ''}>
                  <Projects />
               </CarouselItem>
               <CarouselItem className={currentView.label === 'contact' ? 'on-screen' : ''}>
                  <Contact />
               </CarouselItem>
            </Carousel>

            <PassSlide
               className='next'
               onClick={() => handleView({ next: true })}>
               <TbTriangleFilled />
               {/* <p>{nextView.label}</p> */}
            </PassSlide>
         </Container>
      </React.Fragment>
   );
};

export default Main;
