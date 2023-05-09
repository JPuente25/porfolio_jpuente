import SocialMedia from '@/components/SocialMedia';
import Layout from '@/containers/Layout';
import { theme } from '@/styles/Theme';
import React from 'react';
import { Container, PersonalInformation, Profile, TextAboutMe } from './index.styled';
import Image from 'next/image';
import images from '@/variables/images';

interface Props {}

interface AboutStates {}

const About = () => {
   return (
      <Container>
         <PersonalInformation>
            <TextAboutMe>
               <h2>Hi all, my name is Jaime Puente</h2>

               <p>
                  I&apos;m a <strong>Civil Engineer</strong> and a <strong>React Web Developer</strong> based in Maracaibo, Venezuela.
               </p>

               <p>
                  I have passion for <strong>building</strong> clean, user-friendly interfaces using modern web
                  technologies, and I&apos;m always looking to <strong>learn more</strong> and stay on top of the
                  latest trends.
               </p>

               <p>
                  I&apos;ve worked on a variety of <strong>projects</strong> for educational-purpouse, from simple
                  pages to <strong>complex web applications</strong>, and I&apos;m skilled in using a range of
                  technologies.
               </p>

               <p>I consider myself as a <strong>great mind for logical thinking</strong>, and a great team partner.</p>

               <p>
                  When I&apos;m not coding, you can usually find me doing some workout, attending
                  some customers, or catching up on the latest tech news.
               </p>
            </TextAboutMe>

            <div>
               <p>If you&apos;d like to see my skills, click below</p>
               {/*  eslint-disable-next-line @next/next/no-img-element */}
               <img
                  src='https://cdn2.iconfinder.com/data/icons/data-center-2/500/vab457_3_pc_computer_isometric_cartoon_business_hand_silhouette-512.png'
                  alt='skills'
                  width={300}
                  height={300}
               />
            </div>
         </PersonalInformation>

         <Profile>
            <button>Download my CV</button>

            <div className='bg'>
               <Image
                  src={images.profilePicture}
                  alt='profile jaime puente'
                  width={300}
                  height={300}
               />
            </div>
            <SocialMedia />
         </Profile>
      </Container>
   );
};

export default About;
