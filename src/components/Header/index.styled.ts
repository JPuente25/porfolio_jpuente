import styled from "styled-components";

export const Container = styled.header`
   background-color: ${({theme}) => theme.colors.secondary};
   height: 100px;
   display: flex;
   align-items: center;
   justify-content: center;

   ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
   }

   h4 {
      color:  ${({theme}) => theme.colors.text.white};
   }
`;