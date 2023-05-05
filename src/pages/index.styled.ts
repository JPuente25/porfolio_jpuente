import styled from 'styled-components';

export const Container = styled.section`
   width: 100%;
   display: flex;
   align-items: center;
   justify-items: center;
   position: relative;
   min-height: calc(100vh - 70px - 220px); // 70px - header, 220px - footer

   div.buttons {
      position: absolute;
      bottom: 0%;
      left: 50%;
   }
`;

export const Carousel = styled.article<{current: string}>`
   width: 100%;
   height: 100%;
   display: flex;
   overflow-x: hidden;
   position: relative;
   /* background: rgb(0, 0, 0); */
   background-image: ${({ current, theme }) => theme.palette.gradient[current]};
`;

export const CarouselItem = styled.div`
   width: 100%;
   height: 100%;
   flex-shrink: 0;
   flex-grow: 0;
`;

export const PassSlide = styled.div`
   position: fixed;
   top: 35vh;
   left: 10px;
   z-index: 1;
   color: white;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   align-self: flex-start;

   svg {
      width: 40px;
      height: 40px;
      color: ${({ theme }) => theme.palette.transparency.primary};
      transform: rotate(-90deg);
   }

   p {
      font-size: 14px;
      font-weight: ${({ theme }) => theme.font.weight.bold};
   }

   &.next {
      left: auto;
      right: 10px;

      svg {
         transform: rotate(90deg);
      }
   }

   &:hover {
      p,
      svg {
         transition: all ease 0.3s;
         color: ${({ theme }) => theme.palette.text.hover};
      }
   }
`;
