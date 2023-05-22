import { IconType } from "react-icons/lib";

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
}

export type Skill = {
   label: {
      en: string;
      es: string;
   };
   icon: IconType;
   progress: number;
   color: string;
   bgColor: string;
   children: Tech[] | null;
};

export type Project = {
   name: string;
   description: {
      es: string;
      en: string;
   };
   status: 'finished' | 'in-progress' | 'not-started';
   site_url: string;
   repo_url: string;
   background_color: string;
   text_color: string;
   images: {
      desktop: string[];
      mobile: string[];
   };
   key: 'movix' | 'kingsLeague' | 'platziShop';
}