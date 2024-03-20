"use client"
import ShippingAddress from '@/components/address/ShippingAddress';
import InputAnimation from '@/components/inputcomponent/InputAnimation';
import { useCreateAddressMutation, useFetchAddressQuery } from '@/redux/features/address/addressApi';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const Page = () => {
    const [createAddress, { data: createResult, error, isSuccess }] =
        useCreateAddressMutation();
    const [activeAddress, setActiveAddress] = useState(false);
    const { data: address, refetch } = useFetchAddressQuery("");
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
    useEffect(() => {
        if (createResult && isSuccess) {
            toast.success("Success add address");
            refetch()
        }
    }, [createResult, isSuccess, refetch]);
    console.log(error);

    return (
        <div className='px-10'>
            <div>

                {/* show all shipping address  */}
                {address?.length > 0 && !activeAddress && (<>
                    <ShippingAddress data={address} />
                    <div>
                        <div onClick={() => setActiveAddress(true)} className=' border inline-block  hover:bg-secondary cursor-pointer  px-5 py-[10px] hover:text-white duration-300 capitalize rounded-lg  text-[16px] font-medium border-secondary'> Add new address</div>
                    </div>
                </>
                )}
            </div>

            <div>

                {!address?.length || activeAddress ?

                    <form action="" onSubmit={handleSubmit}>
                        <h1 className='text-[16px] font-medium '>Add new Address*</h1>
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
                                    <button onClick={() => setActiveAddress(false)}
                                        className=" flex   items-center gap-[2px] text-[#333333]"
                                    >
                                        {" "}
                                        <MdKeyboardArrowLeft />{" "}
                                        <p className="text-[12px] md:text-[13px]">Cencel</p>
                                    </button>
                                </div>
                                <div className="flex justify-end mt-4">
                                    <button
                                        type="submit"
                                        className="bg-black hover:bg-secondary duration-300 px-6  py-[10px] lg:py-[14px] text-white  text-[12px] lg:text-[15px]   font-medium rounded-[5px] uppercase "
                                    > Save to Address
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form> : null}
            </div>
        </div>
    );
};

export default Page;