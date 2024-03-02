"use client";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";
import {
  useCreateAddressMutation,
  useFetchAddressQuery,
} from "@/redux/features/address/addressApi";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addressToggle } from "@/redux/features/address/addressSlice";
import { useRouter } from "next/navigation";
import InputAnimation from "@/components/inputcomponent/InputAnimation";
import ShippingAddress from "@/components/address/ShippingAddress";

const Page = () => {
  const { data: address } = useFetchAddressQuery("");
  const [createAddress, { data: createResult, isLoading, error, isSuccess }] =
    useCreateAddressMutation();
  const { value: address_id } = useSelector((state: any) => state.address);
  const [activeAddress, setActiveAddress] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  //  handle submit address 
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const zip_code = form?.zip_code?.value;
    const address = form?.address?.value;
    const mobile = form?.mobile?.value;
    const state = form?.state?.value;
    const last_name = form?.last_name?.value;
    const first_name = form?.first_name?.value;
    const city = form?.city?.value;
    const data = {
      first_name,
      preferred: "0",
      country: "Bangladesh",
      country_code: "3434",
      last_name,
      city,
      address,
      mobile,
      zip_code,
      state,
    };
    createAddress(data);
  };

  //  responsve add address 
  useEffect(() => {
    if (createResult && isSuccess) {
      dispatch(addressToggle(createResult?.address_id));
      router.push("/checkout/shipping");
      toast.success("Success add address");
    }
  }, [createResult, isSuccess, dispatch, router]);
  // handleShipping
  const handleShipping = () => {
    if (!address_id) {
      toast.error("Please see the address");
    } else {
      router.push("/checkout/shipping");

    }
  };

  return (
    <div className=" text-sm ">
      <div className="flex items-center justify-center text-stone-500 ">
        <Link className="hover:text-secondary" href={"/cart"}>Cart</Link> <IoIosArrowForward />
        <Link className="hover:text-secondary" href={"/checkout/information"}>Information</Link>{" "}
        <IoIosArrowForward />
        <Link className="hover:text-secondary" href={"/checkout/shipping"}>Shipping</Link> <IoIosArrowForward />
        <Link className="hover:text-secondary" href={"/checkout/payment"}>Payment</Link>
      </div>
      {/* contact */}
      <div className="my-5">
        <div className=" flex justify-between items-center gap-2 py-2">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className=" text-[15px] font-normal">
            {" "}
            Have an account?<Link href={"/login"}>Log in</Link>
          </p>
        </div>
        <div className=" ">
          {/* email address  */}
          <InputAnimation title={"Address.e-mail"}></InputAnimation>
          <div className=" py-4">
            <div className=" flex items-center gap-2">
              <input
                className=" block h-[20px] w-[20px]"
                type="checkbox"
                name=""
                id=""
              />
              <p>M’inscrire à la newsletter de Maison Labiche</p>
            </div>
            <div className=" flex items-center gap-2 py-4">
              <input
                className=" block h-[20px]  w-[20px]"
                type="checkbox"
                name=""
                id=""
              />
              <p>Text me with news and offers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping address */}
      <div className=" flex justify-between items-center gap-1">
        <h1 className="text-[15px] lg:text-[20px] font-bold">
          SHIPPING ADDRESS
        </h1>
        <button
          onClick={() => setActiveAddress(!activeAddress)}
          className="text-[15px] font-medium"
        >
          {" "}
          {
            !address?.length ? <></> : " + New Address"
          }

        </button>
      </div>
      {/* show all shipping address  */}
      {address?.length > 0 && !activeAddress && (
        <ShippingAddress data={address} />
      )}
      {/* create shipping address form  */}
      {activeAddress && address?.length && (
        <form action="" onSubmit={handleSubmit}>
          <div>
            <div className=" py-5 lg:py-8">
              {/* select gender  */}
              <div className=" flex items-center gap-6">
                <div className=" flex items-center gap-2 ">
                  <input
                    className=" block w-[20px] h-[20px]"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p>Women</p>
                </div>
                <div className=" flex items-center gap-2 ">
                  <input
                    className=" block w-[20px] h-[20px]"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p>men</p>
                </div>
                <div className=" flex items-center gap-2 ">
                  <input
                    className=" block w-[20px] h-[20px]"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p>Other</p>
                </div>
              </div>
            </div>
            {/* from input filed  */}
            <div className="  space-y-5">
              <div className=" flex items-center gap-5">
                <div className=" w-full">
                  <InputAnimation
                    type={"text"}
                    name={"first_name"}
                    title={"First name"}
                  ></InputAnimation>
                </div>
                <div className=" w-full">
                  <InputAnimation
                    name={"last_name"}
                    type={"text"}
                    title={"Last name"}
                  ></InputAnimation>
                </div>
              </div>
              <div>
                <InputAnimation
                  name={"address"}
                  type="text"
                  title={"Address"}
                ></InputAnimation>
              </div>
              <div>
                <InputAnimation
                  name={"state"}
                  type="text"
                  title={"Apartment, suite,etc(optional)"}
                ></InputAnimation>
              </div>
              <div className=" flex items-center gap-5">
                <div className=" w-full">
                  <InputAnimation
                    name={"city"}
                    type={"text"}
                    title={"City"}
                  ></InputAnimation>
                </div>
                <div className=" w-full">
                  <InputAnimation
                    name={"zip_code"}
                    type={"number"}
                    title={"Post Code (optional)"}
                  ></InputAnimation>
                </div>
              </div>
              <div className=" w-full">
                <InputAnimation
                  name={"mobile"}
                  type={"number"}
                  title={"Mobile phone only (compulsory)"}
                ></InputAnimation>
              </div>
              <div className=" flex items-center gap-2 ">
                <input
                  className=" block w-[20px] h-[20px] rounded-[50px]"
                  type="checkbox"
                  name=""
                  id=""
                />
                <p> Save this information for next time</p>
              </div>
            </div>

            {/* shipping action  */}
            <div className=" flex flex-col-reverse lg:flex-row   justify-between items-center gap-2  my-6  lg:py-5 ">
              <div>
                <Link
                  href={"/cart"}
                  className=" flex   items-center gap-[2px] text-[#333333]"
                >
                  {" "}
                  <MdKeyboardArrowLeft />{" "}
                  <p className="text-[12px] md:text-[13px]">Return to cart</p>
                </Link>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-black hover:bg-secondary duration-300 px-6  py-[10px] lg:py-[14px] text-white  text-[12px] lg:text-[15px]   font-medium rounded-[5px] uppercase "
                >
                  {" "}
                  Continue to shipping{" "}
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      {address?.length > 0 && !activeAddress && (
        <div className=" flex flex-col-reverse lg:flex-row   justify-between items-center gap-2  my-6  lg:py-5 ">
          <div>
            <Link
              href={"/cart"}
              className=" flex   items-center gap-[2px] text-[#333333]"
            >
              {" "}
              <MdKeyboardArrowLeft />{" "}
              <p className="text-[12px] md:text-[13px]">Return to cart</p>
            </Link>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={handleShipping}
              className=" bg-black hover:bg-secondary duration-300 px-6  py-[10px] lg:py-[14px] text-white  text-[12px] lg:text-[15px]   font-medium rounded-[5px] uppercase "
            >
              {" "}
              Continue to shipping{" "}
            </button>
          </div>
        </div>
      )}

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
