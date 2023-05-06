import { font } from '@/pages/_app';
import Image from 'next/image';
import LinksList from '../LinkList';
import { Container, NameLink } from './index.styled';
import images from '@/variables/images';
import MenuModal from '../MenuModal';
import MenuModalButton from '../MenuModalButton';
import { useContext, useState } from 'react';
import { Context } from '@/app/Provider';

const Header = () => {
   const {setShowMenu} = useContext(Context);
   
   return (
      <Container className={font.className}>
         <NameLink href='/' onClick={() => setShowMenu(false)}>
            <Image
               src={images.logo}
               alt='jaime puente logo'
               width={100}
               height={100}
            />
            <div>
               <span>Jaime</span>
               <span>Puente</span>
            </div>
         </NameLink>

         <LinksList />

         <MenuModal />

         <MenuModalButton />
      </Container>
   );
};

export default Header;
