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
   /* min-height: calc(100vh - 70px - 220px); //70 px header, 220 px footer */
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
      padding: 40px 80px;
   }
`;

export const PersonalInformation = styled.article`
   flex: 50%;
   display: grid;
   grid-template-rows: repeat(3, auto);
   row-gap: 20px;
   animation: ${transitionIn} 0.5s linear;

   & > h1,
   & > p,
   & > img { //** */
      transition: all ease 1s;
      opacity: 0;
   }

   & > p {
      transform: translateX(40px);
   }

   & > h1 {
      transform: translateY(-60px);
   }

   & > img { //** */
      transform: translateY(40px);
   }

   &.visible{
      h1,
      img, //** */
      p {
         opacity: 1;
         transform: translate(0px, 0px);
      }
   }

   img { //** */
      width: 100%;
      max-width: 600px;
      height: auto;
      filter: ${({ theme }) => theme.palette.shadow.primary};
   }

   h1 {
      font-size: ${({ theme }) => theme.font.size.x2lg};
      text-align: center;
      padding: 40px 0;
      animation: ${({ theme }) =>
            titleChangeColor(theme.palette.text.gold, theme.palette.text.primary)}
         10s linear infinite;
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
      h1 {
         font-size: ${({ theme }) => theme.font.size.x3lg};
      }

      p {
         font-size: ${({ theme }) => theme.font.size.md};
      }
   }

   @media (min-width: 600px) {
      h1 {
         font-size: ${({ theme }) => theme.font.size.x4lg};
      }

      p {
         font-size: ${({ theme }) => theme.font.size.lg};
      }
   }

   @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);

      h1 {
         grid-column: 1 / 2;
         align-self: center;
         font-size: ${({ theme }) => theme.font.size.x5lg};
      }

      img { //** */
         grid-column: 2 / 3;
      }

      p {
         grid-column: 1 / 3;
      }
   }

   @media (min-width: 991px) {
      h1 {
         font-size: ${({ theme }) => theme.font.size.x5lg};
      }

      img { //** */
         grid-row: 1 / 3;
         grid-column: 2 / 3;
         align-self: center;
      }

      p {
         grid-column: 1 / 2;
         padding: 20px;
         border-radius: 8px;
         box-shadow: ${({ theme }) => theme.palette.boxShadow.primary};
      }
   }
`;
