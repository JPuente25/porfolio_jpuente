import React from 'react';
import { ThemeProvider } from 'styled-components';

interface Props {
   children: React.ReactNode;
}

export const theme = {
   palette: {
      text: {
         primary: '#FFF',
         secondary: '#daa520',
         hover: '#ffcc33',
         disabled: '#696969',
         background: 'A9A9A9',
      },
      background: {
         primary: '2d3436',
         header: '#13161b',
         footer: '#13161b',
         gold: 'rgb(163, 153, 39)',
         cyan: '#2da7cf',
      },
      gradient: {
         home: 'linear-gradient(315deg, #2d3436 0%, #000000 90%)',
         about: 'linear-gradient(315deg, #274060 0%, #2d3436 90%)',
         skills: 'linear-gradient(315deg, #1b2845 0%, #274060 90%)',
         projects: 'linear-gradient(316deg, #130724 0%, #1b2845 90%)',
         contact: 'linear-gradient(315deg, #4c4177 0%, #130724 90%)',
         gold: 'linear-gradient(310deg,#f6f4de 0%,#f9d581 45%,#ffac05 82%)',
         cyan: 'linear-gradient(315deg, #1baada 0%, #80ced7 74%)',
      },
      transparency: {
         primary: 'rgba(255, 255, 255, 0.5)',
      }
   },
   font: {
      size: {
         sm: '12px',
         md: '16px',
         lg: '20px',
         xlg: '24px',
         x2lg: '32px',
         x3lg: '48px',
         x4g: '60px',
         x5g: '72px',
         x6g: '90px',
      },
      weight: {
         thin: '100',
         normal: '400',
         bold: '700',
         black: '900',
      },
   },
};

const Theme = ({ children }: Props) => {
   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
