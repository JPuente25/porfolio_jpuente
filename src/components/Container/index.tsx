import backgrounds from '@/variables/backgrounds';
import React from 'react';
import { BackgroundFilter, StyledContainer } from './index.styled';

interface Props {
   children: React.ReactNode;
   className?: string;
   view: string;
}

const Container = ({ children, className, view }: Props) => {
   return (
      <StyledContainer //ONLY FOR BACKGROUNDS TO FILL SCREEN
         bg={backgrounds[view as keyof typeof backgrounds]}
         className={className}>
         <BackgroundFilter className='top' />
         <BackgroundFilter className='bottom' />

         <div  //REAL CONTAINER
            className='container'
            style={{ width: '100%', maxWidth: '1440px',  margin: '0 auto' }}>
            {children}
         </div>

      </StyledContainer>
   );
};
export default Container;
