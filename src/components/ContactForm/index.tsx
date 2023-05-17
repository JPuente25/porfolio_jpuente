import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import { Container, FormHeader, Formulary } from './index.styled';
import Button from '../Button';

interface Props {}

interface ContactFormStates {}

const ContactForm = () => {
   return (
      <Container>
         <FormHeader>
            <div className='icon-box'>
               <FaRegPaperPlane />
            </div>
            <h2>Contact me</h2>
            <p>Please fill this form</p>
         </FormHeader>

         <Formulary>
            <div>
               <label htmlFor='name'>Name*</label>
               <input
                  id='name'
                  type='text'
                  placeholder='Jaime Puente'
                  required
               />
            </div>

            <div>
               <label htmlFor='email'>E-Mail*</label>
               <input
                  id='email'
                  type='email'
                  placeholder='example@gmail.com'
                  required
               />
            </div>

            <div>
               <label htmlFor='msg'>Message*</label>
               <textarea id='msg' placeholder='Write me a message'></textarea>
            </div>

            <Button
               content='Send'
               Icon={FaRegPaperPlane}
               type='submit'
            />
         </Formulary>
      </Container>
   );
};

export default ContactForm;
