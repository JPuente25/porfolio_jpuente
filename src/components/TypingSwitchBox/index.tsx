import React from 'react';
import { Container, List } from './index.styled';
import { Press_Start_2P } from 'next/font/google';

const fontPressStart = Press_Start_2P({
   weight: '400',
   style: 'normal',
   subsets: ['latin'],
});

const TypingSwitchBox = () => {
   return (
      <Container className='typing-switch-box'>
         <List className={fontPressStart.className}>
            <li>
               <p className='react-web-developer'>React Web Developer</p>
               <p className='civil-engineer'>Civil Engineer</p>
            </li>
         </List>
      </Container>
   );
};

export default TypingSwitchBox;
