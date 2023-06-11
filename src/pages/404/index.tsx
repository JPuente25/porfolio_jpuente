import Link from 'next/link';
import { Container } from '../../styles/pages/404/index.styled';
import { useI18N } from '@/app/i18n';

const NotFound = () => {
   const { t } = useI18N();
   return (
      <Container>
         <div>
            <h1>404</h1>
            <p>{t('404_MSG')}</p>
         </div>
         <Link
            href='/'
            aria-label='Go back to home'>
            {t('GO_HOME')}
         </Link>
      </Container>
   );
};

export default NotFound;
