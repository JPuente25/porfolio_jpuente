import React from 'react';
import { Container } from './index.styled';

interface Props {
   children: React.ReactNode;
}

const Layout = ({children}: Props) => {

   return (
      <Container>
         {children}
      </Container>
   );
};

export default Layout;