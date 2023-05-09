import React, { useContext, useEffect } from 'react';
import { Context } from '@/app/Provider';
import { useInView } from 'react-intersection-observer';
import views from '@/variables/views';
import backgrounds from '@/variables/backgrounds';
import { StyledContainer } from './index.styled';

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
      <StyledContainer
         ref={props.ref}
         bg={backgrounds[props.view as keyof typeof backgrounds]}
         className={className}>
         {children}
      </StyledContainer>
   );
};
export default Container;
