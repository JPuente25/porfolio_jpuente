import { theme } from '@/styles/Theme';
import React from 'react';
import { useContext, useEffect } from 'react';
import { Context } from '@/app/Provider';
import { useInView } from 'react-intersection-observer';
import views from '@/variables/views';
import Container from '@/components/Container';

interface Props {}

interface ProjectsStates {}

const Projects = () => {
   const { ref, inView } = useInView({
      threshold: 0.5,
   });
   
   return (
      <Container props={{ref, inView, view: views.projects.label}}>
         <h1>Projects</h1>
      </Container>
   );
};

export default Projects;
