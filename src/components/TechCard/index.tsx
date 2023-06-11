import { Tech } from '@/types';
import Image from 'next/image';
import { Card, LabelTooltip } from './index.styled';

interface Props {
   tech: Tech;
}

const TechCard = ({ tech: { label, icon } }: Props) => {
   return (
      <Card>
         <LabelTooltip
            className='label-tooltip'
            label={label}></LabelTooltip>
         <Image
            src={icon}
            alt={label}
            width={50}
            height={50}
            sizes='(max-width: 991px) 50px, 70px'
         />
      </Card>
   );
};

export default TechCard;
