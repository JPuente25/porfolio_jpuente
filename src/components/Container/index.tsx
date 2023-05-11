import { Context } from '@/app/Provider';
import backgrounds from '@/variables/backgrounds';
import views from '@/variables/views';
import React, { useContext, useEffect } from 'react';
import { BackgroundFilter, StyledContainer } from './index.styled';

interface Props {
   children: React.ReactNode;
   props: {
      ref: (node?: Element | null | undefined) => void;
      inView: boolean;
      view: string;
   };
   className?: string;
}

const Container = ({ children, props, className }: Props) => {
   const { setCurrentView } = useContext(Context);

   useEffect(() => {
      props.inView && setCurrentView(views[props.view as keyof typeof views]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [props.inView]);

   return (
      <StyledContainer //ONLY FOR BACKGROUNDS TO FILL SCREEN
         ref={props.ref}
         bg={backgrounds[props.view as keyof typeof backgrounds]}
         className={className}>
         <BackgroundFilter className='top' />
         <BackgroundFilter className='bottom' />

         <div  //REAL CONTAINER
            className={`${props.inView ? 'visible' : ''} container`}
            style={{ width: '100%', maxWidth: '1440px',  margin: '0 auto' }}>
            {children}
         </div>

      </StyledContainer>
   );
};
export default Container;
