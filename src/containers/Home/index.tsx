import { Container, TypingSwitchBox} from './index.styled';
import { Press_Start_2P } from 'next/font/google';
import { Permanent_Marker } from 'next/font/google';

const fontPressStart = Press_Start_2P({
   weight: '400',
   style: 'normal',
   subsets: ['latin'],
});

const fontPermanentMarker = Permanent_Marker({
   weight: '400',
   style: 'normal',
   subsets: ['latin'],
});

const Home = () => {
   return (
      <Container>
         <TypingSwitchBox className={fontPressStart.className}>
            <li>
               <p className='react-web-developer'>React Web Developer</p>
               <p className='civil-engineer'>Civil Engineer</p>
            </li>
         </TypingSwitchBox>
      </Container>
   );
};

export default Home;
