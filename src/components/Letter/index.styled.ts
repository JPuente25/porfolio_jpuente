import styled from 'styled-components';

export const letterSpeed = 0.5; //higher is slower 

export const Container = styled.div`
   width: 280px;
   margin: 0 auto;
   position: relative;
   contain: content;
   z-index: 1;

   &.saveLetter {
      div.content div.form {
         transition: z-index ease-in-out ${letterSpeed * 2}s, bottom ease-in-out ${letterSpeed * 2}s;
         bottom: -38%; 
         z-index: 0;
      }

      div.up {
         transition: transform ease-in-out ${letterSpeed * 2}s ${letterSpeed * 2.5}s, z-index 100ms ${letterSpeed * 2}s;
         z-index: 3;
         transform: rotate3d(1, -0.414, 0, 180deg);
      }

      div.left {
         transition: z-index 100ms ${letterSpeed * 2}s;
         z-index: 2;
      }

      div.right {
         transition: z-index 100ms ${letterSpeed * 2}s;
         z-index: 1;
      }

      div.openButton {
         transition: opacity ease ${letterSpeed}s ${letterSpeed * 4.5}s, z-index 100ms ${letterSpeed * 4.5}s, background-color ${letterSpeed * 0.5}s ease;
         opacity: 1;
         z-index: 4;
      }
   }

   &.openLetter {
      div.content div.form {
         transition: z-index ease-in-out ${letterSpeed * 2}s ${letterSpeed * 2.5}s, bottom ease-in-out ${letterSpeed * 2}s ${letterSpeed * 2.5}s;
         bottom: 27%; 
         z-index: 1;
      }

      div.up {
         transition: transform ease-in-out ${letterSpeed * 2}s, z-index step-start 100ms ${letterSpeed * 2}s;
         z-index: 0;
         transform: rotateZ(45deg);
      }

      div.left {
         transition: z-index 100ms ${letterSpeed * 2}s;
         z-index: 3;
      }

      div.right {
         transition: z-index 100ms ${letterSpeed * 2}s;
         z-index: 2;
      }

      div.openButton {
         transition: opacity ease ${letterSpeed}s, z-index 100ms ${letterSpeed}s, background-color ${letterSpeed * 0.5}s ease;
         opacity: 0;
         z-index: 0;
      }
   }

   @media (min-width: 440px) {
      width: 400px;

      &.saveLetter {
         div.content div.form {
            bottom: -30%; 
         }
      }

      &.openLetter {
         div.content div.form {
            bottom: 33%; 
         }
      }
   }

   @media (min-width: 640px) {
      width: 600px;

      &.saveLetter {
         div.content div.form {
            bottom: -40%; 
         }

         div.up {
            transform: rotate3d(1, -0.414, 0, 180deg) skew(-15deg, -15deg);
         }
      }

      &.openLetter {
         div.content div.form {
            bottom: 27%; 
         }

         div.up {
            transform: rotateZ(45deg) skew(-15deg, -15deg);
         }
      }
   }

   @media (min-width: 768px) {
      width: 324px;

      &.saveLetter {
         div.content div.form {
            bottom: -63%; 
         }
      }

      &.openLetter {
         div.content div.form {
            bottom: 16%; 
         }
      }
   }

   @media (min-width: 991px) {
      width: 440px;

      &.saveLetter {
         div.content div.form {
            bottom: -53%; 
         }
      }

      &.openLetter {
         div.content div.form {
            bottom: 22%; 
         }
      }
   }

   @media (min-width: 1200px) {
      width: 540px;

      &.saveLetter {
         div.content div.form {
            bottom: -50%; 
         }
      }

      &.openLetter {
         div.content div.form {
            bottom: 24%; 
         }
      }
   }
`;

///////////////////////////////////////////////////////////////////////////////////////

export const Content = styled.div`
   width: 95%;
   margin: 0 auto;
   contain: content;

   div.form-placeholder {
      width: 100%;
      height: 570px; 
      visibility: hidden;
      z-index: 0;
   }

   div.form {
      width: 100%;
      height: 400px; 
      transition: 2s;
      position: absolute;
      z-index: 1;
   }

   @media (min-width: 440px) {
      div.form-placeholder {
         height: 675px; 
      }

      div.form {
         height: 450px; 
      }
   }

   @media (min-width: 640px) {
      div.form-placeholder {
         height: 700px; 
      }

      div.form {
         height: 500px; 
      }
   }

   @media (min-width: 768px) {
      div.form-placeholder {
         height: 600px; 
      }

      div.form {
         height: 500px; 
      }
   }

   @media (min-width: 991px) {
      div.form-placeholder {
         height: 650px; 
      }

      div.form {
         height: 500px; 
      }
   }

   @media (min-width: 1200px) {
      div.form-placeholder {
         height: 720px; 
      }

      div.form {
         height: 550px; 
      }
   }
`;

