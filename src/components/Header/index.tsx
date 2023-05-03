import React from 'react';
import { Container } from './index.styled';
import Link from 'next/link';

interface Props {

}

interface HeaderStates {

}

const Header = () => {

   return (
      <Container>
         <ul>
            <li>
               <Link href="/">Home</Link>
            </li>
            <li>
               <Link href="/about">About</Link>
            </li>
            <li>
               <Link href="/skills">Skills</Link>
            </li>
            <li>
               <Link href="/projects">Projects</Link>
            </li>
            <li>
               <Link href="/contact">Contact</Link>
            </li>
         </ul>
      </Container>
   );
};

export default Header;