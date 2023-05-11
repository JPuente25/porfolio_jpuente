import styled from 'styled-components';

export const Card = styled.article<{ bgColor: string }>`
   background-color: ${({ bgColor }) => bgColor};
   width: 100%;
   border-radius: 8px;
   outline: 1px solid ${({ theme }) => theme.palette.text.opposite};
   height: min-content;
   box-shadow: ${({ theme }) => theme.palette.shadow.box};
   transition: all ease 0.5s;
`;

export const MainTechnology = styled.div`
   display: grid;
   grid-template-columns: 1fr 3fr;
   border-radius: 8px;

   @media (min-width: 600px) {
      grid-template-columns: 5fr 6fr;
   }

   @media (min-width: 991px) {
      grid-template-columns: 1fr 3fr;
   }

   @media (min-width: 1200px) {
      grid-template-columns: 5fr 6fr;
   }
`;

export const TechLabel = styled.div<{ color: string }>`
   background-color: ${({ color }) => color};
   display: flex;
   gap: 10px;
   align-items: center;
   justify-content: center;
   padding: 10px;
   color: ${({ theme }) => theme.palette.text.primary};
   position: relative;
   border-radius: 8px 0px 0px 8px;
   outline: 1px solid ${({ theme }) => theme.palette.text.opposite};

   svg {
      font-size: ${({ theme }) => theme.font.size.x3lg};
      flex-shrink: 0;
   }

   p {
      display: none;
      font-size: ${({ theme }) => theme.font.size.sm2};
      background: ${({ theme }) => theme.palette.transparency.tertiary};
      padding: 2px;
      width: 100%;
      border-radius: 4px;
      text-align: center;
      font-weight: ${({ theme }) => theme.font.weight.bold};
   }

   &:hover {
      div.label-tooltip {
         visibility: visible;
      }
   }

   @media (min-width: 600px) {
      justify-content: space-between;

      p {
         display: block;
         white-space: nowrap;
      }

      &:hover {
         div.tooltip {
            visibility: hidden;
         }
      }
   }

   @media (min-width: 991px) {
      justify-content: center;

      p {
         display: none;
      }

      &:hover {
         div.label-tooltip {
            visibility: visible;
         }
      }
   }

   @media (min-width: 1200px) {
      justify-content: space-between;

      p {
         display: block;
         white-space: nowrap;
      }

      &:hover {
         div.label-tooltip {
            visibility: hidden;
         }
      }
   }
`;

export const TechProgress = styled.div<{}>`
   background-color: ${({ theme }) => theme.palette.background.cardBar};
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 0px 8px 8px 0px;
   outline: 1px solid ${({ theme }) => theme.palette.text.opposite};
`;

export const ProgressBar = styled.div<{ progress: number; color: string }>`
   width: 80%;
   height: 5px;
   position: relative;
   outline: 1px solid ${({ theme }) => theme.palette.text.opposite};
   border-radius: 2.5px;
   background-color: ${({ theme }) => theme.palette.text.disabled};

   div.filler {
      position: absolute;
      border-radius: 2.5px;
      background-color: ${({ color }) => color};
      width: ${({ progress }) => progress}%;
      height: 100%;
      top: 0;
      left: 0;
      box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.palette.text.primary};
      z-index: 0;
      cursor: pointer;

      &:hover div.progress-tooltip {
         visibility: visible;
      }
   }

   @media (min-width: 480px) {
      height: 10px;
      border-radius: 5px;

      div.filler {
         border-radius: 5px;
      }
   }
`;

export const RecursiveChildren = styled.div`
   padding: 10px 5px 10px 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   gap: 10px;

   @media (min-width: 480px) {
      padding: 20px 10px 20px 40px;
      gap: 20px;
   }

   @media (min-width: 768px) {
      padding: 40px 20px 40px 80px;
      gap: 30px;
   }

   @media (min-width: 991px) {
      padding: 20px 10px 20px 40px;
      gap: 20px;
   }
`;

export const LabelTooltip = styled.div`
   background-color: ${({ theme }) => theme.palette.background.tooltip};
   padding: 1px 3px;
   border-radius: 2px;
   position: absolute;
   top: 3px;
   z-index: 2;
   font-size: ${({ theme }) => theme.font.size.sm2};
   font-weight: ${({ theme }) => theme.font.weight.normal};
   white-space: nowrap;
   visibility: hidden;

   &:after {
      content: '';
      width: 10px;
      height: 10px;
      transform: rotateZ(45deg);
      background-color: ${({ theme }) => theme.palette.background.tooltip};
      position: absolute;
      left: calc(50% - 5px);
      bottom: -5px;
      z-index: -1;
   }

   @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.font.size.md};
   }
`;

export const ProgressTooltip = styled(LabelTooltip)`
   top: -40px;
   right: -15px;
   background-color: ${({ theme }) => theme.palette.background.tooltip2};

   &:after {
      background-color: ${({ theme }) => theme.palette.background.tooltip2};
   }
`;
