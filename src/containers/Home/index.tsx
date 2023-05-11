import BuildingPicture from '@/components/BuildingPicture';
import TypingSwitchBox from '@/components/TypingSwitchBox';
import { BsArrowDownCircle } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import views from '@/variables/views';
import { SeeAboutMe, SectionContainer, StyledContainer, Title } from './index.styled';
import { useContext, useEffect } from 'react';
import { Context } from '@/app/Provider';

const Home = () => {
   const { ref, inView } = useInView({
      threshold: 0.3,
   });

   return (
      <StyledContainer props={{ ref, inView, view: views.home.label }}>
         <TypingSwitchBox />

         <SectionContainer>
            <Title className='title'>
               <h1 className='i-am'>
                  <span>I&apos;m</span> Jaime and{' '}
               </h1>
               <h1 className='i-build-things'>
                  <span>I </span>
                  <span>Build </span>
                  <span>Things </span>
               </h1>
            </Title>

            <SeeAboutMe className='see-about-me'>
               <BsArrowDownCircle />
               <p>
                  <span>You wanna know more about me? </span>
                  <span>Click on that screen</span>
               </p>
               <BsArrowDownCircle />
            </SeeAboutMe>

            <BuildingPicture />
         </SectionContainer>
      </StyledContainer>
   );
};

export default Home;
