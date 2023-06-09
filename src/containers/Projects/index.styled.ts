import styled from 'styled-components';

export const Title = styled.h1`
   width: 100%;
   padding: 10px;
   text-align: center;
   font-size: ${({ theme }) => theme.font.size.xlg};
   text-shadow: 0px 0px 5px ${({ theme }) => theme.palette.text.opposite};
   border-radius: 0 20px 0 20px;
   background: ${({ theme }) => theme.palette.gradient.gold};

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

export const ProjectsContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 20px 0px;
   gap: 60px;

   @media (min-width: 480px) {
      gap: 80px;
   }

   @media (min-width: 768px) {
      gap: 100px;
   }

   @media (min-width: 1200px) {
      gap: 120px;
   }
`;
