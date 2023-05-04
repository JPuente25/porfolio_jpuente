import React from 'react';
import { ThemeProvider } from 'styled-components';

interface Props {
   children: React.ReactNode;
}

export const theme = {
   colors: {
      primary: '#FFF',
      secondary: '#000',
      testHome: 'lightblue',
      testAbout: 'orange',
      testSkills: 'lightgreen',
      testPortfolio: 'lightyellow',
      testContact: 'cyan',
      testOther: 'lightpurple',
      text: {
         white: '#FFF'
      }
   },
   font: {
      family: 'Arial, Helvetica, sans-serif',
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
