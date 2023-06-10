import { useI18N } from '@/app/i18n';
import { Project } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { MdWeb } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';
import Button from '../Button';
import DevicesViewProject from '../DevicesViewProject';
import { ButtonContainer, Container, DevicesView, Information, Title } from './index.styled';

interface Props {
   project: Project;
   index: number;
}

type ProjectCardStates = {
   shouldAnimate: boolean;
}

const ProjectCard = ({ project, index }: Props) => {
   const [shouldAnimate, setShouldAnimate] = useState<ProjectCardStates['shouldAnimate']>(true);
   const { t } = useI18N();
   const { locale } = useRouter();
   const [ref, inView] = useInView();

   if (inView && shouldAnimate) {
      setShouldAnimate(false);
   }

   return (
      <Container
         cardTheme={project.card_theme}
         className={`in-view-effects ${shouldAnimate ? '' : 'in-view'} ${
            index % 2 === 0 ? 'right' : 'left'
         }`}
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
