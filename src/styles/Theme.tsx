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
         gold: '#FFD700',
         darkGold: '#858103',
         cyan: '#43cffd',
         cyan2: '#5defff',
         cyan3: '#114a61',
         red: '#961e28',
      },
      background: {
         primary: '#2d3436',
         header: '#13161b',
         footer: '#13161b',
         opposite: '#fff',
         gold: 'rgb(163, 153, 39)',
         gold2: '#ffca30',
         cyan: '#2da7cf',
         default: '#484848',
         cardBar: '#3b3c36',
         cardLabel: '#100c08',
         cardBg: '#A9A9A9',
         tooltip: '#282828',
         tooltip2: '#d4d4d4',
         darkBlue: '#04152d',
         green: '#B0FC38',
         orange: 'orange',
         successGreen: '#63f763',
         errorRed: '#961e28',
         gray: '#696969',
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
         darkBlue: 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
         darkBlue2: 'linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)',
         red: 'linear-gradient(90.3deg, rgb(255, 255, 255) 3%, rgb(235, 158, 98) 34.6%, rgb(177, 10, 10) 63.7%, rgb(0, 0, 0) 102%)',
         green: 'linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%)',
         green2: 'linear-gradient(to bottom, transparent 0%,  #39F3BB 30%, #000000 100%)',
         green3: 'linear-gradient(to right, transparent 0%,  #39F3BB 30%, #000000 100%)',
      },
      transparency: {
         primary: 'rgba(255, 255, 255, 0.5)',
         secondary: 'rgba(255, 255, 255, 0.3)',
         tertiary: 'rgba(0, 0, 0, 0.5)',
         green: 'rgba(37, 96, 37, 0.5)',
         green2: 'rgba(54, 164, 178, 0.5)',
         blue: 'rgba(0, 0, 255, 0.25)',
      },
      shadow: {
         primary: 'drop-shadow(0px 0px 20px #FFFFFF60)',
         box: '4px 4px 4px rgb(0, 0, 0, 0.75)',
         opposite: '4px 4px 4px rgb(255, 255, 255, 0.75)'
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
         x7lg: '100px',
         superxlg: '200px'
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
