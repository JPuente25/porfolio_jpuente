import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/variables/projects';
import views from '@/variables/views';
import { useInView } from 'react-intersection-observer';
import { v4 as uuidv4 } from 'uuid';
import { StyledContainer, Title } from './index.styled';

const Projects = () => {
   const { ref, inView } = useInView({
      threshold: 0.3,
   });

   return (
      <StyledContainer
         props={{ ref, inView, view: views.projects.label }}
         className={inView ? 'visible' : 'hidden'}>
         <Title>
            La crème de la crème: <br /> <span>My projects</span>
         </Title>

         <div className='projects-container'>
            {projects.map((project, i) => (
               <ProjectCard
                  project={project}
                  index={i}
                  key={uuidv4()}
               />
            ))}
         </div>
      </StyledContainer>
   );
};

export default Projects;
