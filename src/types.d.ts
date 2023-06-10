import { IconType } from 'react-icons/lib';

export type View = {
   id: number;
   path: string;
   label: string;
};

export type ViewList = {
   home: View;
   about: View;
   skills: View;
   projects: View;
   contact: View;
};

export type Tech = {
   label: string;
   icon: string;
};

export type CardTheme = {
   titleBackground: string;
   backgroundGradientToTop: string;
   backgroundGradientToRight: string;
   backgroundGradientToLeft: string;
   buttonBackgroundColor: string;
   buttonBackgroundImage: string;
};

export type Project = {
   name: string;
   description: {
      es: string;
      en: string;
   };
   status: string;
   site_url: string;
   repo_url: string;
   background_color: string;
   text_color: string;
   images: {
      desktop: string[];
      mobile: string[];
   };
   key: string;
   card_theme: CardTheme;
};
