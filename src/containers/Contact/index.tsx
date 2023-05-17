import Letter from '@/components/Letter';
import views from '@/variables/views';
import { StyledContainer } from './index.styled';

interface Props {}

interface ContactStates {}

const Contact = () => {
   return (
      <StyledContainer view={views.contact.label}>
         <div className='social'></div>
         <Letter />
      </StyledContainer>
   );
};

export default Contact;
