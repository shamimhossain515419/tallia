import Link from 'next/link';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Menu = () => {
     return (
          <div className=' pt-3'>
               <div className="  flex items-start py-3    flex-col  gap-4">
                    <div>
                         <Link href={'/'} className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[16px] font-normal uppercase ">
                              ABOUT US
                              <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                         </Link>

                    </div>
                    <div>
                         <Link href={'/'} className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[16px] font-normal uppercase " >
                              SHOP
                              <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>

                         </Link>
                    </div>
                    <div>
                         <Link href={'/'} className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[16px] font-normal uppercase ">
                              COLLECTIONS
                              <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                         </Link>
                    </div>
                    <div>
                         <Link href={'/'} className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[16px] font-normal uppercase ">
                              WHERE TO BUY
                              <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>

                         </Link>
                    </div>
                    <div>
                         <Link href={'/'} className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[16px] font-normal uppercase ">CONTACT
                              <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                         </Link>
                    </div>
                    <div>
                         <Link href={'/'} className=" flex gap-3 items-center  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[16px] font-normal uppercase ">
                              <span>FOLLOW US</span>
                              <FaInstagram size={20}></FaInstagram>
                              <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>

                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default Menu;