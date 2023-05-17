import React from 'react';
import { Container } from './index.styled';
import { IconType } from 'react-icons/lib';

interface Props {
   content: string;
   Icon: IconType;
   type?: 'button' | 'submit' | 'reset';
}

const Button = ({ content, Icon, type = 'button' }: Props) => {
   return (
      <Container className='project-button' type={type}>
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
