"use client"

import { useState } from "react";


const InputAnimation = ({ title, name, type }: any) => {
    const [active, setActive] = useState(false)
    const [kepress, setkepress] = useState("");
    return (
        <div>
            <div className={`  ${active ? " border-2 border-secondary" : " border  border-[#00000056  "}  py-1  h-[50px]  flex  flex-col  items-start  justify-center group ] rounded-[5px] px-4`}>
                <label className={`  ${kepress ? " block " : "hidden "} opacity-90  text-gray-700`} htmlFor="">{title}</label>
                <input onChange={(e: any) => { setkepress(e.target.value) }} onBlur={() => setActive(false)} onFocus={() => setActive(true)} name={name} className="outline-0   w-full opacity-90" type={type} placeholder={title} />
            </div>
        </div>
    );
};

export default InputAnimation;