import { useI18N } from '@/app/i18n';
import BuildingPicture from '@/components/BuildingPicture';
import TypingSwitchBox from '@/components/TypingSwitchBox';
import views from '@/variables/views';
import { BsArrowDownCircle } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import { Section, StyledContainer, Title, Welcome } from './index.styled';

const Home = () => {
   const { t } = useI18N();
   const [titleRef, titleInView] = useInView();
   const [welcomeRef, welcomeInView] = useInView();

   return (
      <StyledContainer view={views.home.label}>
         <TypingSwitchBox />

         <Section>
            <Title
               className={`in-view-effects ${titleInView ? 'in-view' : ''} 'title'`}
               ref={titleRef}>
               <h1>
                  <span>{t('IM')}</span>
                  {t('JAIME_AND')}
                  <span>{t('I_BUILD_THINGS')}</span>
               </h1>
            </Title>

            <BuildingPicture />

            <Welcome
               href='/#about'
               ref={welcomeRef}
               className={`in-view-effects ${welcomeInView ? 'in-view' : ''}`}>
               <BsArrowDownCircle />
               <p>{t('WELCOME_TO_MY_PORTFOLIO')}</p>
               <BsArrowDownCircle />
            </Welcome>
         </Section>
      </StyledContainer>
   );
};

export default Home;
