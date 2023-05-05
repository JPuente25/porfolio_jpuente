import Layout from '@/containers/Layout';
import { theme } from '@/styles/Theme';
import React from 'react';

interface Props {}

interface ProjectsStates {}

const Projects = () => {
   return (
      <Layout  bgColor={theme.palette.background.fourth} bgImage={theme.palette.gradient.fourth}>
         <h1>Projects</h1>
      </Layout>
   );
};

export default Projects;
