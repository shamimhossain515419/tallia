"use client";

import { addItem, deleteItem, removeItem } from "@/redux/features/cart/CartSlice";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";

const Side_card = ({ product }: any) => {
    const singleProduct_totalPrice: number = product?.sale_price * product?.quantity
    const dispatch = useDispatch()

    return (
        <div className=" bg-[#FFF] rounded-[3px] shadow-md  py-3 px-2 my-1">
            <div className=" flex  justify-between  items-center gap-3">
                <div className=" flex justify-start gap-2 items-center">
                    <div className=" flex justify-start gap-2 items-center ">
                        <div className="  primary_color text-[#fff] bg-secondary rounded-[49px] px-1 py-2 flex flex-col gap-2 items-center justify-center ">
                            <div onClick={() => dispatch(addItem(product))} className="  cursor-pointer">
                                <FaPlus size={12} />
                            </div>
                            <h1 className=" text-[16px] font-bold "></h1>
                            <div onClick={() => dispatch(removeItem(product.id))} className="cursor-pointer">
                                <FaMinus

                                    size={14}
                                />
                            </div>
                        </div>
                        <div className=" w-[46px] h-[46px] ">
                            <Image
                                className=" w-full h-full"
                                width={100}
                                height={100}
                                src={process.env.BASE_URL + "/images/" + product?.photos?.[1].photo}
                                alt="image"
                            ></Image>
                        </div>
                        <div>
                            <h1 className=" text-[#000000CC] text-[14px] font-normal">
                                {product?.name}
                            </h1>
                            <span className=" block text-[#00000099] text-[11px] font-bold">
                                {product?.sale_price} $
                            </span>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-start items-center gap-3">
                    <h1 className=" text-[#000000] text-[14px] font-normal">${singleProduct_totalPrice}</h1>
                    <div onClick={() => dispatch(
                        deleteItem({
                            id: product?.id,
                            extraIngredients: product?.extraIngredients,
                        })
                    )} className=" w-full cursor-pointer">
                        <IoMdCloseCircle className=" text-secondary " size={24} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Side_card;
