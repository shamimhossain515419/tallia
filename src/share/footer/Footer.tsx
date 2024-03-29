import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = ({ groupDetails }: any) => {
     return (
          <div className="bg-[#EDEDED] py-10">
               <div className=" max-w-[1140px] mx-auto px-3">
                    <div className=" grid md:grid-cols-2 gap-8 items-center">
                         {/* subscribe  input  field  */}
                         <h1 className="text-4xl text-center   md:text-start font-bold text-primary">
                              Join Our Newsletter
                         </h1>
                         <div>
                              <div className=" w-full flex  relative items-center">
                                   <input
                                        className=" w-full relative pl-3 pr-[120px] md:pr-[150px] outline-0 border border-[#7a7a7a] py-3 rounded-3xl"
                                        type="email"
                                        placeholder="Your Email"
                                   />
                                   <button className=" absolute right-0 text-white p-[11px] duration-200 text-[18px]  font-normal rounded-r-3xl bg-primary hover:bg-[#ff6900] ">
                                        Subscribe
                                   </button>
                              </div>
                         </div>
                    </div>
                    <div className=" py-10">
                         <p className="text-[12px] font-normal text-[#7a7a7a]">
                              By submitting your email address, you agree to receive emails from
                              Tallia and its parent company, to Tallia processing your personal
                              data for marketing purposes and to our{" "}
                              <Link href={"/"} className="text-red-500">
                                   Privacy Policy.
                              </Link>
                         </p>
                    </div>
                    {/* footer menu  */}
                    <div className="     flex  justify-center lg:justify-between items-center gap-2  ">
                         <Link href={"/"}>
                              <h1 className="text-4xl text-center  md:text-start text-[#000000] duration-100 cursor-pointer  uppercase   tracking-wide font-normal">
                                   {groupDetails?.group_name}
                              </h1>
                         </Link>
                         <div className="  hidden lg:flex items-center  md:gap-6 xl:gap-12">
                              <div>
                                   <Link
                                        href={"/"}
                                        className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[14px] font-normal uppercase "
                                   >
                                        ABOUT US
                                        <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                                   </Link>
                              </div>
                              <div>
                                   <Link
                                        href={"/"}
                                        className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[14px] font-normal uppercase "
                                   >
                                        SHOP
                                        <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                                   </Link>
                              </div>
                              <div className=" group ">
                                   <div>
                                        <Link
                                             href={"/"}
                                             className="  flex items-center gap-2 text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[14px] font-normal uppercase "
                                        >
                                             <span> COLLECTIONS</span>
                                             <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                                        </Link>
                                   </div>
                              </div>
                              <div>
                                   <Link
                                        href={"/"}
                                        className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[14px] font-normal uppercase "
                                   >
                                        WHERE TO BUY
                                        <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                                   </Link>
                              </div>
                              <div>
                                   <Link
                                        href={"/"}
                                        className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[14px] font-normal uppercase "
                                   >
                                        CONTACT
                                        <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                                   </Link>
                              </div>
                              <div>
                                   <Link
                                        href={"/"}
                                        className=" flex gap-3 items-center  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[14px] font-normal uppercase "
                                   >
                                        <span>FOLLOW US</span>
                                        <FaInstagram size={20}></FaInstagram>
                                        <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                                   </Link>
                              </div>
                         </div>
                    </div>
                    <div className="mt-2 grid sm:grid-cols-6 gap-2  ">
                         <div className="col-span-2">
                              <Link href={"/"} >
                                   <h1 className="text-xl xl:text-4xl text-center  md:text-start text-[#000000] duration-100 cursor-pointer  uppercase   tracking-wide font-normal">
                                        {" "}
                                        Service
                                   </h1>
                              </Link>
                         </div>

                         <div className=" col-span-4">
                              <div className=" flex items-center  justify-between flex-wrap gap-5 xl:gap-8">
                                   <div>
                                        <Link
                                             href={"/pages/how-to-shop"}
                                             className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[14px] font-normal uppercase "
                                        >
                                             How to shop
                                             <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                                        </Link>
                                   </div>
                                   <div>
                                        <Link
                                             href={"/pages/orders-and-delivery"}
                                             className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[14px] font-normal uppercase "
                                        >
                                             Orders and delivery
                                             <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                                        </Link>
                                   </div>
                                   <div className=" group ">
                                        <div>
                                             <Link
                                                  href={"/pages/faqs"}
                                                  className="  flex items-center gap-2 text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[14px] font-normal uppercase "
                                             >
                                                  <span> Faqs</span>
                                                  <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                                             </Link>
                                        </div>
                                   </div>
                                   <div>
                                        <Link
                                             href={"/pages/returns-and-refunds"}
                                             className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[14px] font-normal uppercase "
                                        >
                                             Returns and refunds
                                             <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                                        </Link>
                                   </div>
                                   <div>
                                        <Link
                                             href={"/pages/refat-friend"}
                                             className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[14px] font-normal uppercase "
                                        >
                                             Refer a friend
                                             <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                                        </Link>
                                   </div>
                                   <div>
                                        <Link
                                             href={"/pages/payment-and-pricing"}
                                             className=" flex gap-3 items-center  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[14px] font-normal uppercase "
                                        >
                                             <span>Payment and pricing</span>
                                             <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className=" pt-8">
                         <p className="text-[#585656] text-center md:text-start text-[15px]">
                              © Copyright | {groupDetails?.group_name} | All Rights Reserved
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default Footer;
