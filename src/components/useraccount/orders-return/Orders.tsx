"use client"
import Link from 'next/link';
import React from 'react';
import { PiKeyReturnBold } from "react-icons/pi";
import OrderCart from './OrderCart';
import { useGetordersProductQuery } from '@/redux/features/orders/ordersApi';
import { OrderDetailsInterface } from '@/types/OrderDetailsInterface';

const Orders = () => {
     const { data: OrderData, error } = useGetordersProductQuery("");
     const orderDetails: OrderDetailsInterface[] = OrderData?.data;

     return (
          <div>
               <h1 className=''> Track your orders, request a return or check your order history</h1>
               {
                    orderDetails?.length ? <div className=' py-7'>
                         <OrderCart orderDetails={orderDetails} />
                    </div> : <div className=' flex gap-3 justify-center items-center text-center py-16'>
                         <div className=' flex items-center gap-7 flex-col'>
                              <div className=' flex justify-center items-center'>
                                   <PiKeyReturnBold size={35}></PiKeyReturnBold>
                              </div>
                              <div>
                                   <h1 className='text-[20px] font-medium  primary'>{"You currently have no orders"}</h1>
                                   <p className=''>{"When you've placed an order, you'll find all the details here"}</p>
                              </div>
                              <div>
                                   <Link href={"/product"} className=' border  hover:bg-[#F5F5F5] cursor-pointer  px-5 py-[10px]  capitalize rounded-lg  text-[16px] font-medium border-[#000]'> Shop New In</Link>
                              </div>

                         </div>
                    </div>
               }



          </div>
     );
};

export default Orders;