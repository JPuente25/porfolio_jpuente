import Container from '@/components/Container';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
   color: ${(props) => props.theme.palette.text.primary};

   @media (min-width: 768px) {
      gap: 15px;
   }
`;

export const PersonalInformation = styled.div`
   flex: 70%;
   color: ${(props) => props.theme.palette.text.primary};
`;

export const TextAboutMe = styled.div`
   padding: 20px 40px;
   border-radius: 30px 8px 30px 8px;
   position: relative;
   background-color: ${({theme}) => theme.palette.transparency.secondary};
   backdrop-filter: blur(5px);
   color: ${(props) => props.theme.palette.text.opposite};

   p,
   h2,
   div {
      margin-bottom: 20px;
   }

   h2 {
      font-size: ${(props) => props.theme.font.size.x3lg};
      color: ${(props) => props.theme.palette.text.cyan2};
      text-shadow: 0 0 3px ${({ theme }) => theme.palette.text.opposite};
      color: ${(props) => props.theme.palette.text.cyan3};
   }

   p {
      font-size: ${(props) => props.theme.font.size.lg};
   }

   strong {
      /* color: #800000;
      text-shadow: 0 0 3px ${({ theme }) => theme.palette.text.opposite}; */
      color: ${(props) => props.theme.palette.text.cyan3};
   }
`;

export const Profile = styled.div`
   flex: 30%;
   background-color: red;
   background-color: ${(props) => props.theme.palette.background.primary};
   height: min-content;
   border-radius: 8px 30px 8px 30px;
   border-radius: 30px;
   position: relative;
   z-index: 0;
   contain: content;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 10px 30px;

   &:before {
      content: '';
      background-color: ${({theme}) => theme.palette.background.cyan};
      background-image: ${({theme}) => theme.palette.gradient.cyan3};
      width: 100%;
      height: 30%;
      position: absolute;
      top: 0;
      z-index: -1;
   }

   div.bg {
      background-color: grey;
      background: url('https://cdn.wallpapersafari.com/39/38/SimM0C.jpg') center center;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 8px solid white;
      contain: content;
   }

   img {
   }
`;
