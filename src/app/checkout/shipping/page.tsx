"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Page = () => {
  const [payActive, setPayActive] = useState(false);
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center justify-center text-stone-500 ">
        <Link className="hover:text-secondary" href={"/cart"}>Cart</Link> <IoIosArrowForward />
        <Link className="hover:text-secondary" href={"/checkout/information"}>Information</Link>{" "}
        <IoIosArrowForward />
        <Link className="hover:text-secondary" href={"/checkout/shipping"}>Shipping</Link> <IoIosArrowForward />
        <Link className="hover:text-secondary" href={"/checkout/payment"}>Payment</Link>
      </div>
      {/* user address  */}
      <div className=" my-10 px-3 py-2  rounded-[4px] sm:mr-5 border  border-[#3333331f]">
        <div className=" flex justify-between text-[#333333] items-start gap-4 py-1">
          <div className=" flex  flex-col  lg:flex-row items-start lg:items-center">
            <p className="text-[12px] md:w-[50px] xl:w-[70px]  md:text-[14px]">
              Contact
            </p>
            <p className="text-[12px]  md:text-[14px]">
              {" "}
              shamimhossain017@gmail.com
            </p>
          </div>
          <Link className="text-[12px]  md:text-[14px]" href={"/"}>
            {" "}
            Change
          </Link>
        </div>
        <div className="border-t border-[#3333331f] my-2"></div>
        <div className=" flex justify-between text-[#333333]  items-start gap-4 py-1">
          <div className=" flex  flex-col  lg:flex-row items-start lg:items-center ">
            <p className="text-[12px] md:w-[50px] xl:w-[70px]   md:text-[14px]">
              Ship
            </p>
            <p className="text-[12px]  md:text-[14px]">
              {" "}
              bogura, Dhaka 5800, Bangladesh
            </p>
          </div>
          <Link className="text-[12px]  md:text-[14px]" href={"/"}>
            {" "}
            Change
          </Link>
        </div>
      </div>
      {/* Shipping method  */}
      <div className="my-10">
        <h1 className=" text-[17px]  lg:text-[22px] text-[#333333]   py-3">
          Shipping method
        </h1>
        <div className="  p-3 text-[#333333] flex justify-between items-start gap-2 rounded-[4px] sm:mr-5 border  border-[#3333331f]">
          <div className=" flex items-start gap-3">
            <div>
              <div className=" flex justify-center items-center bg-secondary w-[20px] h-[20px] rounded-full">
                <p className=" w-[5px] h-[5px] bg-white rounded-full"></p>
              </div>
            </div>
            <div>
              <h2 className="text-[12px]   md:text-[14px] ">
                Express Courier (Air)
              </h2>
              <p className="text-[12px]  md:text-[14px] ">
                4 to 6 business days
              </p>
              <p className="text-[12px]  md:text-[14px] ">
                Prepayment of duties and taxes supported
              </p>
            </div>
          </div>
          <div>
            <Link className="text-[14px] font-normal" href={"/"}>
              Free
            </Link>
          </div>
        </div>
      </div>
      {/* pay new  */}
      <div className="sm:mr-5">
        <h1 className=" text-[17px]  lg:text-[22px] text-[#333333]   py-3">
          {" "}
          Duties and taxes{" "}
        </h1>
        <div className="border  border-[#3333331f] rounded-[4px]   ">
          <div className="  px-3 py-3  text-[#333333] flex justify-between items-start gap-2  sm:mr-5 ">
            <div className=" flex items-start gap-3">
              <div>
                <div
                  onClick={() => setPayActive(false)}
                  className={` flex justify-center items-center ${payActive ? "border border-[#3333337b]" : " bg-secondary"
                    }  w-[20px] h-[20px] cursor-pointer rounded-full`}
                >
                  <p className=" w-[5px] h-[5px] bg-white rounded-full"></p>
                </div>
              </div>
              <div>
                <h2 className="text-[12px]   md:text-[14px] ">Pay now</h2>
                <p className="text-[12px]  md:text-[14px] ">
                  No additional fees on delivery
                </p>
              </div>
            </div>
            <div>
              <p className="text-[14px] font-normal">৳45,914.00</p>
            </div>
          </div>
          <div className="border  border-[#3333331f] "></div>
          <div className="px-3 py-3  text-[#333333] flex justify-between items-start gap-2  sm:mr-5 ">
            <div className=" flex items-start gap-3">
              <div>
                <div
                  onClick={() => setPayActive(true)}
                  className={` flex justify-center items-center ${payActive ? "bg-secondary" : " border border-[#3333337b]"
                    }  w-[20px] h-[20px] cursor-pointer rounded-full`}
                >
                  <p className=" w-[5px] h-[5px] bg-white rounded-full"></p>
                </div>
              </div>
              <div>
                <h2 className="text-[12px]   md:text-[14px] ">
                  Pay on delivery
                </h2>
                <p className="text-[12px]  md:text-[14px] ">
                  Additional fees may apply
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* shipping action  */}
      <div className=" flex flex-col-reverse lg:flex-row   justify-between items-center gap-2  my-6  lg:py-5 ">
        <div>
          <Link
            href={"/checkout/information"}
            className=" flex   items-center gap-[2px] text-[#333333]"
          >
            {" "}
            <MdKeyboardArrowLeft />{" "}
            <p className="text-[12px] md:text-[13px]">Return to information</p>
          </Link>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => router.push("/checkout/payment")}
            className="bg-black hover:bg-secondary duration-300 px-6  py-[10px] lg:py-[14px] text-white text-[15px]   font-medium rounded-[5px] uppercase "
          >
            {" "}
            Continue to payment{" "}
          </button>
        </div>
      </div>

      {/* checkout footer  */}
      <div className=" flex  items-center flex-wrap gap-2 lg:gap-6 border-t pt-4">
        <Link className="text-[12px] text-gray-600" href={"/"}>
          {" "}
          Refund
        </Link>
        <Link className="text-[12px] text-gray-600" href={"/"}>
          {" "}
          policyShipping
        </Link>
        <Link className="text-[12px] text-gray-600" href={"/"}>
          policyPrivacy{" "}
        </Link>
        <Link className="text-[12px] text-gray-600" href={"/"}>
          {" "}
          Terms of service
        </Link>
        <Link className="text-[12px] text-gray-600" href={"/"}>
          {" "}
          Terms of sale{" "}
        </Link>
        <Link className="text-[12px] text-gray-600" href={"/"}>
          {" "}
          Legal notice{" "}
        </Link>
      </div>
    </div>
  );
};

export default Page;
