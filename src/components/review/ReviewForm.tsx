"use client";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useSession } from "next-auth/react";
import { useCreateReviewMutation } from "@/redux/features/review/ReviewApi";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
const ReviewForm = ({ id }: any) => {
    const [rating, setRating] = useState(1);
    const { data: section } = useSession();
    const [createReview, { data: createReviewResult, error, isSuccess }] =
        useCreateReviewMutation();
    const { user } = useSelector((state: any) => state?.auth);
    const handleReview = (e: any) => {
        e.preventDefault();
        const form = e.target;
        const comment = form?.comment?.value;
        const data = {
            comment,
            rating,
            group_id: process.env.GROUP_ID,
            product_id: id,
            customer_id: user?.id,
            status: 0,
        };
        if (data) {
            createReview(data);
        }
    };

    useEffect(() => {
        if (createReviewResult && isSuccess) {
            toast.success(createReviewResult?.message);
            window.location.reload()
        }
    }, [isSuccess, createReviewResult]);

    if (!section?.user) {
        return null;
    }


    return (
        <>
            <div className=" pt-5">
                <p className="text-[14px] uppercase font-medium ">Add a review</p>
                <p className="text-[14px] font-medium py-2">
                    Your email address will not be published. Required fields are marked *
                </p>
                <form action="" onSubmit={handleReview} className=" py-5 ">
                    {/* Your rating  */}
                    <p className="text-[14px] font-normal">Your rating</p>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        onChange={setRating}
                    />
                    <div className=" py-2">
                        {/* your review  */}
                        <textarea
                            name="comment"
                            className="w-full h-32 px-4 py-2 border border-[#00000064] outline-0 rounded-md  "
                            placeholder="Your review"
                        ></textarea>
                    </div>
                    {/* <div className=" py-2">
                        <input
                            type="text"
                            className="w-full  px-4 py-4 border border-[#00000064] outline-0 rounded-md"
                            placeholder="Your name"
                        />
                    </div>
                    <div className=" py-2">
                        <input
                            type="email"
                            className="w-full  px-4 py-4 border border-[#00000064] outline-0 rounded-md"
                            placeholder="Your email"
                        />
                    </div> */}
                    <div className="flex items-center gap-3">
                        {/* your email  */}
                        <input type="checkbox" name="" id="" />
                        <p className="text-[14px] font-medium py-2">
                            Save my name, email, and website in this browser for the next time
                            I comment.
                        </p>
                    </div>
                    <div className="py-2">
                        <button
                            className={`text-[15px] lg:text-[20px] w-full  px-6 py-[10px]   my-3 flex items-center justify-center rounded-[40px] cursor-pointer relative overflow-hidden transition-all  border  text-white   duration-500 ease-in-out hover:scale-100 hover:shadow-lg   bg-[#F15A24]`}
                        >
                            Sumit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ReviewForm;
