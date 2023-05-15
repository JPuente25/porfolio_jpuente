import React from 'react';
import DevicesViewProject from '../DevicesViewProject';
import { Project } from '@/types';
import Link from 'next/link';
import { ButtonContainer, Container, DevicesView, Information, Title } from './index.styled';
import Button from '../ProjectButton';
import { MdWeb } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';

interface Props {
   project: Project;
   index: number;
}

const ProjectCard = ({ project, index }: Props) => {
   return (
      <Container app={project.key} className={`project-card ${index % 2 === 0 ? 'right' : 'left'}`}>
         <DevicesView className='devices-view'>
            <DevicesViewProject images={project.images} />
         </DevicesView>

         <Information style={{ color: project.text_color }} className='information'>
            <Title className='title'>
               <h2>{project.name}</h2>
            </Title>

            <p className={`status ${project.status}`}>
               {project.status === 'finished'
                  ? 'Finished'
                  : project.status === 'in-progress'
                  ? 'In Progress'
                  : 'Not started'}
            </p>

            <p>{project.description}</p>

            <ButtonContainer>
               <Link
                  href={project.site_url}
                  target='_blank'>
                  <Button
                     content='Go to Website'
                     Icon={MdWeb}
                  />
               </Link>

               <Link
                  href={project.repo_url}
                  target='_blank'>
                  <Button
                     content='Github Repo'
                     Icon={AiFillGithub}
                  />
               </Link>
            </ButtonContainer>
         </Information>
      </Container>
   );
};

export default ProjectCard;
