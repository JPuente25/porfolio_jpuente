import styled from 'styled-components';

export const StyledContainer = styled.div`
   width: 100%;
   max-width: 1440px;
   margin: 0 auto;
   height: auto;
   min-height: 100vh;
   padding: 60px 0px;
   position: relative;

   &:after {
      content: '';
      display: block;
      background-color: ${({ theme }) => theme.palette.text.cyan};
      height: 1px;
      width: 90%;
      position: absolute;
      bottom: 0;
      left: 5%;
      border-radius: 0.5px;
   }
`;
