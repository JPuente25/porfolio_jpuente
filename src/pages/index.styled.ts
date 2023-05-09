import styled from 'styled-components';

export const Container = styled.section`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

// export const Carousel = styled.article<{bg: string}>`
//    width: 100%;
//    height: 100%;
//    height: auto;
//    display: flex;
//    overflow: hidden;
//    position: relative;
//    background-color: #00000070;
//    background: ${({ bg }) => `url(${bg})`} center center no-repeat;
//    background-size: cover;
// `;

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
