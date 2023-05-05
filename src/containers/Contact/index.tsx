import Layout from '@/containers/Layout';
import { theme } from '@/styles/Theme';
import React from 'react';

interface Props {}

interface ContactStates {}

const Contact = () => {
   return (
      <Layout  bgColor={theme.palette.background.fifth} bgImage={theme.palette.gradient.fifth}>
         <h1>Contact</h1>
      </Layout>
   );
};

export default Contact;
