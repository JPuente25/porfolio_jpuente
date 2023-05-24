import { useI18N } from '@/app/i18n';
import Button from '@/components/Button';
import SocialMedia from '@/components/SocialMedia';
import { personalData } from '@/variables/personal';
import views from '@/variables/views';
import Image from 'next/image';
import { AiFillFileText } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import { PictureFrame, Profile, StyledContainer, TextAboutMe } from './index.styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

const About = () => {
   const { t } = useI18N();
   const { locale } = useRouter();
   const [textRef, textInView] = useInView();
   const [profileRef, profileInView] = useInView();

   return (
      <StyledContainer view={views.about.label}>
         <TextAboutMe
            className={`in-view-effects ${textInView ? 'in-view' : ''} text-about-me `}
            ref={textRef}>
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

         <Profile
            className={`in-view-effects ${profileInView ? 'in-view' : ''} profile`}
            ref={profileRef}>
            <PictureFrame className='pic-frame'>
               <Image
                  src={personalData.profilePicture}
                  alt='profile jaime puente'
                  width={300}
                  height={300}
               />
            </PictureFrame>
            <SocialMedia />

            <Link href={personalData.resumeUrl[locale as keyof typeof personalData.resumeUrl]} target='_blank'>
               <Button
                  content={t('MY_RESUME')}
                  Icon={AiFillFileText}
               />
            </Link>
         </Profile>
      </StyledContainer>
   );
};

export default About;
