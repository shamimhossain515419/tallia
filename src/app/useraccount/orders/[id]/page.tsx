import Image from "next/image";
import React from "react";

const page = ({ params }) => {

    return (
        <>
            <div className=" w-full mx-auto shadow  my-5 rounded-xl   ">
                <div className="flex items-center justify-between md:text-sm text-[12px]  border-b grid-cols-3 border-stone-200  p-5">
                    <div className="">
                        <h1>Order # {params?.id}</h1>
                        <p className="text-sm ">Placed on 18 May 2022 18:37:34</p>
                    </div>
                    <div className="">
                        <h1>Status: Pending</h1>
                    </div>
                    <div className="">Total: ৳ 204</div>
                </div>

                <div className="">
                    {/*  */}
                    <div className="text-sm p-2 flex justify-between items-center ">
                        <div className="">Product 2</div>
                        <div className="">
                            <Image
                                className=" "
                                src={
                                    "https://cdn-images.farfetch-contents.com/22/90/71/02/22907102_52927932_600.jpg"
                                }
                                width={50}
                                height={50}
                                alt=""
                            />
                        </div>
                        <div className="">Qty: 10</div>
                        <div className="">Price: 10</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
