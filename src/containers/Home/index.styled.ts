import Container from '@/components/Container';
import styled, { keyframes } from 'styled-components';

/////////////////////////////////////////////////////////////////////////////

export const StyledContainer = styled(Container)`
   div.container {
      color: ${(props) => props.theme.palette.text.primary};
      padding-top: 85px !important; //+70px on top because of Header height
      flex-direction: column;

      div.title,
      div.see-about-me,
      picture {
         transition: all ease 1s;
         opacity: 0;
      }

      div.see-about-me {
         transform: translateX(40px);
      }

      div.title {
         transform: translateY(-60px);
      }

      picture {
         transform: translateY(40px);
      }

      &.visible {
         div.title,
         picture,
         div.see-about-me {
            opacity: 1;
            transform: translate(0px, 0px);
         }
      }

      @media (min-width: 768px) {
         gap: 15px;
         padding: 110px 60px 40px !important; //+70px on top because of Header height
      }
   }
`;

/////////////////////////////////////////////////////////////////////////////

export const SectionContainer = styled.article`
   flex: 50%;
   display: grid;
   grid-template-rows: repeat(3, auto);
   place-items: center;
   row-gap: 20px;

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

/////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////

export const SeeAboutMe = styled.div`
   width: 100%;
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
      border: 2px solid ${({ theme }) => theme.palette.text.gold};

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
