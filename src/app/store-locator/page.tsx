import SearchRadius from '@/components/search-radius/SearchRadius';
import SelectLocation from '@/components/selectLocation/SelectLocation';
import Link from 'next/link';
import React from 'react';

const page = () => {
     return (
          <div className=' py-10  px-1'>
               <div className=' max-w-[800px] mx-auto'>
                    <h1 className=' text-[30px] lg:text-[40px] font-bold md:text-[80px] text-center '>STORE LOCATOR</h1>
                    <div className=' my-16  flex flex-wrap justify-center items-center gap-5 md:gap-10'>
                         <Link href={'/'} className=' text-[22px] lg:text-[30px] font-bold hover:text-secondary hover:underline'> MACYS </Link>
                         <Link href={'/'} className=' text-[22px] lg:text-[30px] font-bold hover:text-secondary hover:underline'>BELK</Link>
                         <Link href={'/'} className=' text-[22px] lg:text-[30px] font-bold hover:text-secondary hover:underline'>DXL</Link>
                         <Link href={'/'} className=' text-[22px] lg:text-[30px] font-bold hover:text-secondary hover:underline'> VON MAUR</Link>
                    </div>
               </div>
               <div className=' max-w-[1380px]  mx-auto'>
                    <div className=' border my-1 py-[14px] px-2 md:px-6  lg:rounded-[100px] bg-[#ECECEC] border-[#8C8C8C] w-full'>
                         <div className=' grid md:grid-cols-2 gap-4'>
                              <div className=' flex items-start lg:items-center justify-center  flex-col md:flex-row gap-4'>
                                   <p className='text-[15px] md:w-[25%]  text-primary font-bold'>YOUR LOCATION</p>
                                   <div className=' w-full'>
                                        <input className='  w-full  bg-white p-2 rounded-[70px]' type="text" placeholder='' name="" id="" />
                                   </div>
                              </div>
                              <div className=' flex gap-2  items-center  flex-wrap'>
                                   <p className='text-[15px]  text-primary font-bold'>SEARCH RADIUS </p>
                                   <div>
                                         <SearchRadius></SearchRadius>
                                   </div>
                                   <div>
                                        <button className='border-[#8C8C8C] border rounded-[35px] px-3 text-[14px] font-normal py-2'>Search </button>
                                   </div>
                              </div>
                         </div>
                    </div>

                      {/* select location  */}

                      <div>
                          <SelectLocation></SelectLocation>
                      </div>
               </div>
          </div>
     );
};

export default page;