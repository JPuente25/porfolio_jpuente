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
         tertiary: '#ccd6f6',
         opposite: '#000',
         hover: '#ffcc33',
         disabled: '#696969',
         background: 'A9A9A9',
         hello: '#BA0021',
         civilEngineer: '#ffac05',
         react: '#2da7cf',
         thanks: 'green',
         gold: '#FFD700',
         darkGold: '#858103',
         cyan: '#43cffd',
         cyan2: '#5defff',
         cyan3: '#114a61'
      },
      background: {
         primary: '#2d3436',
         header: '#13161b',
         footer: '#13161b',
         gold: 'rgb(163, 153, 39)',
         cyan: '#2da7cf',
         default: '#484848'
      },
      gradient: {
         home: 'linear-gradient(315deg, #2d3436 0%, #000000 90%)',
         about: 'linear-gradient(315deg, #274060 0%, #2d3436 90%)',
         skills: 'linear-gradient(315deg, #1b2845 0%, #274060 90%)',
         projects: 'linear-gradient(316deg, #130724 0%, #1b2845 90%)',
         contact: 'linear-gradient(315deg, #4c4177 0%, #130724 90%)',
         gold: 'linear-gradient(310deg,#f6f4de 0%,#f9d581 45%,#ffac05 82%)',
         cyan: 'linear-gradient(315deg, #1baada 0%, #80ced7 74%)',
         cyan2: 'linear-gradient(315deg, #93dff8 0%, #5defff 74%)',
         cyan3: 'linear-gradient(315deg, #fefefe 0%, #00a4e4 74%)',
         goldAndCyan: 'linear-gradient(90deg,#1baada 0%, #ffac05 100%)',
         imageFilter: 'linear-gradient(180deg, transparent 0%, transparent 80%, #000 100%)',
         textBox: 'linear-gradient(to right, #243b55, #141e30)',
         webkitTextBox:  '-webkit-linear-gradient(to right, #243b55, #141e30)',
      },
      transparency: {
         primary: 'rgba(255, 255, 255, 0.5)',
         secondary: 'rgba(255, 255, 255, 0.7)',
      },
      shadow: {
         primary: 'drop-shadow(0px 0px 20px #FFFFFF60)',
      },
      boxShadow: {
         primary: '0px 0px 12px #000',
      }

   },
   font: {
      size: {
         sm: '12px',
         sm2: '14px',
         md: '16px',
         lg: '20px',
         xlg: '24px',
         x2lg: '30px',
         x3lg: '42px',
         x4lg: '56px',
         x5lg: '70px',
         x6lg: '84px',
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
