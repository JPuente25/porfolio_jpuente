import { ViewList } from "@/types";

const views: ViewList = {
   home:   {
      id: 0,
      path: '/',
      label: 'home'
   },
   about: {
      id: 1,
      path: '/#about',
      label: 'about'
   },
   skills: {
      id: 2,
      path: '/#skills',
      label: 'skills'
   },
   projects: {
      id: 3,
      path: '/#projects',
      label: 'projects'
   },
   contact: {
      id: 4,
      path: '/#contact',
      label: 'contact'
   }
};

export default views;