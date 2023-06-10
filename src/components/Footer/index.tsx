import { font } from '@/pages/_app';
import { CiLocationOn } from 'react-icons/ci';
import SocialMedia from '../SocialMedia';
import { useI18N } from '@/app/i18n';
import { Container, Copyright, Location } from './index.styled';
import { data } from '@/data/data.json';

const Footer = () => {
   const { t } = useI18N();
   const date = new Date();
   const year = date.getFullYear();

   return (
      <Container className={font.className}>
         <SocialMedia />

         <Location>
            <CiLocationOn />
            <p>{data.personal.contactInformation.address}</p>
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
