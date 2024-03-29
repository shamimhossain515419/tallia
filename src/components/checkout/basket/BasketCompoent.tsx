"use client"
import React from 'react';
import Summary from './Summary';
import Link from 'next/link';
import CartComponent from './CartComponent';
import { useSelector } from 'react-redux';
import { ProductInterface } from '@/types/productInterface';

const BasketCompoent = () => {
    const { cartItems, totalAmount, totalQuantity } = useSelector(
        (state: any) => state.Cart
    );

    return (
        <div>
            <div className=' container'>
                <div className=' px-4 py-5'>
                    <div className='  flex  flex-col lg:flex-row  gap-6 md:gap-11 '>
                        <div className=' w-full '>
                            <h1 className='text-[30px] font-bold   primary'>SHOPPING BAG</h1>
                            <div>
                                {/* mapping cart product  */}
                                {cartItems?.length > 0 ? <> {
                                    cartItems?.map((product: ProductInterface, index: number) => <CartComponent product={product} key={index} ></CartComponent>)
                                }
                                </> : <div className=' py-4'>
                                    {/* if  the product dose not  exist */}
                                    <p>There’s nothing in your bag yet...</p>
                                    <Link href={'/women/product'} className='text-[16px] mt-3 inline-block      rounded-[8px] px-6 duration-300  hover:bg-[#0000007a] py-[8px]  font-medium  capitalize text-[#fff] primary_bg '>Shop new</Link>
                                </div>
                                }
                            </div>

                        </div>
                        {/* cart summary  */}
                        <Summary totalAmount={totalAmount}></Summary>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BasketCompoent;