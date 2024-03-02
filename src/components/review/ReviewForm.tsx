"use client";

import { useState } from "react";
// import ReactStars from "react-rating-stars-component";

const ReviewForm = () => {
  const [rating, setTating] = useState(1);
  return (
    <>
      <div className=" pt-5">
        <p className="text-[14px] uppercase font-medium ">Add a review</p>
        <p className="text-[14px] font-medium py-2">
          Your email address will not be published. Required fields are marked *
        </p>
        <form action="" className=" py-5 ">
          {/* Your rating  */}
          <p className="text-[14px] font-normal">Your rating</p>
          {/* <ReactStars
                        className={" text-wrap"}
                        count={5}
                        onChange={(e: any) => setTating(e)}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffc53e"
                    /> */}
          <div className=" py-2">
            {/* your review  */}
            <textarea
              className="w-full h-32 px-4 py-2 border border-[#00000064] outline-0 rounded-md  "
              placeholder="Your review"
            ></textarea>
          </div>
          <div className=" py-2">
            {/* your name  */}
            <input
              type="text"
              className="w-full  px-4 py-4 border border-[#00000064] outline-0 rounded-md"
              placeholder="Your name"
            />
          </div>
          <div className=" py-2">
            {/* your email  */}
            <input
              type="email"
              className="w-full  px-4 py-4 border border-[#00000064] outline-0 rounded-md"
              placeholder="Your email"
            />
          </div>
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
