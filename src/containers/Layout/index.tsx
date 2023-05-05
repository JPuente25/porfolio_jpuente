import React from 'react';
import { Container } from './index.styled';

interface Props {
   children: React.ReactNode;
   bgColor: string;
   bgImage: string;
}

const Layout = ({children, bgColor, bgImage}: Props) => {

   return (
      <Container style={{backgroundColor: bgColor, backgroundImage: bgImage}}>
         {children}
      </Container>
   );
};

export default Layout;