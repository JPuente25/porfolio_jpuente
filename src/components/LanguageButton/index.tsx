import { data } from '@/data/data.json';
import { useRouter } from 'next/router';
import React from 'react';
import { MdLanguage } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { ContainerSelector } from './index.styled';

const LanguageButton = () => {
   const router = useRouter();
   const selectedLocale = data.portfolio.locales.find((item) => item.locale === router.locale);

   const handleClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
      const localeToChange = data.portfolio.locales.find(
         (item) => item.label === (e.target as HTMLParagraphElement).textContent
      );
      router.push('/', '/', { locale: localeToChange?.locale || 'en' });
   };
   return (
      <ContainerSelector className='language'>
         <MdLanguage />
         <div>
            {data.portfolio.locales.map((item) => (
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
