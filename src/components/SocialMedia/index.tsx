import React from 'react';
import { Container, MediaItem } from './index.styled';
import {
   AiOutlineFacebook,
   AiOutlineGithub,
   AiOutlineInstagram,
   AiOutlineLinkedin,
   AiOutlineTwitter,
} from 'react-icons/ai';
import socialMediaData from '@/variables/socialMedia';

const SocialMedia = () => {
   return (
      <Container className='social-media'>
         <MediaItem
            href={socialMediaData.facebook.url}
            target='_blank'>
            <AiOutlineFacebook />
            <p>{socialMediaData.facebook.user}</p>
         </MediaItem>
         <MediaItem
            href={socialMediaData.instagram.url}
            target='_blank'>
            <AiOutlineInstagram />
            <p>{socialMediaData.instagram.user}</p>
         </MediaItem>
         <MediaItem
            href={socialMediaData.linkedin.url}
            target='_blank'>
            <AiOutlineLinkedin />
            <p>{socialMediaData.linkedin.user}</p>
         </MediaItem>
         <MediaItem
            href={socialMediaData.twitter.url}
            target='_blank'>
            <AiOutlineTwitter />
            <p>{socialMediaData.twitter.user}</p>
         </MediaItem>
         <MediaItem
            href={socialMediaData.github.url}
            target='_blank'>
            <AiOutlineGithub />
            <p>{socialMediaData.github.user}</p>
         </MediaItem>
      </Container>
   );
};

export default SocialMedia;
