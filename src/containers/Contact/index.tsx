import Container from '@/components/Container';
import views from '@/variables/views';
import { useInView } from 'react-intersection-observer';

interface Props {}

interface ContactStates {}

const Contact = () => {
   const { ref, inView } = useInView({
      threshold: 0.5,
   });

   return (
      <Container props={{ref, inView, view: views.contact.label}}>


      </Container>
   );
};

export default Contact;
