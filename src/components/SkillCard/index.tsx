import { Skill } from '@/types';
import { v4 as uuidv4 } from 'uuid';
import {
   Card,
   LabelTooltip,
   MainSkill,
   ProgressBar,
   ProgressTooltip,
   RecursiveChildren,
   Label,
   Progress,
} from './index.styled';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';

interface Props {
   skill: Skill;
}

const SkillCard = ({ skill: { label, icon: Icon, progress, color, bgColor, children } }: Props) => {
   const { locale } = useRouter();
   const { ref, inView } = useInView();

   return (
      <Card
         ref={ref}
         bgColor={bgColor}
         className={`in-view-effects ${inView ? 'in-view' : ''} skill-card`}>
         <MainSkill>
            <Label color={color}>
               <Icon />
               <p>{label[locale as keyof typeof label]}</p>
               <LabelTooltip className='label-tooltip'>
                  {label[locale as keyof typeof label]}
               </LabelTooltip>
            </Label>

            <Progress>
               <ProgressBar
                  progress={progress}
                  color={color}>
                  <div className='filler'>
                     <ProgressTooltip className='progress-tooltip'>{progress}%</ProgressTooltip>
                  </div>
               </ProgressBar>
            </Progress>
         </MainSkill>

         {children && (
            <RecursiveChildren className='recursive-children'>
               {children.map((itemSkill) => (
                  <SkillCard
                     skill={itemSkill}
                     key={uuidv4()}
                  />
               ))}
            </RecursiveChildren>
         )}
      </Card>
   );
};

export default SkillCard;
