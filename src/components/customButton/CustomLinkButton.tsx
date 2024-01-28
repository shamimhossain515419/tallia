import { LinkButton } from '@/types/CustomButton';
import Link from 'next/link';
import React from 'react';

const CustomLinkButton = ({ title, path }: LinkButton) => {
     return (
          <Link href={path} className='text-whit inline-flex overflow-hidden items-center justify-start   transition-all relative group  px-4 py-2 text-[16px] font-normal rounded-[40px]  bg-transparent  hover:border-[#F15A24] duration-500 border border-[#fff]'>
               <span className="w-full  h-full rounded  bg-[#F15A24] absolute bottom-0 left-0 right-0 -translate-x-full ease-out duration-500 transition-all translate-y-full group-hover:ml-0 group-hover:mb-10 group-hover:translate-x-0"></span>
               <span className="relative uppercase w-full text-center transition-colors duration-300 ease-in-out text-white">{title}</span>

          </Link>
     );
};

export default CustomLinkButton;