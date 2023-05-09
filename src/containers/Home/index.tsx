import { Context } from '@/app/Provider';
import BuildingPicture from '@/components/BuildingPicture';
import TypingSwitchBox from '@/components/TypingSwitchBox';
import { useContext } from 'react';
import { BsArrowDownCircle, BsArrowRightCircle } from 'react-icons/bs';
import { Container, Introduction, SectionContainer, Title } from './index.styled';

const Home = () => {
   const { currentView } = useContext(Context);

   return (
      <Container>
         <TypingSwitchBox />

         <SectionContainer className={currentView.label === 'Home' ? 'visible' : ''}>
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

            <Introduction>
               <BsArrowDownCircle/>
               <p>
                  <span>You wanna know more about me? </span>
                  <span>
                     <strong>Click on that screen</strong>
                  </span>
               </p>
               <BsArrowDownCircle/>
            </Introduction>

            <BuildingPicture />
         </SectionContainer>
      </Container>
   );
};

export default Home;
