"use client"

import Image from "next/image";
import image11 from "../../../src/assets/product/1.1.jpg"
import image22 from "../../../src/assets/product/1.2.jpg"
import { IoClose } from "react-icons/io5";
import CustomLinkButton from "../customButton/CustomLinkButton";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';



const ProductModal = ({ product, setActive }: any) => {
     const { image1, image2, image3, image4, name, subtitle, color, path } = product || {};
     const [open, setOpen] = useState(false);
     console.log(product);
     return (
          <div className=" min-h-screen flex justify-center items-center  min-w-screen bg-[#00000091]  z-50 fixed top-0 left-0 bottom-0 right-0">
               <div className="   relative  max-w-[1000px]  grid  items-center  bg-white md:grid-cols-2 gap-3">
                    <div className=" w-full max-h-[500px] overflow-hidden">
                         <Swiper navigation={true} modules={[Navigation]} className=" w-full h-full">
                              {
                                   image1 ? <SwiperSlide>  <Image src={image1} alt="image"></Image></SwiperSlide> : null
                              }
                              {
                                   image2 ? <SwiperSlide>  <Image src={image2} alt="image"></Image></SwiperSlide> : null
                              }
                              {
                                   image3 ? <SwiperSlide>  <Image src={image3} alt="image"></Image></SwiperSlide> : null
                              }
                              {
                                   image4 ? <SwiperSlide>  <Image src={image4} alt="image"></Image></SwiperSlide> : null
                              }

                         </Swiper>


                    </div>
                    <div className="  flex justify-center    md:relative">
                         <div className="text-center">

                              <h1 className="text-[20px] font-medium"> {name} </h1>
                              <h2 className="text-[#7a7a7a]  py-1 font-normal text-[18px]"> {subtitle} </h2>
                              <p className="text-[#7a7a7a] text-[17px] py-2"> Color: {color}</p>
                              <div className=" py-5">
                                   <CustomLinkButton title={"Buy now"} path={path} primary_bg="bg-black"></CustomLinkButton>
                              </div>
                         </div>

                    </div>

                    <div onClick={() => setActive(false)} className=" hover:text-red-500 z-50 cursor-pointer absolute top-1 right-0 p-3">
                         <IoClose size={24} />
                    </div>
               </div>
          </div>
     );
};

export default ProductModal;