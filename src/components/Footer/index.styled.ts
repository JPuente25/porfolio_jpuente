import styled from 'styled-components';

export const Container = styled.footer`
   width: 100%;
   background-color: ${({ theme }) => theme.palette.background.footer};
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 20px;
`;

export const Location = styled.div`
   display: flex;
   align-items: center;
   padding: 15px 0;
   gap: 10px;

   svg {
      font-size: ${({ theme }) => theme.font.size.lg};
   }

   p {
      font-size: ${({ theme }) => theme.font.size.sm};
   }

   @media (min-width: 768px) {
      svg {
         font-size: ${({ theme }) => theme.font.size.x2lg};
      }
      p {
         font-size: ${({ theme }) => theme.font.size.md};
      }
   }
`;

export const Copyright = styled.div`
   padding: 15px 0;

   p {
      text-align: center;
      font-size: ${({ theme }) => theme.font.size.sm};
   }

   @media (min-width: 768px) {
      p {
         font-size: ${({ theme }) => theme.font.size.md};
      }
   }
`;
