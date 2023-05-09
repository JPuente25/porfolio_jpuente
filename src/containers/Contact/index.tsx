import { useContext, useEffect } from 'react';
import { Context } from '@/app/Provider';
import { useInView } from 'react-intersection-observer';
import views from '@/variables/views';
import Container from '@/components/Container';

interface Props {}

interface ContactStates {}

const Contact = () => {
   const { ref, inView } = useInView({
      threshold: 0.5,
   });

   return (
      <Container props={{ref, inView, view: views.contact.label}}>
         <h1>Contact</h1>
      </Container>
   );
};

export default Contact;
