import { useI18N } from '@/app/i18n';
import Letter from '@/components/Letter';
import SocialMedia from '@/components/SocialMedia';
import { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { IoLogoWhatsapp } from 'react-icons/io';
import data from '../../data/data.json';
import {
   AlertMessage,
   ContactMessage,
   Container,
   InfoSection,
   LetterSection,
} from './index.styled';

export type ContactStates = {
   submit:
      | {
           sent: true;
           error: false;
        }
      | {
           sent: false;
           error: true;
        }
      | {
           sent: false;
           error: false;
        };
};

const Contact = () => {
   const [submit, setSubmit] = useState<ContactStates['submit']>({ sent: false, error: false });
   const { t } = useI18N();

   return (
      <Container>
         <AlertMessage
            className={submit.sent ? 'visible sent' : submit.error ? 'visible error' : ''}>
            <p>
               {submit.sent ? t('MESSAGE_SENT') : submit.error ? t('ERROR_SENDING_MESSAGE') : ''}
            </p>
         </AlertMessage>
         
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

         <LetterSection>
            <ContactMessage className='contact-msg'>
               <div>
                  <h2>{t('LETS_TALK')}</h2>
                  <p>{t('TALK_TEXT')}</p>
               </div>
            </ContactMessage>
            <Letter
               submit={submit}
               setSubmit={(payload: typeof submit) => setSubmit(payload)}
            />
         </LetterSection>
      </Container>
   );
};

export default Contact;
