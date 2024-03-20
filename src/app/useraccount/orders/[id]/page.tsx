"use client";
import ReturnForm from "@/components/useraccount/orders-return/ReturnForm";
import { useGetOrderDetailQuery } from "@/redux/features/orders/ordersApi";
import { OrderProductInterface } from "@/types/OrderInterface";
import Image from "next/image";
import React, { useState } from "react";

const Page = ({ params }: any) => {
    const { data } = useGetOrderDetailQuery(params.id);
    const orderdetails = data?.order_info || {};
    const orderProduct = data?.data || [];
    const [activeFrom, setActivedForm] = useState<any>({});

    return (
        <>
            <div className=" w-full mx-auto shadow  my-5 rounded-xl   ">
                <div className="flex items-start justify-between md:text-sm text-[12px]  border-b grid-cols-3 border-stone-200  p-5">
                    <div className="">
                        <h1>Order #{orderdetails?.order_invoice}</h1>
                        <div className="">
                            <h1>
                                Address
                                <p>
                                    {data?.order_info?.address},{data?.order_info?.zip_code},
                                    {data?.order_info?.city},{data?.order_info?.state},
                                    {data?.order_info?.country},
                                </p>
                            </h1>
                        </div>
                    </div>
                    <div className="">
                        <h1>
                            Status:
                            <span
                                className={`${data?.order_info?.status ? "bg-green-500" : "bg-red-500"
                                    } text-white px-1 rounded-md`}
                            >
                                {data?.order_info?.status ? "approved" : "Pending"}
                            </span>
                        </h1>
                    </div>
                    <div className="">Total: ৳ {orderdetails?.total_amount}</div>
                </div>

                <div className="">
                    {/*  */}
                    {orderProduct?.map((product: OrderProductInterface, i: number) => (
                        <div
                            key={i}
                            className="text-sm p-2 flex justify-between items-center "
                        >
                            <div className=""> {product?.product_name} </div>
                            <div className="">
                                <Image
                                    className=" "
                                    src={
                                        "https://cdn-images.farfetch-contents.com/22/90/71/02/22907102_52927932_600.jpg"
                                    }
                                    width={50}
                                    height={50}
                                    alt=""
                                />
                            </div>
                            <div className="">Qty: {product?.quantity}</div>
                            <div className="">Price: {product?.unit_price}</div>
                            <div
                                className="  cursor-pointer"
                                onClick={() => setActivedForm(product)}
                            >
                                {" "}
                                Return{" "}
                            </div>
                        </div>
                    ))}
                </div>

                {activeFrom?.id && (
                    <ReturnForm
                        activeFrom={activeFrom}
                        setActivedForm={setActivedForm}
                        orderInfo={data}
                    />
                )}
            </div>
        </>
    );
};

export default Page;
