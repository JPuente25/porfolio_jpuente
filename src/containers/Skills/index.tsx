import Container from '@/components/Container';
import views from '@/variables/views';
import { useInView } from 'react-intersection-observer';

interface Props {}

interface SkillsStates {}

const Skills = () => {
   const { ref, inView } = useInView({
      threshold: 0.5,
   });
   
   return (
      <Container props={{ref, inView, view: views.skills.label}}>
         <h1>Skills</h1>
      </Container>
   );
};

export default Skills;
