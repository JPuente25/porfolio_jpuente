import backgrounds from '@/variables/backgrounds';
import styled from 'styled-components';

export const Container = styled.section`
   height: 100vh;
   background-color: ${(props) => props.theme.palette.background.default};
   background: url(${backgrounds.projects}) center center no-repeat;
   background-size: cover;
`;
