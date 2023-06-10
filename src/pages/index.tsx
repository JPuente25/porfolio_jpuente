import { Context } from '@/app/Provider';
import About from '@/containers/About';
import Contact from '@/containers/Contact';
import Home from '@/containers/Home';
import Projects from '@/containers/Projects';
import Skills from '@/containers/Skills';
import { data } from '@/data/data.json';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useRef } from 'react';
import { PageItem, Container } from '../styles/pages/index.styled';
import getFirstLetterUppercase from '@/utils/functions/getFirstLetterUppercase';

const Main = () => {
   const router = useRouter();
   const { currentView, setCurrentView } = useContext(Context);
   const headTitle = `Jaime Puente - ${getFirstLetterUppercase(currentView.label)}`;

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
         view === data.portfolio.views.contact.label
            ? contactRef.current!.offsetTop
            : view === data.portfolio.views.about.label
            ? aboutRef.current!.offsetTop
            : view === data.portfolio.views.skills.label
            ? skillsRef.current!.offsetTop
            : view === data.portfolio.views.projects.label
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
      router;

      //Setting Current View
      setCurrentView(data.portfolio.views[viewLabel as keyof typeof data.portfolio.views]);

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [router.asPath]);

   return (
      <React.Fragment>
         <Head>
            <title>{headTitle}</title>
         </Head>

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
      </React.Fragment>
   );
};

export default Main;
