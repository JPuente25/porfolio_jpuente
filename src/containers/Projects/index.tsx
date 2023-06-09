import { useI18N } from '@/app/i18n';
import ProjectCard from '@/components/ProjectCard';
import Container from '@/containers/Container';
import projects from '@/variables/projects';
import { v4 as uuidv4 } from 'uuid';
import { ProjectsContainer, Title } from './index.styled';

const Projects = () => {
   const {t} = useI18N();
   return (
      <Container>
         <Title>{t('MY_BEST_PROJECTS')}</Title>

         <ProjectsContainer>
            {projects.map((project, i) => (
               <ProjectCard
                  project={project}
                  index={i}
                  key={uuidv4()}
               />
            ))}
         </ProjectsContainer>
      </Container>
   );
};

export default Projects;
