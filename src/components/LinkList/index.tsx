import { Context } from '@/app/Provider';
import Link from 'next/link';
import { useContext } from 'react';
import { LinkContainer, ListItem } from './index.styled';
import views from '@/variables/views';
import { useI18N } from '@/app/i18n';

const LinksList = () => {
   const { currentView } = useContext(Context);
   const { t } = useI18N();

   return (
      <LinkContainer className='links-container'>
         <ListItem className={currentView.label === views.home.label ? 'active' : ''}>
            <Link href='/'>{t('HOME')}</Link>
         </ListItem>

         <ListItem className={currentView.label === views.about.label ? 'active' : ''}>
            <Link href='/#about'>{t('ABOUT')}</Link>
         </ListItem>

         <ListItem className={currentView.label === views.skills.label ? 'active' : ''}>
            <Link href='/#skills'>{t('SKILLS')}</Link>
         </ListItem>

         <ListItem className={currentView.label === views.projects.label ? 'active' : ''}>
            <Link href='/#projects'>{t('PROJECTS')}</Link>
         </ListItem>

         <ListItem className={currentView.label === views.contact.label ? 'active' : ''}>
            <Link href='/#contact'>{t('CONTACT')}</Link>
         </ListItem>
      </LinkContainer>
   );
};

export default LinksList;
