import { Context } from '@/app/Provider';
import { useI18N } from '@/app/i18n';
import Letter from '@/components/Letter';
import SocialMedia from '@/components/SocialMedia';
import { data } from '../../data/data.json';
import { useContext } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { IoLogoWhatsapp } from 'react-icons/io';
import {
   AlertMessage,
   ContactMessage,
   StyledContainer as Container,
   InfoSection,
   LetterSection,
} from './index.styled';

const Contact = () => {
   const { activeLetter, submitStatus } = useContext(Context);
   const { t } = useI18N();

   return (
      <Container>
         <InfoSection>
            <div className='contact-info'>
               <h2>{t('CONTACT_INFORMATION')}</h2>
               <p>{t('CONTACT_INFORMATION_TEXT')}</p>
            </div>

            <div className='contact-details'>
               <div>
                  <IoLogoWhatsapp />
                  <p>{data.personal.contactInformation.phoneNumber}</p>
               </div>
               <div>
                  <AiOutlineMail />
                  <p>{data.personal.contactInformation.email}</p>
               </div>
               <div>
                  <CiLocationOn />
                  <p>{data.personal.contactInformation.address}</p>
               </div>
            </div>

            <SocialMedia />
         </InfoSection>

         <LetterSection className={activeLetter ? 'openLetter' : 'saveLetter'}>
            <ContactMessage className='contact-msg'>
               <div>
                  <h2>{t('LETS_TALK')}</h2>
                  <p>{t('TALK_TEXT')}</p>
               </div>
            </ContactMessage>
            <Letter />
         </LetterSection>

         <AlertMessage
            className={
               submitStatus.sent ? 'visible sent' : submitStatus.error ? 'visible error' : ''
            }>
            <p>
               {submitStatus.sent
                  ? t('MESSAGE_SENT')
                  : submitStatus.error
                  ? t('ERROR_SENDING_MESSAGE')
                  : ''}
            </p>
         </AlertMessage>
      </Container>
   );
};

export default Contact;
