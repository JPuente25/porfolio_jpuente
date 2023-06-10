import styled from 'styled-components';

export const Title = styled.h1`
   text-align: center;
   font-size: ${({ theme }) => theme.font.size.xlg};

   @media (min-width: 480px) {
      font-size: ${({ theme }) => theme.font.size.x2lg};
   }

   @media (min-width: 600px) {
      font-size: ${({ theme }) => theme.font.size.x3lg};
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
