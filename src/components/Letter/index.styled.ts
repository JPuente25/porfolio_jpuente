import styled from 'styled-components';

export const Container = styled.div`
   width: 280px;
   height: auto;
   aspect-ratio: 3 / 2;
   position: relative;
   contain: content;
   z-index: 1;
   margin: 0 auto;

   &.saveLetter {
      div.content div.form {
         transition: all ease-in-out 2s;
         bottom: -38%; ////variable segun altura de la carta y ancho de contenedor
         z-index: 0;
      }
      div.up {
         transition: transform ease-in-out 2s 2.5s, z-index 100ms 2s;
         z-index: 3;
         transform: rotate3d(1, -0.414, 0, 180deg);
      }

      div.left {
         transition: z-index 100ms 2s;
         z-index: 2;
      }

      div.right {
         transition: z-index 100ms 2s;
         z-index: 1;
      }
   }

   &.openLetter {
      div.content div.form {
         transition: all ease-in-out 2s 2.5s;
         bottom: 27%; ////variable segun altura de la carta y ancho de contenedor
         z-index: 1;
      }

      div.up {
         transition: all ease-in-out 2s, z-index step-start 100ms 2s;
         z-index: 0;
         transform: rotateZ(45deg);
      }

      div.left {
         transition: z-index 100ms 2s;
         z-index: 3;
      }

      div.right {
         transition: z-index 100ms 2s;
         z-index: 2;
      }
   }

   @media (min-width: 440px) {
      width: 400px;

      &.saveLetter {
         div.content div.form {
            bottom: -30%; ////variable segun altura de la carta y ancho de contenedor
         }
      }

      &.openLetter {
         div.content div.form {
            bottom: 33%; ////variable segun altura de la carta y ancho de contenedor
         }
      }
   }

   @media (min-width: 640px) {
      width: 600px;

      &.saveLetter {
         div.content div.form {
            bottom: -13%; ////variable segun altura de la carta y ancho de contenedor
         }
      }

      &.openLetter {
         div.content div.form {
            bottom: 37%; ////variable segun altura de la carta y ancho de contenedor
         }
      }
   }

   @media (min-width: 768px) {
      width: 324px;

      &.saveLetter {
         div.content div.form {
            bottom: -43%; ////variable segun altura de la carta y ancho de contenedor
         }
      }

      &.openLetter {
         div.content div.form {
            bottom: 25%; ////variable segun altura de la carta y ancho de contenedor
         }
      }
   }

   @media (min-width: 991px) {
      width: 440px;

      &.saveLetter {
         div.content div.form {
            bottom: -30%; ////variable segun altura de la carta y ancho de contenedor
         }
      }

      &.openLetter {
         div.content div.form {
            bottom: 30%; ////variable segun altura de la carta y ancho de contenedor
         }
      }
   }

   @media (min-width: 1200px) {
      width: 540px;

      &.saveLetter {
         div.content div.form {
            bottom: -30%; ////variable segun altura de la carta y ancho de contenedor
         }
      }

      &.openLetter {
         div.content div.form {
            bottom: 30%; ////variable segun altura de la carta y ancho de contenedor
         }
      }
   }

   @media (min-width: 1200px) {
      width: 540px;

      &.saveLetter {
         div.content div.form {
            bottom: -30%; ////variable segun altura de la carta y ancho de contenedor
         }
      }

      &.openLetter {
         div.content div.form {
            bottom: 32%; ////variable segun altura de la carta y ancho de contenedor
         }
      }
   }
`;

export const Content = styled.div`
   width: 95%;
   margin: 0 auto;
   contain: content;

   div.form-ghost {
      width: 100%;
      height: 570px; // 1.5 times form height
      z-index: 0;
      /* visibility: hidden; */
      background-color: lightgreen;
   }

   div.form {
      width: 100%;
      height: 400px; //altura variable
      transition: 2s;
      position: absolute;
      z-index: 1;
   }

   @media (min-width: 440px) {
      div.form-ghost {
         height: 675px; // 1.5 times form height
      }

      div.form {
         height: 450px; //altura variable
      }
   }

   @media (min-width: 640px) {
      div.form-ghost {
         height: 900px; // 1.5 times form height
      }

      div.form {
         height: 500px; //altura variable
      }
   }

   @media (min-width: 768px) {
      div.form-ghost {
         height: 700px; // 1.5 times form height
      }

      div.form {
         height: 500px; //altura variable
      }
   }

   @media (min-width: 991px) {
      div.form-ghost {
         height: 800px; // 1.5 times form height
      }

      div.form {
         height: 500px; //altura variable
      }
   }

   @media (min-width: 1200px) {
      width: 540px;

      div.form-ghost {
         height: 950px; // 1.5 times form height
      }

      div.form {
         height: 600px; //altura variable
      }
   }
`;

export const UpperTab = styled.div`
   position: absolute;
   left: 14.5%;
   bottom: 15.4%; //variable segun altura de la carta y ancho de contenedor
   width: 70.5%;
   aspect-ratio: 1 / 1;
   background-color: white;
   transform: rotateZ(45deg);
   background: linear-gradient(
      135deg,
      rgba(150, 30, 40, 1) 0%,
      rgba(150, 30, 40, 1) 49.999999%,
      rgba(150, 30, 40, 1) 50%,
      transparent 50.000001%,
      transparent 100%
   );
   border-radius: 15% 0 0 0;
   transition: all ease-in-out 2s 2.5s;

   @media (min-width: 440px) {
      bottom: 18.5%;
   }

   @media (min-width: 640px) {
      bottom: 20.8%;
   }

   @media (min-width: 768px) {
      bottom: 14.5%;
   }

   @media (min-width: 991px) {
      bottom: 17.3%;
   }

   @media (min-width: 1200px) {
      bottom: 17.8%;
   }
`;

export const LeftTab = styled.div`
   position: absolute;
   left: 0;
   bottom: 0;
   width: 100%;
   aspect-ratio: 3 / 2;
   background: rgb(231, 76, 60);
   /* background: linear-gradient(
      33.7deg,
      rgba(231, 76, 60, 1) 0%,
      rgba(231, 76, 60, 1) 49.999999%,
      rgba(113, 37, 29, 1) 50%,
      transparent 50.000001%,
      transparent 100%
   ); */
   border-radius: 0 100% 0 0;
`;


export const Background = styled.div`
   position: absolute;
   right: 0;
   bottom: 0;
   width: 100%;
   aspect-ratio: 3 / 2;
   background: #701e16;
`;

export const RightTab = styled.div`
   position: absolute;
   right: 0;
   bottom: 0;
   width: 100%;
   aspect-ratio: 3 / 2;
   background: rgb(231, 76, 60);
   /* background: linear-gradient(
      -33.7deg,
      rgba(192, 57, 43, 1) 0%,
      rgba(192, 57, 43, 1) 49.999999%,
      rgba(192, 57, 43, 1) 50%,
      transparent 50.000001%,
      transparent 100%
   ); */
   border-radius: 100% 0 0 0;
`;
