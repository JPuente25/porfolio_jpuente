import styled from 'styled-components';

export const ContainerSelector = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;

   svg {
      width: 20px;
      height: 20px;
   }

   div {
      display: grid;
      place-items: center;
      grid-template-columns: repeat(2, auto);

      p {
         font-size: ${({ theme }) => theme.font.size.md};
         display: flex;
         align-items: center;
         color: ${({ theme }) => theme.palette.background.gray};
         grid-row: 1 / 2;
         transition: all ease 0.3s;
         cursor: pointer;

         &.selected {
            color: inherit;
            grid-column: 1 / 2;
         }
      }

      p:not(.selected) {
         &:before {
            content: '';
            width: 2px;
            aspect-ratio: 1 / 10;
            background-color: ${({ theme }) => theme.palette.background.gray};
            display: inline-block;
            margin: 0 10px;
         }

         &:hover {
            color: ${({ theme }) => theme.palette.text.gold};
         }
      }
   }
`;
