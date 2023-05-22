import Container from '@/components/Container';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
   div.container {
      width: 100%;
      place-content: center;
      display: grid;
      grid-template-rows: repeat(2, auto);
      gap: 20px;

      @media (min-width: 768px) {
         grid-template-rows: 1fr;
         grid-template-columns: 1fr 1fr;
         gap: 20px;
      }
   }
`;

export const InfoSection = styled.section`
   grid-row: 2 / 3;
   background: radial-gradient(
      circle at -0.4% 112%,
      rgb(102, 51, 204) 0%,
      rgb(244, 111, 111) 92.7%
   );
   width: 100%;
   padding: 20px;
   border-radius: 35px;
   display: flex;
   flex-direction: column;
   box-shadow: ${({ theme }) => theme.palette.shadow.box};
   contain: content;
   position: relative;

   div.contact-info {
      h2 {
         text-align: center;
         font-size: ${({ theme }) => theme.font.size.xlg};
         margin-bottom: 5px;
      }

      p {
         font-size: ${({ theme }) => theme.font.size.sm2};
         margin-bottom: 30px;
      }
   }

   div.contact-details {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 50px;

      div {
         display: flex;
         align-items: center;
         gap: 10px;

         p {
            font-size: ${({ theme }) => theme.font.size.sm2};
         }
      }
   }

   div.social-media {
      width: 60%;
      justify-content: flex-start;
      gap: 10px;

      svg {
         font-size: ${({ theme }) => theme.font.size.xlg};
      }
      span {
         display: none;
      }
   }

   &:before {
      content: '';
      width: 70%;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: #ffca30;
      background: linear-gradient(to top, rgb(255, 8, 68) 0%, rgb(255, 177, 153) 100%);
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(50%, 50%);
      z-index: -1;
   }

   &:after {
      content: '';
      width: 15%;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: #ffca30;
      background: linear-gradient(to left, rgb(255, 8, 68) 0%, rgb(255, 177, 153) 100%);
      position: absolute;
      bottom: 35%;
      right: 5%;
      z-index: -1;
   }

   @media (min-width: 480px) {
      div.contact-info {
         h2 {
            font-size: ${({ theme }) => theme.font.size.x2lg};
            margin-bottom: 10px;
         }

         p {
            font-size: ${({ theme }) => theme.font.size.md};
         }
      }

      div.contact-details {
         gap: 30px;

         div {
            gap: 20px;

            p {
               font-size: ${({ theme }) => theme.font.size.md};
            }

            svg {
               font-size: ${({ theme }) => theme.font.size.lg};
            }
         }
      }

      div.social-media {
         gap: 20px;

         svg {
            font-size: ${({ theme }) => theme.font.size.xlg};
         }
      }
   }

   @media (min-width: 768px) {
      grid-row: auto;
      height: 100%;
      justify-content: space-between;

      div.contact-info h2 {
         margin-bottom: 20px;
      }

      div.contact-details {
         gap: 50px;
      }
   }

   @media (min-width: 991px) {
      padding: 40px;
      border-radius: 50px;

      div.contact-info {
         h2 {
            font-size: ${({ theme }) => theme.font.size.x3lg};
         }

         p {
            font-size: ${({ theme }) => theme.font.size.lg};
         }
      }

      div.contact-details {
         div {
            p {
               font-size: ${({ theme }) => theme.font.size.lg};
            }

            svg {
               font-size: ${({ theme }) => theme.font.size.xlg};
            }
         }
      }

      div.social-media svg {
         font-size: ${({ theme }) => theme.font.size.x2lg};
      }
   }

   @media (min-width: 1200px) {
   }
`;

export const LetterSection = styled.section`
   width: 100%;
   position: relative;

   &.openLetter {
      div.contact-msg {
         transition: all ease-in-out 1s;
         opacity: 0;
      }

      div.letter {
         transition: all ease-in-out 1s;
         transform: translateY(0%);
      }
   }

   &.saveLetter {
      div.contact-msg {
         transition: all ease-in-out 1s 2.5s;
         opacity: 1;
      }

      div.letter {
         transition: all ease-in-out 1s 2.5s;
         transform: translateY(-20%);
      }
   }

   @media (min-width: 768px) {
      grid-column: 2 / 3;
   }
`;

export const ContactMessage = styled.div`
   position: absolute;
   top: 0;
   width: 100%;

   div {
      padding: 20px 10px;
      background: ${({ theme }) => theme.palette.transparency.tertiary};
      width: 260px;
      margin: 0 auto;
      border: 2px solid ${({ theme }) => theme.palette.background.gold2};
      border-radius: 16px;
   }

   h2 {
      text-align: center;
      font-size: ${({ theme }) => theme.font.size.x2lg};
      color: ${({ theme }) => theme.palette.text.gold};
      margin-bottom: 20px;
   }

   p {
      text-align: justify;
      font-size: ${({ theme }) => theme.font.size.md};
      font-weight: ${({ theme }) => theme.font.weight.normal};
   }

   @media (min-width: 440px) {
      div {
         width: 400px;
      }

      h2 {
         font-size: ${({ theme }) => theme.font.size.x3lg};
      }

      p {
         font-size: ${({ theme }) => theme.font.size.lg};
      }
   }

   @media (min-width: 640px) {
      div {
         padding: 30px 20px;
         width: 600px;
      }

      h2 {
         font-size: ${({ theme }) => theme.font.size.x4lg};
      }

      p {
         font-size: ${({ theme }) => theme.font.size.xlg};
      }
   }

   @media (min-width: 768px) {
      div {
         width: 324px;
         padding: 20px 10px;
      }

      h2 {
         font-size: ${({ theme }) => theme.font.size.x3lg};
      }

      p {
         font-size: ${({ theme }) => theme.font.size.lg};
      }
   }

   @media (min-width: 991px) {
      div {
         width: 440px;
         padding: 30px 20px;
      }

      h2 {
         font-size: ${({ theme }) => theme.font.size.x4lg};
      }
   }

   @media (min-width: 1200px) {
      div {
         width: 540px;
      }

      p {
         font-size: ${({ theme }) => theme.font.size.xlg};
      }
   }
`;

export const AlertMessage = styled.div`
   display: none;
   display: block;
   position: fixed;
   top: 90px;
   right: 20px;
   background-color: ${({ theme }) => theme.palette.background.successGreen};
   padding: 10px 20px;
   border-radius: 10px;
   box-shadow: ${({ theme }) => theme.palette.shadow.box};
   z-index: 2;
   transition: all ease-in 1s, opacity linear 0s;
   transform: translateX(calc(100% + 20px));
   opacity: 0;

   p {
      font-weight: ${({ theme }) => theme.font.weight.bold};
   }

   &.error {
      background-color: ${({ theme }) => theme.palette.background.errorRed};
   }

   &.visible {
      transition: all ease-in 1s;
      display: block;
      transform: translateX(0%);
      opacity: 1;
   }
`;
