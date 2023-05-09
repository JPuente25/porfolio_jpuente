import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   gap: 20px;
   padding: 15px 0%;

   @media (min-width: 768px) {
      gap: 40px;
   }
`;

export const MediaItem = styled(Link)`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-size: ${({ theme }) => theme.font.size.sm};
   font-weight: ${({ theme }) => theme.font.weight.normal};
   transition: color 0.3s ease;

   svg {
      font-size: 25px;
   }

   &:hover {
      color: ${({ theme }) => theme.palette.text.hover};
   }

   @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.font.size.md};
   }
`;
