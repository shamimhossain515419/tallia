import Link from 'next/link';
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { FaInstagram } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
const Menu = () => {
     const [active, setActive] = useState(false)
     return (
          <div className=' pt-3  bg-white  px-6 '>
               <div className="  flex items-start py-3    flex-col  gap-4">
                    <div>
                         <Link href={'/about-us'} className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[16px] font-normal uppercase ">
                              ABOUT US
                         </Link>

                    </div>
                    <div>
                         <Link href={'/shop'} className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[16px] font-normal uppercase " >
                              SHOP
                         </Link>
                    </div>
                    <div onClick={() => setActive(!active)} className="  ">
                         <div>
                              <Link href={'/collections/fall-winter-2023'} className="  flex items-center gap-2 text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[16px] font-normal uppercase ">
                                   <span> COLLECTIONS</span>
                                   <MdKeyboardArrowDown size={20} />
                              </Link>
                         </div>
                         <Collapse isOpened={active}>
                              <div className="   ">
                                   <div className="  space-y-1 flex flex-col  gap-3   bg-white   py-2" >
                                        <Link href={'/collections/fall-winter-2023'} className="hover:text-[#ff6900] text-primary duration-200"> Fall/Winter 2023 </Link>
                                        <Link href={'/collections/spring-summer-2023'} className="hover:text-[#ff6900] text-primary duration-200">  Spring/Summer 2023 </Link>
                                        <Link href={'/collections/fall-winter-2022'} className="hover:text-[#ff6900] text-primary duration-200"> Fall/Winter 2022 </Link>
                                   </div>
                              </div>
                         </Collapse>

                    </div>
                    <div>
                         <Link href={'/store-locator'} className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[16px] font-normal uppercase ">
                              WHERE TO BUY
                         </Link>
                    </div>
                    <div>
                         <Link href={'/contact'} className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[16px] font-normal uppercase ">CONTACT
                         </Link>
                    </div>
                    <div>
                         <Link target='_blank' href={'https://www.instagram.com/talliaclothing/'} className=" flex gap-3 items-center  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[16px] font-normal uppercase ">
                              <span>FOLLOW US</span>
                              <FaInstagram size={20}></FaInstagram>
                         </Link>
                    </div>
               </div>

          </div>
     );
};

export default Menu;