"use client"
import { IoMdArrowDropdown } from "react-icons/io";

import { useState } from "react";
import { Collapse } from "react-collapse";

const SearchRadius = () => {

     const [active, setActive] = useState(false)
     const [selectRadius, setSelectRadius] = useState("10 mi");
     const radius = [{ name: '10 mi' }, { name: '20 mi' }, { name: '30 mi' }, { name: '40 mi' }, { name: '40 mi' }, { name: '60 mi' }, { name: '70 mi' }, { name: '80 mi' },]
     return (
          <div className="  relative">
               <div onClick={() => setActive(!active)} className=" bg-white text-primary py-2  px-3 cursor-pointer flex items-center gap-2 rounded-[40px]">
                    <div>
                         {selectRadius}
                    </div>
                    <div>
                         <IoMdArrowDropdown size={24} />
                    </div>
               </div>
               <div className=" absolute z-30  left-3  bg-white ">
                    <Collapse isOpened={active}>
                         {
                              radius?.map((item, index) => <p onClick={() => { setSelectRadius(item.name), setActive(false) }} className=" hover:bg-[#a9a3a343] cursor-pointer px-3 py-2" key={index}> {item.name} </p>)
                         }
                    </Collapse>

               </div>
          </div>
     );
};

export default SearchRadius;