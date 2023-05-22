import React from 'react';
import { Container, SwitchBox, SwitchItem } from './index.styled';
import { Press_Start_2P } from 'next/font/google';
import { useI18N } from '@/app/i18n';

const fontPressStart = Press_Start_2P({
   weight: '400',
   style: 'normal',
   subsets: ['latin'],
});

const TypingSwitchBox = () => {
   const { t } = useI18N();

   return (
      <Container className={`${fontPressStart.className} typing-switch-box`}>
            <SwitchBox>
               <SwitchItem>
                  <p className='react-web-developer'>{t('REACT_WEB_DEVELOPER')}</p>
               </SwitchItem>
               
               <SwitchItem>
                  <p className='civil-engineer'>{t('CIVIL_ENGINEER')}</p>
               </SwitchItem>
            </SwitchBox>
      </Container>
   );
};

export default TypingSwitchBox;
