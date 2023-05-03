import styled from "styled-components";

export const Container = styled.main`
   background-color: ${(props) => props.theme.colors.testHome};
   height: calc(100vh - 200px);
   display: flex;
   align-items: center;
   justify-items: center;

   h1 {
      width: 100%;
      text-align: center;
   }
`;