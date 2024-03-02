"use client"
import PasswordChange from '@/components/useraccount/profile/PasswordChange';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiEdit } from "react-icons/fi";

const Page = () => {
    const { data: userinfo } = useSession();
    const [activePassword, setActivePassword] = useState(false)
    return (
        <>
            <div className=' lg:px-3'>
                <div className=' w-[150px] relative h-[150px] border  border-secondary rounded-full'>
                    <Image className=' w-full h-full rounded-full   object-cover' width={250} height={250} src={"https://i.ibb.co/xXq53xr/Whats-App-Image-2023-11-26-at-12-37-03-bd5f6e7b.png"} alt='profile'></Image>
                    <p className=' bg-white absolute z-30 border-2 p-1 border-secondary rounded-full bottom-1 right-3'><FiEdit size={15} /></p>
                </div>
                <div className=' border border-secondary p-3 my-7 space-y-2 rounded-md'>
                    <div className='  grid md:grid-cols-2 gap-2 lg:gap-5'>
                        <h4 className='text-[17px] font-medium'> Name </h4>
                        <h4 className=' capitalize'> {userinfo?.user?.name} </h4>
                    </div>
                    <div className='  grid md:grid-cols-2 gap-2 lg:gap-5'>
                        <h4 className='text-[17px] font-medium'> Address </h4>
                        <h4 className='capitalize '> Singra Natore Bangladesh </h4>
                    </div>
                    <div className='  grid md:grid-cols-2 gap-2 lg:gap-5'>
                        <h4 className='text-[17px] font-medium'> Email </h4>
                        <h4 className='capitalize '> {userinfo?.user?.email} </h4>
                    </div>
                    <div className='  grid md:grid-cols-2 gap-2 lg:gap-5'>
                        <h4 className='text-[17px] font-medium'> Phone </h4>
                        <h4 className='capitalize '> +088012545255 </h4>
                    </div>
                    <div className='  grid md:grid-cols-2 gap-2 lg:gap-5'>
                        <h4 className='text-[17px] font-medium'> Gender </h4>
                        <h4 className='capitalize '> Male </h4>
                    </div>
                    <div className='  grid md:grid-cols-2 gap-2 lg:gap-5'>
                        <h4 className='text-[17px] font-medium'> Password </h4>
                        <h4 className='capitalize flex items-center gap-2 '>  <span> ******** </span> <span className=' cursor-pointer hover:text-blue-500 duration-300' onClick={() => setActivePassword(true)}><FiEdit size={15} /> </span> </h4>
                    </div>
                </div>


            </div>
            {
                activePassword && <PasswordChange setActivePassword={setActivePassword} />
            }
        </>
    );
};

export default Page;