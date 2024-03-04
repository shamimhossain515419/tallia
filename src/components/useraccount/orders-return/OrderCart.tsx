import React from "react";
import Link from "next/link";
const OrderCart = ({ orderDetails }: any) => {
    return (
        <>
            <div className=" w-full overflow-x-auto">
                <table className="table-auto border-separat min-w-[600px] w-full overflow-x-auto">
                    <thead className=" text-start">
                        <tr className="text-start">
                            <th className="text-start  p-1 text-[10px] lg:text-[13px] tracking-[1px] uppercase    md:font-medium">
                                Invoice
                            </th>

                            <th className="text-start  p-1 text-[10px] lg:text-[13px] tracking-[1px] uppercase    md:font-medium">
                                Quantity
                            </th>

                            <th className="text-start p-1    md:font-medium text-[10px] lg:text-[13px] tracking-[1px] uppercase">
                                Status
                            </th>
                            <th className="text-start p-1    md:font-medium text-[10px] lg:text-[13px] tracking-[1px] uppercase">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className=" pt-2 ">
                        {orderDetails?.map((item: any) => (
                            <tr
                                key={item?.order_primary_id}
                                className="  hover:bg-[#ff6a001b] duration-300"
                            >
                                <td className="p-1 py-1"> #{item?.order_invoice} </td>
                                <td className="p-1 "> {item?.total_quantity} </td>
                                <td className="p-1">
                                    <div className=" inline-block">
                                        <div>
                                            <h1
                                                className={`${item?.status ? "bg-green-500" : "bg-[#f93b3b]"
                                                    } text-white px-[6px] capitalize rounded-md`}
                                            >
                                                {item?.status ? "approved" : "Pending"}
                                            </h1>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-1">
                                    {" "}
                                    <Link
                                        href={`/useraccount/orders/${item?.order_primary_id}`}
                                        className="  text-blue-800"
                                    >
                                        Details
                                    </Link>{" "}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default OrderCart;
