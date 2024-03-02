import Link from 'next/link';
import React from 'react';
import { PiKeyReturnBold } from 'react-icons/pi';

const Return = ({ setActive }: any) => {
     return (
          <div>
               <div>
                    <h1 className=''> Check the progress of your returns, reschedule collection and print your return documents</h1>

                    <div className=' flex gap-3 justify-center items-center text-center py-16'>
                         <div className=' flex items-center gap-7 flex-col'>
                              <div className=' flex justify-center items-center'>
                                   <PiKeyReturnBold size={35}></PiKeyReturnBold>
                              </div>
                              <div>
                                   <h1 className='text-[20px] font-medium  primary'>You currently have no returns</h1>
                                   <p className=''>You can start a return request from the order tracker.</p>
                              </div>
                              <div>
                                   <div onClick={() => setActive(1)} className=' border  hover:bg-[#F5F5F5] cursor-pointer  px-5 py-[10px]  capitalize rounded-lg  text-[16px] font-medium border-[#000]'> View Orders</div>
                              </div>

                         </div>
                    </div>

               </div>
          </div>
     );
};

export default Return;