import { useI18N } from '@/app/i18n';
import TechCard from '@/components/TechCard';
import data from '@/data/data.json';
import { Tech } from '@/types';
import { v4 as uuidv4 } from 'uuid';
import { StyledContainer as Container, Stack, TechStack, Title } from './index.styled';

const Techs = () => {
   const { t } = useI18N();

   return (
      <Container>
         <TechStack>
            <Title>{t('TECH_STACK')}</Title>
            <Stack>
               {data.personal.tech_stack.map((tech: Tech) => (
                  <TechCard
                     tech={tech}
                     key={uuidv4()}
                  />
               ))}
            </Stack>
         </TechStack>

         <TechStack>
            <Title>{t('BASICS')}</Title>
            <Stack>
               {data.personal.basic_stack.map((tech: Tech) => (
                  <TechCard
                     tech={tech}
                     key={uuidv4()}
                  />
               ))}
            </Stack>
         </TechStack>
      </Container>
   );
};

export default Techs;
