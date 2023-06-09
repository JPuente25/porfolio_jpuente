import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.article`
   width: 100%;
   height: 100%;
   padding: 20px;
   background-color: white;
   display: flex;
   flex-direction: column;
   align-items: center;
   color: ${({ theme }) => theme.palette.text.opposite};
   z-index: 0;
   position: relative;
   overflow: hidden;

   svg.close-form {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: ${({ theme }) => theme.font.size.xlg};
      transition: all ease 0.3s;
      cursor: pointer;

      &:hover {
         transform: scale(1.2);
         color: ${({ theme }) => theme.palette.text.red};
      }
   }

   &:after {
      content: '';
      width: 400%; //varies
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.palette.background.gold2};
      position: absolute;
      top: -255%; //varies
      left: -150%; //varies
      z-index: -1;
   }

   &:before {
      content: '';
      width: 400%; //varies
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.palette.background.gold2};
      opacity: 0.4;
      position: absolute;
      top: -250%; //varies
      left: -150%; //varies
      z-index: -1;
   }

   @media (min-width: 440px) {
      &:after {
         top: -327%; //varies
         left: -150%; //varies
      }

      &:before {
         top: -320%; //varies
         left: -150%; //varies
      }
   }

   @media (min-width: 640px) {
      &:after {
         width: 500%; //varies
         top: -558%; //varies
         left: -195%; //varies
      }

      &:before {
         width: 500%; //varies
         top: -553%; //varies
         left: -195%; //varies
      }
   }

   @media (min-width: 768px) {
      &:after {
         width: 400%; //varies
         top: -235%; //varies
         left: -150%; //varies
      }

      &:before {
         width: 400%; //varies
         top: -230%; //varies
         left: -150%; //varies
      }
   }

   @media (min-width: 991px) {
      &:after {
         width: 500%; //varies
         top: -407%; //varies
         left: -200%; //varies
      }

      &:before {
         width: 500%; //varies
         top: -401%; //varies
         left: -200%; //varies
      }
   }

   @media (min-width: 1200px) {
      &:after {
         width: 500%; //varies
         top: -455%; //varies
         left: -200%; //varies
      }

      &:before {
         width: 500%; //varies
         top: -450%; //varies
         left: -200%; //varies
      }
   }
`;

export const FormHeader = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 10px;

   div.icon-box {
      width: 50px;
      height: 50px;
      background-color: white;
      border-radius: 50%;
      display: grid;
      place-content: center;
      margin-bottom: 10px;

      svg {
         font-size: ${({ theme }) => theme.font.size.x2lg};
      }
   }

   h2 {
      font-size: ${({ theme }) => theme.font.size.lg};
   }

   p {
      font-size: ${({ theme }) => theme.font.size.sm2};
      color: ${({ theme }) => theme.palette.text.cyan};
      margin-top: -5px;
   }

   @media (min-width: 640px) {
      div.icon-box {
         width: 80px;
         height: 80px;

         svg {
            font-size: ${({ theme }) => theme.font.size.x4lg};
         }
      }
      h2 {
         font-size: ${({ theme }) => theme.font.size.xlg};
      }

      p {
         font-size: ${({ theme }) => theme.font.size.md};
      }
   }

   @media (min-width: 640px) {
      h2 {
         font-size: ${({ theme }) => theme.font.size.x2lg};
      }
   }
`;

export const Formulary = styled.form`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   div {
      display: flex;
      flex-direction: column;
   }

   label {
      font-weight: ${({ theme }) => theme.font.weight.bold};
      font-size: ${({ theme }) => theme.font.size.sm2};
      color: ${({ theme }) => theme.palette.text.cyan};

      span {
         color: ${({ theme }) => theme.palette.text.red};
         font-size: ${({ theme }) => theme.font.size.sm};
         margin-left: 4px;
         display: none;
      }
   }

   div.error {
      span {
         display: inline-block;
      }
   }

   input,
   textarea {
      padding: 2px 5px;
      border: 1px solid ${({ theme }) => theme.palette.text.cyan};
      border-radius: 4px;
      font-family: inherit;
      font-size: ${({ theme }) => theme.font.size.sm2};
   }

   textarea {
      width: 100% !important;
      height: 60px !important;
      resize: none;
   }

   @media (min-width: 640px) {
      label {
         font-size: ${({ theme }) => theme.font.size.md};
         span {
            font-size: ${({ theme }) => theme.font.size.sm2};
         }
      }

      input,
      textarea {
         padding: 4px 8px;
         font-size: ${({ theme }) => theme.font.size.md};
      }

      textarea {
         height: 100px !important;
      }
   }
`;

export const SubmitButton = styled(Button)`
   width: 100px;
   height: 30px;
   background-image: linear-gradient(to right, #ff512f 0%, #f09819 51%, #ff512f 100%);
   align-self: center;

   div {
      p {
         font-size: ${({ theme }) => theme.font.size.md};
         margin: auto 0%;
      }

      svg {
         font-size: ${({ theme }) => theme.font.size.lg};
         margin: auto 0%;
      }
   }

   &.disabled:hover {
      background-position: initial;

      div {
         transform: translateY(0%);
      }
   }

   @media (min-width: 440px) {
      width: 150px;
      height: 40px;

      div.content,
      div.icon {
         height: 40px;
      }
   }

   @media (min-width: 1200px) {
      width: 175px;
      height: 50px;

      div.content,
      div.icon {
         height: 50px;
      }

      div.content p {
         font-size: ${({ theme }) => theme.font.size.lg};
      }

      div.icon svg {
         font-size: ${({ theme }) => theme.font.size.x2lg};
      }
   }
`;
