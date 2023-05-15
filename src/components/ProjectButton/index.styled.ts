import styled from 'styled-components';

export const Container = styled.button`
   overflow: hidden;
   width: 100%;
   height: 30px;
   padding: 0px 5px;
   border-radius: 8px;
   border: none;
   appearance: none;
   font-family: inherit;
   background-size: 200% auto;
   box-shadow: 0 0 6px #eee;
   color: ${({ theme }) => theme.palette.text.primary};
   font-weight: bold;
   transition: 0.5s;
   cursor: pointer;

   &:hover {
      background-position: right center;

      div {
         transform: translateY(-100%);
      }
   }

   div {
      height: 30px;
      display: grid;
      place-items: center;
      padding: 0px 5px;
      transition: 0.5s;
   }

   div.icon {
      font-size: ${({ theme }) => theme.font.size.lg};
   }

   p {
      white-space: nowrap;
      font-size: ${({ theme }) => theme.font.size.sm};
   }

   @media (min-width: 768px) {
      height: 40px;

      div {
         height: 40px;
      }

      p {
         font-size: ${({ theme }) => theme.font.size.sm2};
      }

      div.icon {
         font-size: ${({ theme }) => theme.font.size.x2lg};
      }
   }

   @media (min-width: 991px) {
      p {
         font-size: ${({ theme }) => theme.font.size.md};
      }
   }

   
   @media (min-width: 1200px) {
      height: 60px;

      div {
         height: 60px;
      }

      p {
         font-size: ${({ theme }) => theme.font.size.lg};
      }

      div.icon {
         font-size: ${({ theme }) => theme.font.size.x3lg};
      }
   }
`;
