import React, { useCallback, useContext, useEffect } from 'react';
import LinksList from '../LinkList';
import { Context } from '@/app/Provider';
import LanguageButton from '../LanguageButton';
import { Container } from './index.styled';

const MenuModal = () => {
   const { showMenu, setShowMenu } = useContext(Context);
   const tagsOutOfModal = /\bli\b|\ba\b|\bul\b|\bmenu\b|menu-modal-button/; //Regex for exact matches: "li" | "a" | "ul" | "menu" | "menu-modal-button"
   const tagsLinksModal = /\bli\b|\ba\b/;
   const tagsModalButton = /menu-modal-button/; //Regex for partial matches: "menu-modal-button"

   const handleClick = useCallback(
      (e: MouseEvent | React.MouseEvent<HTMLElement, MouseEvent>) => {
         if (showMenu) {
            //While menu is open: Click on MenuButton should not interact with modalButton own actions
            if ((e.target as HTMLElement).className.match(tagsModalButton)) {
               return;
            }
            //While menu is Open: Click on "li", "a" should close the modal
            //While menu is open: Not clicking on "li", "a", "ul", "menu" should close the modal
            else if (
               (e.target as HTMLElement).localName.match(tagsLinksModal) ||
               !(e.target as HTMLElement).localName.match(tagsOutOfModal) ||
               !(e.target as HTMLElement).localName.match(tagsOutOfModal)
            ) {
               setShowMenu(false);
            }
         }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [showMenu]
   );

   useEffect(() => {
      window.addEventListener('click', handleClick);

      return () => {
         window.removeEventListener('click', handleClick);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [handleClick]);

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
