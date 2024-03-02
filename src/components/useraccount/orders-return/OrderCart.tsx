import React from "react";
import image1 from "../../../assets/product/2 (2).jpg";
import Image from "next/image";
import Link from "next/link";
const OrderCart = () => {
    return (
        <>
            <div className=" w-full overflow-x-auto">
                <table className="table-auto border-separat min-w-[600px] w-full overflow-x-auto">
                    <thead className=" text-start">
                        <tr className="text-start">
                            <th className="text-start p-1    md:font-medium text-[10px] lg:text-[13px] tracking-[1px] uppercase">
                                Item
                            </th>
                            <th className="text-start  p-1 text-[10px] lg:text-[13px] tracking-[1px] uppercase    md:font-medium">
                                Quanrity
                            </th>
                            <th className="text-start p-1    md:font-medium text-[10px] lg:text-[13px] tracking-[1px] uppercase">
                                Price
                            </th>
                            <th className="text-start p-1    md:font-medium text-[10px] lg:text-[13px] tracking-[1px] uppercase">
                                Order Number
                            </th>
                            <th className="text-start p-1    md:font-medium text-[10px] lg:text-[13px] tracking-[1px] uppercase">
                                Order date
                            </th>
                            <th className="text-start p-1    md:font-medium text-[10px] lg:text-[13px] tracking-[1px] uppercase">
                                Delivary date
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
                        <tr>
                            <td className=" min-w-[200px] pt-4">
                                <div className=" flex  justify-start gap-3">
                                    {/* prodcut image  */}
                                    <div className=" w-[80px]  max-h-[80px]">
                                        <Image
                                            className=" max-h-[80px]  object-fill  w-full rounded-lg "
                                            layout="responsive"
                                            src={image1}
                                            width={150}
                                            height={150}
                                            alt="image"
                                        />
                                    </div>
                                    <div>
                                        {/* prodcut desctiption  */}
                                        <h1 className="text-[15px] cursor-pointer font-medium underline">
                                            New product
                                        </h1>
                                        <p className="text-[13px]">Size: One size</p>
                                        <p className="text-[13px]">Color: Brown</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-1">5</td>
                            <td className="p-1">$10</td>
                            <td className="p-1">19613434</td>
                            <td className="p-1">March 20,2024</td>
                            <td className="p-1">March 23,2024</td>
                            <td className="p-1">
                                <button className=" text-blue-600">Pandding</button>
                            </td>
                            <td className="p-1">
                                {" "}
                                <Link
                                    href={`/useraccount/orders/${1}`}
                                    className="  text-blue-800"
                                >
                                    Details
                                </Link>{" "}
                            </td>
                        </tr>
                        <tr>
                            <td className=" min-w-[200px] pt-4">
                                <div className=" flex  justify-start gap-3">
                                    {/* prodcut image  */}
                                    <div className=" w-[80px]  max-h-[80px]">
                                        <Image
                                            className=" max-h-[80px]  object-fill  w-full rounded-lg "
                                            layout="responsive"
                                            src={image1}
                                            width={150}
                                            height={150}
                                            alt="image"
                                        />
                                    </div>
                                    <div>
                                        {/* prodcut desctiption  */}
                                        <h1 className="text-[15px] cursor-pointer font-medium underline">
                                            New product
                                        </h1>
                                        <p className="text-[13px]">Size: One size</p>
                                        <p className="text-[13px]">Color: Brown</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-1">5</td>
                            <td className="p-1">$10</td>
                            <td className="p-1">19613434</td>
                            <td className="p-1">March 20,2024</td>
                            <td className="p-1">March 23,2024</td>
                            <td className="p-1">
                                <button className=" text-blue-600">Pandding</button>
                            </td>
                            <td className="p-1">
                                {" "}
                                <Link
                                    href={`/useraccount/orders/${1}`}
                                    className="  text-blue-800"
                                >
                                    Details
                                </Link>{" "}
                            </td>
                        </tr>
                        <tr>
                            <td className=" min-w-[200px] pt-4">
                                <div className=" flex  justify-start gap-3">
                                    {/* prodcut image  */}
                                    <div className=" w-[80px]  max-h-[80px]">
                                        <Image
                                            className=" max-h-[80px]  object-fill  w-full rounded-lg "
                                            layout="responsive"
                                            src={image1}
                                            width={150}
                                            height={150}
                                            alt="image"
                                        />
                                    </div>
                                    <div>
                                        {/* prodcut desctiption  */}
                                        <h1 className="text-[15px] cursor-pointer font-medium underline">
                                            New product
                                        </h1>
                                        <p className="text-[13px]">Size: One size</p>
                                        <p className="text-[13px]">Color: Brown</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-1">5</td>
                            <td className="p-1">$10</td>
                            <td className="p-1">19613434</td>
                            <td className="p-1">March 20,2024</td>
                            <td className="p-1">March 23,2024</td>
                            <td className="p-1">
                                <button className=" text-blue-600">Pandding</button>
                            </td>
                            <td className="p-1">
                                {" "}
                                <Link
                                    href={`/useraccount/orders/${1}`}
                                    className="  text-blue-800"
                                >
                                    Details
                                </Link>{" "}
                            </td>
                        </tr>
                        <tr>
                            <td className=" min-w-[200px] pt-4">
                                <div className=" flex  justify-start gap-3">
                                    {/* prodcut image  */}
                                    <div className=" w-[80px]  max-h-[80px]">
                                        <Image
                                            className=" max-h-[80px]  object-fill  w-full rounded-lg "
                                            layout="responsive"
                                            src={image1}
                                            width={150}
                                            height={150}
                                            alt="image"
                                        />
                                    </div>
                                    <div>
                                        {/* prodcut desctiption  */}
                                        <h1 className="text-[15px] cursor-pointer font-medium underline">
                                            New product
                                        </h1>
                                        <p className="text-[13px]">Size: One size</p>
                                        <p className="text-[13px]">Color: Brown</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-1">5</td>
                            <td className="p-1">$10</td>
                            <td className="p-1">19613434</td>
                            <td className="p-1">March 20,2024</td>
                            <td className="p-1">March 23,2024</td>
                            <td className="p-1">
                                <button className=" text-blue-600">Pandding</button>
                            </td>
                            <td className="p-1">
                                {" "}
                                <Link
                                    href={`/useraccount/orders/${1}`}
                                    className="  text-blue-800"
                                >
                                    Details
                                </Link>{" "}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default OrderCart;
