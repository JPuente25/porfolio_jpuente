import React, { useContext } from 'react';
import ContactForm from '../ContactForm';
import {
   Background,
   Container,
   Content,
   LeftTab,
   OpenButton,
   RightTab,
   UpperTab,
} from './index.styled';
import { Context } from '@/app/Provider';
import { FaRegPaperPlane } from 'react-icons/fa';

interface Props {}

interface LetterStates {}

const Letter = () => {
   const { activeLetter, setActiveLetter } = useContext(Context);

   return (
      <Container className={`${activeLetter ? 'openLetter' : 'saveLetter'} letter`}>
         <Background className='background'></Background>

         <UpperTab className='up'></UpperTab>

         <RightTab className='right'></RightTab>

         <LeftTab className='left'></LeftTab>

         <Content className='content'>
            <div className='form'>
               <ContactForm />
            </div>
            <div className='form-ghost'></div>
         </Content>

         <OpenButton
            onClick={() => setActiveLetter(true)}
            className='openButton'>
            <FaRegPaperPlane />
         </OpenButton>
      </Container>
   );
};

export default Letter;
