import React, { useState } from 'react';

const PasswordChange = ({ setActivePassword }: any) => {
    const [oldPassword, setOldPassword] = useState("")
    return (
        <div className=' w-full h-screen fixed  top-0 left-0 flex justify-center items-center z-[200] bg-[#0000007d] '>
            <div className=' max-w-[700px] lg:min-w-[700px] p-3 md:p-7 rounded mx-auto bg-white '>
                <h1 className='text-center  pb-2 text-[22px] capitalize text-red-600 font-bold'> Be very careful </h1>
                <p className='text-[17px] font-medium'>Chnage your Pasword</p>
                <div className=' space-y-5  py-4'>
                    <div className=' w-full'>
                        <input type={"text"} name={"password"} id="" placeholder={"Enter Your old Password"} onChange={(e) => setOldPassword(e.target.value)} className="  w-full rounded-[8px] border outline-1 outline-[#000000e1]  border-[#3331318c] py-2 px-3" />
                    </div>
                    <div className=' w-full'>
                        <input type={"text"} name={"password"} id="" placeholder={"Enter  New password"} onChange={(e) => setOldPassword(e.target.value)} className="  w-full rounded-[8px] border outline-1 outline-[#000000e1]  border-[#3331318c] py-2 px-3" />
                    </div>
                    <div className=' w-full'>
                        <input type={"text"} name={"password"} id="" placeholder={"Enter Confirm  password"} onChange={(e) => setOldPassword(e.target.value)} className="  w-full rounded-[8px] border outline-1 outline-[#000000e1]  border-[#3331318c] py-2 px-3" />
                    </div>
                    <div className=' flex items-center gap-2'>
                        <button className=' rounded-[8px] text-[18px] px-6 duration-300  hover:bg-[#0000007a] py-[6px] flex justify-center items-center  font-medium  capitalize text-[#fff] primary_bg ' type={"submit"}> Submit</button>
                        <button onClick={() => setActivePassword(false)} className=' rounded-[8px] text-[18px] px-6 duration-300  bg-red-600 hover:bg-red-400 py-[6px] flex justify-center items-center  font-medium  capitalize text-[#fff]  '> Cancel</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordChange;