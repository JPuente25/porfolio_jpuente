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