import styled from 'styled-components';

export const LinkContainer = styled.ul`
   /* width: 50%; */
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 20px;

   @media (min-width: 1200px) {
      width: 70%;
      width: auto;
      gap: 40px;
   }
`;

export const ListItem = styled.li`
   font-weight: ${({ theme }) => theme.font.weight.bold};
   font-size: ${({ theme }) => theme.font.size.md};
   padding: 0 5px;
   transition: color ease 0.3s;

   &:hover,
   &.active {
      background: ${({ theme }) => theme.palette.background.gold};
      background: ${({ theme }) => theme.palette.gradient.gold};
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;

      border-bottom: 2px solid ${({ theme }) => theme.palette.background.gold};
   }

   @media (min-width: 991px) {
      font-size: ${({ theme }) => theme.font.size.lg};
   }
`;
