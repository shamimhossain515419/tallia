
"use client"
import Image from "next/image";
import { useState } from "react";
import ProductModal from "./ProductModal";
const ProductCart = ({ product }: any) => {
     const { photos, name } = product || {};
     let photoArray = [];
     if (photos) {
          photoArray.push(...photos.split(","));
     }
     const [active, setActive] = useState(false);
     return (
          <div>
               <div onClick={() => setActive(!active)} className="   w-full cursor-pointer">
                    <div className="group">
                         <div className=" relative  w-full h-[450px] lg:h-[600px]">

                              {/* first image  */}
                              <Image width={400} height={300}
                                   src={process.env.BASE_URL + "/images/" + photoArray?.[0]}
                                   alt="Image 1"
                                   className=" w-full h-full  object-fill transition duration-500 transform  cursor-pointer"
                              />
                              {/* second image  */}
                              {
                                   photoArray?.[1] ? <Image width={400} height={300}
                                        src={process.env.BASE_URL + "/images/" + photoArray?.[1]}
                                        alt="Image 2"
                                        className="w-full h-full transition duration-500 opacity-0  group-hover:opacity-100 absolute top-0 left-0 "
                                   /> : null
                              }

                         </div>
                         <h1 className="text-[#7a7a7a]  opacity-0 group-hover:opacity-100  duration-500  text-[18px] font-medium  text-center py-3 uppercase ">{name ? name : "VIRON OLIVE/RUST SPORT COA"}</h1>
                    </div>
               </div>
               {
                    active ? <ProductModal id={product?.id} setActive={setActive} /> : null
               }
          </div>
     );
};

export default ProductCart;