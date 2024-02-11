"use client"

import React from 'react';
import { motion } from 'framer-motion'
interface CollectionsTitleProps {
     title: string;
}

const CollectionsTitle = ({ title }: CollectionsTitleProps) => {
     const defaultAnimation = {
          hidden: {
               opacity: 0,
               y: 20
          },
          visible: {
               opacity: 1,
               y: 0
          }
     }

     return (
          <div className='  relative  h-[250px]'>
               <motion.h1 initial="hidden" animate={"visible"} transition={{ staggerChildren: 0.1 }} className='text-center text-[20px]  uppercase md:text-[90px] lg:text-[100px] font-bold'>
                    {title?.split("").map((item: any, index: number) => <motion.span className=' inline-block'
                         variants={defaultAnimation} key={index}>{item}</motion.span>)}
               </motion.h1>
          </div>
     );
};

export default CollectionsTitle;