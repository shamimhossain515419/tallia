"use client";

import ProductModal from "@/components/common-cart/ProductModal";
import { useSearchProductMutation } from "@/redux/features/searchApi/searchApi";
import { toggle_search } from "@/redux/features/searchToggle/SearchToggle";
import Image from "next/image";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
const SearchBar = ({ groupInfo }: any) => {
     const [searchValue, setSearchValue] = useState("");
     const [active, setActive] = useState<any>("");
     const [productdata, setProductData] = useState([])
     const [SearchProduct, { data: resultProduct, isLoading, error }] = useSearchProductMutation()
     const dispatch = useDispatch();
     const { SearchBar } = useSelector((state: any) => state.Search_toggle);
     const handleSearch = async (e: any) => {
          const formData = {
               keywords: searchValue
          }
          if (e.key === "Enter") {
               // ${process.env.BASE_URL + "/api/search-product" + process.env.GROUP_ID} 
               try {
                    const response = await fetch(`${process.env.BASE_URL}/api/search-product/${process.env.GROUP_ID}`, {
                         method: 'POST',
                         headers: {
                              'Content-Type': 'application/json'
                         },
                         body: JSON.stringify(formData)
                    });
                    if (response.ok) {
                         const data = await response.json();
                         setProductData(data?.data);
                    } else {
                         throw new Error('Network response was not ok.');
                    }
               } catch (error) {
                    console.error('Error:', error); // Handle error
               }
          }
     };

     console.log(productdata);
     return (
          <div>
               <h1> {resultProduct?.data?.length} </h1>
               <div
                    className={` ${SearchBar
                         ? " fixed  animate-fadeInUp-Search"
                         : " animate-fadeOutDown-Search relative hidden "
                         } bg-[#00000057] w-full   h-screen z-50  top-0 bottom-0 left-0   duration-500  `}
               >
                    <div className="  bg-white p-4 relative">
                         <div
                              onClick={() => dispatch(toggle_search())}
                              className="   absolute  right-4 top-5 cursor-pointer hover:bg-[#F5F5F5]"
                         >
                              <IoMdClose size={24} />
                         </div>
                         <div className=" max-w-[853px] mx-auto  ">
                              <div>
                                   <div className=" pt-3">
                                        <h1 className=" text-center uppercase text-[20px] md:text-[32px]    tracking-[2.5px]   font-extrabold">
                                             {groupInfo?.group_name}
                                        </h1>
                                   </div>
                                   <div className="mt-10 ">
                                        <div className=" border-[1.5px] border-[#3a3a3a]  rounded-[5px] flex items-center    p-[6px] md:p-[10px] bg-white z-50 justify-start gap-2">
                                             <CiSearch className=" text-color opacity-90" size={27} />
                                             <input
                                                  onKeyDown={handleSearch}
                                                  onChange={(e) => setSearchValue(e.target.value)}
                                                  type="text"
                                                  defaultValue={searchValue}
                                                  placeholder="Search"
                                                  className=" w-full   text-[14px] font-normal border-none outline-0 r  "
                                             />
                                        </div>
                                   </div>

                                   {/* <div className=' mt-8'>

                                        <div className=' border-b border-[#00000021] flex items-center gap-3 md:gap-6 text-[16px] text-color'>
                                             <div onClick={() => setActive("women")} className={` ${active == "women" ? " border-[#000]" : "  border-transparent "} border-b-[2px] duration-200 pb-2 cursor-pointer `}>Women</div>
                                             <div onClick={() => setActive("men")} className={`  ${active == "men" ? "  border-[#000]" : " border-transparent"}  border-b-[2px]  pb-2 duration-200 cursor-pointer `}>Men</div>
                                             <div onClick={() => setActive("kids")} className={` ${active == "kids" ? "  border-[#000]" : " border-transparent"} border-b-[2px] pb-2 duration-200  cursor-pointer `}>Kids</div>
                                        </div>

                                   </div> */}

                                   <div className="  py-4">
                                        <div className=" max-h-[400px]  overflow-y-auto pt-6 ">
                                             {productdata.length ? (
                                                  <div className=" flex flex-wrap gap-5">
                                                       {productdata?.map((item: any, index: number) => (
                                                            <div onClick={() => setActive(item.id)} className="py-[3px] w-[120px] md:w-[150px] overflow-hidden cursor-pointer" key={index}>
                                                                 <div>
                                                                      <Image
                                                                           className="h-[120px] w-full    object-fill"
                                                                           width={120}
                                                                           height={120}
                                                                           src={process.env.BASE_URL + "/images/" + item?.photo}
                                                                           alt="image"
                                                                      />
                                                                      <p className="text-[14px] pt-1">{item?.name}</p>
                                                                 </div>

                                                            </div>
                                                       ))}
                                                  </div>
                                             ) : (
                                                  <div className=" flex items-center justify-center h-[300px]">
                                                       <div className="text-center">
                                                            <h1 className="text-[24px] font-medium py-2"> Product not Found</h1>
                                                            <p>Please Search</p>
                                                       </div>
                                                  </div>
                                             )}
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>


               {active ? <ProductModal id={active} setActive={setActive} /> : null}
          </div>
     );
};

export default SearchBar;
