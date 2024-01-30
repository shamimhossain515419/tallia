import ProductCart from '@/components/common-cart/ProductCart';
import React from 'react';
import image1 from "../../../src/assets/product/top1.jpg"
import Image from 'next/image';
import { products } from '@/utils/product';
const page = () => {
     return (
          <div>
               <div className=' max-w-[1400px] mx-auto py-4 '>


                    <div className=' py-3 grid md:grid-cols-3 gap-4'>
                         <div className=' col-span-2   h-[600px] '>
                              <div className=' relative group  w-full h-full'>
                                   <Image className=' w-full h-full   overflow-hidden' src={image1} alt='image'></Image>

                                   <div className='  group-hover:opacity-100 duration-300  opacity-0 absolute top-1/2 left-[30%] cursor-pointer'>
                                        <span className="relative flex h-5 w-5">
                                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                             <span className="relative inline-flex rounded-full  h-5 w-5 bg-white"></span>
                                        </span>
                                   </div>
                                   <div className='  group-hover:opacity-100 duration-300  opacity-0 absolute top-1/2 right-[30%] cursor-pointer'>
                                        <span className="relative flex h-5 w-5">
                                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                             <span className="relative inline-flex rounded-full  h-5 w-5 bg-white"></span>
                                        </span>
                                   </div>
                                   <div className='  group-hover:opacity-100 duration-300  opacity-0 absolute top-[25%] left-[33%] cursor-pointer'>
                                        <span className="relative flex h-5 w-5">
                                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                             <span className="relative inline-flex rounded-full  h-5 w-5 bg-white"></span>
                                        </span>
                                   </div>
                                   <div className='  group-hover:opacity-100 duration-300  opacity-0 absolute top-[20%] right-[45%] cursor-pointer'>
                                        <span className="relative flex h-5 w-5">
                                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                             <span className="relative inline-flex rounded-full  h-5 w-5 bg-white"></span>
                                        </span>
                                   </div>
                              </div>
                         </div>
                         <div className=' col-span-1'>
                              <ProductCart></ProductCart>
                         </div>
                    </div>
                    <div className=' grid  md:grid-cols-3 gap-2'>
                         {
                              products?.map((product, index) => <ProductCart product={product} key={index}></ProductCart>)
                         }
                    </div>

                    <div className=' py-3 grid md:grid-cols-3 gap-4'>
                         <div className=' col-span-1'>
                              <ProductCart></ProductCart>
                         </div>
                         <div className=' col-span-2   h-[600px] '>
                              <div className=' relative group  w-full h-full'>
                                   <Image className=' w-full h-full   overflow-hidden' src={image1} alt='image'></Image>

                                   <div className='  group-hover:opacity-100 duration-300  opacity-0 absolute top-1/2 left-[30%] cursor-pointer'>
                                        <span className="relative flex h-5 w-5">
                                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                             <span className="relative inline-flex rounded-full  h-5 w-5 bg-white"></span>
                                        </span>
                                   </div>
                                   <div className='  group-hover:opacity-100 duration-300  opacity-0 absolute top-1/2 right-[30%] cursor-pointer'>
                                        <span className="relative flex h-5 w-5">
                                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                             <span className="relative inline-flex rounded-full  h-5 w-5 bg-white"></span>
                                        </span>
                                   </div>
                                   <div className='  group-hover:opacity-100 duration-300  opacity-0 absolute top-[25%] left-[33%] cursor-pointer'>
                                        <span className="relative flex h-5 w-5">
                                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                             <span className="relative inline-flex rounded-full  h-5 w-5 bg-white"></span>
                                        </span>
                                   </div>
                                   <div className='  group-hover:opacity-100 duration-300  opacity-0 absolute top-[20%] right-[45%] cursor-pointer'>
                                        <span className="relative flex h-5 w-5">
                                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                             <span className="relative inline-flex rounded-full  h-5 w-5 bg-white"></span>
                                        </span>
                                   </div>
                              </div>
                         </div>

                    </div>
                    <div className=' grid  md:grid-cols-3 gap-2'>
                         {
                              products?.map((product, index) => <ProductCart product={product} key={index}></ProductCart>)
                         }
                    </div>
               </div>
          </div>
     );
};

export default page;