"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Summary = ({ totalAmount }: any) => {
    const router = useRouter();
    const deliveryCharge = (totalAmount / 100) * 5;
    const { data: userinfo } = useSession();
    //  check user  logged?
    const handleCheckout = () => {
        if (!userinfo?.user) {
            router.push("/login");
            return;
        }
        router.push("/checkout/information");
    };
    return (
        <div>
            <div className=" lg:w-[390px]  pt-7 lg:pt-0">
                <div className="   hidden lg:block">
                    <Link
                        className="text-[13px] underline text-end font-normal secondary"
                        href={"/product"}
                    >
                        {" "}
                        Continue Shopping{" "}
                    </Link>
                </div>
                <div className=" lg:pt-10">
                    <h2 className="text-[19px] secondary font-medium">Summary</h2>

                    <div className=" pt-6">
                        <div className=" flex justify-between gap-2 items-center">
                            {/* Subtotal  */}
                            <p>Subtotal</p>
                            <span>${totalAmount}</span>
                        </div>
                        <div className="  py-3 flex justify-between gap-2 items-center">
                            {/* Delivery  */}
                            <p>Delivery</p>
                            <span>${deliveryCharge}</span>
                        </div>
                        <div className=" my-2 h-[2px] w-full bg-[#aca2a2d7] "></div>

                        <div className="  py-3 flex justify-between gap-2 items-center">
                            {/* Total */}
                            <p className=" font-bold">Total</p>
                            <p>
                                USD{" "}
                                <span className=" font-bold">
                                    ${totalAmount + deliveryCharge}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className=" py-2 w-full">
                        {/* action button  */}
                        <button
                            onClick={handleCheckout}
                            className=" w-full text-white block text-center  duration-200    hover:bg-[#00000073]  primary_bg px-2 py-[10px] rounded-lg text-[16px] font-bold"
                        >
                            Go To Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
