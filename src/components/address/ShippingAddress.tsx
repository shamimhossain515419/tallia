"use client"

import { addressToggle } from "@/redux/features/address/addressSlice";
import { AddressInterface } from "@/types/AddressInterface";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const ShippingAddress = ({ data: address }: { data: AddressInterface }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { value } = useSelector((state: any) => state.address);
    const handleOrder = () => {
        router.push("/al/Payment");
    }
    return (
        <div>
            {address?.map((address: AddressInterface, index: number) => (
                <div
                    onClick={() => dispatch(addressToggle(address?.id))}
                    key={index}
                    className={" py-3 "}
                >
                    <div
                        className={` border ${value == address?.id
                            ? "border-secondary"
                            : "border-[#2e2e2eaf]"
                            } cursor-pointer  flex justify-between items-center gap-2 p-4 rounded-[5px]`}
                    >
                        <div className=" flex  items-center gap-4 md:gap-10 ">
                            <div>
                                <h1 className="text-[16px] font-medium text-color capitalize my-1">
                                    {" "}
                                    {address?.first_name} {address?.last_name}{" "}
                                </h1>
                            </div>
                            <div>
                                <h1 className="text-[16px] font-medium text-color capitalize my-1">
                                    {" "}
                                    {address?.address}{" "}
                                </h1>
                                <h1 className="text-[16px] font-medium text-color my-1">
                                    {" "}
                                    {address?.zip_code}{" "}
                                </h1>
                                <p className="text-[16px] font-medium text-color capitalize my-1">
                                    {" "}
                                    {address?.country}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="  sm:flex gap-3 items-center  md:gap-5">
                                <button className="text-[16px] hover:bg-[#F5F5F5]  rounded-[5px] duration-300 font-semibold primary p-2  outline-0  border-none">
                                    Edit
                                </button>
                                <button className="text-[16px] hover:bg-[#F5F5F5]  rounded-[5px] duration-300 font-semibold primary p-2  outline-0  border-none">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShippingAddress;