import styled, { keyframes } from 'styled-components';

const cloudMovement = (x: string, y: string) => keyframes`
   0%, 100% {
      transform: translate(0, 0);
   }

   50% {
      transform: translate(${x}, ${y});
   }
`;

const sunEffect = keyframes`
	0% { 
      transform: rotate(0deg); 
      transform: rotate(0deg);
   }  

   100% { 
      transform: rotate(360deg); 
      transform: rotate(360deg);
   }
`;

export const Picture = styled.picture`
   width: 100%;
   position: relative;
   flex-shrink: 0;
`;

export const BuildingImg = styled.img`
   width: 100%;
`;

export const CloudOneImg = styled.img`
   position: absolute;

   &.cloud-1-1 {
      width: 10%;
      top: 5%;
      left: 5%;
      animation: ${() => cloudMovement('-60%', '60%')} 12s linear infinite;
   }

   &.cloud-1-2 {
      width: 7.5%;
      top: 17.5%;
      left: 12.5%;
      animation: ${() => cloudMovement('-100%', '100%')} 7s linear infinite 1s;
   }

   &.cloud-1-3 {
      width: 5%;
      top: 5%;
      left: 37%;
      animation: ${() => cloudMovement('-100%', '100%')} 7s linear infinite 2s;
   }
`;

export const CloudTwoImg = styled.img`
   position: absolute;

   &.cloud-2-1 {
      width: 10%;
      top: 35%;
      right: 0%;
      animation: ${() => cloudMovement('-60%', '-60%')} 7s linear infinite;
   }

   &.cloud-2-2 {
      width: 12.5%;
      top: 17.5%;
      right: 12.5%;
      animation: ${() => cloudMovement('-60%', '-60%')} 7s linear infinite 1s;
   }

   &.cloud-2-3 {
      width: 5%;
      top: 15%;
      right: 10%;
      animation: ${() => cloudMovement('-300%', '-300%')} 20s linear infinite 2s;
   }
`;

export const Sun = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   margin: auto;
   width: 15%;
   aspect-ratio: 1 / 1;
   border-radius: 50%;
   background: white;
   background-color: #ffff66;
   opacity: 0.9;
   box-shadow: 0 0 40px 15px white;

   div.ray_box {
      position: absolute;
      margin: auto;
      top: 0px;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      animation: ${sunEffect} 120s linear infinite;
   }

   div.ray {
      background: -webkit-linear-gradient(
         top,
         rgba(255, 255, 255, 0) 0%,
         rgba(255, 255, 255, 0.8) 50%,
         rgba(255, 255, 255, 0) 100%
      );
      background: linear-gradient(
         top,
         rgba(255, 255, 255, 0) 0%,
         rgba(255, 255, 255, 0.8) 50%,
         rgba(255, 255, 255, 0) 100%
      );
      margin-left: 1.5%;
      border-radius: 80% 80% 0 0;
      position: absolute;
      opacity: 0.1;
   }

   div.ray1 {
      height: 200%;
      width: 15%;
      transform: rotate(-180deg);
      top: -180%;
      left: 20%;
   }

   div.ray2 {
      height: 100%;
      width: 8%;
      transform: rotate(-140deg);
      top: -70%;
      left: 80%;
   }

   div.ray3 {
      height: 150%;
      width: 40%;
      transform: rotate(-100deg);
      top: -50%;
      right: -60%;
   }

   div.ray4 {
      height: 100%;
      width: 18%;
      transform: rotate(305deg);
      bottom: -50%;
      right: -30%;
   }

   div.ray5 {
      height: 140%;
      width: 30%;
      transform: rotate(-5deg);
      top: 70%;
      left: 50%;
   }

   div.ray6 {
      height: 90%;
      width: 50%;
      transform: rotate(30deg);
      bottom: -50%;
      left: -30%;

   }

   div.ray7 {
      height: 170%;
      width: 10%;
      transform: rotate(60deg);
      top:  -35%;
      left: -20%;
   }

   div.ray8 {
      height: 115%;
      width: 28%;
      transform: rotate(100deg);
      top: -20%;
      left: -30%;
   }

   div.ray9 {
      height: 80%;
      width: 10%;
      transform: rotate(120deg);
      top: -40%;
      left: -20%;
   }

   div.ray10 {
      height: 180%;
      width: 23%;
      transform: rotate(150deg);
      top: -120%;
      left: -20%;
   }
`;