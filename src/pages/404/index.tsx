import Link from 'next/link';
import { Container } from './index.styled';
import { useI18N } from '@/app/i18n';


const NotFound = () => {
   const {t} = useI18N();
   return (
      <Container>
         <div>
            <h1>404</h1>
            <p>{t("404_MSG")}</p>
         </div>
         <Link href='/'>{t("GO_HOME")}</Link>
      </Container>
   );
};

export default NotFound;
