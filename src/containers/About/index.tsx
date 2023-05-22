import Button from '@/components/Button';
import SocialMedia from '@/components/SocialMedia';
import images from '@/variables/images';
import views from '@/variables/views';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';
import { PictureFrame, Profile, StyledContainer, TextAboutMe } from './index.styled';
import { useI18N } from '@/app/i18n';

const About = () => {
   const { t } = useI18N();
   return (
      <StyledContainer view={views.about.label}>
         <TextAboutMe className='text-about-me'>
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

         <Profile className='profile'>
            <PictureFrame className='pic-frame'>
               <Image
                  src={images.profilePicture}
                  alt='profile jaime puente'
                  width={300}
                  height={300}
               />
            </PictureFrame>
            <SocialMedia />
            <Button
               content={t('MY_RESUME')}
               Icon={FiDownload}
            />
         </Profile>
      </StyledContainer>
   );
};

export default About;
