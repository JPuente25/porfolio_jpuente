import { useI18N } from '@/app/i18n';
import { data } from '@/data/data.json';
import { View } from '@/types';
import Link from 'next/link';
import { useState } from 'react';
import { LinkContainer, ListItem } from './index.styled';

type LinksListStates = {
   currentView: View;
};

const LinksList = () => {
   const [currentView, setCurrentView] = useState<LinksListStates['currentView']>(
      data.portfolio.views.home
   );
   const { t } = useI18N();

   return (
      <LinkContainer className='links-container'>
         <ListItem className={currentView.label === data.portfolio.views.home.label ? 'active' : ''}>
            <Link
               href='/'
               onClick={() => setCurrentView(data.portfolio.views.home)}
               aria-label='Go home section'>
               {t('HOME')}
            </Link>
         </ListItem>

         <ListItem className={currentView.label === data.portfolio.views.about.label ? 'active' : ''}>
            <Link
               href='/#about'
               onClick={() => setCurrentView(data.portfolio.views.about)}
               aria-label='Go about section'>
               {t('ABOUT')}
            </Link>
         </ListItem>

         <ListItem className={currentView.label === data.portfolio.views.skills.label ? 'active' : ''}>
            <Link
               href='/#skills'
               onClick={() => setCurrentView(data.portfolio.views.skills)}
               aria-label='Go skills section'>
               {t('SKILLS')}
            </Link>
         </ListItem>

         <ListItem className={currentView.label === data.portfolio.views.projects.label ? 'active' : ''}>
            <Link
               href='/#projects'
               onClick={() => setCurrentView(data.portfolio.views.projects)}
               aria-label='Go projects section'>
               {t('PROJECTS')}
            </Link>
         </ListItem>

         <ListItem className={currentView.label === data.portfolio.views.contact.label ? 'active' : ''}>
            <Link
               href='/#contact'
               onClick={() => setCurrentView(data.portfolio.views.contact)}
               aria-label='Go contact section'>
               {t('CONTACT')}
            </Link>
         </ListItem>
      </LinkContainer>
   );
};

export default LinksList;
