import { font } from '@/pages/_app';
import { Container, Copyright, Location, MediaItem, SocialMedia } from './index.styled';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import {CiLocationOn} from 'react-icons/ci';

const socialMediaData = {
   facebook: {
      user: 'PuenteJ',
      url: 'https://www.facebook.com/PuenteJ/'
   },
   instagram: {
      user: 'Jpuentee_',
      url: 'https://www.instagram.com/jpuentee_/'
   },
   linkedin: {
      user: 'JPuente25',
      url: 'https://www.linkedin.com/in/jpuente25/'
   },
   twitter: {
      user: 'jpuentee_',
      url: 'https://twitter.com/JPuentee_'
   },
   github: {
      user: 'JPuente25',
      url: 'https://github.com/JPuente25'
   }
}

const Footer = () => {
   const date = new Date();
   const year = date.getFullYear();

   return (
      <Container className={font.className}>
         <SocialMedia>
            <MediaItem href={socialMediaData.facebook.url} target='_blank'>
               <AiOutlineFacebook />
               <span>{socialMediaData.facebook.user}</span>
            </MediaItem>
            <MediaItem href={socialMediaData.instagram.url} target='_blank'>
               <AiOutlineInstagram />
               <span>{socialMediaData.instagram.user}</span>
            </MediaItem>
            <MediaItem href={socialMediaData.linkedin.url} target='_blank'>
               <AiOutlineLinkedin />
               <span>{socialMediaData.linkedin.user}</span>
            </MediaItem>
            <MediaItem href={socialMediaData.twitter.url} target='_blank'>
               <AiOutlineTwitter />
               <span>{socialMediaData.twitter.user}</span>
            </MediaItem>
            <MediaItem href={socialMediaData.github.url} target='_blank'>
               <AiOutlineGithub />
               <span>{socialMediaData.github.user}</span>
            </MediaItem>
         </SocialMedia>

         <Location>
            <CiLocationOn />
            <p>Maracaibo, Zulia. Venezuela.</p>
         </Location>

         <Copyright>
            <p>
               <strong>Jaime Puente {year}</strong>. All rights reserved
            </p>
         </Copyright>
      </Container>
   );
};

export default Footer;
