import styled from 'styled-components';

export const Title = styled.h1`
   width: min-content;
   width: 100%;
   text-align: center;
   color: ${({ theme }) => theme.palette.text.primary};
   position: relative;
   z-index: 0;
   white-space: nowrap;
   margin: 20px auto;
   font-size: ${({ theme }) => theme.font.size.x1lg};
   text-shadow: 0px 0px 5px ${({ theme }) => theme.palette.text.opposite};

   &:after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 0;
      z-index: -1;
      border-radius: 0 20px 0 20px;
      background: ${({ theme }) => theme.palette.gradient.gold};
   }

   @media (min-width: 480px) {
      margin: 30px auto;
      font-size: ${({ theme }) => theme.font.size.x2lg};
   }

   @media (min-width: 600px) {
      margin-bottom: 50px;
      font-size: ${({ theme }) => theme.font.size.x3lg};
   }

   @media (min-width: 768px) {
      margin-top: 0px;
   }

   @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.font.size.x4lg};
   }
`;
