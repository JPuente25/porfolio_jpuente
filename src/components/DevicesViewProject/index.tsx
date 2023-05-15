import React from 'react';
import LaptopViewProject from '../LaptopViewProject';
import { v4 as uuidv4 } from 'uuid';
import PhoneViewProject from '../PhoneViewProject';
import { Container } from './index.styled';

interface Props {
   images: {
      desktop: string[];
      mobile: string[];
   };
}

interface DevicesViewProjectStates {}

const DevicesViewProject = ({ images }: Props) => {
   return (
      <Container className='devices'>
         <LaptopViewProject images={images.desktop} />
         <PhoneViewProject images={images.mobile} />
      </Container>
   );
};

export default DevicesViewProject;
