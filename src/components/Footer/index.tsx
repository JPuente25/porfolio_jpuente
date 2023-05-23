import { font } from '@/pages/_app';
import { CiLocationOn } from 'react-icons/ci';
import SocialMedia from '../SocialMedia';
import { contactInformation } from '@/variables/contactInformation';
import { useI18N } from '@/app/i18n';
import { Container, Copyright, Location } from './index.styled';

const Footer = () => {
   const {t} = useI18N();
   const date = new Date();
   const year = date.getFullYear();

   return (
      <Container className={font.className}>
         <SocialMedia />

         <Location>
            <CiLocationOn />
            <p>{contactInformation.address}</p>
         </Location>

         <Copyright>
            <p>
               <strong>Jaime Puente {year}</strong>. {t('ALL_RIGHTS_RESERVED')}
            </p>
         </Copyright>
      </Container>
   );
};

export default Footer;
