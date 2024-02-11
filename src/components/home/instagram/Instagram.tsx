"use client"
import React, { useEffect, useRef } from 'react';
import instagram1 from "../../../assets/Home/instagram (1).jpg"
import instagram2 from "../../../assets/Home/instagram (2).jpg"
import instagram3 from "../../../assets/Home/instagram (3).jpg"
import Image from 'next/image';
import Link from 'next/link';
import { PiCopySimpleFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { motion, useInView } from "framer-motion"
const Instagram = () => {
     const ref = useRef(null);
     const isInView = useInView(ref, { once: true });
     return (
          <div ref={ref}>
               <div style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    scale: isInView ? "translate(1deg)" : "translate(1.5deg)",
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
               }}>
                    <motion.h1 initial={{ opacity: 0, scale: 1.5 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 0.5 }} className='  text-center text-[40px] lg:text-[100px]  font-extrabold uppercase '> #BE<span className='text-shadow '>SEEN</span>IN<span className='text-shadow '>ANY</span>SCENE </motion.h1>
               </div>
               {/* instagram card  */}

               <div className=' grid md:grid-cols-3 gap-2'>
                    <div className=' group relative w-full overflow-hidden'>
                         <Link href={'/'} className=' w-full overflow-hidden'>
                              < Image className=' w-full   group-hover:scale-105 duration-200' src={instagram3} alt='image'></Image>
                              <div className=' absolute top-0   z-20 right-2 p-2'>
                                   <PiCopySimpleFill size={22} className='text-white  rounded-lg   rotate-90' />
                              </div>
                              <div className=' absolute  opacity-0   top-0 left-0  w-full h-full   bottom-0 bg-[#0b0b0b60] duration-300   group-hover:opacity-100 flex justify-center items-center'>
                                   <FaInstagram className='text-white duration-300   text-[12px] group-hover:text-[20px]' ></FaInstagram>
                              </div>
                         </Link>
                    </div>
                    <div className=' group relative w-full overflow-hidden'>
                         <Link href={'/'} className=' w-full overflow-hidden'>
                              < Image className=' w-full   group-hover:scale-105 duration-200' src={instagram2} alt='image'></Image>
                              <div className=' absolute top-0   z-20 right-2 p-2'>
                                   <PiCopySimpleFill size={22} className='text-white  rounded-lg   rotate-90' />
                              </div>
                              <div className=' absolute  opacity-0   top-0 left-0  w-full h-full   bottom-0 bg-[#0b0b0b60] duration-300   group-hover:opacity-100 flex justify-center items-center'>
                                   <FaInstagram className='text-white duration-300   text-[12px] group-hover:text-[20px]' ></FaInstagram>
                              </div>
                         </Link>
                    </div>
                    <div className=' group relative w-full overflow-hidden'>
                         <Link href={'/'} className=' w-full overflow-hidden'>
                              < Image className=' w-full   group-hover:scale-105 duration-200' src={instagram1} alt='image'></Image>
                              <div className=' absolute top-0   z-20 right-2 p-2'>
                                   <PiCopySimpleFill size={22} className='text-white  rounded-lg   rotate-90' />
                              </div>
                              <div className=' absolute  opacity-0   top-0 left-0  w-full h-full   bottom-0 bg-[#0b0b0b60] duration-300   group-hover:opacity-100 flex justify-center items-center'>
                                   <FaInstagram className='text-white duration-300   text-[12px] group-hover:text-[20px]' ></FaInstagram>
                              </div>
                         </Link>
                    </div>

               </div>

          </div>
     );
};

export default Instagram;