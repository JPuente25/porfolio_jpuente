import Container from '@/containers/Container';
import styled from 'styled-components';

/////////////////////////////////////////////////////////////////////////////

export const StyledContainer = styled(Container)`
   min-height: calc(100vh - 70px);
   display: grid;
   grid-template-rows: repeat(2, auto);
   gap: 60px;
   padding-top: 0;
   place-items: center;

   @media (min-width: 640px) {
      grid-template-rows: auto;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
   }
`;

export const Information = styled.section`
   display: flex;
   flex-direction: column;
   gap: 30px;

   button {
      background-image: linear-gradient(to right, #77a1d3 0%, #79cbca 51%, #77a1d3 100%);
   }
`;

/////////////////////////////////////////////////////////////////////////////

export const Title = styled.div`
   margin: 0 auto;

   h1 {
      font-size: ${({ theme }) => theme.font.size.x3lg};
      margin-bottom: 20px;
      white-space: nowrap;
   }

   h2 {
      font-size: ${({ theme }) => theme.font.size.lg};

      &.rwd {
         background: ${({ theme }) => theme.palette.gradient.cyan};
         background-clip: text;
         -webkit-background-clip: text;
         color: transparent;
      }

      &.ci {
         background: ${({ theme }) => theme.palette.gradient.gold};
         background-clip: text;
         -webkit-background-clip: text;
         color: transparent;
      }

      &.rwd {
         background: ${({ theme }) => theme.palette.gradient.cyan};
         background-clip: text;
         -webkit-background-clip: text;
         color: transparent;
      }
   }

   @media (min-width: 480px) {
      h1 {
         font-size: ${({ theme }) => theme.font.size.x5lg};
      }

      h2 {
         font-size: ${({ theme }) => theme.font.size.x2lg};
      }
   }

   @media (min-width: 640px) {
      h1 {
         font-size: ${({ theme }) => theme.font.size.x4lg};
      }
   }

   @media (min-width: 768px) {
      h1 {
         font-size: ${({ theme }) => theme.font.size.x5lg};
      }

      h2 {
         font-size: ${({ theme }) => theme.font.size.x3lg};
      }
   }

   @media (min-width: 991px) {
      h1 {
         font-size: ${({ theme }) => theme.font.size.x6lg};
      }
   }

   @media (min-width: 1200px) {
      h2 {
         font-size: ${({ theme }) => theme.font.size.x4lg};
      }
   }
`;
