import BuildingPicture from '@/components/BuildingPicture';
import TypingSwitchBox from '@/components/TypingSwitchBox';
import views from '@/variables/views';
import { BsArrowDownCircle } from 'react-icons/bs';
import { SectionContainer, StyledContainer, Title, Welcome } from './index.styled';

const Home = () => {
   return (
      <StyledContainer view={views.home.label}>
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

            <BuildingPicture />

            <Welcome>
               <BsArrowDownCircle />
               <p>
                  <span>Welcome to my portfolio!</span>
               </p>
               <BsArrowDownCircle />
            </Welcome>

         </SectionContainer>
      </StyledContainer>
   );
};

export default Home;
