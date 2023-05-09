import styled from "styled-components";

export const StyledContainer = styled.div<{bg: string}>`
   width: 100%;
   min-height: 100vh;
   padding: 15px 20px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: ${(props) => props.theme.palette.background.default};
   background: url(${({bg}) => bg}) center center no-repeat;
   background-size: cover;
   position: relative;

   @media (min-width: 768px) {
      padding: 40px 60px; 
   }
`;