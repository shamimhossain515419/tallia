import Link from 'next/link';
import React from 'react';
import { IoIosArrowBack } from "react-icons/io";

const MyAccount = () => {
     return (
          <div className=' md:hidden  pt-3 pb-6'>
               <div className=' flex  items-center gap-2'>
                    <div>
                         <IoIosArrowBack size={16} />
                    </div>
                    <Link className='text-[19px]  primary font-medium ' href={'/useraccount'}>My  Account</Link>
               </div>
          </div>
     );
};

export default MyAccount;