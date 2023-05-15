import backgrounds from '@/variables/backgrounds';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

export const handPointer = keyframes`
   0% {
      opacity: 0.6;
   }

   50% {
      opacity: 0;
      box-shadow: 0px 0px 4px 30px white;
   }
`;

export const Container = styled.picture`
   display: block;
   width: 100%;
   position: relative;

   img {
      width: 100%;
      height: auto;
   }
`;

export const SkillsScreen = styled(Link)`
   position: absolute;
   width: 55.5%;
   height: 30%;
   top: 23.4%;
   right: 13.9%;
   transform: rotateZ(30deg) rotateY(10deg) skew(30deg);
   background-image: url(${backgrounds.skills});
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: center;
   white-space: nowrap;
   cursor: pointer;
   z-index: 1;

   h3 {
      font-size: 18px;
   }

   div {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: 0.6;
      transition: all 0.3s;
      z-index: 2;

      &:hover {
         opacity: 0;
         animation: ${handPointer} 2s 1;
      }
   }

   @media (min-width: 768px) {
      h3 {
         font-size: 24px;
      }
   }

   @media (min-width: 1200px) {
      h3 {
         font-size: 30px;
      }
   }
`;
