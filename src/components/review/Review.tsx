"use client"
import { useGetReviewQuery } from "@/redux/features/review/ReviewApi";
import ReviewCart from "./ReviewCart";
import ReviewForm from "./ReviewForm";
const Review = ({ id }: any) => {
    const { data: reviewData, error, } = useGetReviewQuery(id);
    return (
        <>
            <div className="">
                <div className=' space-y-6'>
                    {
                        reviewData?.data?.map((review: any, i: number) => <ReviewCart review={review} key={i} />)
                    }
                </div>
                <ReviewForm id={id} />
            </div>
        </>
    );
};

export default Review;
