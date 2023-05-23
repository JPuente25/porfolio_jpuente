import LaptopViewProject from '../LaptopViewProject';
import PhoneViewProject from '../PhoneViewProject';
import { Container } from './index.styled';

interface Props {
   images: {
      desktop: string[];
      mobile: string[];
   };
}

const DevicesViewProject = ({ images }: Props) => {
   return (
      <Container className='devices'>
         <LaptopViewProject images={images.desktop} />
         <PhoneViewProject images={images.mobile} />
      </Container>
   );
};

export default DevicesViewProject;