///////////////////////////////////////////////////////////////////////////////////////

export const UpperTab = styled.div`
   position: absolute;
   left: 14.5%;
   bottom: 15.4%; 
   width: 70.5%;
   aspect-ratio: 1 / 1;
   background-color: rgb(150, 30, 40);
   background: linear-gradient(
      135deg,
      rgba(150, 30, 40, 1) 0%,
      rgba(150, 30, 40, 1) 49.999999%,
      rgba(150, 30, 40, 1) 50%,
      transparent 50.000001%,
      transparent 100%
   );
   border-radius: 15% 0 0 0;
   /* transition: all ease-in-out 2s 2.5s; */

   @media (min-width: 440px) {
      bottom: 18.5%;
   }

   @media (min-width: 640px) {
      left: 22%;
      bottom: 10.3%;
      width: 56%;
      border-radius: 8% 0 0 0;
   }

   @media (min-width: 768px) {
      bottom: 6.4%;
   }

   @media (min-width: 991px) {
      bottom: 8.1%;
   }

   @media (min-width: 1200px) {
      bottom: 9%;
   }
`;

export const LeftTab = styled.div`
   position: absolute;
   left: 0;
   bottom: 0;
   width: 100%;
   aspect-ratio: 3 / 2;
   background: rgb(231, 76, 60);
   background: linear-gradient(
      33.7deg,
      rgba(231, 76, 60, 1) 0%,
      rgba(231, 76, 60, 1) 49.999999%,
      rgba(113, 37, 29, 1) 50%,
      transparent 50.000001%,
      transparent 100%
   );
   border-radius: 0 100% 0 0;

   @media (min-width: 640px) {
      aspect-ratio: 2.5 / 1;
      background: linear-gradient(
         21.7deg,
         rgba(231, 76, 60, 1) 0%,
         rgba(231, 76, 60, 1) 49.999999%,
         rgba(113, 37, 29, 1) 50%,
         transparent 50.000001%,
         transparent 100%
      );
   }
`;

export const RightTab = styled.div`
   position: absolute;
   right: 0;
   bottom: 0;
   width: 100%;
   aspect-ratio: 3 / 2;
   background: rgb(231, 76, 60);
   background: linear-gradient(
      -33.7deg,
      rgba(192, 57, 43, 1) 0%,
      rgba(192, 57, 43, 1) 49.999999%,
      rgba(192, 57, 43, 1) 50%,
      transparent 50.000001%,
      transparent 100%
   );
   border-radius: 100% 0 0 0;

   @media (min-width: 640px) {
      aspect-ratio: 2.5 / 1;
      background: linear-gradient(
         -21.7deg,
         rgba(192, 57, 43, 1) 0%,
         rgba(192, 57, 43, 1) 49.999999%,
         rgba(192, 57, 43, 1) 50%,
         transparent 50.000001%,
         transparent 100%
      );
   }
`;

export const Background = styled.div`
   position: absolute;
   right: 0;
   bottom: 0;
   width: 100%;
   aspect-ratio: 3 / 2;
   background: #701e16;

   @media (min-width: 640px) {
      aspect-ratio: 2.5 / 1;
   }
`;

export const OpenButton = styled.div`
   position: absolute;
   bottom: 8%;
   left: calc(50% - 26px);
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background: ${({ theme }) => theme.palette.background.primary};
   display: grid;
   place-content: center;
   cursor: pointer;
   border: 2px solid ${({ theme }) => theme.palette.text.primary};

   svg {
      font-size: ${({ theme }) => theme.font.size.xlg};
   }

   &:hover {
      background: ${({ theme }) => theme.palette.background.gold2};

      svg {
         color: ${({ theme }) => theme.palette.text.opposite};
      }
   }

   @media (min-width: 440px) {
      bottom: 10%;
   }

   @media (min-width: 640px) {
      bottom: 8%;
      left: calc(50% - 30px);
      width: 60px;
      height: 60px;

      svg {
         font-size: ${({ theme }) => theme.font.size.x2lg};
      }
   }

   @media (min-width: 768px) {
      bottom: 4%;
      left: calc(50% - 26px);
      width: 50px;
      height: 50px;

      svg {
         font-size: ${({ theme }) => theme.font.size.xlg};
      }
   }

   @media (min-width: 991px) {
      bottom: 4%;
   }

   @media (min-width: 1200px) {
      bottom: 6%;
      left: calc(50% - 30px);
      width: 60px;
      height: 60px;

      svg {
         font-size: ${({ theme }) => theme.font.size.x2lg};
      }
   }
`;
