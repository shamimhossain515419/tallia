import React from 'react';
import Review from '../review/Review';
import { IoClose } from 'react-icons/io5';
const Composition = ({ setOpen, id }: any) => {
    return (
        <><div className=" min-h-screen flex justify-center items-center  min-w-screen bg-[#000000ce]  z-[100] fixed top-0 left-0 bottom-0 right-0">
            <div className=" relative max-w-[900px]  h-[100vh] grid items-start  bg-white gap-3 p-7 overflow-y-auto">
                <div>
                    <h1 className="text-[16px]  font-normal">COMPOSITION & CARE</h1>
                    <p className=" pt-3 text-[15px] font-normal">COMPOSITION</p>
                    <div className="py-2 h-[100px] overflow-hidden ">
                        <p> We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our products. To assess compliance, we have developed a programme of audits and continuous improvement plans.</p>
                    </div>
                    {/* CARE  */}
                    <div className='pt-3'>
                        <p className="py-2 text-[15px] font-normal">CARE</p>
                        <p>  Caring for your clothes is caring for the environment.
                            Simple steps like cleaning your clothing with a dry cotton cloth or a soft brush, depending on the characteristics of the product, can help you care for it. Whenever possible, try to use products that are respectful of the environment.</p>
                    </div>

                    <div className=" text-start pl-2 pt-6">
                        <p onClick={() => setOpen(false)} className="uppercase    tracking-[1.5px] cursor-pointer underline text-[12px] font-normal">View more</p>
                    </div>


                    {/* reeview section  */}

                    <div className=' pt-8'>
                        <Review id={id} />
                    </div>

                </div>


                <div
                    onClick={() => setOpen(false)}
                    className=" hover:text-red-500  absolute   z-50 cursor-pointer  top-1 right-5 p-3"
                ><IoClose size={24} />
                </div>


            </div>
        </div>
        </>
    );
};

export default Composition;