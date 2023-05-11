import SkillCard from '@/components/SkillCard';
import { Skill } from '@/types';
import personalSkills from '@/variables/personalSkills';
import usedTechnologies from '@/variables/usedTechnologies';
import views from '@/variables/views';
import { useInView } from 'react-intersection-observer';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { v4 as uuidv4 } from 'uuid';
import { PersonalSkills, SkillsContainer, StyledContainer, Technologies } from './index.styled';

const Skills = () => {
   const { ref, inView } = useInView({
      threshold: 0.1,
   });

   return (
      <StyledContainer props={{ ref, inView, view: views.skills.label }}>
         <Technologies>
            <h1>Technologies I know</h1>

            <ResponsiveMasonry
               columnsCountBreakPoints={{ 0: 1, 991: 2 }}
               style={{ width: '100%' }}>
               <Masonry gutter='30px'>
                  {usedTechnologies.map((skill: Skill) => (
                     <SkillCard
                        tech={skill}
                        key={uuidv4()}
                     />
                  ))}
               </Masonry>
            </ResponsiveMasonry>
         </Technologies>

         <PersonalSkills>
            <h1>Personal Skills</h1>

            <SkillsContainer>
               {personalSkills.map((skill: Skill) => (
                  <SkillCard
                     tech={skill}
                     key={uuidv4()}
                  />
               ))}
            </SkillsContainer>
         </PersonalSkills>
      </StyledContainer>
   );
};

export default Skills;
