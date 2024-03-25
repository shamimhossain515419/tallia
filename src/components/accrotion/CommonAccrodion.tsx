"use client";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowDown } from "react-icons/io";

const CommonAccrodion = ({ faq, title }: any) => {
    const [activeQuestion, setActiveQuestion] = useState(false);
    const unescapeHtml = (htmlString: string) => {
        const textarea = document.createElement("textarea");
        textarea.innerHTML = htmlString;
        return textarea.value;
    };
    return (
        < >
            <div className={`py-3  lg:py-5 border-b-[0.5px] border-[#33333351] `}>
                <div
                    onClick={() => setActiveQuestion(!activeQuestion)}
                    className="  cursor-pointer flex justify-between items-center gap-2"
                >
                    <h1 className="text-[16px] font-normal">
                        {" "}
                        {title}
                    </h1>
                    <div className={` `}>
                        <IoIosArrowDown className={` ${activeQuestion ? "rotate-180 duration-300" : "rotate-0"} transition-all secondary text-[20px] lg:text-[24px]`} />
                    </div>
                </div>

                <Collapse isOpened={activeQuestion}>
                    <div>
                        <div className=" pt-5">
                            <div
                                dangerouslySetInnerHTML={{ __html: unescapeHtml(faq?.details) }}
                            />
                        </div>
                    </div>
                </Collapse>


            </div>
        </>
    );
};

export default CommonAccrodion;