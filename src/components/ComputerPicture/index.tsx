import React from 'react';
import { Container, SkillsScreen } from './index.styled';
import Image from 'next/image';

const ComputerPicture = () => {
   return (
      <Container>
         <SkillsScreen href='/#skills'>
            <div className='filter'></div>
            <h3>My Skills</h3>
         </SkillsScreen>
         <Image
            src='https://i.gyazo.com/0e91d4a7e9ddecf60a6ebf20c547790d.png'
            alt='go skills'
            width={300}
            height={300}
         />
      </Container>
   );
};

export default ComputerPicture;
