import styled from 'styled-components';

export const Card = styled.article`
   width: min-content;
   display: grid;
   place-content: center;
   padding: 10px;
   border-radius: 8px;
   background-color: #74ebd5;
   background-image: linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%);
   box-shadow: ${({ theme }) => theme.palette.shadow.box2};
   position: relative;

   &:hover div.label-tooltip {
      visibility: visible;
   }

   @media only screen and (min-width: 991px) {
      img {
         width: 60px;
         height: 60px;
      }
   }
`;

export const LabelTooltip = styled.div<{ label: string }>`
   position: absolute;
   left: calc(50% - 5px);
   top: 5%;
   z-index: 1;
   visibility: hidden;

   &:after {
      content: '${({ label }) => label}';
      border-radius: 2px;
      transform: translateX(-40%);
      padding: 2px;
      background-color: ${({ theme }) => theme.palette.background.tooltip2};
      position: absolute;
      top: 0;
      font-size: ${({ theme }) => theme.font.size.sm2};
      font-weight: ${({ theme }) => theme.font.weight.normal};
      white-space: nowrap;
   }

   @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.font.size.md};
   }
`;
