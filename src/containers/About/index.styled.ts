import styled from 'styled-components';

export const AboutContainer = styled.article`
   width: 100%;
   min-height: 100%;
   display: grid;
   grid-template-columns: 1fr;
   background-color: ${({ theme }) => theme.palette.transparency.cyan};
   box-shadow: ${({ theme }) => theme.palette.shadow.box};
   object-fit: cover;
   border-radius: 20px;

   @media (min-width: 768px) {
      grid-template-columns: 2fr 1fr;
   }
`;

///////////////////////////////////////////////////////////////////////////////////

export const TextAboutMe = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 20px;
   padding: 20px;
   position: relative;
   border-radius: 20px;

   h2 {
      font-size: ${({ theme }) => theme.font.size.xlg};
      text-shadow: 0 0 3px ${({ theme }) => theme.palette.text.opposite};
   }

   p {
      font-size: ${({ theme }) => theme.font.size.sm2};
   }

   strong {
      color: ${({ theme }) => theme.palette.text.gold};
   }

   @media (min-width: 480px) {
      h2 {
         font-size: ${({ theme }) => theme.font.size.x2lg};
      }

      p {
         font-size: ${({ theme }) => theme.font.size.md};
      }
   }

   @media (min-width: 768px) {
      padding: 30px;
   }

   @media (min-width: 991px) {
      p {
         font-size: ${({ theme }) => theme.font.size.lg};
      }
   }

   @media (min-width: 1200px) {
      h2 {
         font-size: ${({ theme }) => theme.font.size.x3lg};
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
   position: relative;
   overflow: hidden;
   border-radius: 20px;

   div.social-media {
      width: 100%;
      justify-content: space-evenly;

      svg {
         width: 30px;
         height: 30px;
      }

      p {
         display: none;
      }
   }

   a.resume {
      width: 100%;

      button {
         background-image: linear-gradient(to right, #606c88 0%, #3f4c6b80 51%, #606c88 100%);
      }
   }

   @media (min-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
   }

   @media (min-width: 600px) {
      div.social-media svg {
         width: 40px;
         height: 40px;
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
      padding: 30px;
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
   overflow: hidden;

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
