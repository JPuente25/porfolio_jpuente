import Image from 'next/image';
import React from 'react';
import { Container } from './index.styled';
import { v4 as uuidv4 } from 'uuid';

interface Props {
   images: string[];
}

const PhoneViewProject = ({ images }: Props) => {
   return (
      <Container className='phone-view'>
         <Image
            src='https://i.gyazo.com/2e4b9e828dfce23afcb0f9d4ff3ab11e.webp'
            alt='phone'
            width={600}
            height={600}
            className='device phone'
            quality={100}
            loading={undefined}
         />

         {images.map((url, index) => (
            <Image
               src={url}
               alt='movix'
               width={600}
               height={600}
               className={`project project-${index + 1}`}
               quality={100}
               loading={undefined}
               key={uuidv4()}
            />
         ))}
      </Container>
   );
};

export default PhoneViewProject;
