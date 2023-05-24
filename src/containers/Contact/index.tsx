import { Context } from '@/app/Provider';
import { useI18N } from '@/app/i18n';
import Letter from '@/components/Letter';
import SocialMedia from '@/components/SocialMedia';
import { personalData } from '@/variables/personal';
import views from '@/variables/views';
import { useContext } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { IoLogoWhatsapp } from 'react-icons/io';
import { useInView } from 'react-intersection-observer';
import {
   AlertMessage,
   ContactMessage,
   InfoSection,
   LetterSection,
   StyledContainer,
} from './index.styled';

const Contact = () => {
   const { activeLetter, submitStatus } = useContext(Context);
   const { t } = useI18N();
   const [infoRef, infoInView] = useInView();
   const [letterRef, letterInView] = useInView();

   return (
      <StyledContainer view={views.contact.label}>
         <InfoSection
            ref={infoRef}
            className={`in-view-effects ${infoInView ? 'in-view' : ''}`}>
            <div className='contact-info'>
               <h2>{t('CONTACT_INFORMATION')}</h2>
               <p>{t('CONTACT_INFORMATION_TEXT')}</p>
            </div>

            <div className='contact-details'>
               <div>
                  <IoLogoWhatsapp />
                  <p>{personalData.contactInformation.phoneNumber}</p>
               </div>
               <div>
                  <AiOutlineMail />
                  <p>{personalData.contactInformation.email}</p>
               </div>
               <div>
                  <CiLocationOn />
                  <p>{personalData.contactInformation.address}</p>
               </div>
            </div>

            <SocialMedia />
         </InfoSection>

         <LetterSection
            ref={letterRef}
            className={`in-view-effects ${letterInView ? 'in-view' : ''} ${
               activeLetter ? 'openLetter' : 'saveLetter'
            }`}>
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
