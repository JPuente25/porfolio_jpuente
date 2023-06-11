import { Context } from '@/app/Provider';
import Link from 'next/link';
import { useContext } from 'react';
import {data} from '@/data/data.json';
import { useI18N } from '@/app/i18n';
import { LinkContainer, ListItem } from './index.styled';

const LinksList = () => {
   const { currentView } = useContext(Context);
   const { t } = useI18N();
   const homeIsActive = currentView.label === data.portfolio.views.home.label;
   const aboutIsActive = currentView.label === data.portfolio.views.about.label;
   const skillsIsActive = currentView.label === data.portfolio.views.skills.label;
   const projectsIsActive = currentView.label === data.portfolio.views.projects.label;
   const contactIsActive = currentView.label === data.portfolio.views.contact.label;

   return (
      <LinkContainer className='links-container'>
         <ListItem className={homeIsActive ? 'active' : ''}>
            <Link href='/' aria-label='Go home section'>{t('HOME')}</Link>
         </ListItem>

         <ListItem className={aboutIsActive ? 'active' : ''}>
            <Link href='/#about' aria-label='Go about section'>{t('ABOUT')}</Link>
         </ListItem>

         <ListItem className={skillsIsActive ? 'active' : ''}>
            <Link href='/#skills' aria-label='Go skills section'>{t('SKILLS')}</Link>
         </ListItem>

         <ListItem className={projectsIsActive ? 'active' : ''}>
            <Link href='/#projects' aria-label='Go projects section'>{t('PROJECTS')}</Link>
         </ListItem>

         <ListItem className={contactIsActive ? 'active' : ''}>
            <Link href='/#contact' aria-label='Go contact section'>{t('CONTACT')}</Link>
         </ListItem>
      </LinkContainer>
   );
};

export default LinksList;
