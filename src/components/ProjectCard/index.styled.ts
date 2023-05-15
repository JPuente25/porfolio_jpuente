import styled from 'styled-components';

const appTheme = {
   movix: {
      titleBackground: 'cyan',
      backgroundColor: '#001a5790',
      buttonBackgroundColor: '#314755',
      buttonBackgroundImage: 'linear-gradient(to right, #314755 0%, #26a0da 51%, #314755 100%)',
   },
   kingsLeague: {
      titleBackground: '#FFAC1C',
      backgroundColor: '#ffff0070',
      buttonBackgroundColor: '#ff512f',
      buttonBackgroundImage: 'linear-gradient(to right, #ff512f 0%, #FFAC1C 51%, #ff512f 100%)',
   },
   platziShop: {
      titleBackground: '#234F1E',
      backgroundColor: '#3CB04360',
      buttonBackgroundColor: '#50C9C3',
      buttonBackgroundImage: 'linear-gradient(to right, #50C9C3 0%, #96DEDA  51%, #50C9C3  100%)',
   },
};

export const Container = styled.article<{ app: 'movix' | 'kingsLeague' | 'platziShop' }>`
   width: 100%;
   display: grid;
   gap: 30px;
   margin: 20px auto;
   padding: 20px;
   position: relative;
   z-index: 0;

   &:after {
      content: '';
      width: 100%;
      height: 80%;
      position: absolute;
      bottom: 0;
      right: 0;
      border-radius: 20px;
      box-shadow: ${({ theme }) => theme.palette.shadow.box};
      background-color: ${({ app }) => appTheme[app].backgroundColor};
      z-index: -2;
   }

   &:before {
      content: '';
      width: 100%;
      height: 20%;
      position: absolute;
      top: 20%;
      right: 0;
      border-radius: 20px 20px 0px 0px;
      background-image: linear-gradient(to bottom, #000 60%, transparent 100%);
      z-index: -2;
   }

   div.title:after {
      background-color: ${({ app }) => appTheme[app].titleBackground};
   }

   button.project-button {
      background-color: ${({ app }) => appTheme[app].buttonBackgroundColor};
      background-image: ${({ app }) => appTheme[app].buttonBackgroundImage};
   }

   @media (min-width: 480px) {
      grid-template-columns: 2fr 3fr;

      &:after {
         width: 85%;
         height: 100%;
      }

      &:before {
         width: 20%;
         height: 100%;
         top: 0;
         left: 15%;
         border-radius: 20px 0px 0px 20px;
         background-image: linear-gradient(to right, #000 60%, transparent 100%);
      }

      &.right {
         grid-template-columns: 3fr 2fr;

         div.information {
            grid-row: 1 / 2;
            grid-column: 1 / 2;
         }

         div.devices-view {
            grid-column: 2 / 3;
         }

         &:after {
            width: 85%;
            height: 100%;
            left: 0;
         }

         &:before {
            width: 20%;
            height: 100%;
            top: 0;
            left: auto;
            right: 15%;
            border-radius: 0px 20px 20px 0px;
            background-image: linear-gradient(to left, #000 60%, transparent 100%);
         }
      }
   }
`;

export const DevicesView = styled.div`
   margin: 0 auto;
   width: 80%;

   @media (min-width: 480px) {
      margin: auto 0;
      width: 100%;
   }
`;

export const Information = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   z-index: 1;
   font-size: ${({ theme }) => theme.font.size.sm2};

   p:not(div.content p, div.icon p) {
      font-size: ${({ theme }) => theme.font.size.sm2};
      margin-bottom: 20px;

      &.status {
         align-self: flex-start;
         font-weight: ${({ theme }) => theme.font.weight.bold};
         margin: 0px 0px 10px 10px;

         &:before {
            content: '';
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 10px;
         }

         &.finished:before {
            background-color: ${({ theme }) => theme.palette.background.green};
         }

         &.in-progress:before {
            background-color: ${({ theme }) => theme.palette.background.orange};
         }

         &.not-started:before {
            background-color: ${({ theme }) => theme.palette.background.default};
         }
      }
   }

   @media (min-width: 600px) {
      p:not(div.content p, div.icon p) {
         font-size: ${({ theme }) => theme.font.size.md};
         margin-bottom: 30px;
      }
   }

   @media (min-width: 991px) {
      p:not(div.content p, div.icon p) {
         font-size: ${({ theme }) => theme.font.size.lg};
         margin-bottom: 40px;

         &.status {
            margin-bottom: 20px;
         }
      }
   }
`;

export const Title = styled.div`
   position: relative;
   z-index: 0;
   margin-bottom: 10px;

   h2 {
      z-index: 2;
      font-size: ${({ theme }) => theme.font.size.xlg};
   }

   &:after {
      content: '';
      width: 120%;
      height: 40%;
      margin: 0 auto;
      position: absolute;
      left: -10%;
      bottom: 10%;
      opacity: 0.8;
      z-index: -1;
      border-radius: 0 20px 0 20px;
   }

   @media (min-width: 600px) {
      h2 {
         font-size: ${({ theme }) => theme.font.size.x2lg};
      }
   }

   @media (min-width: 768px) {
      h2 {
         font-size: ${({ theme }) => theme.font.size.x3lg};
      }
   }

   @media (min-width: 991px) {
      h2 {
         font-size: ${({ theme }) => theme.font.size.x4lg};
      }
   }
`;

export const ButtonContainer = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-around;
   gap: 15px;

   a {
      width: 100%;
   }

   @media (min-width: 768px) {
      gap: 30px;
   }

   @media (min-width: 1200px) {
      gap: 40px;
   }
`;
