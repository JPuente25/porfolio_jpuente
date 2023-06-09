import Image from 'next/image';
import React from 'react';
import { Container } from './index.styled';
import { v4 as uuidv4 } from 'uuid';

interface Props {
   images: string[];
}

const LaptopViewProject = ({ images }: Props) => {
   return (
      <Container className='laptop-view'>
         <Image
            src='https://i.gyazo.com/b1b2bcd69da85a72420931657b8911ca.webp'
            alt='laptop'
            width={600}
            height={600}
            sizes='(max-width: 600px) 65vw, 33vw'
            className='device laptop'
            quality={100}
            loading={undefined}
         />

         {images.map((url, index) => (
            <Image
               src={url}
               alt='movix'
               width={600}
               height={600}
               sizes='(max-width: 600px) 50vw, 25vw'
               className={`project project-${index + 1}`}
               quality={100}
               loading={undefined}
               key={uuidv4()}
            />
         ))}
      </Container>
   );
};

export default LaptopViewProject;
