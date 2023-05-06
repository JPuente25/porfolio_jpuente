import styled from 'styled-components';

export const Container = styled.menu`
   background-color: ${({ theme }) => theme.palette.background.header};
   width: 100%;
   height: 0;
   overflow: hidden;
   transition: all linear 0.3s;

   ul.links-container {
      width: 100%;
      flex-direction: column;
      align-items: center;
      gap: 15px;
   }

   &.active {
      display: flex;
      height: 221.78px;
      padding: 20px 0;
   }
`;
