import styled, { keyframes } from 'styled-components';

export const changeColor = keyframes`
   0% {
      color: red;
      font-size: 50px;
      opacity: 0;
   }

   100% {
      color: blue;
      font-size: 20px;
      opacity: 1;
   }
`;
export const changeColor2 = keyframes`
   0% {
      color: yellow;
      font-size: 50px;
   }

   100% {
      color: green;
      font-size: 20px;
   }
`;

export const Container = styled.main`
   width: 100%;
   /* background-color: ${(props) => props.theme.colors.testHome}; */
   height: calc(100vh - 200px);
   height: auto;
   display: flex;
   align-items: center;
   justify-items: center;
   position: relative;

   h1 {
      width: 100%;
      text-align: center;
   }

   div.buttons {
      position: absolute;
      bottom: 0%;
      left: 50%;
   }
`;

export const Carousel = styled.div`
   width: 100%;
   display: flex;
   overflow-x: hidden;
   position: relative;
`;

export const CarouselItem = styled.div`
   width: 100%;
   flex-shrink: 1;
   /* transform: rotateY(0deg); */

   &.on-screen {
      animation: ${changeColor} 2s ease 1;
   }
`;
