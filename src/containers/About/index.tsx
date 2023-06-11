import { useI18N } from '@/app/i18n';
import Button from '@/components/Button';
import SocialMedia from '@/components/SocialMedia';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiFillFileText } from 'react-icons/ai';
import data from '../../data/data.json';
import Container from '../Container';
import { AboutContainer, PictureFrame, Profile, TextAboutMe } from './index.styled';

const About = () => {
   const { t } = useI18N();
   const { locale } = useRouter();

   return (
      <Container>
         <AboutContainer>
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
                     src={data.personal.profilePicture}
                     alt='profile jaime puente'
                     width={300}
                     height={300}
                     quality={100}
                     sizes='(max-width: 480px) 200px, (max-width: 768px) 320px, (max-width: 991px) 200px, 320px'
                  />
               </PictureFrame>
               <SocialMedia />

               <Link
                  className='resume'
                  href={data.personal.resumeUrl[locale as keyof typeof data.personal.resumeUrl]}
                  aria-label="See my resume"
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
