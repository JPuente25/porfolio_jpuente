import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/variables/projects';
import views from '@/variables/views';
import { v4 as uuidv4 } from 'uuid';
import { Title } from './index.styled';

const Projects = () => {
   return (
      <Container view={views.projects.label}>
         <Title>My Best Projects</Title>

         <div className='projects-container'>
            {projects.map((project, i) => (
               <ProjectCard
                  project={project}
                  index={i}
                  key={uuidv4()}
               />
            ))}
         </div>
      </Container>
   );
};

export default Projects;
