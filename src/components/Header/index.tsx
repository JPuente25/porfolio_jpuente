import React from 'react';
import { Container } from './index.styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {

}

interface HeaderStates {

}

const Header = () => {
   const router = useRouter();

   const handleClick = (hashPath: string) => {
      router.push(`/${hashPath}`)
   }

   return (
      <Container>
         <ul>
            <li>
               <h4 onClick={e => handleClick('')}>Home</h4>
            </li>
            <li>
               <h4 onClick={e => handleClick('#about')}>About</h4>
            </li>
            <li>
               <h4 onClick={e => handleClick('#skills')}>Skills</h4>
            </li>
            <li>
               <h4 onClick={e => handleClick('#projects')}>Projects</h4>
            </li>
            <li>
               <h4 onClick={e => handleClick('#contact')}>Contact</h4>
            </li>
         </ul>
      </Container>
   );
};

export default Header;