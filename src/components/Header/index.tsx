import { font } from '@/pages/_app';
import Image from 'next/image';
import LinksList from '../LinkList';
import { Container, NameLink } from './index.styled';

const Header = () => {


   return (
      <Container className={font.className}>
         <NameLink href='/'>
            <Image
               src='https://i.gyazo.com/484cc2ef8d62e2ef1b07836019cbf0ae.png'
               alt='jaime puente logo'
               width={500}
               height={500}
            />
            <div>
               <span>Jaime</span>
               <span>Puente</span>
            </div>
         </NameLink>

         <LinksList />
      </Container>
   );
};

export default Header;
