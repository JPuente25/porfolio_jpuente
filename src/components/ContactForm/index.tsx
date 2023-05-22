import { Context } from '@/app/Provider';
import { emailIsValid } from '@/utils/functions/emailIsValid';
import { textIsValid } from '@/utils/functions/textIsValid';
import React, { useContext, useEffect, useState } from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import { Container, FormHeader, Formulary, SubmitButton } from './index.styled';
import { useI18N } from '@/app/i18n';
interface ContactFormStates {
   inputValues: {
      name: string;
      email: string;
      msg: string;
   };
   data: {
      name: {
         value: string;
         error: boolean;
      };
      email: {
         value: string;
         error: boolean;
      };
      msg: {
         value: string;
         error: boolean;
      };
   };
   sending: boolean;
   submitStatus: {
      sent: boolean;
      error: boolean;
   };
}

const ContactForm = () => {
   //Initial Values
   const initialInputValues = {
      name: '',
      email: '',
      msg: '',
   };

   const initialData = {
      name: {
         value: '',
         error: false,
      },
      email: {
         value: '',
         error: false,
      },
      msg: {
         value: '',
         error: false,
      },
   };

   //Contexts
   const { setActiveLetter, submitStatus, setSubmitStatus } = useContext(Context);
   const { t } = useI18N();

   //States
   const [inputValues, setInputValues] =
      useState<ContactFormStates['inputValues']>(initialInputValues);
   const [data, setData] = useState<ContactFormStates['data']>(initialData);
   const [sending, setSending] = useState<ContactFormStates['sending']>(false);

   //Functions
   const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      let noErrorInValidation = true;

      const rawData = {
         name: {
            value: inputValues.name,
            error: !textIsValid(inputValues.name),
         },
         email: {
            value: inputValues.email,
            error: !emailIsValid(inputValues.email),
         },
         msg: {
            value: inputValues.msg,
            error: !textIsValid(inputValues.msg),
         },
      };

      //Is there is any Error, the form will not be submitted
      for (const key in rawData) {
         if (rawData[key as keyof typeof rawData].error) {
            noErrorInValidation = false;
            break;
         }
      }

      if (noErrorInValidation) {
         setSending(true);
         fetch('/api/contact', {
            method: 'POST',
            headers: {
               Accept: 'application/json, text/plain, */*',
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(rawData),
         }).then((res) => {
            if (res.status === 200) {
               setActiveLetter(false);
               setInputValues(initialInputValues);
               setSending(false);
               setSubmitStatus({
                  sent: true,
                  error: false,
               });
            } else {
               setSending(false);
               setSubmitStatus({
                  sent: false,
                  error: true,
               });
            }
         });
      }

      setData(rawData);
   };

   const handleChange = ({ key, value }: { key: 'name' | 'email' | 'msg'; value: string }) => {
      setInputValues({
         ...inputValues,
         [key]: value,
      });
   };

   //Effects
   useEffect(() => {
      setTimeout(() => {
         if (submitStatus.sent || submitStatus.error) {
            setSubmitStatus({
               sent: false,
               error: false,
            });
         }
      }, 5000);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [submitStatus]);

   return (
      <Container>
         <FormHeader>
            <div className='icon-box'>
               <FaRegPaperPlane />
            </div>
            <h2>{t('CONTACT_ME')}</h2>
            <p>{t('PLEASE_FILL_THIS_FORM')}</p>
         </FormHeader>

         <Formulary>
            <div className={data.name.error ? 'error' : ''}>
               <label htmlFor='name'>
                  {t('NAME')}*<span> {t('REQUIRED')}</span>
               </label>
               <input
                  onChange={(e) => handleChange({ key: 'name', value: e.target.value })}
                  value={inputValues.name}
                  name='name'
                  id='name'
                  type='text'
                  placeholder='Jaime Puente'
                  required
               />
            </div>

            <div className={data.email.error ? 'error' : ''}>
               <label htmlFor='email'>
                  {t('EMAIL')}*<span> {t('VALID_EMAIL_TEXT')}</span>
               </label>
               <input
                  onChange={(e) => handleChange({ key: 'email', value: e.target.value })}
                  value={inputValues.email}
                  name='email'
                  id='email'
                  type='email'
                  placeholder={t('EMAIL_EXAMPLE')}
                  required
               />
            </div>

            <div className={data.msg.error ? 'error' : ''}>
               <label htmlFor='msg'>
                  {t('MESSAGE')}*<span> {t('REQUIRED')}</span>
               </label>
               <textarea
                  onChange={(e) => handleChange({ key: 'msg', value: e.target.value })}
                  value={inputValues.msg}
                  id='msg'
                  placeholder={t('MESSAGE_EXAMPLE')}
                  name='msg'></textarea>
            </div>

            <SubmitButton
               type='submit'
               handleClick={handleClick}
               content={sending ? t('SENDING') : t('SEND')}
               Icon={FaRegPaperPlane}
               disabled={sending}
            />
         </Formulary>
      </Container>
   );
};

export default ContactForm;
