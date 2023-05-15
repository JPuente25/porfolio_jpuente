import React from 'react';
import { Container } from './index.styled';
import { IconType } from 'react-icons/lib';

interface Props {
   content: string;
   Icon: IconType;
}

const Button = ({ content, Icon }: Props) => {
   return (
      <Container className='project-button'>
         <div className='content'>
            <p>{content}</p>
         </div>
         <div className='icon'>
            <Icon />
         </div>
      </Container>
   );
};

export default Button;
