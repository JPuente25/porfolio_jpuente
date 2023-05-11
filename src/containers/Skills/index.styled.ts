import Container from '@/components/Container';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
   div.container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 60px;

      & > section {
         transition: all ease 1s;
         opacity: 0;
         transform: translateX(40px);
      }

      &.visible > section {
         opacity: 1;
         transform: translate(0);
      }
   }

   h1 {
      font-size: ${({ theme }) => theme.font.size.x2lg};
      text-align: center;
      margin: 15px auto;
      padding: 0px 20px;
      color: white;
      background: url('https://i.gyazo.com/2baf248a4cf3552e2cecd33a61da2b35.png') center center
         no-repeat;
      background-size: 100% 100%;
   }

   @media (min-width: 480px) {
      h1 {
         font-size: ${({ theme }) => theme.font.size.x3lg};
         margin: 15px auto 30px;
      }
   }

   @media (min-width: 991px) {
      h1 {
         font-size: ${({ theme }) => theme.font.size.x4lg};
      }
   }

   @media (min-width: 1200px) {
   }
`;

export const Technologies = styled.section`
   width: 100%;
   background-color: ${({ theme }) => theme.palette.transparency.secondary};
   padding: 10px;
   border-radius: 8px;
   box-shadow: ${({ theme }) => theme.palette.shadow.box};
`;

export const PersonalSkills = styled.section`
   width: 100%;
   background-color: ${({ theme }) => theme.palette.transparency.blue};
   padding: 10px;
   border-radius: 8px;
   box-shadow: ${({ theme }) => theme.palette.shadow.box};
`;

export const SkillsContainer = styled.div`
   width: 100%;
   display: grid;
   gap: 30px;

   @media (min-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
   }
`;
