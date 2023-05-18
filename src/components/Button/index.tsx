import React from 'react';
import { Container } from './index.styled';
import { IconType } from 'react-icons/lib';

interface Props {
   content: string;
   Icon: IconType;
   type?: 'button' | 'submit' | 'reset';
   handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
   disabled?: boolean;
   className?: string;
}

const Button = ({
   content,
   Icon,
   type = 'button',
   handleClick = () => {},
   disabled = false,
   className,
}: Props) => {
   return (
      <Container
         type={type}
         onClick={handleClick}
         className={`${className} project-button ${disabled && 'disabled'}`}
         disabled={disabled}>
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
