import styled, { keyframes } from 'styled-components';

const scrollingPage = keyframes`
   0%, 8.33%{
      transform: translateY(0%);
      z-index: -1;
   }

   33.33% {
      transform: translateY(-100%);
      opacity: 1;
      z-index: -1;
   }

   35% {
      opacity: 0;
      z-index: -3;
   }

   66.65% {
      transform: translateY(-100%);
      opacity: 0;
   }

   66.66%, 100% {
      transform: translateY(0%);
      opacity: 1;
      z-index: -3;
   }
`;

export const Container = styled.div`
   display: flex;
   width: 100%;
   aspect-ratio: 1 / 1.9;
   position: relative;
   z-index: 1;
   contain: content;
   border-radius: 13%;
   height: min-content;

   img.device {
      position: absolute;
      top: -0.5%;
      width: 100%;
      height: auto;
   }

   img.project {
      width: 94%;
      height: auto;
      position: absolute;
      left: 3%;
      top: 1%;
      transition: all linear 15s;
      transform: translateY(0%);
      z-index: -2;
      background-color: ${({ theme }) => theme.palette.background.default};

      &.project-1 {
         animation: ${scrollingPage} 45s linear infinite;
      }

      &.project-2 {
         animation: ${scrollingPage} 45s linear infinite 15s;
      }

      &.project-3 {
         z-index: -3;
         animation: ${scrollingPage} 45s linear infinite 30s;
      }
   }
`;
