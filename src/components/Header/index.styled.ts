import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.header`
   background-color: ${({ theme }) => theme.palette.background.header};
   height: 70px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 20px;
   color: ${({ theme }) => theme.palette.text.primary};
   position: sticky;
   top: 0;
   z-index: 1;

   ul.links-container {
      display: none;
   }

   menu ul.links-container {
      display: flex;
   }

   menu.menu-modal {
      position: absolute;
      top: 100%;
      left: 0;
   }

   @media (min-width: 600px) {
      padding: 0 40px;

      ul.links-container {
         display: flex;
      }

      menu.menu-modal {
         display: none;
      }

      div.menu-modal-button {
         display: none;
      }
   }

   @media (min-width: 991px) {
      padding: 0 60px;
   }
`;

export const NameLink = styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;

   gap: 0;
   cursor: pointer;

   img {
      width: 60px;
      height: 60px;
   }

   div {
      display: flex;
      flex-direction: column;
   }

   span {
      margin: 0;
      line-height: 1;
      font-weight: ${({ theme }) => theme.font.weight.bold};
      font-size: ${({ theme }) => theme.font.size.lg};
      background: ${({ theme }) => theme.palette.background.cyan};
      background: ${({ theme }) => theme.palette.gradient.cyan};
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
   }
`;
