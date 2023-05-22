import React, { useContext } from 'react';
import LinksList from '../LinkList';
import { Container } from './index.styled';
import { Context } from '@/app/Provider';
import LanguageButton from '../LanguageButton';

const MenuModal = () => {
   const { showMenu, setShowMenu } = useContext(Context);

   const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      ((e.target as any).localName === 'a' || (e.target as any).localName === 'li') &&
         setShowMenu(false);
   };
   return (
      <Container
         className={`${showMenu ? 'active' : ''} menu-modal`}
         onClick={handleClick}>
         <LanguageButton />
         <LinksList />
      </Container>
   );
};

export default MenuModal;
