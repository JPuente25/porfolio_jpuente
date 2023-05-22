import { localeList } from '@/variables/localeList';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import Image from 'next/image';
import { MdLanguage } from 'react-icons/md';
import { ContainerSelector, Option } from './index.styled';

interface Props {}

interface LanguageButtonStates {}

const LanguageButton = () => {
   const router = useRouter();
   const selectedLocale = localeList.find((item) => item.locale === router.locale);

   const handleClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
      const newLocale = localeList.find(
         (item) => item.label === (e.target as HTMLElement).textContent
      );
      router.push('/', '/', { locale: newLocale?.locale || 'en' });
   };
   return (
      <ContainerSelector className='language'>
         <MdLanguage />
         <div>
            {localeList.map((item) => (
               <p
                  className={selectedLocale?.label === item.label ? 'selected' : ''}
                  onClick={handleClick}
                  key={uuidv4()}>
                  {item.label}
               </p>
            ))}
         </div>
      </ContainerSelector>
   );
};

export default LanguageButton;
