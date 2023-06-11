import { useInView } from 'react-intersection-observer';
import { BuildingImg, CloudOneImg, CloudTwoImg, Picture, Sun } from './index.styled';

const BuildingPicture = () => {
   return (
      <Picture>
         <BuildingImg
            src='https://i.gyazo.com/4b6239879d8f63a3d3f780435091d70b.webp'
            alt='building'
            width={500}
            height={500}
            sizes='(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 500px'
            quality={100}
            priority={true}
         />

         <CloudOneImg
            className='cloud-1-1'
            src='https://i.gyazo.com/e004080406bd019e361f33b7a1051768.webp'
            alt='cloud'
            width={50}
            height={50}
            sizes='(max-width: 348px) 30px, 50px'
         />
         <CloudOneImg
            className='cloud-1-2'
            src='https://i.gyazo.com/e004080406bd019e361f33b7a1051768.webp'
            alt='cloud'
            width={50}
            height={50}
            sizes='(max-width: 348px) 30px, 50px'
         />
         <CloudOneImg
            className='cloud-1-3'
            src='https://i.gyazo.com/e004080406bd019e361f33b7a1051768.webp'
            alt='cloud'
            width={50}
            height={50}
            sizes='(max-width: 348px) 30px, 50px'
         />

         <CloudTwoImg
            className='cloud-2-1'
            src='https://i.gyazo.com/c5fb1bbff8784c5c5c5d7445d9e674c0.webp'
            alt='cloud'
            width={50}
            height={50}
            sizes='(max-width: 348px) 30px, 50px'
         />
         <CloudTwoImg
            className='cloud-2-2'
            src='https://i.gyazo.com/c5fb1bbff8784c5c5c5d7445d9e674c0.webp'
            alt='cloud'
            width={50}
            height={50}
            sizes='(max-width: 348px) 30px, 50px'
         />
         <CloudTwoImg
            className='cloud-2-3'
            src='https://i.gyazo.com/c5fb1bbff8784c5c5c5d7445d9e674c0.webp'
            alt='cloud'
            width={50}
            height={50}
            sizes='(max-width: 348px) 30px, 50px'
         />

         <Sun>
            <div className='ray_box'>
               <div className='ray ray1'></div>
               <div className='ray ray2'></div>
               <div className='ray ray3'></div>
               <div className='ray ray4'></div>
               <div className='ray ray5'></div>
               <div className='ray ray6'></div>
               <div className='ray ray7'></div>
               <div className='ray ray8'></div>
               <div className='ray ray9'></div>
               <div className='ray ray10'></div>
            </div>
         </Sun>
      </Picture>
   );
};

export default BuildingPicture;
