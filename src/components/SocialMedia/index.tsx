import { personalData } from '@/variables/personal';
import {
   AiOutlineFacebook,
   AiOutlineGithub,
   AiOutlineInstagram,
   AiOutlineLinkedin,
   AiOutlineTwitter,
} from 'react-icons/ai';
import { Container, MediaItem } from './index.styled';

const SocialMedia = () => {
   return (
      <Container className='social-media'>
         <MediaItem
            href={personalData.socialMedia.facebook.url}
            target='_blank'>
            <AiOutlineFacebook />
            <p>{personalData.socialMedia.facebook.user}</p>
         </MediaItem>
         <MediaItem
            href={personalData.socialMedia.instagram.url}
            target='_blank'>
            <AiOutlineInstagram />
            <p>{personalData.socialMedia.instagram.user}</p>
         </MediaItem>
         <MediaItem
            href={personalData.socialMedia.linkedin.url}
            target='_blank'>
            <AiOutlineLinkedin />
            <p>{personalData.socialMedia.linkedin.user}</p>
         </MediaItem>
         <MediaItem
            href={personalData.socialMedia.twitter.url}
            target='_blank'>
            <AiOutlineTwitter />
            <p>{personalData.socialMedia.twitter.user}</p>
         </MediaItem>
         <MediaItem
            href={personalData.socialMedia.github.url}
            target='_blank'>
            <AiOutlineGithub />
            <p>{personalData.socialMedia.github.user}</p>
         </MediaItem>
      </Container>
   );
};

export default SocialMedia;
