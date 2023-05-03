import styled, { keyframes } from "styled-components";

export const changeColor = keyframes`
   0% {
      background-color: red;
      font-size: 50px;
   }

   100% {
      background-color: blue;
      font-size: 20px;
   }
`;

export const Container = styled.main`
   background-color: ${(props) => props.theme.colors.testHome};
   height: calc(100vh - 200px);
   display: flex;
   align-items: center;
   justify-items: center;
   animation: ${changeColor} 2s ease 1;


   h1 {
      width: 100%;
      text-align: center;
   }
`;