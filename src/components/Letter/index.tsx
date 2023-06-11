import { ContactStates } from '@/containers/Contact';
import { useState } from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
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

type LetterProps = {
   submit: ContactStates['submit'];
   setSubmit: (payload: ContactStates['submit']) => void;
}

type LetterStates = {
   activeLetter: boolean;
};

const Letter = ({submit, setSubmit}: LetterProps) => {
   const [activeLetter, setActiveLetter] = useState<LetterStates['activeLetter']>(false);

   return (
      <Container className={`${activeLetter ? 'opened' : 'closed'} letter`}>
         <Background className='background'></Background>

         <UpperTab className='up'></UpperTab>

         <RightTab className='right'></RightTab>

         <LeftTab className='left'></LeftTab>

         <Content className='content'>
            <div className='form'>
               <ContactForm closeLetter={() => setActiveLetter(false)} submit={submit} setSubmit={setSubmit}/>
            </div>
            <div className='form-placeholder'></div>
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
