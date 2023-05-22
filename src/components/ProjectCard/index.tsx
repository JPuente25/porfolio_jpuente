import React from 'react';
import DevicesViewProject from '../DevicesViewProject';
import { Project } from '@/types';
import Link from 'next/link';
import { ButtonContainer, Container, DevicesView, Information, Title } from './index.styled';
import Button from '../Button';
import { MdWeb } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { useI18N } from '@/app/i18n';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';

interface Props {
   project: Project;
   index: number;
}

const ProjectCard = ({ project, index }: Props) => {
   const { t } = useI18N();
   const { locale } = useRouter();
   const { ref, inView } = useInView();

   return (
      <Container
         app={project.key}
         className={`in-view-effects ${inView ? 'in-view' : ''}  ${
            index % 2 === 0 ? 'right' : 'left'
         } project-card`}
         ref={ref}>
         <DevicesView className='devices-view'>
            <DevicesViewProject images={project.images} />
         </DevicesView>

         <Information
            style={{ color: project.text_color }}
            className='information'>
            <Title className='title'>
               <h2>{project.name}</h2>
            </Title>

            <p className={`status ${project.status}`}>
               {project.status === 'finished'
                  ? t('FINISHED')
                  : project.status === 'in-progress'
                  ? t('IN_PROGRESS')
                  : t('NOT_STARTED')}
            </p>

            <p>{project.description[locale as keyof typeof project.description]}</p>

            <ButtonContainer>
               <Link
                  href={project.site_url}
                  target='_blank'>
                  <Button
                     content={t('GO_TO_WEBSITE')}
                     Icon={MdWeb}
                  />
               </Link>

               <Link
                  href={project.repo_url}
                  target='_blank'>
                  <Button
                     content={t('GITHUB_REPO')}
                     Icon={AiFillGithub}
                  />
               </Link>
            </ButtonContainer>
         </Information>
      </Container>
   );
};

export default ProjectCard;
