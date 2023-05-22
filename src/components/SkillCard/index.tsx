import { Skill } from '@/types';
import { v4 as uuidv4 } from 'uuid';
import {
   Card,
   LabelTooltip,
   MainTechnology,
   ProgressBar,
   ProgressTooltip,
   RecursiveChildren,
   TechLabel,
   TechProgress,
} from './index.styled';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';

interface Props {
   tech: Skill;
}

const SkillCard = ({ tech: { label, icon: Icon, progress, color, bgColor, children } }: Props) => {
   const { locale } = useRouter();
   const { ref, inView } = useInView();

   return (
      <Card
         ref={ref}
         bgColor={bgColor}
         className={`in-view-effects ${inView ? 'in-view' : ''} skill-card`}>
         <MainTechnology>
            <TechLabel color={color}>
               <Icon />
               <p>{label[locale as keyof typeof label]}</p>
               <LabelTooltip className='label-tooltip'>
                  {label[locale as keyof typeof label]}
               </LabelTooltip>
            </TechLabel>

            <TechProgress>
               <ProgressBar
                  progress={progress}
                  color={color}>
                  <div className='filler'>
                     <ProgressTooltip className='progress-tooltip'>{progress}%</ProgressTooltip>
                  </div>
               </ProgressBar>
            </TechProgress>
         </MainTechnology>

         {children && (
            <RecursiveChildren className='recursive-children'>
               {children.map((childTech) => (
                  <SkillCard
                     tech={childTech}
                     key={uuidv4()}
                  />
               ))}
            </RecursiveChildren>
         )}
      </Card>
   );
};

export default SkillCard;
