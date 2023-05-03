import About from '@/containers/About';
import Contact from '@/containers/Contact';
import Home from '@/containers/Home';
import Projects from '@/containers/Projects';
import Skills from '@/containers/Skills';
import { Carousel, Container } from './index.styled';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface LayoutStates {
   currentView: {
      id: number;
      path: string;
      label: string;
   };
   setCurrentView: (currentView: string) => void;
}

const views = [
   {
      id: 0,
      path: '/',
      label: 'home',
   },
   {
      id: 1,
      path: '/#about',
      label: 'about',
   },
   {
      id: 2,
      path: '/#skills',
      label: 'skills',
   },
   {
      id: 3,
      path: '/#projects',
      label: 'projects',
   },
   {
      id: 4,
      path: '/#contact',
      label: 'contact',
   },
];

const Layout = () => {
   const router = useRouter();
   const [currentView, setCurrentView] = useState<LayoutStates['currentView']>(views[0]);

   const handleView = ({ next, prev }: { next?: boolean; prev?: boolean }) => {
      let nextView = 0;
      if (next) {
         if (currentView.id === views.length - 1) {
            nextView = 0;
         } else {
            nextView = currentView.id + 1;
         }
      } else if (prev) {
         if (currentView.id === 0) {
            nextView = views.length - 1;
         } else {
            nextView = currentView.id - 1;
         }
      }

      router.push(views[nextView].path);
   };

   useEffect(() => {
      const view = router.asPath.split('/#')[1] || 'home';
      const { id } = views.find((item) => item.label === view) || views[0];
      setCurrentView(views[id]);
   }, [router.asPath]);

   return (
      <Container>
         <Carousel>
            {currentView.id === 0 ? (
               <>
                  <Home />
                  <div style={{width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
                     <button onClick={() => handleView({ prev: true })}>Previous</button>
                     <button onClick={() => handleView({ next: true })}>Next</button>
                  </div>
               </>
            ) : currentView.id === 1 ? (
               <>
                  <About />
                  <div style={{width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
                     <button onClick={() => handleView({ prev: true })}>Previous</button>
                     <button onClick={() => handleView({ next: true })}>Next</button>
                  </div>
               </>
            ) : currentView.id === 2 ? (
               <>
                  <Skills />

                  <div style={{width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
                     <button onClick={() => handleView({ prev: true })}>Previous</button>
                     <button onClick={() => handleView({ next: true })}>Next</button>
                  </div>
               </>
            ) : currentView.id === 3 ? (
               <>
                  <Projects />
                  <div style={{width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
                     <button onClick={() => handleView({ prev: true })}>Previous</button>
                     <button onClick={() => handleView({ next: true })}>Next</button>
                  </div>
               </>
            ) : (
               <>
                  <Contact />
                  <div style={{width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
                     <button onClick={() => handleView({ prev: true })}>Previous</button>
                     <button onClick={() => handleView({ next: true })}>Next</button>
                  </div>
               </>
            )}
         </Carousel>
      </Container>
   );
};

export default Layout;
