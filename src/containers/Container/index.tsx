import React from 'react';
import { StyledContainer } from './index.styled';

interface Props {
   children: React.ReactNode;
   className?: string;
}

const Container = ({ children, className }: Props) => {
   return <StyledContainer className={className}>{children}</StyledContainer>;
};
export default Container;
