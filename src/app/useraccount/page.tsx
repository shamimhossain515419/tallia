"use client";

import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Page = () => {
    const user = {};

    return (
        <div className=" md:py-10">
            <div className=" hidden  md:block py-2">
                <h1 className="text-[30px]  font-bold  primary uppercase ">
                    WELCOME TO YOUR ACCOUNT, {"shamim"}
                </h1>
                <div className=" grid   md:grid-cols-2  lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 py-8">
                    <div className=" border  hover:bg-[#F5F5F5] cursor-pointer  px-4 py-6 border-[#3d3d3d40]">
                        <Link href={"/useraccount/profile"}>
                            <h1 className="text-[18px] text-color  uppercase  font-normal">
                                {" "}
                                profile
                            </h1>
                            <p className="text-[14px] pt-1  lg:max-w-[80%]  text-color font-normal">
                                Explore your loyalty rewards and track your progress
                            </p>
                        </Link>
                    </div>
                    <div className=" border  hover:bg-[#F5F5F5] cursor-pointer  px-4 py-6 border-[#3d3d3d40]">
                        <Link href={"/useraccount/access-bronze"}>
                            <h1 className="text-[18px] text-color uppercase font-normal">
                                {" "}
                                ACCESS BRONZE
                            </h1>
                            <p className="text-[14px] pt-1  lg:max-w-[80%]  text-color font-normal">
                                Explore your loyalty rewards and track your progress
                            </p>
                        </Link>
                    </div>
                    <div className=" border  hover:bg-[#F5F5F5] cursor-pointer  px-4 py-6 border-[#3d3d3d40]">
                        <Link href={"/useraccount/orders"}>
                            <h1 className="text-[18px] text-color uppercase font-normal">
                                {" "}
                                ORDERS AND RETURNS
                            </h1>
                            <p className="text-[14px] pt-1  lg:max-w-[80%]  text-color font-normal">
                                Explore your loyalty rewards and track your progress
                            </p>
                        </Link>
                    </div>
                    <div className=" border  hover:bg-[#F5F5F5] cursor-pointer  px-4 py-6 border-[#3d3d3d40]">
                        <Link href={"/useraccount/credits"}>
                            <h1 className="text-[18px] text-color uppercase font-normal">
                                {" "}
                                ACCOUNT CREDIT
                            </h1>
                            <p className="text-[14px] pt-1  lg:max-w-[80%]  text-color font-normal">
                                View your credit balance and history
                            </p>
                        </Link>
                    </div>
                    <div className=" border  hover:bg-[#F5F5F5] cursor-pointer  px-4 py-6 border-[#3d3d3d40]">
                        <Link href={"/useraccount/account-details "}>
                            <h1 className="text-[18px] text-color uppercase font-normal">
                                {" "}
                                ACCOUNT DETAILS
                            </h1>
                            <p className="text-[14px] pt-1  lg:max-w-[80%]  text-color font-normal">
                                Manage your sign in and password details
                            </p>
                        </Link>
                    </div>
                    <div className=" border  hover:bg-[#F5F5F5] cursor-pointer  px-4 py-6 border-[#3d3d3d40]">
                        <Link href={"/useraccount/address-book"}>
                            <h1 className="text-[18px] text-color uppercase font-normal">
                                {" "}
                                ADDRESS BOOK
                            </h1>
                            <p className="text-[14px] pt-1  lg:max-w-[80%]  text-color font-normal">
                                View your saved billing and delivery address
                            </p>
                        </Link>
                    </div>
                    <div className=" border  hover:bg-[#F5F5F5] cursor-pointer  px-4 py-6 border-[#3d3d3d40]">
                        <Link href={"/useraccount/connected-services"}>
                            <h1 className="text-[18px] text-color uppercase font-normal">
                                {" "}
                                CONNECTED SERVICES
                            </h1>
                            <p className="text-[14px] pt-1  lg:max-w-[80%]  text-color font-normal">
                                Manage your language and communication settings
                            </p>
                        </Link>
                    </div>
                    <div className=" border  hover:bg-[#F5F5F5] cursor-pointer  px-4 py-6 border-[#3d3d3d40]">
                        <Link href={"/useraccount/refer-a-friend"}>
                            <h1 className="text-[18px] text-color uppercase font-normal">
                                {" "}
                                REFER A FRIEND
                            </h1>
                            <p className="text-[14px] pt-1  lg:max-w-[80%]  text-color font-normal">
                                Get a discount for you and your friends
                            </p>
                        </Link>
                    </div>
                    <div className=" border  hover:bg-[#F5F5F5] cursor-pointer  px-4 py-6 border-[#3d3d3d40]">
                        <Link href={"/useraccount/ "}>
                            <h1 className="text-[18px] text-color uppercase font-normal">
                                {" "}
                                CONNECTED SERVICES
                            </h1>
                            <p className="text-[14px] pt-1  lg:max-w-[80%]  text-color font-normal">
                                Manage your linked apps and service
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=" md:hidden">
                <div className={` w-full `}>
                    <div className="  ">
                        <h1 className="text-[23px] pb-3 font-medium">{"user?.name"}</h1>
                        <h1 className=" text-[16px] pb-2 font-normal uppercase text-color ">
                            LOYALTY PROGRAM
                        </h1>

                        <Link
                            href={"/useraccount/access-bronze"}
                            className=" flex items-center justify-between gap-2 cursor-pointer"
                        >
                            <span
                                className={` text-color font-normal   hover:underline text-[16px]  py-2 `}
                            >
                                Access Bronze
                            </span>
                            <MdKeyboardArrowRight size={17} />
                        </Link>
                    </div>
                    {/* MY ACCOUNT  */}
                    <div className=" py-3">
                        <h1 className="text-[18px] font-normal py-2 text-color">
                            MY ACCOUNT
                        </h1>
                        <div className=" space-y-4 ">
                            <Link
                                href={"/useraccount/orders"}
                                className=" flex items-center justify-between gap-2 cursor-pointer"
                            >
                                <span
                                    className={` text-color font-normal   hover:underline text-[16px]  py-2 `}
                                >
                                    Orders and Returns
                                </span>
                                <MdKeyboardArrowRight size={17} />
                            </Link>
                            <Link
                                href={"/useraccount/credits"}
                                className=" flex items-center justify-between gap-2 cursor-pointer"
                            >
                                <span
                                    className={`text-color font-normal hover:underline text-[16px]  py-2 `}
                                >
                                    Account credit
                                </span>
                                <MdKeyboardArrowRight size={17} />
                            </Link>
                            <Link
                                href={"/useraccount/account-details"}
                                className=" flex items-center justify-between gap-2 cursor-pointer"
                            >
                                <span
                                    className={` text-color font-normal hover:underline text-[16px]  py-2 `}
                                >
                                    Account-details
                                </span>
                                <MdKeyboardArrowRight size={17} />
                            </Link>

                            <Link
                                href={"/useraccount/address-book"}
                                className=" flex items-center justify-between gap-2 cursor-pointer"
                            >
                                <span
                                    className={` text-color font-normal hover:underline text-[16px]  py-2 `}
                                >
                                    Address book
                                </span>
                                <MdKeyboardArrowRight size={17} />
                            </Link>
                            <Link
                                href={"/useraccount/comms-preferences"}
                                className=" flex items-center justify-between gap-2 cursor-pointer"
                            >
                                <span
                                    className={` text-color font-normal hover:underline text-[16px]  py-2 `}
                                >
                                    Shopping preferences
                                </span>
                                <MdKeyboardArrowRight size={17} />
                            </Link>
                            <Link
                                href={"/useraccount/commcentre"}
                                className=" flex items-center justify-between gap-2 cursor-pointer"
                            >
                                <span
                                    className={` text-color font-normalhover:underline text-[16px]  py-2 `}
                                >
                                    Communication preferences
                                </span>
                                <MdKeyboardArrowRight size={17} />
                            </Link>
                            <Link
                                href={"/useraccount/refer-a-friend"}
                                className=" flex items-center justify-between gap-2 cursor-pointer"
                            >
                                <span
                                    className={`text-color font-normal hover:underline text-[16px]  py-2 `}
                                >
                                    Refer a friend
                                </span>
                                <MdKeyboardArrowRight size={17} />
                            </Link>
                            <Link
                                href={"/useraccount/connected-services"}
                                className=" flex items-center justify-between gap-2 cursor-pointer"
                            >
                                <span
                                    className={`text-color font-normal hover:underline text-[16px]  py-2 `}
                                >
                                    Connected services
                                </span>
                                <MdKeyboardArrowRight size={17} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
