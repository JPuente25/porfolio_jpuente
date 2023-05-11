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


interface Props {
   tech: Skill;
}

const SkillCard = ({ tech: { label, icon: Icon, progress, color, bgColor, children }}: Props) => {

   return (
      <Card bgColor={bgColor} className="skill-card">
         <MainTechnology>
            <TechLabel color={color}>
               <Icon />
               <p>{label}</p>
               <LabelTooltip className='label-tooltip'>{label}</LabelTooltip>
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
            <RecursiveChildren>
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
