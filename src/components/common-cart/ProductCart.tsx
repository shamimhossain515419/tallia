
"use client"
import Image from "next/image";
import image11 from "../../../src/assets/product/1.1.jpg"
import image22 from "../../../src/assets/product/1.2.jpg"
import { useState } from "react";
import ProductModal from "./ProductModal";
const ProductCart = ({ product }: any) => {
     const { image1, image2, name } = product || {};
     const [active, setActive] = useState(false)
     return (
          <div>
               <div onClick={() => setActive(!active)} className="   w-full cursor-pointer">
                    <div className="group">
                         <div className=" relative  w-full h-[600px]">

                              {/* first image  */}
                              <Image
                                   src={image1 ? image1 : image11}
                                   alt="Image 1"
                                   className=" w-full h-full  object-fill transition duration-500 transform  cursor-pointer"
                              />
                              {/* second image  */}
                              <Image
                                   src={image2 ? image2 : image22}
                                   alt="Image 2"
                                   className="w-full h-full transition duration-500 opacity-0  group-hover:opacity-100 absolute top-0 left-0 "
                              />
                         </div>
                         <h1 className="text-[#7a7a7a]  opacity-0 group-hover:opacity-100  duration-500  text-[18px] font-medium  text-center py-3 uppercase ">{name ? name : "VIRON OLIVE/RUST SPORT COA"}</h1>
                    </div>
               </div>
               {
                    active ? <ProductModal product={product} setActive={setActive} /> : null
               }
          </div>
     );
};

export default ProductCart;