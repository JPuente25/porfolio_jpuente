import { useI18N } from '@/app/i18n';
import Button from '@/components/Button';
import SocialMedia from '@/components/SocialMedia';
import { personalData } from '@/variables/personal';
import views from '@/variables/views';
import Image from 'next/image';
import { AiFillFileText } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AboutContainer, PictureFrame, Profile, TextAboutMe } from './index.styled';
import Container from '../Container';

const About = () => {
   const { t } = useI18N();
   const { locale } = useRouter();
   const [ref, inView] = useInView();

   return (
      <Container>
         <AboutContainer
            className={`in-view-effects ${inView ? 'in-view' : ''}`}
            ref={ref}>
            <TextAboutMe>
               <h2>{t('ABOUT_TITLE')}</h2>
               <p>
                  {t('ABOUT_DESCRIPTION_1')}
                  <strong>{t('ABOUT_DESCRIPTION_2')}</strong>
                  {t('ABOUT_DESCRIPTION_3')}
                  <strong>{t('ABOUT_DESCRIPTION_4')}</strong>
                  {t('ABOUT_DESCRIPTION_5')}
               </p>
               <p>
                  {t('ABOUT_DESCRIPTION_6')}
                  <strong>{t('ABOUT_DESCRIPTION_7')}</strong>
                  {t('ABOUT_DESCRIPTION_8')}
                  <strong>{t('ABOUT_DESCRIPTION_9')}</strong>
                  {t('ABOUT_DESCRIPTION_10')}
               </p>
               <p>
                  {t('ABOUT_DESCRIPTION_11')}
                  <strong>{t('ABOUT_DESCRIPTION_12')}</strong>
                  {t('ABOUT_DESCRIPTION_13')}
                  <strong>{t('ABOUT_DESCRIPTION_14')}</strong>
                  {t('ABOUT_DESCRIPTION_15')}
               </p>
               <p>
                  {t('ABOUT_DESCRIPTION_16')}
                  <strong>{t('ABOUT_DESCRIPTION_17')}</strong>
                  {t('ABOUT_DESCRIPTION_18')}
               </p>
               <p>{t('ABOUT_DESCRIPTION_19')}</p>
            </TextAboutMe>

            <Profile>
               <PictureFrame className='pic-frame'>
                  <Image
                     src={personalData.profilePicture}
                     alt='profile jaime puente'
                     width={300}
                     height={300}
                  />
               </PictureFrame>
               <SocialMedia />

               <Link
                  className='resume'
                  href={personalData.resumeUrl[locale as keyof typeof personalData.resumeUrl]}
                  target='_blank'>
                  <Button
                     content={t('MY_RESUME')}
                     Icon={AiFillFileText}
                  />
               </Link>
            </Profile>
         </AboutContainer>
      </Container>
   );
};

export default About;
