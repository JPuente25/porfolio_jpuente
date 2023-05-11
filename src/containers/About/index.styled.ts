import Container from '@/components/Container';
import styled, { keyframes } from 'styled-components';

const handPointer = keyframes`
0%, 100% {
   transform: translate(0, 0) scale(1) rotateZ(35deg);
   opacity: 0.3;
}

30%, 70% {
   opacity: 1;
}

50% {
   transform: translate(20px, 20px) scale(2) rotateZ(35deg);
   opacity: 1;
}
`;

const slide = (start: number) => keyframes`   
   0% {
      transform: translateY(${start}px);
      opacity: 0;
   }

   100% {
      transform: translateY(0px);
      opacity: 1;
   }
`;

///////////////////////////////////////////////////////////////////////////////////

export const StyledContainer = styled(Container)`
   div.container {
      color: ${(props) => props.theme.palette.text.primary};
      display: grid;
      grid-template-columns: 1fr;
      place-items: start;
      gap: 15px;

      & > div.text-about-me,
      & > div.see-my-skills,
      & > div.profile {
         transition: all ease 1s;
         opacity: 0;
      }

      & > div.text-about-me {
         transform: translateX(-40px);
      }

      & > div.see-my-skills {
         transform: translateY(40px);
      }

      & > div.profile {
         transform: translateX(40px);
      }

      &.visible {
         div.text-about-me,
         div.see-my-skills,
         div.profile {
            opacity: 1;
            transform: translate(0px, 0px);
         }
      }

      @media (min-width: 768px) {
         grid-template-columns: 2fr 1fr;
      }
   }
`;

///////////////////////////////////////////////////////////////////////////////////

export const TextAboutMe = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 20px;
   width: 100%;
   height: 100%;
   padding: 20px;
   border-radius: 20px;
   position: relative;
   background-color: ${({ theme }) => theme.palette.transparency.green};
   backdrop-filter: blur(5px);
   color: ${(props) => props.theme.palette.text.primary};
   box-shadow: ${({ theme }) => theme.palette.shadow.box};

   h2 {
      font-size: ${(props) => props.theme.font.size.xlg};
      text-shadow: 0 0 3px ${({ theme }) => theme.palette.text.opposite};
      color: ${(props) => props.theme.palette.text.primary};
   }

   p {
      font-size: ${(props) => props.theme.font.size.sm2};
   }

   strong {
      color: ${(props) => props.theme.palette.text.cyan3};
      color: ${(props) => props.theme.palette.text.gold};
   }

   @media (min-width: 480px) {
      h2 {
         font-size: ${(props) => props.theme.font.size.x2lg};
      }

      p {
         font-size: ${(props) => props.theme.font.size.md};
      }
   }

   @media (min-width: 1200px) {
      h2 {
         font-size: ${(props) => props.theme.font.size.x3lg};
      }

      p {
         font-size: ${(props) => props.theme.font.size.lg};
      }
   }
`;

///////////////////////////////////////////////////////////////////////////////////

export const Profile = styled.div`
   height: 100%;
   width: 100%;
   display: grid;
   place-items: center;
   position: relative;
   padding: 15px;
   gap: 20px;
   background-color: ${(props) => props.theme.palette.background.primary};
   border-radius: 20px;
   contain: content;
   box-shadow: ${({ theme }) => theme.palette.shadow.box};

   &:before {
      content: '';
      background-color: ${({ theme }) => theme.palette.background.cyan};
      background-image: ${({ theme }) => theme.palette.gradient.green};
      width: 100%;
      height: 30%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
   }

   div.social-media {
      gap: 15px;

      svg {
         width: 30px;
         height: 30px;
      }
   }

   @media (min-width: 480px) {
      grid-template-columns: repeat(2, 1fr);

      &:before {
         width: 30%;
         height: 100%;
         left: 0;
      }

      div.social-media {
         gap: 10px;

         svg {
            width: 25px;
            height: 25px;
         }
      }
   }

   @media (min-width: 600px) {
      div.social-media {
         gap: 20px;
         svg {
            width: 40px;
            height: 40px;
         }
      }
   }

   @media (min-width: 768px) {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
      grid-template-columns: auto;
      grid-template-rows: repeat(3, auto);

      &:before {
         height: 30%;
         width: 100%;
         left: revert;
      }

      div.social-media svg {
         height: 30px;
         width: 30px;
      }
   }

   @media (min-width: 991px) {
      grid-row: 1 / 3;
   }
