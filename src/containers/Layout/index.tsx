import React from 'react';
import { Container } from './index.styled';

interface Props {
   children: React.ReactNode;
   bgColor: string;
}

const Layout = ({children, bgColor}: Props) => {

   return (
      <Container style={{backgroundColor: bgColor}}>
         {children}
      </Container>
   );
};

export default Layout;