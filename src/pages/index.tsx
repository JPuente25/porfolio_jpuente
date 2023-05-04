import About from '@/containers/About';
import Contact from '@/containers/Contact';
import Home from '@/containers/Home';
import Projects from '@/containers/Projects';
import Skills from '@/containers/Skills';
import { Carousel, CarouselItem, Container } from './index.styled';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import scrollToSpeed from '@/utils/functions/scrollToSpeed';

interface LayoutStates {
   currentView: View;
   setCurrentView: (currentView: string) => void;
}

type View = {
   id: number;
   path: string;
   label: string;
};

const views: View[] = [
   {
      id: 0,
      path: '/',
      label: 'home'
   },
   {
      id: 1,
      path: '/#about',
      label: 'about'
   },
   {
      id: 2,
      path: '/#skills',
      label: 'skills'
   },
   {
      id: 3,
      path: '/#projects',
      label: 'projects'
   },
   {
      id: 4,
      path: '/#contact',
      label: 'contact'
   },
];

const Layout = () => {
   const router = useRouter();
   const [currentView, setCurrentView] = useState<LayoutStates['currentView']>(views[0]);
   const carouselContainer = useRef<HTMLDivElement>(null);

   const handleView = ({ next, prev }: { next?: boolean; prev?: boolean }) => {
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
   };

   const handleScroll = ({
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
   };

   useEffect(() => {
      const width = window.innerWidth;
      const viewLabel = router.asPath.split('/#')[1] || 'home';
      const view: View = views.find((item) => item.label === viewLabel) || views[0];
      const scrollAmmount = view.id * width;

      handleScroll({ scrollAmmount });
      setCurrentView(view);
   }, [router.asPath]);

   return (
      <Container>
         <Carousel ref={carouselContainer}>
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

         <div className='buttons'>
            <button onClick={() => handleView({ prev: true })}>Previous</button>
            <button onClick={() => handleView({ next: true })}>Next</button>
         </div>
      </Container>
   );
};

export default Layout;
