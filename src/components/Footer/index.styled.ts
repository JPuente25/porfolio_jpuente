import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.footer`
   width: 100%;
   height: 220px;
   background-color: ${({ theme }) => theme.palette.background.footer};
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 20px;
   color: ${({ theme }) => theme.palette.text.primary};
`;

export const SocialMedia = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 20px;
   padding: 15px 0%;
`;

export const MediaItem = styled(Link)`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-size: ${({ theme }) => theme.font.size.sm};
   font-weight: ${({ theme }) => theme.font.weight.normal};
   transition: all 0.3s ease;

   svg {
      font-size: 25px;
   }

   &:hover {
      color: ${({ theme }) => theme.palette.text.hover};
   }
`;

export const Location = styled.div`
   display: flex;
   align-items: center;
   font-size: ${({ theme }) => theme.font.size.sm};
   padding: 15px 0;
   
   svg {
      font-size: 25px;
   }
   
`;

export const Copyright = styled.div`
   padding: 15px 0;
   p {
      font-size: ${({ theme }) => theme.font.size.sm};
   }
`;
