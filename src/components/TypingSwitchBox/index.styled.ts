import styled, { keyframes } from 'styled-components';

const typingBar = keyframes`
   0%, 100%  {
      opacity: 0;
   }

   50% {
      opacity: 1;
   }
`;

const shortingBox = keyframes`
   0%, 100% {
      max-width: 1440px;
   }

   40%, 60% {
      max-width: 0px;
   }
`;

const switchText = keyframes`
   0%, 25%, 75.000001%, 100% {
      transform: translateY(0px);
   }

   25.00001%, 75% {
      transform: translateY(calc(-100% - 10px));
   }
`;

export const Container = styled.div`
   width: 100%;
   margin: 40px auto 0px;
`;

export const SwitchBox = styled.div`
   height: 14.4px;
   display: flex;
   gap: 10px;
   flex-direction: column;
   overflow-y: hidden;

   @media (min-width: 380px) {
      height: 20px;
   }

   @media (min-width: 480px) {
      height: 24px;
   }

   @media (min-width: 600px) {
      height: 32px;
   }

   @media (min-width: 991px) {
      height: 50px;
   }

   @media (min-width: 1200px) {
      height: 60px;
   }
`;

export const SwitchItem = styled.div`
   width: min-content;
   position: relative;
   padding-right: 8px;
   animation: ${switchText} 20s linear infinite 5s;

   &:after {
      content: '';
      height: 100%;
      aspect-ratio: 1 / 5;
      display: inline-block;
      background-color: ${({ theme }) => theme.palette.background.opposite};
      position: absolute;
      right: 0px;
      bottom: 0px;
      animation: ${typingBar} 0.5s linear infinite 5s;
   }

   p {
      white-space: nowrap;
      text-align: start;
      width: min-content;
      font-size: ${({ theme }) => theme.font.size.sm2};
      background: ${({ theme }) => theme.palette.gradient.gold};
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      animation: ${shortingBox} 10s linear infinite 5s;

      &.react-web-developer {
         background: ${({ theme }) => theme.palette.gradient.cyan};
         -webkit-background-clip: text;
         background-clip: text;
      }

      @media (min-width: 380px) {
         font-size: ${({ theme }) => theme.font.size.md};
      }

      @media (min-width: 480px) {
         font-size: ${({ theme }) => theme.font.size.lg};
      }

      @media (min-width: 600px) {
         font-size: ${({ theme }) => theme.font.size.x2lg};
      }

      @media (min-width: 991px) {
         font-size: ${({ theme }) => theme.font.size.x3lg};
      }

      @media (min-width: 1200px) {
         font-size: ${({ theme }) => theme.font.size.x4lg};
      }
   }
`;
