"use client";

import Image from "next/image";
import image11 from "../../../src/assets/product/1.1.jpg";
import image22 from "../../../src/assets/product/1.2.jpg";
import { IoClose } from "react-icons/io5";
import CustomLinkButton from "../customButton/CustomLinkButton";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import Composition from "../composition/Composition";
import { useGetSingleProductQuery } from "@/redux/features/products/productApi";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/features/cart/CartSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ProductInterface } from "@/types/productInterface";
const ProductModal = ({ id, setActive }: any) => {
     const { data: singleProduct } = useGetSingleProductQuery(id);
     const [open, setOpen] = useState(false);
     const dispatch = useDispatch();
     const { product, photos, colors, sizes } = singleProduct || {};
     const [activeColor, setActiveColor] = useState("");
     const [activeSize, setActiveSize] = useState("");
     const { cartItems } = useSelector((state: any) => state.Cart);
     const existingItem = cartItems?.find(
          (item: ProductInterface) => item?.id == product?.id
     );
     const router = useRouter();
     const handleCart = (product: ProductInterface) => {
          if (existingItem) {
               router.push("/cart");
          } else {
               if (!activeColor && colors.length) {
                    toast.error("Select Color");
                    return;
               }
               if (!activeSize && sizes.length) {
                    toast.error("Select Size");
                    return;
               }
               const values: any = {
                    id: product.id,
                    name: product.name,
                    sale_price: product.sale_price,
                    discount: product.discount,
                    discount_type: product.discount_type,
                    color: activeColor,
                    size: activeSize,
                    photos: photos,
               };
               dispatch(addItem(values));
               setActive(false);
          }
     };

     return (
          <>
               <div className="  h-screen lg:min-h-screen  flex justify-center items-center  min-w-screen bg-[#00000091]  z-50 fixed top-0 left-0 bottom-0 right-0 overflow-y-auto">
                    <div className="  relative  max-w-[1000px]  grid  items-center p-5  bg-white md:grid-cols-2 gap-3">
                         <div className=" w-full max-h-[500px] overflow-hidden p-4">
                              {/* slider product image  */}
                              <Swiper
                                   navigation={true}
                                   modules={[Navigation]}
                                   className=" w-full h-[500px]"
                              >
                                   {photos?.map((item: any, i: number) => (
                                        <SwiperSlide key={i} className=" h-[95%]">
                                             {" "}
                                             <Image
                                                  className=" h-full w-full"
                                                  width={400}
                                                  height={350}
                                                  src={process.env.BASE_URL + "/images/" + item?.photo}
                                                  alt="image"
                                             ></Image>
                                        </SwiperSlide>
                                   ))}
                              </Swiper>
                         </div>
                         <div className="  flex justify-center    md:relative">
                              <div className="text-center">
                                   <h1 className="text-[20px] font-medium"> {product?.name} </h1>
                                   <h2 className="text-[#7a7a7a]  py-1 font-normal text-[18px]">
                                        {" "}
                                        Price: {product?.sale_price}{" "}
                                   </h2>
                                   {sizes?.length ? (
                                        <div className="text-[#7a7a7a] flex  justify-center gap-2 py-1">
                                             <h1 className=" text-[17px]">Sizes: </h1>
                                             <div className=" flex items-center justify-center gap-2">
                                                  {/* select size  */}
                                                  {sizes?.map((size: any, i: number) => (
                                                       <p
                                                            onClick={() => setActiveSize(size.size_id)}
                                                            className={`${activeSize === size?.size_id
                                                                 ? " text-red-500"
                                                                 : "text-[#7a7a7a]"
                                                                 } cursor-pointer`}
                                                            key={i}
                                                       >
                                                            {" "}
                                                            {size?.name}
                                                       </p>
                                                  ))}
                                             </div>
                                        </div>
                                   ) : null}

                                   {colors?.length > 0 ? (
                                        <div className="text-[#7a7a7a] flex  justify-center gap-2 py-1">
                                             <h1 className=" text-[17px]">Colors: </h1>
                                             <div className=" flex items-center justify-center gap-2">
                                                  {/* select size  */}
                                                  {colors?.map((size: any, i: number) => (
                                                       <p
                                                            onClick={() => setActiveColor(size.color_id)}
                                                            className={`${activeColor === size?.color_id
                                                                 ? " text-red-500"
                                                                 : "text-[#7a7a7a]"
                                                                 } cursor-pointer`}
                                                            key={i}
                                                       >
                                                            {" "}
                                                            {size?.name}
                                                       </p>
                                                  ))}
                                             </div>
                                        </div>
                                   ) : null}

                                   <div onClick={() => handleCart(product)} className=" py-5">
                                        <button
                                             className={`text-[15px] w-full bg-black  px-6 py-2     my-3 flex items-center justify-center rounded-[40px] cursor-pointer relative overflow-hidden transition-all  border border-white  hover:border-[#F15A24]  duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-[#F15A24]
                                        before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[40px]  hover:before:left-0 uppercase  text-white`}
                                        >
                                             {existingItem?.id ? "Got to Checkout " : "add to cart"}
                                        </button>
                                   </div>

                                   <div className=" max-w-[300px] text-[rgb(70,69,69)] border border-[#090808] rounded-md py-5 px-2">
                                        <h1 className="text-[16px]  font-normal">COMPOSITION & CARE</h1>
                                        <p className=" py-3 text-[15px] font-normal">COMPOSITION</p>
                                        <div className="py-2 h-[100px] overflow-hidden ">
                                             <p className="text-[15px] font-normal">
                                                  We work with monitoring programmes to ensure compliance with
                                                  our social, environmental and health and safety standards
                                                  for our products. To assess compliance, we have developed a
                                                  programme of audits and continuous improvement{" "}
                                             </p>
                                        </div>

                                        <div className=" text-start pl-2 pt-6">
                                             {open ? (
                                                  <p
                                                       onClick={() => setOpen(false)}
                                                       className=" cursor-pointer uppercase  tracking-[1.5px] underline text-[12px] font-normal"
                                                  >
                                                       View Less{" "}
                                                  </p>
                                             ) : (
                                                  <p
                                                       onClick={() => setOpen(true)}
                                                       className="uppercase   tracking-[1.5px] cursor-pointer underline text-[12px] font-normal"
                                                  >
                                                       View more
                                                  </p>
                                             )}
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div
                              onClick={() => setActive(false)}
                              className=" hover:text-red-500  z-50 cursor-pointer absolute top-1 right-0 p-3"
                         >
                              <IoClose size={24} />
                         </div>
                    </div>
               </div>
               {open && <Composition id={id} setOpen={setOpen} />}
          </>
     );
};

export default ProductModal;
