"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Menu from "./menu";
import { Collapse } from "react-collapse";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSession } from "next-auth/react";
const Navbar = ({ products }: any) => {
     const [active, setActive] = useState(false);
     const { data: session } = useSession();
     return (
          <div className=" relative">
               <div className="  fixed    top-0 w-full left-0 right-0 bg-[#ffffffbc] z-50      ">
                    <div className="  px-6   py-5 flex justify-between items-center gap-2  ">
                         <Link href={"/"}>
                              <h1 className=" text-2xl lg:text-5xl  hover:text-[#000000] duration-100 cursor-pointer text-secondary uppercase   tracking-wide font-normal">
                                   {products?.data?.name}
                              </h1>
                         </Link>
                         <div className="  hidden lg:flex items-center  md:gap-6 xl:gap-12">
                              <div>
                                   <Link
                                        href={"/about-us"}
                                        className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[16px] font-normal uppercase "
                                   >
                                        ABOUT US
                                        <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                                   </Link>
                              </div>
                              <div>
                                   <Link
                                        href={"/shop"}
                                        className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[16px] font-normal uppercase "
                                   >
                                        SHOP
                                        <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                                   </Link>
                              </div>
                              <div className=" group ">
                                   <div>
                                        <Link
                                             href={"/collections/fall-winter-2023"}
                                             className="  flex items-center gap-2 text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[16px] font-normal uppercase "
                                        >
                                             <span> COLLECTIONS</span>
                                             <MdKeyboardArrowDown size={20} />
                                             <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                                        </Link>
                                   </div>
                                   <div className="  group-hover:block hover:block hidden duration-200   absolute z-30    ">
                                        <div className="  space-y-3 flex flex-col  gap-3  mt-[32px] bg-white    p-3">
                                             <Link
                                                  href={"/collections/fall-winter-2023"}
                                                  className="hover:text-[#ff6900] text-primary duration-200"
                                             >
                                                  {" "}
                                                  Fall/Winter 2023{" "}
                                             </Link>
                                             <Link
                                                  href={"/collections/spring-summer-2023"}
                                                  className="hover:text-[#ff6900] text-primary duration-200"
                                             >
                                                  {" "}
                                                  Spring/Summer 2023{" "}
                                             </Link>
                                             <Link
                                                  href={"/collections/fall-winter-2022"}
                                                  className="hover:text-[#ff6900] text-primary duration-200"
                                             >
                                                  {" "}
                                                  Fall/Winter 2022{" "}
                                             </Link>
                                        </div>
                                   </div>
                              </div>
                              <div>
                                   <Link
                                        href={"/store-locator"}
                                        className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[16px] font-normal uppercase "
                                   >
                                        WHERE TO BUY
                                        <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                                   </Link>
                              </div>
                              <div>
                                   <Link
                                        href={"/contact"}
                                        className="  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[16px] font-normal uppercase "
                                   >
                                        CONTACT
                                        <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                                   </Link>
                              </div>
                              <div>
                                   <Link
                                        target="_blank"
                                        href={"https://www.instagram.com/talliaclothing/"}
                                        className=" flex gap-3 items-center  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[16px] font-normal uppercase "
                                   >
                                        <span>FOLLOW US</span>
                                        <FaInstagram size={20}></FaInstagram>
                                        <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                                   </Link>
                              </div>
                              <div>
                                   <Link
                                        target="_blank"
                                        href={"https://www.instagram.com/talliaclothing/"}
                                        className=" flex gap-3 items-center  text-primary  group  relative  hover:text-[#ff6900] duration-500 text-[16px] font-normal uppercase "
                                   >
                                        <span>{session?.user?.email?.slice(0, 8)}</span>
                                        <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span>
                                   </Link>
                              </div>
                         </div>
                         <div onClick={() => setActive(!active)} className="  lg:hidden">
                              {active ? (
                                   <IoClose className="  text-secondary text-[20px]  lg:text-[24px]" />
                              ) : (
                                   <FaBars
                                        className=" text-primary hover:text-secondary text-[20px]  lg:text-[24px]"
                                        size={24}
                                   />
                              )}
                         </div>
                    </div>
                    <div className=" lg:hidden">
                         <Collapse isOpened={active}>
                              <Menu setActive={setActive}></Menu>
                         </Collapse>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;
