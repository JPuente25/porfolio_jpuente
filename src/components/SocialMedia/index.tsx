import React from 'react';
import { Container, MediaItem } from './index.styled';
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import socialMediaData from '@/variables/socialMedia';

const SocialMedia = () => {

   return (
      <Container className='social-media'>
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
   </Container>
   );
};

export default SocialMedia;