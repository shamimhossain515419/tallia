import { Title_Marquee } from '@/types/Title_Marquee';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Title_Marquee = ({ title, classStyle }: Title_Marquee) => {
     return (

          <Marquee speed={100}>
               <h1 className={`  text-[40px] lg:text-[100px]  text-primary font-extrabold uppercase ${classStyle}`}> {title}</h1>
          </Marquee>

     );
};

export default Title_Marquee;