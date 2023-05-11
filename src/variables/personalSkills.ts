import { BsCalendarDayFill, BsFillPatchQuestionFill, BsFillPersonFill } from 'react-icons/bs';
import { FaBrain, FaHandsHelping, FaMicrophoneAlt } from 'react-icons/fa';
import { GiStumpRegrowth, GiTeamIdea } from 'react-icons/gi';
import { RiEmpathizeFill, RiQuestionAnswerFill, RiTeamFill } from 'react-icons/ri';
import { SlOrganization } from 'react-icons/sl';

const personalSkills = [
   {
      label: 'Individual',
      icon: BsFillPersonFill,
      progress: 95,
      color: '#f5a200',
      bgColor: '#f5a20070',
      children: [
         {
            label: 'Responsability',
            icon: BsCalendarDayFill,
            progress: 100,
            color: '#484f58',
            bgColor: '#484f5870',
            children: null,
         },
         {
            label: 'Organizational',
            icon: SlOrganization,
            progress: 90,
            color: '#93deec',
            bgColor: '#93deec70',
            children: null,
         },
         {
            label: 'Problem-solving',
            icon: FaBrain,
            progress: 95,
            color: '#f77b56',
            bgColor: '#f77b5670',
            children: null,
         },
         {
            label: 'Curiosity',
            icon: BsFillPatchQuestionFill,
            progress: 90,
            color: '#9fc35f',
            bgColor: '#9fc35f70',
            children: null,
         },
         {
            label: 'Desire to grow',
            icon: GiStumpRegrowth,
            progress: 100,
            color: '#c64e2c',
            bgColor: '#c64e2c70',
            children: null,
         },
      ],
   },
   {
      label: 'Team',
      icon: RiTeamFill,
      progress: 85,
      color: '#167964',
      bgColor: '#16796470',
      children: [
         {
            label: 'Leadership',
            icon: FaMicrophoneAlt,
            progress: 75,
            color: '#3eaaf7',
            bgColor: '#3eaaf770',
            children: null,
         },
         {
            label: 'Communication',
            icon: RiQuestionAnswerFill,
            progress: 85,
            color: '#333f4f',
            bgColor: '#333f4f70',
            children: null,
         },
         {
            label: 'Collaboration',
            icon: FaHandsHelping,
            progress: 90,
            color: '#c6770c',
            bgColor: '#c6770c70',
            children: null,
         },
         {
            label: 'Ideas exchange',
            icon: GiTeamIdea,
            progress: 85,
            color: '#167964',
            bgColor: '#16796470',
            children: null,
         },
         {
            label: 'Empathy',
            icon: RiEmpathizeFill,
            progress: 90,
            color: '#8e2b23',
            bgColor: '#8e2b2370',
            children: null,
         },
      ],
   },
];

export default personalSkills;
