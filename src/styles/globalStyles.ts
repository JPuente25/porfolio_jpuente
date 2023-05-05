import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scrollbar-width: 0;
}

html, body, #__next, main{
   width: 100%;
   padding: 0;
   margin: 0;

  &:not(main) {
    height: 100%;
  }
}

::-webkit-scrollbar {
   display: none;
}


a {
  color: inherit;
  text-decoration: none;
}

ul {
   list-style: none;
}
`;

export default GlobalStyles;
