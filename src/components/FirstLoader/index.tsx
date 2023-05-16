import React, { useEffect, useState } from 'react';
import { Container, LoaderContainer } from './index.styled';

interface FirstLoaderStates {
   visible: boolean;
}

const FirstLoader = () => {
   const [visible, setVisible] = useState<FirstLoaderStates['visible']>(true);
   useEffect(() => {
      setTimeout(() => {
         setVisible(false);
      }, 5000);
   }, [])

   return (
      <Container className={`loader ${visible ? 'visible' : 'hidden'}`}>
         <LoaderContainer>
            <div className='figure lil-blue'></div>
            <div className='figure lil-purple'></div>
            <div className='figure lil-pink'></div>
            <div className='figure lil-pink-2'></div>
            <div className='figure lil-orange'></div>
            <div className='figure big-blue'></div>
            <div className='figure big-purple'></div>
            <div className='figure big-pink'></div>
            <div className='figure big-orange'></div>
            <div className='figure react-atom'></div>
         </LoaderContainer>
      </Container>
   );
};

export default FirstLoader;