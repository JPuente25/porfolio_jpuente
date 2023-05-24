import Container from '@/components/Container';
import styled from 'styled-components';

///////////////////////////////////////////////////////////////////////////////////

export const StyledContainer = styled(Container)`
   div.container {
      display: grid;
      grid-template-columns: 1fr;
      border-radius: 20px;
      box-shadow: ${({ theme }) => theme.palette.shadow.box};
      contain: content;

      @media (min-width: 768px) {
         grid-template-columns: 2fr 1fr;
      }
   }
`;

///////////////////////////////////////////////////////////////////////////////////

export const TextAboutMe = styled.div`
   width: 100%;
   height: 100%;
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 20px;
   background-color: ${({ theme }) => theme.palette.transparency.green};
   backdrop-filter: blur(5px);
   position: relative;

   h2 {
      font-size: ${(props) => props.theme.font.size.xlg};
      text-shadow: 0 0 3px ${({ theme }) => theme.palette.text.opposite};
   }

   p {
      font-size: ${(props) => props.theme.font.size.sm2};
   }

   strong {
      color: ${(props) => props.theme.palette.text.gold};
   }

   @media (min-width: 480px) {
      h2 {
         font-size: ${(props) => props.theme.font.size.x2lg};
      }

      p {
         font-size: ${(props) => props.theme.font.size.md};
      }
   }

   @media (min-width: 768px) {
      padding: 30px;
   }

   @media (min-width: 991px) {
      p {
         font-size: ${(props) => props.theme.font.size.lg};
      }
   }

   @media (min-width: 1200px) {
      h2 {
         font-size: ${(props) => props.theme.font.size.x3lg};
      }
   }
`;

///////////////////////////////////////////////////////////////////////////////////

export const Profile = styled.div`
   height: 100%;
   width: 100%;
   display: grid;
   place-items: center;
   padding: 15px;
   gap: 20px;
   background-color: ${({ theme }) => theme.palette.transparency.green};
   background-image: ${({ theme }) => theme.palette.gradient.green2};
   position: relative;
   contain: content;

   div.social-media {
      gap: 15px;

      svg {
         width: 30px;
         height: 30px;
      }
   }

   button {
      min-width: 120px;
      background-image: linear-gradient(to right, #606c88 0%, #3f4c6b80 51%, #606c88 100%);
      box-shadow: ${({ theme }) => theme.palette.shadow.box};
   }

   @media (min-width: 480px) {
      grid-template-columns: repeat(2, 1fr);

      div.social-media {
         gap: 10px;

         svg {
            width: 25px;
            height: 25px;
         }
      }
   }

   @media (min-width: 600px) {
      div.social-media {
         gap: 20px;
         svg {
            width: 40px;
            height: 40px;
         }
      }

      button {
         &,
         div {
            height: 40px;
         }

         p {
            font-size: ${({ theme }) => theme.font.size.lg};
         }

         svg {
            font-size: ${({ theme }) => theme.font.size.x2lg};
         }
      }
   }

   @media (min-width: 768px) {
      grid-template-columns: auto;
      grid-template-rows: repeat(3, auto);
      background-image: ${({ theme }) => theme.palette.gradient.green3};
      padding: 30px;

      &:before {
         height: 30%;
         width: 100%;
         left: revert;
      }

      div.social-media svg {
         height: 30px;
         width: 30px;
      }
   }
`;

///////////////////////////////////////////////////////////////////////////////////

export const PictureFrame = styled.picture`
   width: 100%;
   max-width: 350px;
   aspect-ratio: 1 / 1;
   background-color: grey;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   border: 8px solid white;
   box-shadow: ${({ theme }) => theme.palette.shadow.box};
   contain: content;

   img {
      width: 100%;
      height: auto;
   }

   @media (min-width: 480px) {
      grid-row: 1 / 3;
   }

   @media (min-width: 768px) {
      grid-row: 1 / 2;
   }
`;
