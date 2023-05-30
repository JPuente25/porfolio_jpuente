import React, { useContext } from 'react';
import { Container } from './index.styled';
import { Context } from '@/app/Provider';

type MenuModalButtonProps = {
   showMenu: boolean;
   setShowMenu: (payload: boolean) => void;
};

const MenuModalButton = ({ showMenu, setShowMenu }: MenuModalButtonProps) => {
   const handleClick = () => {
      setShowMenu(!showMenu);
   };

   //Individual Bars of Menu Button has active classNames: has an explanation on MenuModal
   return (
      <Container
         onClick={handleClick}
         className={`menu-button ${showMenu ? 'active' : ''}`}>
         <div className='first-bar menu-button'></div>
         <div className='second-bar menu-button'></div>
         <div className='third-bar menu-button'></div>
      </Container>
   );
};

export default MenuModalButton;
