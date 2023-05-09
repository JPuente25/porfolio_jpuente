import { font } from '@/pages/_app';
import { CiLocationOn } from 'react-icons/ci';
import SocialMedia from '../SocialMedia';
import { Container, Copyright, Location } from './index.styled';



const Footer = () => {
   const date = new Date();
   const year = date.getFullYear();

   return (
      <Container className={font.className}>
         <SocialMedia />

         <Location>
            <CiLocationOn />
            <p>Maracaibo, Zulia. Venezuela.</p>
         </Location>

         <Copyright>
            <p>
               <strong>Jaime Puente {year}</strong>. All rights reserved
            </p>
         </Copyright>
      </Container>
   );
};

export default Footer;
