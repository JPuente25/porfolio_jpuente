import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyles;
