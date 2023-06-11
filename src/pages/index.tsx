import About from '@/containers/About';
import Contact from '@/containers/Contact';
import Home from '@/containers/Home';
import Projects from '@/containers/Projects';
import Skills from '@/containers/Skills';
import data from '@/data/data.json';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { Container, PageItem } from '../styles/pages/index.styled';

const Main = () => {
   const router = useRouter();

   //React Referencies
   const homeRef = useRef<HTMLDivElement>(null);
   const aboutRef = useRef<HTMLDivElement>(null);
   const skillsRef = useRef<HTMLDivElement>(null);
   const projectsRef = useRef<HTMLDivElement>(null);
   const contactRef = useRef<HTMLDivElement>(null);

   const automaticScroll = (view: string) => {
      //Gets Location in Document of the Section selected based in
      //the asPath from the router
      const scrollAmmount =
         view === data.portfolio.views.contact.label.toLowerCase()
            ? contactRef.current!.offsetTop
            : view === data.portfolio.views.about.label.toLowerCase()
            ? aboutRef.current!.offsetTop
            : view === data.portfolio.views.skills.label.toLowerCase()
            ? skillsRef.current!.offsetTop
            : view === data.portfolio.views.projects.label.toLowerCase()
            ? projectsRef.current!.offsetTop
            : homeRef.current!.offsetTop;

      window.scrollTo({
         top: scrollAmmount - 70,
         behavior: 'smooth',
      });
   };

   useEffect(() => {
      const viewLabel = router.asPath.split('#')[1] || 'home';
      window.document.title = `Jaime Puente - ${
         data.portfolio.views[viewLabel as keyof typeof data.portfolio.views].label
      }`;

      automaticScroll(viewLabel);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [router.asPath]);

   return (
      <Container>
         <PageItem ref={homeRef}>
            <Home />
         </PageItem>

         <PageItem ref={aboutRef}>
            <About />
         </PageItem>

         <PageItem ref={skillsRef}>
            <Skills />
         </PageItem>

         <PageItem ref={projectsRef}>
            <Projects />
         </PageItem>

         <PageItem ref={contactRef}>
            <Contact />
         </PageItem>
      </Container>
   );
};

export default Main;
