import styled from "styled-components";

export const Container = styled.footer`
   background-color: ${({theme}) => theme.colors.primary};
   height: 100px;
   display: flex;
   align-items: center;
   justify-content: center;

   h1 {
      text-align: center;
   }
`;