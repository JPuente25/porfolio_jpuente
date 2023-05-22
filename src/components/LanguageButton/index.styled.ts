import styled from "styled-components";

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
         font-size: ${({theme}) => theme.font.size.md};
         display: flex;
         align-items: center;
         color: ${({theme}) => theme.palette.background.gray};
         grid-row: 1 / 2;
         cursor: pointer;

         &.selected {
            color: ${({theme}) => theme.palette.text.primary};
            grid-column: 1 / 2;
         }
      }

      p:not(.selected):before {
         content: '';
         width: 2px;
         height: 20px;
         background-color: ${({theme}) => theme.palette.background.gray};
         display: inline-block;
         margin: auto 10px;
      }
   }
`;

export const Option = styled.option<{img: string}>`
   background: url(${props => props.img}) no-repeat center;
   &:before {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      background-color: red;
   }
`;