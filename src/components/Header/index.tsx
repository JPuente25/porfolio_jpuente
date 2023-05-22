import { Context } from '@/app/Provider';
import { font } from '@/pages/_app';
import images from '@/variables/images';
import Image from 'next/image';
import { useContext } from 'react';
import LinksList from '../LinkList';
import MenuModal from '../MenuModal';
import MenuModalButton from '../MenuModalButton';
import Link from 'next/link';
import { Container, NameLink } from './index.styled';
import LanguageButton from '../LanguageButton';

const Header = () => {
   const { setShowMenu } = useContext(Context);

   return (
      <Container className={font.className}>
         <NameLink
            href='/'
            onClick={() => setShowMenu(false)}>
            <Image
               src={images.logo}
               alt='jaime puente logo'
               width={100}
               height={100}
            />
            <div className='name'>
               <span>Jaime</span>
               <span>Puente</span>
            </div>
         </NameLink>

         <LanguageButton />

         <LinksList />

         <MenuModal />

         <MenuModalButton />
      </Container>
   );
};

export default Header;
