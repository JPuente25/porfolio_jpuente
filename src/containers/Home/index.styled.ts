import Container from '@/components/Container';
import backgrounds from '@/variables/backgrounds';
import styled, { keyframes } from 'styled-components';

const transitionIn = keyframes`
0% {
   opacity: 0;
   transform: translateY(20px);
}

100% {
   opacity: 1;
   transform: translateY(0px);
}
`;

export const StyledContainer = styled(Container)`
   color: ${(props) => props.theme.palette.text.primary};
   padding-top: 85px; //+70px on top because of Header height
   flex-direction: column;

   @media (min-width: 768px) {
      gap: 15px;
      padding: 110px 60px 40px; //+70px on top because of Header height
   }
`;

export const SectionContainer = styled.article`
   flex: 50%;
   display: grid;
   grid-template-rows: repeat(3, auto);
   place-items: center;
   row-gap: 20px;
   animation: ${transitionIn} 0.5s linear;

   & > div.title,
   & > div.introduction,
   & > picture {
      transition: all ease 1s;
      opacity: 0;
   }

   & > div.introduction {
      transform: translateX(40px);
   }

   & > div.title {
      transform: translateY(-60px);
   }

   & > picture {
      transform: translateY(40px);
   }

   &.visible {
      div.title,
      picture,
      div.introduction {
         opacity: 1;
         transform: translate(0px, 0px);
      }
   }

   picture {
      width: 100%;
      max-width: 600px;
      height: auto;
      filter: ${({ theme }) => theme.palette.shadow.primary};
   }

   @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 20px;

      picture {
         grid-column: 2 / 3;
         grid-row: 1 / 3;
      }
   }

   @media (min-width: 991px) {
      column-gap: 30px;

      picture {
         align-self: center;
      }
   }
`;

export const Title = styled.div`
   font-size: ${({ theme }) => theme.font.size.x2lg};
   padding: 20px 0;
   text-shadow: 0px 0px 5px ${({ theme }) => theme.palette.text.tertiary};

   h1 {
      color: ${({ theme }) => theme.palette.text.gold};
      &:nth-child(1) {
         color: ${({ theme }) => theme.palette.text.tertiary};
      }
   }

   h1.i-am span {
      color: ${({ theme }) => theme.palette.text.cyan};
   }

   @media (min-width: 480px) {
      font-size: ${({ theme }) => theme.font.size.x3lg};
   }

   @media (min-width: 600px) {
      font-size: ${({ theme }) => theme.font.size.x4lg};
   }

   @media (min-width: 768px) {
      grid-column: 1 / 2;
      align-self: center;
      font-size: ${({ theme }) => theme.font.size.x3lg};
      text-shadow: 0px 0px 10px ${({ theme }) => theme.palette.text.opposite};
   }

   @media (min-width: 880px) {
      font-size: 48px;
   }

   @media (min-width: 991px) {
      font-size: ${({ theme }) => theme.font.size.x4lg};
      padding-top: 40px;
   }

   @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.font.size.x5lg};
   }
`;

export const Introduction = styled.div`
   width: 100%;
   display: flex;
   gap: 10px;
   align-items: center;
   justify-content: space-between;
   border: 1px solid ${({ theme }) => theme.palette.text.gold};
   border-radius: 4px;
   padding: 10px 12px;
   box-shadow: 0px 0px 5px ${({ theme }) => theme.palette.text.tertiary};
   backdrop-filter: blur(4px);
   cursor: pointer;

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

   &:hover {
      & + picture div.filter {
         opacity: 0;
      }
   }

   @media (min-width: 480px) {
      p {
         font-size: ${({ theme }) => theme.font.size.lg};
      }
   }

   @media (min-width: 600px) {
      padding: 20px 12px;
      svg {
         width: 40px;
         height: 40px;
      }
   }

   @media (min-width: 768px) {
      box-shadow: 0px 0px 10px ${({ theme }) => theme.palette.text.tertiary};
      border: 2px solid ${({ theme }) => theme.palette.text.gold};
      box-shadow: 0px 0px 15px ${({ theme }) => theme.palette.text.tertiary};

      svg {
         transform: rotate(-90deg);

         &:first-child {
            display: none;
         }
      }
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
      svg {
         width: 50px;
         height: 50px;
      }
      p {
         font-size: ${({ theme }) => theme.font.size.x2lg};
      }
   }
`;
