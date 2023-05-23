import { localeList } from '@/variables/localeList';
import { useRouter } from 'next/router';
import React from 'react';
import { MdLanguage } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { ContainerSelector } from './index.styled';

const LanguageButton = () => {
   const router = useRouter();
   const selectedLocale = localeList.find((item) => item.locale === router.locale);

   const handleClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
      const localeToChange = localeList.find(
         (item) => item.label === (e.target as HTMLParagraphElement).textContent
      );
      router.push('/', '/', { locale: localeToChange?.locale || 'en' });
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
