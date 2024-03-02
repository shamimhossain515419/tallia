"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import paymentImage from "../../../../public/images/account/payment.png";
import Image from "next/image";
import Select from "react-select";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useSelector } from "react-redux";
import { useOrderProductMutation } from "@/redux/features/orders/ordersApi";
import toast from "react-hot-toast";
const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
];
const Page = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [address, setAddress] = useState(false);

    const { cartItems, totalAmount, totalQuantity } = useSelector(
        (state: any) => state.Cart
    );
    const [orderProduct, { data: orderResult, isLoading, isSuccess, error }] = useOrderProductMutation()
    const group_id = process.env.GROUP_ID;
    const { value: address_id } = useSelector((state: any) => state.address);
    // order  handler 
    const handleOrder = async () => {
        const value = {
            group_id: group_id,
            customer_id: 1,
            total_amount: totalAmount,
            total_quantity: totalQuantity,
            address_id: address_id,
            items: cartItems,
        };

        orderProduct(value)
    };
    //    response  order ?\
    useEffect(() => {
        if (isSuccess && orderResult) {
            toast.success(orderResult?.message);
        }
    }, [orderResult, isSuccess]);

    return (
        <div className="sm:mr-5">
            <div className="flex items-center justify-center text-stone-500 ">
                <Link className="hover:text-secondary" href={"/cart"}>Cart</Link> <IoIosArrowForward />
                <Link className="hover:text-secondary" href={"/checkout/information"}>Information</Link>{" "}
                <IoIosArrowForward />
                <Link className="hover:text-secondary" href={"/checkout/shipping"}>Shipping</Link> <IoIosArrowForward />
                <Link className="hover:text-secondary" href={"/checkout/payment"}>Payment</Link>
            </div>
            <div>
                {/* save address  */}
                <div className=" my-10 px-3 py-2  rounded-[4px]  border  border-[#3333331f]">
                    <div className=" flex justify-between text-[#333333] items-start gap-4 py-2">
                        <div className=" flex  flex-col  lg:flex-row items-start lg:items-center">
                            <p className="text-[15px]  font-light md:w-[50px] xl:w-[100px]  md:text-[12px]">
                                Contact
                            </p>
                            <p className="text-[13px]  md:text-[15px] font-light">
                                {" "}
                                shamimhossain017@gmail.com
                            </p>
                        </div>
                        <Link className="text-[13px]  md:text-[15px] font-light" href={"/"}>
                            {" "}
                            Change
                        </Link>
                    </div>
                    <div className="border-t border-[#3333331f] my-2"></div>
                    <div className=" flex justify-between text-[#333333]  items-start gap-4 py-1">
                        <div className=" flex  flex-col  lg:flex-row items-start lg:items-center ">
                            <p className="text-[14px]  font-light md:w-[50px] xl:w-[100px]  md:text-[15px]">
                                Ship
                            </p>
                            <p className="text-[13px]  md:text-[15px] font-light">
                                {" "}
                                bogura, Dhaka 5800, Bangladesh
                            </p>
                        </div>
                        <Link className="text-[13px]  md:text-[15px] font-light" href={"/"}>
                            {" "}
                            Change
                        </Link>
                    </div>
                    <div className="border-t border-[#3333331f] my-2"></div>
                    <div className=" flex justify-between text-[#333333]  items-start gap-4 py-1">
                        <div className=" flex  flex-col  lg:flex-row items-start lg:items-center ">
                            <p className="text-[14px]  font-light md:w-[50px] xl:w-[100px]  md:text-[15px]">
                                Shipping method
                            </p>
                            <p className="text-[13px]  md:text-[15px] font-light">
                                {" "}
                                Express Courier (Air) · Free
                            </p>
                        </div>
                    </div>
                </div>
                {/* payment mathod  */}
                <div className=" py-5">
                    <div>
                        <h1 className=" text-[17px] lg:text-[22px] uppercase   text-[#333333]   font-bold  tracking-[2px] ">
                            {" "}
                            Payment{" "}
                        </h1>
                        <p className="text-[12px] md:text-[14px] text-[#333333]">
                            All transactions are secured and encrypted.
                        </p>
                    </div>
                    <div className=" -ml-4 ">
                        <Image
                            className=" w-full object-fill"
                            src={paymentImage}
                            alt="image"
                        ></Image>
                    </div>
                </div>
                {/* Billing address   */}
                <div className=" py-5">
                    <div>
                        <h1 className=" text-[17px] lg:text-[22px] uppercase   text-[#333333]   font-bold  tracking-[2px] ">
                            {" "}
                            Billing address{" "}
                        </h1>
                        <p className="text-[12px] md:text-[14px] text-[#333333]">
                            Select the address that matches your card or payment method.{" "}
                        </p>
                    </div>
                    <div className=" py-4">
                        <div className="border  border-[#3333331f] rounded-[4px]    ">
                            <div className="  px-3 py-4  text-[#333333] flex justify-between items-start gap-2 ">
                                <div className=" flex items-start gap-3">
                                    <div>
                                        <div
                                            onClick={() => setAddress(false)}
                                            className={` flex justify-center items-center ${address ? "border border-[#3333337b]" : " bg-secondary"
                                                }  w-[20px] h-[20px] cursor-pointer rounded-full`}
                                        >
                                            <p className=" w-[5px] h-[5px] bg-white rounded-full"></p>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-[10px]   md:text-[14px] ">
                                            Same as shipping address
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="border  border-[#3333331f] "></div>
                            {/* Use a different  */}
                            <div className="px-3 py-4  text-[#333333] flex justify-between items-start gap-2 ">
                                <div className=" flex items-start gap-3">
                                    <div>
                                        <div
                                            onClick={() => setAddress(true)}
                                            className={` flex justify-center items-center ${address ? "bg-secondary" : " border border-[#3333337b]"
                                                }  w-[20px] h-[20px] cursor-pointer rounded-full`}
                                        >
                                            <p className=" w-[5px] h-[5px] bg-white rounded-full"></p>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-[10px]   md:text-[14px] ">
                                            Use a different billing address
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            {address && (
                                <div>
                                    <div className="border  border-[#3333331f] "></div>
                                    <div className=" px-3 py-4 bg-[#fafafa] ">
                                        <form>
                                            {/* country  */}
                                            <div className="">
                                                <label className="py-2 block" htmlFor="country">
                                                    Country
                                                </label>
                                                <Select
                                                    id="country"
                                                    value={selectedOption}
                                                    options={options}
                                                    placeholder="Select a country"
                                                />
                                            </div>

                                            <div className=" flex gap-2">
                                                {/* First_Name  */}
                                                <div className="pt-2 w-[50%]">
                                                    <label className="py-2 block" htmlFor="First Name">
                                                        First Name
                                                    </label>
                                                    <input
                                                        name="First_Name"
                                                        className="border-2  p-1 w-full focus:outline-none focus:border-secondary ease-in duration-300"
                                                        type="text"
                                                        id="First Name"
                                                        placeholder="First Name"
                                                    />
                                                </div>
                                                {/* last_Name  */}
                                                <div className="pt-2 w-[50%]">
                                                    <label className="py-2 block" htmlFor="Last_Name">
                                                        Last Name
                                                    </label>
                                                    <input
                                                        name="last_Name"
                                                        className="border-2 p-1 w-full focus:outline-none focus:border-secondary ease-in duration-300"
                                                        type="text"
                                                        id="Last_Name"
                                                        placeholder="Last Name"
                                                    />
                                                </div>
                                            </div>

                                            {/* Company  */}
                                            <div className="pt-2">
                                                <label className="py-2 block" htmlFor="Company">
                                                    Company (optional)
                                                </label>
                                                <input
                                                    name="Company"
                                                    className="border-2 p-1 w-full focus:outline-none focus:border-secondary ease-in duration-300"
                                                    type="text"
                                                    id="Company"
                                                    placeholder="Company"
                                                />
                                            </div>
                                            {/* Address  */}
                                            <div className="pt-2">
                                                <label className="py-2 block" htmlFor="Address">
                                                    Address
                                                </label>
                                                <input
                                                    name="Address"
                                                    className="border-2 p-1 w-full focus:outline-none focus:border-secondary ease-in duration-300"
                                                    type="text"
                                                    id="Address"
                                                    placeholder="Address"
                                                />
                                            </div>
                                            {/* Apartment  */}
                                            <div className="pt-2">
                                                <label className="py-2 block" htmlFor="Apartment">
                                                    Apartment, suite, etc. (optional)
                                                </label>
                                                <input
                                                    name="Apartment"
                                                    className="border-2 p-1 w-full focus:outline-none focus:border-secondary ease-in duration-300"
                                                    type="text"
                                                    id="Apartment"
                                                    placeholder="Apartment"
                                                />
                                            </div>
                                            {/* Apartment  */}
                                            <div className="pt-2">
                                                <label className="py-2 block" htmlFor="Apartment">
                                                    Apartment, suite, etc. (optional)
                                                </label>
                                                <input
                                                    name="Apartment"
                                                    className="border-2 p-1 w-full focus:outline-none focus:border-secondary ease-in duration-300"
                                                    type="text"
                                                    id="Apartment"
                                                    placeholder="Apartment"
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                {/* City  */}
                                                <div className="pt-2">
                                                    <label className="py-2 block" htmlFor="City">
                                                        City
                                                    </label>
                                                    <input
                                                        name="City"
                                                        className="border-2 p-1 w-full focus:outline-none focus:border-secondary ease-in duration-300"
                                                        type="text"
                                                        id="City"
                                                        placeholder="City"
                                                    />
                                                </div>
                                                {/* Postal_code  */}
                                                <div className="pt-2">
                                                    <label className="py-2 block" htmlFor="Postal_code">
                                                        Postal code
                                                    </label>
                                                    <input
                                                        name="Postal_code"
                                                        className="border-2 p-1 w-full focus:outline-none focus:border-secondary ease-in duration-300"
                                                        type="number"
                                                        id="Postal_code"
                                                        placeholder="Postal_code"
                                                    />
                                                </div>
                                            </div>
                                            {/* Phone  */}
                                            <div className="pt-2">
                                                <label className="py-2 block" htmlFor="Phone">
                                                    Phone
                                                </label>
                                                <input
                                                    name="Phone"
                                                    className="border-2 p-1 w-full focus:outline-none focus:border-secondary ease-in duration-300"
                                                    type="number"
                                                    id="Phone"
                                                    placeholder="Phone"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className=" py-3">
                        {/* payment text   */}
                        <p className="text-[13px]   font-thin">
                            By clicking below and completing your order, you agree to purchase
                            your item(s) from Global-e as merchant of record for this
                            transaction, on Global-e’s Terms of Sale and Privacy Policy.
                            Global-e is an international fulfilment service provider to Rollie
                            Nation.
                        </p>
                    </div>

                    {/* shipping action  */}
                    <div className=" flex flex-col-reverse lg:flex-row   justify-between items-center gap-2   my-6  lg:py-5 ">
                        <div>
                            <Link
                                href={"/checkout/shipping"}
                                className=" flex   items-center gap-[2px] text-[#333333]"
                            >
                                {" "}
                                <MdKeyboardArrowLeft />{" "}
                                <p className="text-[12px] md:text-[15px]">Return to shipping</p>
                            </Link>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button onClick={handleOrder} className="bg-black hover:bg-secondary duration-300 px-6  py-[10px] lg:py-[14PX] text-white text-[15px]   font-bold rounded-[5px] uppercase ">
                                {isLoading ? "Loading..." : "Complete Order "}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* checkout footer  */}
            <div className=" flex  items-center flex-wrap gap-2 lg:gap-6 border-t pt-4">
                <Link className="text-[12px] text-gray-600" href={"/"}>
                    {" "}
                    Refund
                </Link>
                <Link className="text-[12px] text-gray-600" href={"/"}>
                    {" "}
                    policyShipping
                </Link>
                <Link className="text-[12px] text-gray-600" href={"/"}>
                    policyPrivacy{" "}
                </Link>
                <Link className="text-[12px] text-gray-600" href={"/"}>
                    {" "}
                    Terms of service
                </Link>
                <Link className="text-[12px] text-gray-600" href={"/"}>
                    {" "}
                    Terms of sale{" "}
                </Link>
                <Link className="text-[12px] text-gray-600" href={"/"}>
                    {" "}
                    Legal notice{" "}
                </Link>
            </div>
        </div>
    );
};

export default Page;
