import TypingSwitchBox from '@/components/TypingSwitchBox';
import images from '@/variables/images';
import Image from 'next/image';
import { Container, PersonalInformation } from './index.styled';
import Link from 'next/link';
import { useContext } from 'react';
import { Context } from '@/app/Provider';

const Home = () => {
   const {currentView} = useContext(Context);

   return (
      <Container>
         <TypingSwitchBox />

         <PersonalInformation className={currentView.label === 'Home' ? 'visible' : ''}>
            <h1>Jaime J. Puente</h1>
            <Image
               src={images.profilePicture}
               alt='jaime puente'
               width={300}
               height={300}
               quality={100}
            />

            <p>
               <span>Hello</span> and welcome to my web portfolio! As a <span>civil engineer</span>{' '}
               and <span>React web developer</span> based in <span>Venezuela</span>, I am passionate
               about using technology and create innovative solutions to solve real-world problems.
               I am excited to showcase my work and expertise through this platform.{' '}
               <span>Thank you</span> for taking the time to know more <Link href="/#about">about me</Link>
            </p>
         </PersonalInformation>
      </Container>
   );
};

export default Home;
