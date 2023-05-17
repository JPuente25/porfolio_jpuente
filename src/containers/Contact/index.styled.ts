import Container from '@/components/Container';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
   div.container {
      width: 100%;
      place-content: center;
      display: grid;
      grid-template-rows: repeat(2, auto);

      @media (min-width: 768px) {
         grid-template-rows: 1fr;
         grid-template-columns: 1fr 1fr;
         gap: 20px;
      }
   }
`;
