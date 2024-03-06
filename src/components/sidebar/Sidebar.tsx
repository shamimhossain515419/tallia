"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { FaShopify } from "react-icons/fa6";
import arrowImage from "../../../public/images/icons/arrow_sidebar.svg";
import shopImage from "../../../public/images/icons/Vector.svg";
import { toggleSideCart } from "@/redux/features/sidebarToggle/sidebarToggleSlice";
import Side_card from "./Side_card";
import Link from "next/link";
import { ProductInterface } from "@/types/productInterface";

const Sitebar = () => {
    const { value } = useSelector((state: any) => state.sidebarToggle);
    const dispatch = useDispatch();
    const { totalAmount, cartItems } = useSelector((state: any) => state.Cart);

    return (
        <div>
            <div className=" ">
                <div
                    className={`${value ? "w-full lg:w-[310.504px]" : "w-0"
                        } transition duration-500 top-[65px] right-0 shadow-md  bg-primary `}
                >
                    <div
                        className={`h-[90vh] z-40  ${value ? " fixed w-full  lg:w-[310.504px]" : " hidden w-0"
                            } duration-500  top-[80px] md:top-[88px]  right-0 shadow-md  bg-primary `}
                    >
                        <div className=" relative h-full  bg-white z-40  ">
                            <div>
                                {/* items list  and price  */}
                                <div className=" bg-primary  py-5 p-3  text-white   flex justify-between gap-2 ">
                                    <div className=" flex  items-center  justify-start gap-2">
                                        <FaShopify className="" size={34} />
                                        <div>
                                            <h1>{cartItems?.length} items </h1>
                                        </div>
                                    </div>
                                    <div
                                        className="cursor-pointer "
                                        onClick={() => dispatch(toggleSideCart())}
                                    >
                                        <IoIosCloseCircleOutline
                                            className=" text-[#fff] hover:text-secondary duration-300"
                                            size={24}
                                        />
                                    </div>
                                </div>
                                <div className="bg-primary  px-4 py-2    white_color flex justify-between gap-2 ">
                                    <h1 className=" text-[#fff]">Reduced Delivery Charge</h1>
                                    <p className="text-white">$ {totalAmount}</p>
                                </div>
                            </div>
                            <div className=" p-[6px]   ">
                                {cartItems?.length > 0 ? (
                                    <div className=" max-h-[770px] moduleScrollBar overflow-y-scroll ">
                                        {cartItems?.map((product: ProductInterface, i: number) => (
                                            <Side_card product={product} key={i}></Side_card>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="h-[400px] md:h-[500px] flex justify-center items-center">
                                        <div className=" bg-[#d3f7e0c7] p-10 rounded-full flex justify-center items-center">
                                            <Image src={shopImage} alt="image"></Image>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className=" absolute bg-white bottom-0  cursor-pointer w-full ">
                                <Link
                                    onClick={() => dispatch(toggleSideCart())}
                                    href={"/cart"}
                                    className=" bg-primary text-[19px] text-white  px-2 py-2 flex justify-center items-center gap-2 "
                                >
                                    <span> Checkout</span>
                                </Link>

                                {/*  /  */}

                                {/* <Order_button text={"Place Order"} price={totalSum}></Order_button> */}
                            </div>
                        </div>
                        <div
                            onClick={() => dispatch(toggleSideCart())}
                            className=" absolute top-1/2  cursor-pointer -left-4   bg-[#A5A5A5]  flex justify-start items-center shadow   text-white rounded-md"
                        >
                            <Image className=" h-full" src={arrowImage} alt="arrow"></Image>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => dispatch(toggleSideCart())}
                    className={` ${value ? " hidden" : "block"
                        }   fixed   z-40  top-1/2  right-1`}
                >
                    <div className=" text-center  shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-md">
                        <div className=" flex flex-col justify-center bg-primary  hover:opacity-85  cursor-pointer items-center  p-2 text-white">
                            <div className=" text-center  text-secondary">
                                <HiShoppingBag size={28} />
                            </div>
                            <h1 className=" text-[16px] text-white font-medium">
                                {cartItems?.length
                                    ? `${cartItems?.length} items`
                                    : " Please shop"}{" "}
                            </h1>
                        </div>
                        <div className=" bg-white   primary_color ">
                            <div className=" flex justify-center items-center gap-2">
                                <h1 className=" text-[16px] font-bold"> $ {totalAmount}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sitebar;
