import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.footer`
   width: 100%;
   background-color: ${({ theme }) => theme.palette.background.footer};
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 20px;
   color: ${({ theme }) => theme.palette.text.primary};

   @media (min-width: 480px) {
      height: 220px;
   }

   @media (min-width: 768px) {
      height: 220px;
   }
`;

export const Location = styled.div`
   display: flex;
   align-items: center;
   font-size: ${({ theme }) => theme.font.size.sm};
   padding: 15px 0;

   svg {
      font-size: 25px;
   }

   @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.font.size.md};
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
