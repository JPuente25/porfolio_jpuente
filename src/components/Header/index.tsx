import { Context } from '@/app/Provider';
import { font } from '@/pages/_app';
import { personalData } from '@/variables/personal';
import Image from 'next/image';
import { useContext } from 'react';
import LanguageButton from '../LanguageButton';
import LinksList from '../LinkList';
import MenuModal from '../MenuModal';
import MenuModalButton from '../MenuModalButton';
import { Container, LinksSection, NameLink } from './index.styled';

const Header = () => {
   const { setShowMenu } = useContext(Context);

   return (
      <Container className={font.className}>
         <div className='max1440-container'>
            <NameLink
               href='/'
               onClick={() => setShowMenu(false)}>
               <Image
                  src={personalData.logo}
                  alt='jaime puente logo'
                  width={100}
                  height={100}
               />
               <div className='name'>
                  <p>Jaime</p>
                  <p>Puente</p>
               </div>
            </NameLink>

            <LinksSection> {/* Hidden on mobile  */}
               <LinksList />
               <LanguageButton />
            </LinksSection>

            <MenuModalButton /> {/* Shown on mobile  */}
            <MenuModal /> {/* Shown on mobile  */}
         </div>
      </Container>
   );
};

export default Header;
