import Letter from '@/components/Letter';
import views from '@/variables/views';
import {
   AlertMessage,
   ContactMessage,
   LetterSection,
   SocialSection,
   StyledContainer,
} from './index.styled';
import { useContext } from 'react';
import { Context } from '@/app/Provider';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { contactInformation } from '@/variables/contactInformation';
import SocialMedia from '@/components/SocialMedia';
import { useI18N } from '@/app/i18n';

const Contact = () => {
   const { activeLetter, submitStatus } = useContext(Context);
   const { t } = useI18N();

   return (
      <StyledContainer view={views.contact.label}>
         <SocialSection>
            <div className='contact-info'>
               <h2>{t('CONTACT_INFORMATION')}</h2>
               <p>{t('CONTACT_INFORMATION_TEXT')}</p>
            </div>

            <div className='contact-details'>
               <div>
                  <IoLogoWhatsapp />
                  <p>{contactInformation.phoneNumber}</p>
               </div>
               <div>
                  <AiOutlineMail />
                  <p>{contactInformation.email}</p>
               </div>
               <div>
                  <CiLocationOn />
                  <p>{contactInformation.address}</p>
               </div>
            </div>

            <SocialMedia />
         </SocialSection>

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
      </StyledContainer>
   );
};

export default Contact;
