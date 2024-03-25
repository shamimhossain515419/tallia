"use client"
import React, { useState } from 'react';
import PageTitle from '../title/PageTitle';
import { useGetFaqsQuery } from '@/redux/features/faq/singleFaq';
import CommonAccrodion from '@/components/accrotion/CommonAccrodion';

const Faqs = ({ faqs }: any) => {
    const [activeFaq, setActiveFAQ] = useState(faqs[0]?.faq_id);
    const { data: faqsData } = useGetFaqsQuery(activeFaq);

    return (
        <div>
            <PageTitle title={'Faqs'} />

            <div className=' flex items-center flex-wrap gap-3 py-5'>
                {faqs?.faqs?.map((item: any, index: number) => (
                    <div
                        onClick={() => setActiveFAQ(item?.faq_id)}
                        className={` ${activeFaq == item?.faq_id ? " bg-[#000000] text-white" : " border border-black  text-black"} cursor-pointer shadow-[10px] rounded-[8px]  clear-start flex justify-center items-center  py-2 px-6 `}
                        key={index}
                    >
                        <div className="">
                            <h1 className="text-[20px]  capitalize">
                                {item?.name}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                {
                    faqsData?.accordions?.map((faq: any, i: number) => <CommonAccrodion faq={faq} key={i} title={faq?.headline}>

                    </CommonAccrodion>)
                }
            </div>

        </div >
    );
};

export default Faqs;