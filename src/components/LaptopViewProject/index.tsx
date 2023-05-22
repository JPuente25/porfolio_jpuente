import Image from 'next/image';
import React from 'react';
import { Container } from './index.styled';
import { v4 as uuidv4 } from 'uuid';

interface Props {
   images: string[];
}

interface LaptopViewProjectStates {}

const LaptopViewProject = ({ images }: Props) => {
   return (
      <Container className='laptop-view'>
         <Image
            src='https://i.gyazo.com/b1b2bcd69da85a72420931657b8911ca.webp'
            alt='laptop'
            width={600}
            height={600}
            className='device laptop'
            quality={100}
            loading='eager'
         />

         {images.map((url, index) => (
            <Image
               src={url}
               alt='movix'
               width={600}
               height={600}
               className={`project project-${index + 1}`}
               quality={100}
               loading='eager'
               key={uuidv4()}
            />
         ))}
      </Container>
   );
};

export default LaptopViewProject;
