"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import Cookies from 'js-cookie'
const DashboardSidebar = () => {
    const pathName = usePathname();
    const router = useRouter()
    const handleLogout = () => {
        signOut();
        Cookies.remove("access_token")
        router.push("/login");
        toast.success("Success logged out")
        window.location.reload();
    }
    if (pathName == "/useraccount") {
        return null;
    }
    return (
        <>
            <div className={` w-[350px]  hidden md:block`}>
                <div className=" border-b-2 border-secondary pb-3">
                    <h1 className=" text-[16px] pb-2 font-normal uppercase text-color ">
                        LOYALTY PROGRAM
                    </h1>
                    <Link
                        href={"/useraccount/access-bronze"}
                        className={` ${pathName == "/useraccount/access-bronze"
                            ? "primary font-medium "
                            : "text-color font-normal"
                            }  ml-3 hover:underline text-[16px]  py-2 `}
                    >
                        Access Bronze
                    </Link>
                </div>
                {/* MY ACCOUNT  */}
                <div className=" py-3">
                    <h1 className="text-[18px] font-normal py-2 text-color">
                        MY ACCOUNT
                    </h1>
                    <div className=" space-y-4 ml-3">
                        <div>
                            <Link
                                className={` ${pathName == "/useraccount/profile"
                                    ? "primary font-medium "
                                    : "text-color font-normal"
                                    } hover:underline text-[16px]  py-2 `}
                                href={"/useraccount/profile"}
                            >
                                Profile
                            </Link>
                        </div>
                        <div>
                            <Link
                                className={` ${pathName == "/useraccount/orders"
                                    ? "primary font-medium "
                                    : "text-color font-normal"
                                    } hover:underline text-[16px]  py-2 `}
                                href={"/useraccount/orders"}
                            >
                                Orders and Returns
                            </Link>
                        </div>
                        <div>
                            <Link
                                className={` ${pathName == "/useraccount/credits"
                                    ? "primary font-medium "
                                    : "text-color font-normal"
                                    } hover:underline text-[16px]  py-2 `}
                                href={"/useraccount/credits"}
                            >
                                Account credit
                            </Link>
                        </div>
                        <div>
                            <Link
                                className={` ${pathName == "/useraccount/account-details"
                                    ? "primary font-medium "
                                    : "text-color font-normal"
                                    } hover:underline text-[16px]  py-2 `}
                                href={"/useraccount/account-details"}
                            >
                                Account-details
                            </Link>
                        </div>

                        <div>
                            <Link
                                className={` ${pathName == "/useraccount/address-book"
                                    ? "primary font-medium "
                                    : "text-color font-normal"
                                    } hover:underline text-[16px]  py-2 `}
                                href={"/useraccount/address-book"}
                            >
                                Address book
                            </Link>
                        </div>

                        <div>
                            <Link
                                className={` ${pathName == "/useraccount/commcentre"
                                    ? "primary font-medium "
                                    : "text-color font-normal"
                                    } hover:underline text-[16px]  py-2 `}
                                href={"/useraccount/commcentre"}
                            >
                                Communication preferences
                            </Link>
                        </div>
                        <div>
                            <Link
                                className={` ${pathName == "/useraccount/refer-a-friend"
                                    ? "primary font-medium "
                                    : "text-color font-normal"
                                    } hover:underline text-[16px]  py-2 `}
                                href={"/useraccount/refer-a-friend"}
                            >
                                Refer a friend
                            </Link>
                        </div>
                        <div>
                            <Link
                                className={` ${pathName == "/useraccount/connected-services"
                                    ? "primary font-medium "
                                    : "text-color font-normal"
                                    } hover:underline text-[16px]  py-2 `}
                                href={"/useraccount/connected-services"}
                            >
                                Connected services
                            </Link>
                        </div>
                        <div>
                            <button onClick={handleLogout}
                                className={`text-color font-normal hover:underline text-[16px]  py-2 `}
                            >
                                {" "}
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardSidebar;
