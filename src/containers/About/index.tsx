import Button from '@/components/Button';
import SocialMedia from '@/components/SocialMedia';
import images from '@/variables/images';
import views from '@/variables/views';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';
import { PictureFrame, Profile, StyledContainer, TextAboutMe } from './index.styled';

const About = () => {
   return (
      <StyledContainer view={views.about.label}>
         <TextAboutMe className='text-about-me'>
            <h2>Hi all, my name is Jaime Puente</h2>
            <p>
               I&apos;m a <strong>Civil Engineer</strong> and a <strong>React Web Developer</strong>{' '}
               based in Maracaibo, Venezuela.
            </p>
            <p>
               I have passion for <strong>building</strong> clean, user-friendly interfaces using
               modern web technologies, and I&apos;m always looking to <strong>learn more</strong>{' '}
               and stay on top of the latest trends.
            </p>
            <p>
               I&apos;ve worked on a variety of <strong>projects</strong> for educational-purpose,
               from simple pages to <strong>complex web applications</strong>, and I&apos;m skilled
               in using a range of technologies.
            </p>
            <p>
               I consider myself as a <strong>great mind for logical thinking</strong>, and a great
               team partner.
            </p>
            <p>
               When I&apos;m not coding, you can usually find me doing some workout, attending some
               customers, or catching up on the latest tech news.
            </p>
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
               content='My resume'
               Icon={FiDownload}
            />
         </Profile>
      </StyledContainer>
   );
};

export default About;
