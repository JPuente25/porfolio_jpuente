import React, { useEffect, useState } from 'react';
import { LinkContainer, ListItem } from './index.styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
   selectedPath: string;
}

const LinksList = () => {
   const router = useRouter();
   const [selectedPath, setSelectedPath] = useState<Props['selectedPath']>('');

   useEffect(() => {
      setSelectedPath(router.asPath.split('/#')[1] || 'home');
   }, [router.asPath]);

   return (
      <LinkContainer className='links-container'>
         <ListItem className={selectedPath === 'home' ? 'active' : ''}>
            <Link href='/'>Home</Link>
         </ListItem>

         <ListItem className={selectedPath === 'about' ? 'active' : ''}>
            <Link href='/#about'>About</Link>
         </ListItem>

         <ListItem className={selectedPath === 'skills' ? 'active' : ''}>
            <Link href='/#skills'>Skills</Link>
         </ListItem>

         <ListItem className={selectedPath === 'projects' ? 'active' : ''}>
            <Link href='/#projects'>Projects</Link>
         </ListItem>

         <ListItem className={selectedPath === 'contact' ? 'active' : ''}>
            <Link href='/#contact'>Contact</Link>
         </ListItem>
      </LinkContainer>
   );
};

export default LinksList;
