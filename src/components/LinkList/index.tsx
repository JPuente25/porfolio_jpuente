import { Context } from '@/app/Provider';
import Link from 'next/link';
import { useContext } from 'react';
import { LinkContainer, ListItem } from './index.styled';
import views from '@/variables/views';

const LinksList = () => {
   const {currentView} = useContext(Context);

   return (
      <LinkContainer className='links-container'>
         <ListItem className={currentView.label === views.home.label ? 'active' : ''}>
            <Link href='/'>Home</Link>
         </ListItem>

         <ListItem className={currentView.label === views.about.label ? 'active' : ''}>
            <Link href='/#about'>About</Link>
         </ListItem>

         <ListItem className={currentView.label === views.skills.label ? 'active' : ''}>
            <Link href='/#skills'>Skills</Link>
         </ListItem>

         <ListItem className={currentView.label === views.projects.label ? 'active' : ''}>
            <Link href='/#projects'>Projects</Link>
         </ListItem>

         <ListItem className={currentView.label === views.contact.label ? 'active' : ''}>
            <Link href='/#contact'>Contact</Link>
         </ListItem>
      </LinkContainer>
   );
};

export default LinksList;
