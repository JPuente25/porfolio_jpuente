import { Skill } from '@/types';
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { BsGit } from 'react-icons/bs';
import { DiCss3 } from 'react-icons/di';
import { GrReactjs } from 'react-icons/gr';
import { IoLogoJavascript, IoLogoSass } from 'react-icons/io';
import { SiCreatereactapp, SiJest, SiMui, SiStyledcomponents, SiTypescript, SiVite } from 'react-icons/si';
import { TbBrandNextjs, TbBrandRedux } from 'react-icons/tb';

const usedTechnologies: Skill[] = [
   {
      label: 'HTML',
      icon: AiFillHtml5,
      progress: 70,
      color: '#dd4b25',
      bgColor: '#dd4b2570',
      children: null,
   },
   {
      label: 'CSS',
      icon: DiCss3,
      progress: 75,
      color: '#2173f7',
      bgColor: '#2173f770',
      children: [
         {
            label: 'SASS',
            icon: IoLogoSass,
            progress: 25,
            color: '#C76395',
            bgColor: '#C7639570',
            children: null,
         },
         {
            label: 'Styled Components',
            icon: SiStyledcomponents,
            progress: 70,
            color: '#a5518a',
            bgColor: '#a5518a70',
            children: null,
         },
         {
            label: 'Material UI',
            icon: SiMui,
            progress: 10,
            color: '#00aaf7',
            bgColor: '#00aaf770',
            children: null,
         },
      ],
   },
   {
      label: 'JavaScript',
      icon: IoLogoJavascript,
      progress: 75,
      color: '#f7d800',
      bgColor: '#f7d80070',
      children: [
         {
            label: 'Typescript',
            icon: SiTypescript,
            progress: 60,
            color: '#2f74c0',
            bgColor: '#2f74c070',
            children: null,
         },
         {
            label: 'React JS',
            icon: GrReactjs,
            progress: 70,
            color: '#61d4f3',
            bgColor: '#61d4f370',
            children: [
               {
                  label: 'Next JS',
                  icon: TbBrandNextjs,
                  progress: 30,
                  color: '#000000',
                  bgColor: '#00000070',
                  children: null,
               },
               {
                  label: 'Vite JS',
                  icon: SiVite,
                  progress: 30,
                  color: '#7f77f7',
                  bgColor: '#7f77f770',
                  children: null,
               },
               {
                  label: 'Create React App',
                  icon: SiCreatereactapp,
                  progress: 70,
                  color: '#09cca7',
                  bgColor: '#09cca770',
                  children: null,
               },
               {
                  label: 'Redux',
                  icon: TbBrandRedux,
                  progress: 50,
                  color: '#7248b6',
                  bgColor: '#7248b670',
                  children: null,
               },
               {
                  label: 'Jest React',
                  icon: SiJest,
                  progress: 35,
                  color: '#813754',
                  bgColor: '#81375470',
                  children: null,
               },
            ],
         },
      ],
   },
   {
      label: 'Git',
      icon: BsGit,
      progress: 30,
      color: '#e84d31',
      bgColor: '#e84d3170',
      children: [
         {
            label: 'GitHub',
            icon: AiFillGithub,
            progress: 40,
            color: '#000000',
            bgColor: '#00000070',
            children: null,
         },
      ],
   },
];

export default usedTechnologies;
