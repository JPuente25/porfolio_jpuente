import Layout from '@/containers/Layout';
import { theme } from '@/styles/Theme';
import React from 'react';

interface Props {

}

interface AboutStates {

}

const About = () => {

   return (
      <Layout bgColor={theme.colors.testAbout}>
         <h1>About</h1>
      </Layout>
   );
};

export default About;