import styled from 'styled-components';

export const Container = styled.section`
   height: 100vh;
   width: 100%;
   padding: 80px 30px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   background: ${({ theme }) => theme.palette.gradient.darkBlue2};

   h1 {
      text-align: center;
      font-size: ${({ theme }) => theme.font.size.x6lg};
   }

   p {
      text-align: center;
      font-size: ${({ theme }) => theme.font.size.xlg};
   }

   a {
      width: min-content;
      padding: 5px 10px;
      border: 1px solid ${({ theme }) => theme.palette.background.opposite};
      border-radius: 8px;
      font-size: ${({ theme }) => theme.font.size.xlg};
      box-shadow: 0;
      white-space: nowrap;
      transition: 0.3s;

      &:hover {
         transform: translate(-4px, -4px);
         box-shadow: ${({ theme }) => theme.palette.shadow.box};
      }
   }

   @media (min-width: 768px) {
      h1 {
         font-size: ${({ theme }) => theme.font.size.x7lg};
      }

      p {
         font-size: ${({ theme }) => theme.font.size.x3lg};
      }

      a {
         font-size: ${({ theme }) => theme.font.size.x3lg};
      }
   }

   @media (min-width: 991px) {
      h1 {
         font-size: ${({ theme }) => theme.font.size.superxlg};
      }
   }
`;