`;

///////////////////////////////////////////////////////////////////////////////////

export const PictureFrame = styled.picture`
   background-color: grey;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   border: 8px solid white;
   contain: content;
   filter: grayscale(100%);
   transition: all ease 0.3s;
   cursor: pointer;
   width: 100%;
   aspect-ratio: 1 / 1;
   box-shadow: ${({ theme }) => theme.palette.shadow.box};

   img {
      width: 100%;
      height: auto;
      filter: grayscale(100%);
      transition: all ease 0.3s;
   }

   &:hover {
      &,
      img {
         filter: none;
      }
   }

   @media (min-width: 480px) {
      grid-row: 1 / 3;
   }

   @media (min-width: 768px) {
      grid-row: 1 / 2;
   }
`;

///////////////////////////////////////////////////////////////////////////////////

export const CVButton = styled.button`
   width: 100%;
   grid-row: 3 / 4;
   font-size: ${(props) => props.theme.font.size.md};
   font-weight: ${(props) => props.theme.font.weight.bold};
   color: ${(props) => props.theme.palette.text.primary};
   padding: 10px 15px;
   border-radius: 4px;
   border: 1px solid white;
   border-top: none;
   background-color: transparent;
   position: relative;
   contain: content;
   cursor: pointer;
   transition: all ease 0.3s;
   white-space: nowrap;
   box-shadow: ${({ theme }) => theme.palette.shadow.box};

   div {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: ${({ theme }) => theme.palette.gradient.darkBlue};
      top: calc(-100% + 4px);
      left: 0;
      border-bottom: 4px solid white;
      transition: all ease 0.3s;
   }

   &:hover {
      border: none;

      & > p {
         opacity: 0;
      }

      div {
         top: 0;
         ${(props) => props.theme.palette.text.primary};

         p {
            text-shadow: 0px 0px 3px ${(props) => props.theme.palette.text.primary};
         }
      }

      & + picture.pic-frame {
         &,
         img {
            filter: none;
         }
      }
   }

   @media (min-width: 480px) {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
   }

   @media (min-width: 600px) {
      font-size: ${(props) => props.theme.font.size.lg};
      padding: 15px 30px;
   }

   @media (min-width: 768px) {
      grid-row: 3 / 4;
      grid-column: 1 / 2;
   }

   @media (min-width: 1200px) {
      font-size: ${(props) => props.theme.font.size.xlg};
   }
`;

///////////////////////////////////////////////////////////////////////////////////

export const SeeMySkills = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
   justify-content: space-evenly;
   align-items: center;
   border-radius: 20px;
   background-color: ${({ theme }) => theme.palette.transparency.green2};
   backdrop-filter: blur(5px);
   place-self: end;
   box-shadow: ${({ theme }) => theme.palette.shadow.box};

   div {
      position: relative;
   }

   p {
      color: ${({ theme }) => theme.palette.text.cyan3};
      padding: 10px;
      text-shadow: 0px 0px 10px ${({ theme }) => theme.palette.text.cyan3};
      font-size: ${(props) => props.theme.font.size.xlg};
      font-weight: ${(props) => props.theme.font.weight.bold};
      width: 100%;
      text-align: center;
   }

   svg {
      color: ${({ theme }) => theme.palette.text.cyan3};
      height: 13%;
      width: 13%;
      position: absolute;
      top: 10%;
      left: 15%;
      z-index: 2;
      animation: ${handPointer} 2s infinite;
      z-index: 1;
   }

   picture img {
      width: 150px;
   }

   @media (min-width: 480px) {
      flex-direction: row;

      p {
         width: min-content;
         text-align: start;
         font-size: ${(props) => props.theme.font.size.x2lg};
      }
   }

   @media (min-width: 768px) {
      grid-column: 1 / 3;

      p {
         font-size: ${(props) => props.theme.font.size.x3lg};
      }

      picture img {
         width: 200px;
      }
   }

   @media (min-width: 991px) {
      grid-column: 1 / 2;
   }

   @media (min-width: 1200px) {
      p {
         font-size: ${(props) => props.theme.font.size.x4lg};
      }

      picture img {
         width: 250px;
      }
   }
`;
