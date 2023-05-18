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

const Contact = () => {
   const { activeLetter, submitStatus } = useContext(Context);
   
   return (
      <StyledContainer view={views.contact.label}>
         <SocialSection></SocialSection>

         <LetterSection className={activeLetter ? 'openLetter' : 'saveLetter'}>
            <ContactMessage className='contact-msg'>
               <div>
                  <h2>Let&apos;s talk!</h2>
                  <p>
                     If you are interested in hiring me, or just want to say hi, please send a
                     letter to my mailbox.
                  </p>
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
                  ? 'Message sent!'
                  : submitStatus.error
                  ? 'Error sending message'
                  : ''}
            </p>
         </AlertMessage>
      </StyledContainer>
   );
};

export default Contact;
