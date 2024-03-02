

import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";


const ProviderAuth = () => {

    return (
        <div className=" w-full mx-auto sm:max-w-[450px] py-5">
            <div className="  sm:flex  flex-col sm:flex-row items-center gap-3  justify-end  w-full">
                <div

                    className="  cursor-pointer bg-primary w-full text-white  mt-2 sm:mt-0 rounded-[2px] flex justify-center py-1  px-3 items-center gap-2 "
                >
                    <FcGoogle size={24}></FcGoogle>
                    <p className="text-sm font-semibold leading-6 text-white shadow-sm">
                        With Google
                    </p>
                </div>
                <div className="  bg-primary cursor-pointer  w-full  rounded-[2px]  mt-2 sm:mt-0  flex justify-center py-1  px-3  items-center gap-2 ">
                    <FaFacebookF className="text-blue-500" size={24}></FaFacebookF>
                    <p className="text-sm font-semibold leading-6 text-white shadow-sm">
                        With Facebook
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProviderAuth;
