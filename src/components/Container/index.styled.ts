import styled from 'styled-components';

export const StyledContainer = styled.div<{ bg: string }>`
   width: 100%;
   margin: 0 auto;
   height: auto;
   min-height: 100vh;
   padding: 30px 20px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: ${(props) => props.theme.palette.background.default};
   background: url(${({ bg }) => bg}) center center no-repeat;
   background-size: cover;
   position: relative;

   @media (min-width: 768px) {
      padding: 60px 40px;
   }
`;

export const BackgroundFilter = styled.div`
   position: absolute;
   width: 100%;
   height: 20px;
   left: 0;

   &.bottom {
      bottom: 0;
      background: rgb(0, 0, 0);
      background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 100%);
   }

   &.top {
      top: 0;
      background: rgb(0, 0, 0);
      background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 100%);
   }
`;
