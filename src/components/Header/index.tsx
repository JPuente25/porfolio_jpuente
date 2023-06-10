import { font } from '@/pages/_app';
import { data } from '@/data/data.json';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import LanguageButton from '../LanguageButton';
import LinksList from '../LinkList';
import MenuModal from '../MenuModal';
import MenuModalButton from '../MenuModalButton';
import { Container, LinksSection, NameLink } from './index.styled';

type HeaderStates = {
   showMenu: boolean;
   showHeader: boolean;
   lastScroll: number;
};

const Header = () => {
   const [showMenu, setShowMenu] = useState<HeaderStates['showMenu']>(false);
   const [showHeader, setShowHeader] = useState<HeaderStates['showHeader']>(true);
   const [lastScroll, setLastScroll] = useState<HeaderStates['lastScroll']>(0);

   const triggerShowMenu = (payload: boolean) => {
      setShowMenu(payload);
   };

   const handleScroll = useCallback(() => {
      if (window.scrollY < 300 || window.scrollY < lastScroll) {
         setShowHeader(true);
      } else if (window.scrollY > lastScroll) {
         setShowHeader(false);
      }
      setLastScroll(window.scrollY);
   }, [lastScroll]);

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [lastScroll, handleScroll]);

   return (
      <Container className={`${font.className} ${showHeader ? '' : 'hide'}`}>
         <div className='max1440-container'>
            <NameLink
               href='/'
               onClick={() => setShowMenu(false)}>
               <Image
                  src={data.personal.logo}
                  alt='jaime puente logo'
                  width={100}
                  height={100}
                  loading={undefined}
               />
               <div className='name'>
                  <p>Jaime</p>
                  <p>Puente</p>
               </div>
            </NameLink>
            <LinksSection>
               {/* Hidden on mobile  */}
               <LinksList />
               <LanguageButton />
            </LinksSection>
            <MenuModalButton
               showMenu={showMenu}
               setShowMenu={triggerShowMenu}
            />
            {/* Shown on mobile  */}
            <MenuModal
               showMenu={showMenu}
               setShowMenu={triggerShowMenu}
            />
            {/* Shown on mobile  */}
         </div>
      </Container>
   );
};

export default Header;
