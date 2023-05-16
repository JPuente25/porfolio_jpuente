import styled, { keyframes } from 'styled-components';

const increaseSize = keyframes`
   0% {
      transform: scale(0);
   }

   100% {
      transform: scale(1);
   }
`;

const rotate360 = keyframes`
   0% {
      transform: rotateZ(0deg);
   }

   100% {
      transform: rotateZ(360deg);
   }
`;

const closeUp =  keyframes`
   0% {
      opacity: 1;
      /* transform: scale(1);
      border-radius: 50%; */
   }

   100% {
      opacity: 0;

      /* transform: scale(0);
      border-radius: 50%; */
   }
`;

export const Container = styled.section`
   position: fixed;
   background-color: ${({ theme }) => theme.palette.background.darkBlue};
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   z-index: 30;
   display: grid;
   place-items: center;
   animation:  ${closeUp} 0.5s linear 1 forwards 4s;


   &.hidden {
      display: none;
   }

   div.figure {
      position: absolute;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
   }

   div.big-blue {
      width: 50%;
      top: 25%;
      left: 25%;
      background-color: #0545d3;
      transform: scale(0);
      animation: ${increaseSize} 1s linear 1 forwards;
   }

   div.big-purple {
      width: 42%;
      background-color: #7939a4;
      opacity: 0.8;
      top: 26%;
      left: 20%;
      transform: scale(0);
      animation: ${increaseSize} 1s linear 1 forwards 0.5s;
   }

   div.big-orange {
      width: 33%;
      background-color: #b87d32;
      opacity: 0.9;
      top: 22%;
      right: 20%;
      transform: scale(0);
      animation: ${increaseSize} 1s linear 1 forwards 1s;
   }

   div.big-pink {
      width: 33%;
      background-color: #d24855;
      opacity: 0.8;
      top: 49%;
      right: 20%;
      transform: scale(0);
      animation: ${increaseSize} 1s linear 1 forwards 1.5s;
   }

   div.lil-pink {
      width: 10%;
      background-color: #d24855;
      top: 7%;
      right: 41%;
      transform: scale(0);
      animation: ${increaseSize} 1s linear 1 forwards 0.8s;
   }

   div.lil-pink-2 {
      width: 6%;
      background-color: #d24855;
      top: 42%;
      left: 10%;
      transform: scale(0);
      animation: ${increaseSize} 1s linear 1 forwards 0.3s;
   }

   div.lil-blue {
      width: 10%;
      background-color: #0545d3;
      top: 15%;
      left: 23%;
      transform: scale(0);
      animation: ${increaseSize} 1s linear 1 forwards 2s;
   }

   div.lil-purple {
      width: 4%;
      background-color: #7939a4;
      top: 60%;
      left: 11%;
      transform: scale(0);
      animation: ${increaseSize} 1s linear 1 forwards 0.7s;
   }

   div.lil-orange {
      width: 7%;
      background-color: #b87d32;
      bottom: 8%;
      left: 22%;
      transform: scale(0);
      animation: ${increaseSize} 1s linear 1 forwards 1.8s;
   }

   div.react-atom {
      width: 45%;
      top: 27.5%;
      left: 27.5%;
      background: url('https://i.gyazo.com/24167cf916456a9f951915cacd858ed0.png') center center
         no-repeat;
      background-size: contain;
      transform: scale(0);
      animation: ${increaseSize} 1s linear 1 forwards 0.3s, ${rotate360} 10s linear infinite 1.3s;
   }
`;

export const LoaderContainer = styled.div`
   width: 60%;
   aspect-ratio: 1 / 1;
   position: relative;

   @media (min-width: 480px) {
      width: 50%;
   }

   @media (min-width: 600px) {
      width: 40%;
   }

   @media (min-width: 768px) {
      width: 30%;
   }
`;
