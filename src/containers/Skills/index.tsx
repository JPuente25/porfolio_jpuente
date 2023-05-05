import Layout from '@/containers/Layout';
import { theme } from '@/styles/Theme';
import React from 'react';

interface Props {}

interface SkillsStates {}

const Skills = () => {
   return (
      <Layout bgColor={theme.palette.background.third} bgImage={theme.palette.gradient.third}>
         <h1>Skills</h1>
      </Layout>
   );
};

export default Skills;
