import { Context } from '@/app/Provider';
import Link from 'next/link';
import { useContext } from 'react';
import { LinkContainer, ListItem } from './index.styled';

const LinksList = () => {
   const {currentView} = useContext(Context);

   return (
      <LinkContainer className='links-container'>
         <ListItem className={currentView.label === 'Home' ? 'active' : ''}>
            <Link href='/'>Home</Link>
         </ListItem>

         <ListItem className={currentView.label === 'About' ? 'active' : ''}>
            <Link href='/#about'>About</Link>
         </ListItem>

         <ListItem className={currentView.label === 'Skills' ? 'active' : ''}>
            <Link href='/#skills'>Skills</Link>
         </ListItem>

         <ListItem className={currentView.label === 'Projects' ? 'active' : ''}>
            <Link href='/#projects'>Projects</Link>
         </ListItem>

         <ListItem className={currentView.label === 'Contact' ? 'active' : ''}>
            <Link href='/#contact'>Contact</Link>
         </ListItem>
      </LinkContainer>
   );
};

export default LinksList;
