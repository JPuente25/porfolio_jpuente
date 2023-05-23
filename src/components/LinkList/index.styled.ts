import styled from 'styled-components';

export const LinkContainer = styled.ul`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 20px;

   @media (min-width: 1200px) {
      gap: 40px;
   }
`;

export const ListItem = styled.li`
   padding: 0 5px;
   transition: color ease 0.3s;

   a {
      font-weight: ${({ theme }) => theme.font.weight.bold};
      font-size: ${({ theme }) => theme.font.size.md};
   }

   &:hover,
   &.active {
      background: ${({ theme }) => theme.palette.gradient.gold};
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      border-bottom: 2px solid ${({ theme }) => theme.palette.background.gold};
   }

   @media (min-width: 991px) {
      a {
         font-size: ${({ theme }) => theme.font.size.lg};
      }
   }
`;
