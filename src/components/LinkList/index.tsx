import { Context } from '@/app/Provider';
import Link from 'next/link';
import { useContext } from 'react';
import views from '@/variables/views';
import { useI18N } from '@/app/i18n';
import { LinkContainer, ListItem } from './index.styled';

const LinksList = () => {
   const { currentView } = useContext(Context);
   const { t } = useI18N();
   const homeIsActive = currentView.label === views.home.label;
   const aboutIsActive = currentView.label === views.about.label;
   const skillsIsActive = currentView.label === views.skills.label;
   const projectsIsActive = currentView.label === views.projects.label;
   const contactIsActive = currentView.label === views.contact.label;

   return (
      <LinkContainer className='links-container'>
         <ListItem className={homeIsActive ? 'active' : ''}>
            <Link href='/'>{t('HOME')}</Link>
         </ListItem>

         <ListItem className={aboutIsActive ? 'active' : ''}>
            <Link href='/#about'>{t('ABOUT')}</Link>
         </ListItem>

         <ListItem className={skillsIsActive ? 'active' : ''}>
            <Link href='/#skills'>{t('SKILLS')}</Link>
         </ListItem>

         <ListItem className={projectsIsActive ? 'active' : ''}>
            <Link href='/#projects'>{t('PROJECTS')}</Link>
         </ListItem>

         <ListItem className={contactIsActive ? 'active' : ''}>
            <Link href='/#contact'>{t('CONTACT')}</Link>
         </ListItem>
      </LinkContainer>
   );
};

export default LinksList;
