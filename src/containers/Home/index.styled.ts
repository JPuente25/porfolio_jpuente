import styled, { keyframes } from 'styled-components';

const titleChangeColor = (color1: string, color2: string) => keyframes`
0%, 100% {
   color: ${color1};
}

50% {
   color: ${color2};
}
`;

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

export const Container = styled.div`
   width: 100%;
   height: auto;
   color: ${(props) => props.theme.palette.text.primary};
   padding: 15px 20px;
   display: grid;
   grid-template-rows: repeat(2, auto);
   align-items: center;

   div.typing-switch-box {
      margin: 0 auto;
   }

   @media (min-width: 768px) {
      display: grid;
      gap: 15px;
      padding: 40px 60px;
   }

   @media (min-width: 991px) {
      padding: 40px 80px;
   }
`;

export const PersonalInformation = styled.article`
   flex: 50%;
   display: grid;
   grid-template-rows: repeat(3, auto);
   place-items: center;
   row-gap: 20px;
   animation: ${transitionIn} 0.5s linear;

   & > h1,
   & > p,
   & > picture {
      transition: all ease 1s;
      opacity: 0;
   }

   & > p {
      transform: translateX(40px);
   }

   & > h1 {
      transform: translateY(-60px);
   }

   & > picture {
      transform: translateY(40px);
   }

   &.visible {
      h1,
      picture,
      p {
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

   div.title {
      font-size: ${({ theme }) => theme.font.size.x2lg};
      padding: 20px 0;
      animation: ${({ theme }) =>
            titleChangeColor(theme.palette.text.gold, theme.palette.text.primary)}
         10s linear infinite;

      h1 {
         color: ${({ theme }) => theme.palette.text.gold};
         &:nth-child(1) {
            color: ${({ theme }) => theme.palette.text.tertiary};
         }
      }

      span {
         color: ${({ theme }) => theme.palette.text.cyan};
      }
   }

   p {
      font-size: ${({ theme }) => theme.font.size.sm2};
      padding: 40px 10px;
      text-align: justify;
      line-height: 1.75;
      background: #141e30;
      background: ${({ theme }) => theme.palette.gradient.webkitTextBox};
      background: ${({ theme }) => theme.palette.gradient.textBox};
      padding: 20px;
      border-radius: 8px;
      box-shadow: ${({ theme }) => theme.palette.boxShadow.primary};
      height: min-content;

      span {
         font-weight: ${({ theme }) => theme.font.weight.bold};
         color: ${({ theme }) => theme.palette.background.cyan};
      }

      a {
         white-space: nowrap;
         background-color: transparent;
         padding: 2px 4px;
         border-radius: 4px;
         border: 1px solid ${({ theme }) => theme.palette.background.cyan};
         transition: all ease 0.3s;

         &:hover {
            background-color: ${({ theme }) => theme.palette.background.cyan};
         }
      }
   }

   @media (min-width: 480px) {
      div.title {
         font-size: ${({ theme }) => theme.font.size.x3lg};
      }

      p {
         font-size: ${({ theme }) => theme.font.size.md};
      }
   }

   @media (min-width: 600px) {
      div.title {
         font-size: ${({ theme }) => theme.font.size.x4lg};
      }

      p {
         font-size: ${({ theme }) => theme.font.size.lg};
      }
   }

   @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 20px;

      div.title {
         grid-column: 1 / 2;
         align-self: center;
         font-size: ${({ theme }) => theme.font.size.x3lg};
      }

      picture {
         grid-column: 2 / 3;
      }

      p {
         grid-column: 1 / 3;
      }
   }

   @media (min-width: 880px) { 
      div.title {
         font-size: 48px;
      }
   }


   @media (min-width: 991px) {

      div.title {
         grid-column: 1 / 3;
         font-size: ${({ theme }) => theme.font.size.x5lg};
         padding-top: 40px;
      }

      picture {
         align-self: center;
      }

      p {
         grid-column: 1 / 2;
         grid-row: 2 / 3;
         padding: 20px;
         border-radius: 8px;
         box-shadow: ${({ theme }) => theme.palette.boxShadow.primary};
      }
   }

   @media (min-width: 1200px) { 
      div.title {
         display: flex;
         gap: 20px;
      }
   }
`;
