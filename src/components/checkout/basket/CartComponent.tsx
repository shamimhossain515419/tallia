"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { CiCircleQuestion } from 'react-icons/ci';
import { IoIosArrowUp, IoMdClose } from 'react-icons/io';
import { TiHeartFullOutline, TiHeartOutline } from 'react-icons/ti';
import image from "../../../assets/product/1.2.jpg";
import image2 from "../../../assets/product/1.2.jpg";
import { LuMinus, LuPlus } from 'react-icons/lu';
const CartComponent = () => {
    const [heart, setHeart] = useState(false);
    const [changeSize, setChangeSize] = useState(false)
    const [showSizeOption, setShowSizeOption] = useState(false);
    const [selectQuantity, SetSelectQuantity] = useState("")

    const handleWishlist = () => {

    }

    return (
        <div>
            <div className=' lg:pt-10'>
                <div className='  relative'>

                    <div className=' border-b border-[#aca2a2d7] py-3 flex flex-wrap justify-between items-center gap-2'>
                        {/* image  */}
                        <div className=' flex items-center gap-2'>
                            <Image className='w-[18px] h-[18px] object-fill rounded-full' src={image} alt='image'></Image>
                            <p className=' text-[15px] text-color  font-normal'>Sending from   <span className='font-bold'>Netherlands</span></p>
                        </div>
                        <div className=' flex items-center gap-2 md:gap-11'>
                            <p className='text-[14px] text-color'>You may have to pay import duties</p>
                            <CiCircleQuestion size={19} />
                        </div>
                    </div>
                    <div className='   grid grid-cols-3 md:grid-cols-4  relative    gap-3 py-4'>
                        <div className=' col-span-1 md:col-span-1 w-full'>
                            {/* product image  */}
                            <Image width={100} height={100} className=' max-h-[250px]' src={image2} alt='product'></Image>
                        </div>
                        <div className=' col-span-2 md:col-span-3 flex flex-col md:flex-row gap-2 w-full '>
                            {/* product details  */}
                            <div className=' w-full'>
                                <p className=' text-[14px]    tracking-tight capitalize font-normal text-[#727272]'> New session </p>
                                <h4 className=' py-1 text-[16px] font-medium primary'>{"product?.nam"}</h4>
                                <p className='text-[15px] text-color'>Le Petit Tourni bucket bag</p>
                                <p className='text-[15px] text-color'>onedrob ID: 22242446</p>
                            </div>
                            <div className=' w-full'>
                                <h2 className='text-[16px] font-semibold'>${1}</h2>
                            </div>
                            <div className=' w-full'>
                                <span className=' text-[14px]    tracking-tight capitalize font-normal text-[#727272]'>Size</span>
                                {/* select size  */}
                                <div>
                                    <p>  One Size </p>

                                </div>
                                {/* quantity button  */}
                                <p className=' pt-2 text-[15px] text-color'>Quantity</p>
                                <div className="flex items-center gap-2">
                                    <div

                                        className="px-1  cursor-pointer hover:bg-black  hover:text-white"
                                    >
                                        <LuMinus className="  text-[10px]" />
                                    </div>
                                    <span>{2}</span>
                                    <div

                                        className="px-1  cursor-pointer hover:bg-black  hover:text-white"
                                    >
                                        <LuPlus className=" text-[10px]" />
                                    </div>
                                </div>
                                {/* wishlist action  */}
                                <div onMouseLeave={() => setHeart(false)} onMouseMoveCapture={() => setHeart(true)} className=' group  cursor-pointer  flex items-center gap-2 pt-4'>
                                    {
                                        heart ? <TiHeartFullOutline className='group-hover:text-[#00000080]' size={24} /> : <TiHeartOutline size={24} />
                                    }
                                    <p className='text-[14px] group-hover:text-[#00000080]   secondary font-normal' >Move to wishlist</p>
                                </div>
                            </div>

                        </div>
                        {/* close button  */}
                        <div className=' absolute top-3 cursor-pointer  duration-150 right-3 hover:bg-[#F5F5F5] p-[2px] rounded-sm'>
                            <IoMdClose size={24} />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default CartComponent;


