"use client";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import { IoRefresh } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";

const ProductListPrice = () => {
    const [active, setActive] = useState(false);
    const { cartItems, totalQuantity, totalAmount } = useSelector(
        (state: any) => state.Cart
    );
    return (
        <div className=" py-5">
            {/* responsive summary  */}
            <div
                onClick={() => setActive(!active)}
                className="flex lg:hidden justify-between px-4  gap-4 py-2 border-y bg-[#fafafa] "
            >
                <div className=" flex items-center gap-2">
                    <IoCartOutline size={22} />
                    <p className="text-[10px] lg:text-[12px] text-gray-700">
                        {" "}
                        {active ? "Hide Order Summary " : "Show orders Summary "}{" "}
                    </p>
                    <IoIosArrowDown
                        className={` ${active ? " rotate-180" : ""
                            } duration-200 text-[12px]  lg:text-[15px]`}
                    />
                </div>
                <div>
                    <p className="text-[17px] lg:text-[35px] text-black font-medium">
                        {" "}
                        <span className="text-[12px]">BDT ৳</span> 232,820.00
                    </p>
                </div>
            </div>
            <div
                className={`   ${active ? " block bg-[#fafafa] lg:bg-white " : " hidden lg:block"
                    }    py-3    `}
            >
                {/* products */}
                <div className="grid grid-cols-1 gap-3 border-b pr-2 pb-4 h-[250px] overflow-y-auto    ">
                    {
                        cartItems.map((item: any, index: number) => <div key={index}><div className="text-sm flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <div className="absolute top-0 right-0 w-5 h-5 bg-slate-300 rounded-full flex items-center justify-center">
                                        <span>5</span>
                                    </div>
                                    <Image
                                        className=" rounded-lg "
                                        src={process.env.BASE_URL + "/images/" + item?.photos?.[0].photo}
                                        width={80}
                                        height={80}
                                        alt=""
                                    />
                                </div>
                                <div className="">
                                    <h2>{item?.name}</h2>
                                    <p>Size: {item?.size?.name} </p>
                                </div>
                            </div>
                            {/* price */}
                            <h3>$ {item?.sale_price}</h3>
                        </div></div>)
                    }



                </div>

                {/* Discount code or gift card */}
                < div className=" flex gap-4 w-full py-10 border-b" >
                    <input
                        className="border-2 px-2 py-3 rounded-lg w-full focus:outline-none focus:border-black ease-in duration-300"
                        placeholder="Discount code or gift card"
                        type="text"
                    />
                    <button
                        disabled={false}
                        className="hover:bg-secondary bg-black  disabled:opacity-35  text-white rounded-[10px]  px-8 py-3 duration-300 ease-in"
                        type="submit"
                    >
                        Apply
                    </button>
                </div>
                {/* summary list  */}
                <div>
                    <div className=" py-5 border-b text-gray-800  space-y-2">
                        <div className=" flex  justify-between ">
                            <p className="text-[12px] lg:text-[16px]">Subtotal</p>
                            <p className="text-[12px] lg:text-[16px] font-medium">
                                ৳101,600.00
                            </p>
                        </div>
                        <div className=" flex  justify-between ">
                            <p className="text-[12px] lg:text-[16px]">Shipping </p>
                            <p className="text-[12px] lg:text-[16px] font-medium">Free</p>
                        </div>
                        <div className=" flex  justify-between ">
                            <p className="text-[12px] lg:text-[16px]">Duties & Fees </p>
                            <p className="text-[12px] lg:text-[16px] font-medium">
                                ৳101,600.00
                            </p>
                        </div>
                        <div className=" flex  justify-between ">
                            <p className="text-[12px] lg:text-[16px]">Taxes </p>
                            <p className="text-[12px] lg:text-[16px] font-medium">
                                ৳43,781.00
                            </p>
                        </div>
                    </div>
                    <div className=" py-2">
                        <div className=" flex  justify-between ">
                            <p className="text-[12px] lg:text-[16px]">Total </p>
                            <p className="text-[12px] lg:text-[25px] text-black font-medium">
                                {" "}
                                <span className="text-[12px]">BDT ৳</span> 232,820.00
                            </p>
                        </div>
                    </div>
                </div>
                {/* payment option  */}

                <div className=" w-full">
                    <Image
                        className=" w-full py-3"
                        width={400}
                        height={50}
                        layout="responsive"
                        src={
                            "https://www.maisonlabiche.com/cdn/shop/t/92/assets/paymentMethods-checkout_large.png?v=114427610891281542031706630751"
                        }
                        alt="image"
                    ></Image>
                </div>
                {/* delivary method  */}

                <div className=" border border-secondary p-3 rounded space-y-3">
                    <div className=" flex  items-center gap-5  p">
                        <svg
                            className=" w-[20px]  h-[20px]"
                            id="Calque_2"
                            data-name="Calque 2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 63.8 48.95"
                        >
                            <path
                                d="M554,652.93h-7.3a.76.76,0,0,0-.75.75v9.13a.75.75,0,0,0,.75.75h0l12.55,0a.76.76,0,0,0,.65-.37.77.77,0,0,0,0-.75l-5.25-9.08A.74.74,0,0,0,554,652.93Zm-6.55,9.13v-7.63h6.12L558,662Z"
                                transform="translate(-500.31 -637.6)"
                            ></path>
                            <path
                                d="M564,662.18l-7.26-12.56a.73.73,0,0,0-.65-.38H543.34V638.35a.76.76,0,0,0-.75-.75H501.06a.75.75,0,0,0-.75.75v41.54a.75.75,0,0,0,.75.75h6.23a6.66,6.66,0,0,0,13.24,0h21.53a6.66,6.66,0,0,0,13.24,0h8.05a.75.75,0,0,0,.75-.75V662.56A.75.75,0,0,0,564,662.18ZM501.81,639.1h40v40H520.53a6.66,6.66,0,0,0-13.24,0h-5.48Zm12.1,45.95a5.17,5.17,0,1,1,5.16-5.16A5.17,5.17,0,0,1,513.91,685.05Zm34.77,0a5.17,5.17,0,1,1,5.16-5.16A5.17,5.17,0,0,1,548.68,685.05Zm13.92-5.91h-7.3a6.66,6.66,0,0,0-12-3.23V650.74h12.32l6.94,12Z"
                                transform="translate(-500.31 -637.6)"
                            ></path>
                        </svg>
                        <p className="text-[13px]">FREE DELIVERY FOR ORDERS OVER 150€*</p>
                    </div>
                    <div className=" flex  items-center gap-5  p">
                        <IoRefresh size={20} />
                        <p className="text-[13px]">FREE RETURNS*</p>
                    </div>
                    <div className=" flex  items-center gap-5  p">
                        <svg className=" w-[20px] h-[20px]" viewBox="0 0 43.96 48.86">
                            <path
                                d="M211.45,660.27a.75.75,0,0,0,.54-.58l1.31-6.81a.76.76,0,0,0-.46-.84l-8.07-3.21L207,645a3.69,3.69,0,0,0,2.81-2.27,5,5,0,0,0,.61-2.26,1.78,1.78,0,0,0-3-1.56,5.13,5.13,0,0,0-1.51,1.8,5,5,0,0,0-.6,2.27,2.29,2.29,0,0,0,.36,1.3l-2.3,4-3.06-1.22-.54-1.4a.7.7,0,0,0-.24-.32l-4.85-3.73a.75.75,0,0,0-.71-.1l-3,1.1a.76.76,0,0,0-.49.7v3.06l-4.11,3.4h-3.62L180,648.52a.76.76,0,0,0-.8.11.72.72,0,0,0-.23.76l1.13,4.18-2.51.9-1.37-1.8a.76.76,0,0,0-.87-.24l-5.51,2.23a.75.75,0,0,0-.42.45.79.79,0,0,0,0,.62l1.58,2.75a.75.75,0,0,0,.43.35l5.73,1.74,4.19,7.64-1.41,11a.76.76,0,0,0,.54.82l3.75,1.09-2.94,5.06a.75.75,0,0,0,1.29.75l3.13-5.38,10.23,3,.21,0a.75.75,0,0,0,.75-.75v-3.25l3.12-1.72,6.36,2.24a.75.75,0,0,0,.77-.16l4.58-4.32a.74.74,0,0,0,.12-1l-2.9-4.54-.13-5.82a.73.73,0,0,0-.24-.54.74.74,0,0,0-.55-.19l-.63,0,2-3.77Zm-4.22-18.84a3.7,3.7,0,0,1,1-1.26.93.93,0,0,1,.46-.2h0s.13.17.13.52a3.6,3.6,0,0,1-.44,1.57c-.58,1.12-1.35,1.51-1.52,1.46h0s-.12-.18-.12-.52A3.45,3.45,0,0,1,207.23,641.43Zm1,18.43-2.75,5.24a.74.74,0,0,0,0,.76.77.77,0,0,0,.68.33l1.18-.07.12,5.24a.77.77,0,0,0,.11.39l2.68,4.19-3.8,3.59-6.25-2.21a.77.77,0,0,0-.61,0l-3.8,2.1a.74.74,0,0,0-.39.65v2.71l-8.91-2.59,6.95-12a.75.75,0,1,0-1.3-.76L185,679.81l-3.49-1,1.36-10.64a.77.77,0,0,0-.08-.45l-4.46-8.13a.7.7,0,0,0-.44-.35l-5.74-1.75-1-1.75,4.18-1.69,1.36,1.77a.74.74,0,0,0,.84.25l3.67-1.31a.74.74,0,0,0,.47-.9l-.89-3.31,1.43.65a.7.7,0,0,0,.31.07h4.06a.74.74,0,0,0,.48-.17l4.59-3.8a.78.78,0,0,0,.27-.58v-2.88l2.14-.79,4.35,3.35.58,1.51a.72.72,0,0,0,.42.42l3.16,1.26-6.41,11a.74.74,0,0,0,.65,1.12.76.76,0,0,0,.65-.37L204,650.14l7.7,3.06L210.6,659l-1.91.53A.73.73,0,0,0,208.23,659.86Z"
                                transform="translate(-169.35 -638.48)"
                            ></path>
                        </svg>
                        <p className="text-[13px]">EMBROIDERED IN FRANCE</p>
                    </div>
                    <div className=" flex  items-center gap-5  p">
                        <CiLock size={20} />
                        <p className="text-[13px]">3X FREE SECURE PAYMENT </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListPrice;
