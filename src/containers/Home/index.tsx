import { Context } from '@/app/Provider';
import BuildingPicture from '@/components/BuildingPicture';
import TypingSwitchBox from '@/components/TypingSwitchBox';
import { useContext } from 'react';
import { BsArrowDownCircle, BsArrowRightCircle } from 'react-icons/bs';
import { Container, Introduction, PersonalInformation, Title } from './index.styled';

const Home = () => {
   const { currentView } = useContext(Context);

   return (
      <Container>
         <TypingSwitchBox />

         <PersonalInformation className={currentView.label === 'Home' ? 'visible' : ''}>
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

            {/* <p>
               <span>Hello</span> and welcome to my web portfolio! As a <span>civil engineer</span>{' '}
               and <span>React web developer</span> based in <span>Venezuela</span>, I am passionate
               about using technology and create innovative solutions to solve real-world problems.
               I am excited to showcase my work and expertise through this platform.{' '}
               <span>Thank you</span> for taking the time to know more{' '}
               <Link href='/#about'>about me</Link>
            </p> */}
         </PersonalInformation>
      </Container>
   );
};

export default Home;
