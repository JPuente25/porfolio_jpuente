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
         <div className='container'>{children}</div> {/*Real container*/} 
         <BackgroundFilter className='bottom' />
      </StyledContainer>
   );
};
export default Container;
