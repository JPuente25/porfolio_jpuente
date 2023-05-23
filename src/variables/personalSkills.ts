import { BsCalendarDayFill, BsFillPatchQuestionFill, BsFillPersonFill } from 'react-icons/bs';
import { FaBrain, FaHandsHelping, FaMicrophoneAlt } from 'react-icons/fa';
import { GiStumpRegrowth, GiTeamIdea } from 'react-icons/gi';
import { RiEmpathizeFill, RiQuestionAnswerFill, RiTeamFill } from 'react-icons/ri';
import { SlOrganization } from 'react-icons/sl';

const personalSkills = [
   {
      label: {
         en: 'Individual',
         es: 'Individual',
      },
      icon: BsFillPersonFill,
      progress: 95,
      color: '#f5a200',
      bgColor: '#f5a20070',
      children: [
         {
            label: { en: 'Responsability', es: 'Responsabilidad' },
            icon: BsCalendarDayFill,
            progress: 100,
            color: '#484f58',
            bgColor: '#484f5870',
            children: null,
         },
         {
            label: { en: 'Organizational', es: 'Organizacional' },
            icon: SlOrganization,
            progress: 90,
            color: '#93deec',
            bgColor: '#93deec70',
            children: null,
         },
         {
            label: { en: 'Problem-solving', es: 'Resolución de problemas' },
            icon: FaBrain,
            progress: 95,
            color: '#f77b56',
            bgColor: '#f77b5670',
            children: null,
         },
         {
            label: { en: 'Curiosity', es: 'Curiosidad' },
            icon: BsFillPatchQuestionFill,
            progress: 90,
            color: '#9fc35f',
            bgColor: '#9fc35f70',
            children: null,
         },
         {
            label: { en: 'Desire to grow', es: 'Deseo de crecer' },
            icon: GiStumpRegrowth,
            progress: 100,
            color: '#c64e2c',
            bgColor: '#c64e2c70',
            children: null,
         },
      ],
   },
   {
      label: { en: 'Team', es: 'Equipo' },
      icon: RiTeamFill,
      progress: 90,
      color: '#167964',
      bgColor: '#16796470',
      children: [
         {
            label: { en: 'Leadership', es: 'Liderazgo' },
            icon: FaMicrophoneAlt,
            progress: 85,
            color: '#3eaaf7',
            bgColor: '#3eaaf770',
            children: null,
         },
         {
            label: { en: 'Communication', es: 'Comunicación' },
            icon: RiQuestionAnswerFill,
            progress: 100,
            color: '#333f4f',
            bgColor: '#333f4f70',
            children: null,
         },
         {
            label: { en: 'Collaboration', es: 'Colaboración' },
            icon: FaHandsHelping,
            progress: 90,
            color: '#c6770c',
            bgColor: '#c6770c70',
            children: null,
         },
         {
            label: { en: 'Ideas exchange', es: 'Intercambio de ideas' },
            icon: GiTeamIdea,
            progress: 95,
            color: '#167964',
            bgColor: '#16796470',
            children: null,
         },
         {
            label: { en: 'Empathy', es: 'Empatía' },
            icon: RiEmpathizeFill,
            progress: 95,
            color: '#8e2b23',
            bgColor: '#8e2b2370',
            children: null,
         },
      ],
   },
];

export default personalSkills;
