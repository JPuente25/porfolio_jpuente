import React from 'react';
import ContactForm from '../ContactForm';
import { Background, Container, Content, LeftTab, RightTab, UpperTab } from './index.styled';

interface Props {}

interface LetterStates {}

const Letter = () => {
   const [state, setState] = React.useState<boolean>(false);

   return (
      <React.Fragment>
         <Container className={state ? 'openLetter' : 'saveLetter'}>
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
         </Container>
         <button onClick={() => setState(!state)}>Click</button>
      </React.Fragment>
   );
};

export default Letter;
