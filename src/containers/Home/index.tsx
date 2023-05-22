import BuildingPicture from '@/components/BuildingPicture';
import TypingSwitchBox from '@/components/TypingSwitchBox';
import views from '@/variables/views';
import { BsArrowDownCircle } from 'react-icons/bs';
import { SectionContainer, StyledContainer, Title, Welcome } from './index.styled';
import { useI18N } from '@/app/i18n';
import Link from 'next/link';

const Home = () => {
   const { t } = useI18N();
   return (
      <StyledContainer view={views.home.label}>
         <TypingSwitchBox />

         <SectionContainer>
            <Title className='title'>
               <h1 className='i-am'>
                  <span>{t('IM')}</span>
                  {t('JAIME_AND')}
                  <span>{t('I_BUILD_THINGS')}</span>
               </h1>
            </Title>

            <BuildingPicture />

            <Welcome href="/#about">
               <BsArrowDownCircle />
               <p>
                  <span>{t('WELCOME_TO_MY_PORTFOLIO')}</span>
               </p>
               <BsArrowDownCircle />
            </Welcome>
         </SectionContainer>
      </StyledContainer>
   );
};

export default Home;
