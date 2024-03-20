"use client"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Cookies from "js-cookie";
const PrivateRoute = ({ children }: any) => {
    const { data: session, status } = useSession();
    const token = Cookies.get("access_token");
    const router = useRouter();
    if (status == "loading") {
        return <div className="flex justify-center items-center h-[600px]"><p className="text-[20px]   font-bold"> loading ... </p></div>;
    } else {
        if (!session?.user || !token) {
            router.push("/login");
            return;
        }
        return <div>{children}</div>;
    }
};

export default PrivateRoute;