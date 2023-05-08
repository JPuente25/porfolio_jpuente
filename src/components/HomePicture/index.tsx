import React from 'react';
import { BuildingImg, CloudOneImg, CloudTwoImg, Picture, Sun } from './index.styled';

const HomePicture = () => {
   return (
      <Picture>
         <BuildingImg
            src='https://i.gyazo.com/d2e1d9df01d12aedd2c44d2f9f6b5954.webp'
            alt='building'
         />

         <CloudOneImg
            className='cloud-1-1'
            src='https://i.gyazo.com/13ffb8e8b2aa5f1a9e799f621104d522.png'
            alt='cloud'
         />
         <CloudOneImg
            className='cloud-1-2'
            src='https://i.gyazo.com/13ffb8e8b2aa5f1a9e799f621104d522.png'
            alt='cloud'
         />
         <CloudOneImg
            className='cloud-1-3'
            src='https://i.gyazo.com/13ffb8e8b2aa5f1a9e799f621104d522.png'
            alt='cloud'
         />

         <CloudTwoImg
            className='cloud-2-1'
            src='https://i.gyazo.com/6fc805075cdecccc75b39ecb3baf933c.png'
            alt='cloud'
         />
         <CloudTwoImg
            className='cloud-2-2'
            src='https://i.gyazo.com/6fc805075cdecccc75b39ecb3baf933c.png'
            alt='cloud'
         />
         <CloudTwoImg
            className='cloud-2-3'
            src='https://i.gyazo.com/6fc805075cdecccc75b39ecb3baf933c.png'
            alt='cloud'
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

export default HomePicture;
