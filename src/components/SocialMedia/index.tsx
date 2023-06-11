import { data } from '@/data/data.json';
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
            href={data.personal.socialMedia.facebook.url}
            aria-label="Facebook site"
            target='_blank'>
            <AiOutlineFacebook />
            <p>{data.personal.socialMedia.facebook.user}</p>
         </MediaItem>
         <MediaItem
            href={data.personal.socialMedia.instagram.url}
            aria-label="Instagram site"
            target='_blank'>
            <AiOutlineInstagram />
            <p>{data.personal.socialMedia.instagram.user}</p>
         </MediaItem>
         <MediaItem
            href={data.personal.socialMedia.linkedin.url}
            aria-label="Linkedin site"
            target='_blank'>
            <AiOutlineLinkedin />
            <p>{data.personal.socialMedia.linkedin.user}</p>
         </MediaItem>
         <MediaItem
            href={data.personal.socialMedia.twitter.url}
            aria-label="Twitter site"
            target='_blank'>
            <AiOutlineTwitter />
            <p>{data.personal.socialMedia.twitter.user}</p>
         </MediaItem>
         <MediaItem
            href={data.personal.socialMedia.github.url}
            aria-label="Github site"
            target='_blank'>
            <AiOutlineGithub />
            <p>{data.personal.socialMedia.github.user}</p>
         </MediaItem>
      </Container>
   );
};

export default SocialMedia;
