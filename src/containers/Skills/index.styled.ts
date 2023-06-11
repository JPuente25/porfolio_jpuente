import Container from '@/containers/Container';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
   display: flex;
   height: auto;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   gap: 90px;

   @media only screen and (min-width: 768px) {
      flex-direction: row;
      align-items: start;
      gap: 60px;
   }
`;

export const Title = styled.h1`
   font-size: ${({ theme }) => theme.font.size.x2lg};
   text-align: center;
   margin-bottom: 30px;

   @media (min-width: 480px) {
      font-size: ${({ theme }) => theme.font.size.x3lg};
   }

   @media (min-width: 991px) {
      font-size: ${({ theme }) => theme.font.size.x4lg};
   }
`;

export const TechStack = styled.article`
   width: 100%;
   padding: 0 10px;
   overflow: hidden;
`;

export const Stack = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 15px;
   align-items: center;
   justify-content: center;

   @media only screen and (min-width: 480px) {
      gap: 20px;
   }
`;
