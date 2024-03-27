"use client"
import { useContactPostMutation } from "@/redux/features/contact/ContactApi";
import Link from "next/link";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const Page = () => {
     const [contactPost, { data: result, isLoading, error, isSuccess }] = useContactPostMutation()
     const handleSubmit = (e: any) => {
          e.preventDefault();
          const form = e.target;
          const name = form?.name?.value;
          const email = form?.email?.value;
          const mobile = form?.mobile?.value;
          const type = form?.type?.value;
          const message = form?.mobile?.value;
          const data = {
               name, type, email, mobile, message
          }
          contactPost(data);
     }
     useEffect(() => {
          if (result) {
               toast.success("Message sent successfully");
               window.location.reload();
          }

     }, [result])



     return (
          <div>
               <div className="  max-w-[690px] mx-auto py-9 px-2">
                    <h1 className="text-[40px] font-bold md:text-[50px] text-center ">
                         CONTACT US
                    </h1>
                    <p className=" text-[19px] lg:text-[22px] font-light leading-[30px] lg:leading-[40px] text-center mt-10 py-3">
                         {" "}
                         INTERESTED IN LEARNING MORE ABOUT TALLIA? <br /> LEAVE US A MESSAGE
                         AND WE’LL GET BACK TO YOU.{" "}
                    </p>

                    <div className=" py-8">
                         <form onSubmit={handleSubmit} action="">
                              {/* input name  */}
                              <div className=" w-full  py-3">
                                   <p className=" text-[16px] lg:text-[20px] uppercase ml-2   font-normal">
                                        NAME <span className=" text-secondary">*</span>
                                   </p>
                                   <input
                                        className=" outline-0  border my-1 p-[8px] lg:p-[14px] rounded-[100px] bg-[#ECECEC] border-[#8C8C8C] w-full"
                                        type="text"
                                        name="name"
                                        id=""
                                   />
                              </div>
                              {/* input eamil  */}
                              <div className=" w-full  py-3">
                                   <p className=" text-[16px] lg:text-[20px] uppercase ml-2   font-normal">
                                        Email <span className=" text-secondary">*</span>
                                   </p>
                                   <input
                                        className=" outline-0  border my-1 p-[8px] lg:p-[14px] rounded-[100px] bg-[#ECECEC] border-[#8C8C8C] w-full"
                                        type="email"
                                        name="email"
                                        id=""
                                   />
                              </div>
                              {/* input mobile phone  */}
                              <div className=" w-full  py-3 ">
                                   <p className=" text-[16px] lg:text-[20px] uppercase ml-2   font-normal">
                                        mobile <span className=" text-secondary">*</span>
                                   </p>
                                   <input
                                        className=" outline-0  border my-1 p-[8px] lg:p-[14px] rounded-[100px] bg-[#ECECEC] border-[#8C8C8C] w-full"
                                        type="number"
                                        name="mobile"
                                        id=""
                                   />
                              </div>
                              <div className=" w-full  py-3 ">
                                   <p className=" text-[16px] lg:text-[20px] uppercase ml-2   font-normal">
                                        WHAT CAN WE HELP YOU WITH?{" "}
                                        <span className=" text-secondary">*</span>
                                   </p>
                                   <div>
                                        <select
                                             name="type"
                                             className=" outline-0  border my-1 p-[8px] lg:p-[14px]  rounded-[100px] bg-[#ECECEC] border-[#8C8C8C] w-full"
                                        >
                                             <option className="text-[15px]   font-normal">
                                                  {" "}
                                                  Customer Services
                                             </option>
                                             <option> Marketing</option>
                                             <option> RR</option>
                                             <option> Sales</option>
                                             <option> Wholesale</option>
                                             <option> Others</option>
                                        </select>
                                   </div>
                              </div>
                              <div className=" w-full  py-3 ">
                                   <p className=" text-[16px] lg:text-[20px] uppercase ml-2   font-normal">
                                        MESSAGE <span className=" text-secondary"> *</span>
                                   </p>
                                   <textarea
                                        className=" outline-0  border my-1 p-[8px] lg:p-[14px] rounded-[20px] bg-[#ECECEC] border-[#8C8C8C] w-full"
                                        name="message"
                                        id=""
                                        cols={20}
                                        rows={6}
                                   ></textarea>
                              </div>
                              <div className=" flex justify-end items-center  gap-1">
                                   <button
                                        type="submit"
                                        className="px-10 py-[7px] lg:py-[10px]  text-[12px] lg:text-[17px]  uppercase bg-primary hover:bg-secondary duration-500  text-white  rounded-[100px]"
                                   >
                                        {" "}
                                        Submit
                                   </button>
                              </div>
                         </form>
                    </div>

                    <div className=" pt-10  max-w-[600px]  mx-auto">
                         <p className="text-[12px] font-normal text-[#7a7a7a]">
                              By submitting your email address, you agree to receive emails from
                              Tallia and its parent company, to Tallia processing your personal
                              data for marketing purposes and to our{" "}
                              <Link href={"/"} className="text-red-500">
                                   Privacy Policy.
                              </Link>
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default Page;
