import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { StyledContainer } from './index.styled';

type ContainerStates = {
   shouldAnimate: boolean;
};

type ContainerProps = {
   children: React.ReactNode;
   className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
   const [shouldAnimate, setShouldAnimate] = useState<ContainerStates['shouldAnimate']>(true);
   const [ref, inView] = useInView();

   if (inView && shouldAnimate) {
      setShouldAnimate(false);
   }

   return (
      <StyledContainer
         className={`in-view-effects ${shouldAnimate ? '' : 'in-view'} ${className}`}
         ref={ref}>
         {children}
      </StyledContainer>
   );
};
export default Container;
