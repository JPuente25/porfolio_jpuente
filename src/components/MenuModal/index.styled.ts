import styled from 'styled-components';

export const Container = styled.menu`
   width: 100%;
   max-height: 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: ${({ theme }) => theme.palette.background.header};
   overflow: hidden;
   transition: all ease-in-out 0.75s;
   
   div.language {
      display: flex;
      padding-bottom: 20px;
   }

   ul.links-container {
      width: 100%;
      flex-direction: column;
      align-items: center;
      gap: 15px;
   }

   &.active {
      display: flex;
      max-height: 500px;
      padding-bottom: 20px;
   }
`;
