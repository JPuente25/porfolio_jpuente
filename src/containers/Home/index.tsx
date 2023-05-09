import BuildingPicture from '@/components/BuildingPicture';
import TypingSwitchBox from '@/components/TypingSwitchBox';
import { BsArrowDownCircle } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import views from '@/variables/views';
import { Introduction, SectionContainer, StyledContainer, Title } from './index.styled';

const Home = () => {
   const { ref, inView } = useInView({
      threshold: 0.5,
   });

   return (
      <StyledContainer props={{ ref, inView, view: views.home.label }}>
         <TypingSwitchBox />

         <SectionContainer className={inView ? 'visible' : ''}>
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

            <Introduction className='introduction'>
               <BsArrowDownCircle />
               <p>
                  <span>You wanna know more about me? </span>
                  <span>
                     <strong>Click on that screen</strong>
                  </span>
               </p>
               <BsArrowDownCircle />
            </Introduction>

            <BuildingPicture />
         </SectionContainer>
      </StyledContainer>
   );
};

export default Home;
