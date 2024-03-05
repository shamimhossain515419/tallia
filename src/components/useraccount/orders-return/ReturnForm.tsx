import InputAnimation from "@/components/inputcomponent/InputAnimation";
import { useCreateReturnMutation } from "@/redux/features/orderReturn/orderReturn";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";

const ReturnForm = ({ orderInfo, activeFrom, setActivedForm }: any) => {
    const { order_info } = orderInfo || [];
    const [photo, setPhoto] = useState("");
    const [createReturn, { data: returnResult, error, isSuccess, isLoading }] =
        useCreateReturnMutation();
    // handle submit
    const returnHandler = (e: any) => {
        e.preventDefault();
        const targetFrom = e.target;
        const Quantity = targetFrom.Quantity.value;
        const note = targetFrom.note.value;
        const formData = new FormData();
        formData.append("group_id", `${process.env.GROUP_ID}`);
        formData.append("invoice", `${order_info?.order_invoice}`);
        formData.append("order_log_id", `${activeFrom?.id}`);
        formData.append("notes", note);
        formData.append("return_quantity", Quantity);
        formData.append("photo", photo);
        createReturn(formData);
    };
    //  response tost
    useEffect(() => {
        if (returnResult?.status == "success" && isSuccess) {
            toast.success(returnResult.message);
            setActivedForm(false);
        }
    }, [returnResult, setActivedForm, isSuccess]);

    return (
        <div className=" fixed   z-[400] flex items-center  justify-center bg-[#00000036] top-0 left-0 right-0 bottom-0 ">
            <div className=" relative bg-white max-w-[700px] min-h-[400px] p-5 rounded-md">
                <div>
                    <h1>Return #{order_info?.order_invoice} </h1>
                    <div className="p-4  mt-5 ">
                        <div>
                            <form onSubmit={returnHandler}>
                                <div className="relative mt-2 space-y-4 rounded-md shadow-sm">
                                    {/* animation input quntity  */}
                                    <div>
                                        <InputAnimation
                                            type={"number"}
                                            name={"Quantity"}
                                            title={"Prodct Quantity"}
                                        ></InputAnimation>
                                    </div>
                                    {/* animation input notes  */}
                                    <div>
                                        <InputAnimation
                                            type={"text"}
                                            name={"note"}
                                            title={"Note"}
                                        ></InputAnimation>
                                    </div>
                                    {/* input file  */}
                                    <div>
                                        <input
                                            onChange={(e: any) => setPhoto(e.target.files[0])}
                                            type="file"
                                            required
                                            className="py-1 border border-[#00000056]  h-[50px]  flex  flex-col  items-start  justify-center group ] rounded-[5px] px-4"
                                        />
                                    </div>
                                </div>
                                {/* submit button s  */}
                                <div className="w-full mt-10">
                                    <button
                                        type="submit"
                                        className="bg-black hover:bg-secondary duration-300 px-6  py-[10px] lg:py-[14PX] text-white text-[15px] block w-full   font-bold rounded-[5px] uppercase "
                                    >
                                        {isLoading ? "Loading..." : "Return submit  "}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div
                    onClick={() => setActivedForm({})}
                    className=" absolute top-2 right-2 cursor-pointer hover:bg-[#F5F5F5]"
                >
                    <IoMdClose size={24} />
                </div>
            </div>
        </div>
    );
};

export default ReturnForm;
