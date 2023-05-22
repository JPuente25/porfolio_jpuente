import Container from '@/components/Container';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

/////////////////////////////////////////////////////////////////////////////

export const StyledContainer = styled(Container)`
   div.container {
      height: calc(100vh - 60px);
      padding-top: 55px;
      display: grid;
      grid-template-rows: repeat(2, auto);

      @media (min-width: 768px) {
         height: calc(100vh - 120px);
         padding-top: 0;
      }
   }
`;

/////////////////////////////////////////////////////////////////////////////

export const SectionContainer = styled.article`
   display: grid;
   grid-template-rows: repeat(3, auto);
   place-items: center;
   max-height: 100%;

   @media (min-width: 600px) {
      grid-template-rows: repeat(2, auto);
      grid-template-columns: 1fr 2fr;
   }

   @media (min-width: 768px) {
      grid-template-columns: 2fr 3fr;
   }
`;

/////////////////////////////////////////////////////////////////////////////

export const Title = styled.div`
   font-size: ${({ theme }) => theme.font.size.x2lg};
   padding: 20px 0;
   text-shadow: 0px 0px 5px ${({ theme }) => theme.palette.text.tertiary};

   h1 {
      color: ${({ theme }) => theme.palette.text.tertiary};
      text-align: center;

      span {
         &:nth-child(1) {
            color: ${({ theme }) => theme.palette.text.cyan};
         }

         &:nth-child(2) {
            color: ${({ theme }) => theme.palette.text.gold};
         }
      }
   }

   @media (min-width: 480px) {
      font-size: ${({ theme }) => theme.font.size.x3lg};
   }

   @media (min-width: 600px) {
      text-shadow: 0px 0px 10px ${({ theme }) => theme.palette.text.opposite};
      h1 {
         text-align: start;
      }
   }

   @media (min-width: 991px) {
      font-size: ${({ theme }) => theme.font.size.x4lg};
   }
`;

/////////////////////////////////////////////////////////////////////////////

export const Welcome = styled(Link)`
   width: 100%;
   max-width: 900px;
   display: flex;
   gap: 10px;
   align-items: center;
   justify-content: space-between;
   border: 1px solid ${({ theme }) => theme.palette.text.gold};
   border-radius: 4px;
   padding: 10px 12px;
   background-color: ${({ theme }) => theme.palette.transparency.green2};
   backdrop-filter: blur(4px);
   font-weight: ${({ theme }) => theme.font.weight.bold};
   cursor: pointer;
   box-shadow: ${({ theme }) => theme.palette.shadow.box};

   p {
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: ${({ theme }) => theme.font.size.md};
      margin: 0 auto;
      text-shadow: 0px 0px 5px ${({ theme }) => theme.palette.text.opposite};
   }

   svg {
      flex-shrink: 0;
      width: 30px;
      height: 30px;
      color: ${({ theme }) => theme.palette.text.gold};

      &.arrow-left {
         display: none;
      }
   }

   @media (min-width: 480px) {
      p {
         font-size: ${({ theme }) => theme.font.size.lg};
      }
   }

   @media (min-width: 600px) {
      padding: 20px 12px;
      grid-column: 1 / 3;
      svg {
         width: 40px;
         height: 40px;
      }
   }

   @media (min-width: 768px) {
      border: 2px solid ${({ theme }) => theme.palette.text.gold};
   }

   @media (min-width: 991px) {
      p {
         font-size: ${({ theme }) => theme.font.size.lg};
      }
   }

   @media (min-width: 991px) {
      svg {
         width: 50px;
         height: 50px;
      }
      p {
         font-size: ${({ theme }) => theme.font.size.xlg};
      }
   }

   @media (min-width: 1200px) {
      p {
         font-size: ${({ theme }) => theme.font.size.x2lg};
      }
   }
`;
