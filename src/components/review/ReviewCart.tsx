
import Image from "next/image";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import moment from "moment";
import Avatar from "./Avatar";
import gravatarUrl from "gravatar-url";
const ReviewCart = ({ review }: any) => {
    const partnerEmail = "mdmasude7@gmail.com";
    const isDecimal = Number.isInteger(parseFloat(review.rating));
    var integerPart = Math.floor(parseFloat(review.rating));
    return (
        <>
            <div className=" flex items-start gap-6 md:max-w-[60%]">
                <div className=" w-[50px] lg:w-[70px]">
                    <div className=" w-[50px] lg:w-[70px]">
                        {review?.profile_photo_path ? (
                            <Image
                                className=" w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] rounded  object-cover"
                                width={100}
                                height={100}
                                src={
                                    process.env.BASE_URL + "/images/" + review?.profile_photo_path
                                }
                                alt="image"
                            ></Image>
                        ) : (
                            <div className="w-[50px] lg:w-[70px] h-[50px] lg:h-[70px]">
                                <Avatar avatar={gravatarUrl(partnerEmail, {
                                    size: 80,
                                })} />

                            </div>
                        )}
                    </div>

                </div>
                <div className=" w-full">
                    <div className=" flex items-center text-[#ffc53e] gap-1">
                        {Array.from({ length: integerPart }, (_, i) => (
                            <IoIosStar className="text-[14px]" key={i} />
                        ))}
                        {
                            !isDecimal &&
                            <IoIosStarHalf className="text-[14px]" />
                        }

                    </div>
                    <h1 className="text-[20px]  font-medium">
                        {" "}
                        <span className=" capitalize">{review?.name} </span>
                        <span className="text-[15px] ">
                            {" "}
                            – {moment(review?.created_a).format(" MMMM Do YYYY,")}{" "}
                        </span>
                    </h1>
                    <p className="text-[14px]"> {review?.comment} </p>
                </div>
            </div>
        </>
    );
};

export default ReviewCart;
