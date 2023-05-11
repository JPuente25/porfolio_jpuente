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
   label: string;
   icon: IconType;
   progress: number;
   color: string;
   bgColor: string;
   children: Tech[] | null;
};