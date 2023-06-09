import { useI18N } from '@/app/i18n';
import BuildingPicture from '@/components/BuildingPicture';
import { useInView } from 'react-intersection-observer';
import { StyledContainer, Title } from './index.styled';

const Home = () => {
   const { t } = useI18N();
   const [titleRef, titleInView] = useInView();

   return (
      <StyledContainer>
         <Title
            className={`in-view-effects ${titleInView ? 'in-view' : ''} 'title'`}
            ref={titleRef}>
            <h1>{t('IM_JAIME')}</h1>
            <h2 className='rwd'>{t('REACT_WEB_DEVELOPER')}</h2>
            <h2 className='ci'>{t('CIVIL_ENGINEER')}</h2>
         </Title>

         <BuildingPicture />
      </StyledContainer>
   );
};

export default Home;
