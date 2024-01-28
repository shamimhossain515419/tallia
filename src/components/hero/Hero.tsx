import React from 'react';
import hero from "../../assets/Home/hero2.jpg"
import Image from 'next/image';
import CustomLinkButton from '../customButton/CustomLinkButton';

const Hero = () => {
     return (
          <div className=' relative'>
               <div className=' relative  max-h-[90vh] overflow-hidden'>
                    <Image className=' relative  h-full' src={hero} alt='hero'></Image>
                    <div className=' absolute  left-1/2 top-2/3 '>
                         <CustomLinkButton title="shop new" path="/"></CustomLinkButton>
                    </div>

               </div>
          </div>
     );
};

export default Hero;