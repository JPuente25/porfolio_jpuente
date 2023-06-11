import { useI18N } from '@/app/i18n';
import BuildingPicture from '@/components/BuildingPicture';
import Button from '@/components/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiFillFileText } from 'react-icons/ai';
import { data } from '../../data/data.json';
import { Information, StyledContainer as Container, Title } from './index.styled';

const Home = () => {
   const { locale } = useRouter();
   const { t } = useI18N();

   return (
      <Container>
         <Information>
            <Title>
               <h1>{t('IM_JAIME')}</h1>
               <h2 className='rwd'>{t('REACT_WEB_DEVELOPER')}</h2>
               <h2 className='ci'>{t('CIVIL_ENGINEER')}</h2>
            </Title>

            <Link
               className='resume'
               href={data.personal.resumeUrl[locale as keyof typeof data.personal.resumeUrl]}
               aria-label="See my resume"
               target='_blank'>
               <Button
                  content={t('CHECK_MY_RESUME')}
                  Icon={AiFillFileText}
               />
            </Link>
         </Information>

         <BuildingPicture />
      </Container>
   );
};

export default Home;
