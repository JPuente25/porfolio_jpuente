import styled, { keyframes } from 'styled-components';

const changeBarColor = (theme: any) => keyframes`
   0%, 10%, 65%, 100% {
      background-color: ${theme.palette.background.cyan};
      background-image: ${theme.palette.gradient.cyan};
   }
   
   15%, 55% {
      background-color: ${theme.palette.background.gold};
      background-image: ${theme.palette.gradient.gold};
   }
   
   0%, 2.5%, 5%, 7.5%, 10%, 12.5%, 15%, 17.5%, 20%, 22.5%, 25%, 27.5%, 30%, 32.5%, 35%, 37.5%, 40%, 42.5%, 45%, 47.5%, 50%, 52.5%, 55%, 57.5%, 60%, 62.5%, 65%, 67.5%, 70%, 72.5%, 75%, 77.5%, 80%, 82.5%, 85%, 87.5%, 90%, 92.5%, 95%, 97.5%, 100%  {
      opacity: 0;
   }

   1.25%, 3.75%, 6.25%, 8.75%, 11.25%, 13.75%, 16.25%, 18.75%, 21.25%, 23.75%, 26.25%, 28.75%, 31.25%, 33.75%, 36.25%, 38.75%, 41.25%, 43.75%, 46.25%, 48.75%, 51.25%, 53.75%, 56.25%, 58.75%, 61.25%, 63.75%, 66.25%, 68.75%, 71.25%, 73.75%, 76.25%, 78.75%, 81.25%, 83.75%, 86.25%, 88.75%, 91.25%, 93.75%, 96.25%, 98.75% {
      opacity: 1;
   }

`;

const shortingBox = (firstWidth: string, secondWidth: string) => keyframes`
   0% {
      width: ${firstWidth};
   }

   10%, 15% {
      width: 0px;
   }

   25%, 50% {
      width: ${secondWidth};
   }

   60%, 65% {
      width: 0px;
   }

   75%, 100% { 
      width: ${firstWidth};
   }
`;

const switchText = (fontSize: string) => keyframes`
0%, 10% {
   transform: translateY(0px);
}

10.00001%, 60% {
   transform: translateY(calc(-${fontSize} - 15px));
}

60.000001%, 100% {
   transform: translateY(0px);
}
`;

export const Container = styled.div`
   padding-top: 20px;
   width: 280px;

   @media (min-width: 380px) {
      width: 340px;
   }

   @media (min-width: 480px) {
      width: 400px;
   }

   @media (min-width: 600px) {
      width: 580px;
   }

   @media (min-width: 991px) {
      width: 900px;
   }

   @media (min-width: 1200px) {
      width: 1060px;
   }
`;

export const List = styled.ul`
   width: 280px;
   height: ${({ theme }) => `calc(${theme.font.size.sm} + 15px)`};
   padding-right: 5px;
   position: relative;
   overflow: hidden;
   animation: ${() => shortingBox('280px', '210px')} 16s linear infinite 2s;

   &:after {
      content: '';
      width: 8px;
      height: ${({ theme }) => `calc(${theme.font.size.sm} + 15px)`};
      display: inline-block;
      background-color: ${({ theme }) => theme.palette.background.cyan};
      background-image: ${({ theme }) => theme.palette.gradient.cyan};
      position: absolute;
      right: 0px;
      top: 0px;
      animation: ${({ theme }) => changeBarColor(theme)} 16s linear infinite 2s;
   }

   li {
      width: calc(100% - 5px);
      overflow: hidden;
      padding: 10px 0px;
      display: flex;
      gap: 10px;
      flex-direction: column;
      top: 0px;
      animation: ${({ theme }) => switchText(theme.font.size.sm2)} 16s linear infinite 2s;

      p {
         white-space: nowrap;
         text-align: start;
         font-size: ${({ theme }) => theme.font.size.sm2};
         background: ${({ theme }) => theme.palette.gradient.gold};
         -webkit-background-clip: text;
         background-clip: text;
         color: transparent;

         &.react-web-developer {
            background: ${({ theme }) => theme.palette.gradient.cyan};
            -webkit-background-clip: text;
            background-clip: text;
         }
      }
   }

   @media (min-width: 380px) {
      width: 340px;
      height: ${({ theme }) => `calc(${theme.font.size.md} + 10px)`};
      animation: ${() => shortingBox('320px', '250px')} 16s linear infinite 2s;

      &:after {
         width: 8px;
         height: ${({ theme }) => `calc(${theme.font.size.md} + 20px)`};
         top: -10px;
      }

      li {
         animation: ${({ theme }) => switchText(theme.font.size.md)} 16s linear infinite 2s;

         p {
            font-size: ${({ theme }) => theme.font.size.md};
         }
      }
   }

   @media (min-width: 480px) {
      width: 400px;
      height: ${({ theme }) => `calc(${theme.font.size.lg} + 10px)`};
      animation: ${() => shortingBox('400px', '300px')} 16s linear infinite 2s;

      &:after {
         width: 8px;
         height: ${({ theme }) => `calc(${theme.font.size.lg} + 20px)`};
         top: -10px;
      }

      li {
         animation: ${({ theme }) => switchText(theme.font.size.lg)} 16s linear infinite 2s;

         p {
            font-size: ${({ theme }) => theme.font.size.lg};
         }
      }
   }

   @media (min-width: 600px) {
      width: 580px;
      height: ${({ theme }) => `calc(${theme.font.size.x2lg} + 10px)`};
      animation: ${() => shortingBox('580px', '450px')} 16s linear infinite 2s;

      &:after {
         width: 10px;
         height: ${({ theme }) => `calc(${theme.font.size.x2lg} + 20px)`};
         top: -10px;
      }

      li {
         animation: ${({ theme }) => switchText(theme.font.size.x2lg)} 16s linear infinite 2s;

         p {
            font-size: ${({ theme }) => theme.font.size.x2lg};
         }
      }
   }

   @media (min-width: 991px) {
      width: 800px;
      height: ${({ theme }) => `calc(${theme.font.size.x3lg} + 10px)`};
      animation: ${() => shortingBox('800px', '600px')} 16s linear infinite 2s;
      padding-right: 10px;

      &:after {
         width: 12px;
         height: ${({ theme }) => `calc(${theme.font.size.x3lg} + 20px)`};
         top: -10px;
      }

      li {
         animation: ${({ theme }) => switchText(theme.font.size.x3lg)} 16s linear infinite 2s;

         p {
            font-size: ${({ theme }) => theme.font.size.x3lg};
         }
      }
   }

   @media (min-width: 1200px) {
      width: 1080px;
      height: ${({ theme }) => `calc(${theme.font.size.x4lg} + 10px)`};
      animation: ${() => shortingBox('1080px', '800px')} 16s linear infinite 2s;
      /* padding-right: 15px; */

      &:after {
         width: 16px;
         height: ${({ theme }) => `calc(${theme.font.size.x4lg} + 20px)`};
         top: -10px;
      }

      li {
         animation: ${({ theme }) => switchText(theme.font.size.x4lg)} 16s linear infinite 2s;

         p {
            font-size: ${({ theme }) => theme.font.size.x4lg};
         }
      }
   }
`;
