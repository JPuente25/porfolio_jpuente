import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.header`
   background-color: ${({ theme }) => theme.palette.background.header};
   width: 100%;
   padding: 0 20px;
   position: sticky;
   top: 0px;
   z-index: 20;
   transition: top 0.5s ease-in-out;

   &.hide {
      top: -70px;
   }

   div.max1440-container {
      width: 100%;
      max-width: 1440px;
      height: 70px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
   }

   menu ul.links-container {
      display: flex;
   }

   menu.menu-modal {
      position: absolute;
      top: 100%;
      left: 0;
   }

   @media (min-width: 900px) {
      padding: 0 40px;

      menu.menu-modal {
         display: none;
      }

      div.menu-modal-button {
         display: none;
      }
   }
`;

export const NameLink = styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;

   img {
      width: 60px;
      height: auto;
      aspect-ratio: 256 / 241;
   }

   div.name {
      display: flex;
      flex-direction: column;
   }

   p {
      line-height: 1;
      font-weight: ${({ theme }) => theme.font.weight.bold};
      font-size: ${({ theme }) => theme.font.size.lg};
      background: ${({ theme }) => theme.palette.gradient.cyan};
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
   }
`;

export const LinksSection = styled.div`
   display: none;
   align-items: center;
   gap: 30px;

   @media (min-width: 900px) {
      display: flex;
   }
`;
