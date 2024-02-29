import Image from "next/image";
import { IoIosStar } from "react-icons/io";

const ReviewCart = () => {
    return (
        <>
            <div className=" flex items-start gap-6 md:max-w-[60%]">
                <div className=" w-[50px] lg:w-[70px]">
                    <div className=" w-[50px] lg:w-[70px]">
                        <Image className=" w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] rounded  object-cover" width={100} height={100} src={"https://www.maisonlabiche.com/cdn/shop/files/Menu-Femme_3438254b-8238-4d4d-928c-ff11ddd0443c_large.jpg?v=1706718531"} alt="image"></Image>
                    </div>
                </div>
                <div className=" w-full">
                    <div className=" flex items-center text-[#ffc53e] gap-1">
                        <IoIosStar className="text-[14px]" />
                        <IoIosStar className="text-[14px]" />
                        <IoIosStar className="text-[14px]" />
                        <IoIosStar className="text-[14px]" />
                        <IoIosStar className="text-[14px]" />
                    </div>
                    <h1 className="text-[20px]  font-medium">Isabel Miller <span className="text-[15px]"> – September 3, 2019</span></h1>
                    <p className="text-[14px]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor est quae recusandae a asperiores consequatur dolore quibusdam ad ratione, esse possimus voluptatibus? </p>
                </div>
            </div>
        </>
    );
};

export default ReviewCart;