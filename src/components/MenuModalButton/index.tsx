import React, { useContext } from 'react';
import { Container } from './index.styled';
import { Context } from '@/app/Provider';

const MenuModalButton = () => {
   const {showMenu, setShowMenu} = useContext(Context);

   const handleClick = () => {
      setShowMenu(!showMenu);
   }

   return (
      <Container onClick={handleClick} className='menu-modal-button'>
         <div className={`first-bar ${showMenu ? 'active' : ""}`}></div>
         <div className={`second-bar ${showMenu ? 'active' : ""}`}></div>
         <div className={`third-bar ${showMenu ? 'active' : ""}`}></div>
      </Container>
   );
};

export default MenuModalButton;