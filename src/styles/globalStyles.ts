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

html{
   font-size: 62.5%;
}

html, body, #__next, main{
   width: 100%;
   padding: 0;
   margin: 0;
   color: white;
}

body {
   background: linear-gradient(90deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%);
};

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

//Animation for Intersection Observer
.in-view-effects {
   opacity: 0;
   transition: all ease 1s;
   transform: translateY(20%);

   &.in-view {
      opacity: 1;
      transform: translateY(0%);
   }
}
`;

export default GlobalStyles;
