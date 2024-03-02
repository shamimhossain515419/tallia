"use client";

import { useState } from "react";
import { Collapse } from "react-collapse";
import { GoPlus } from "react-icons/go";
import InputText from "../inputcomponent/InputText";
import Button from "../buttons/Button";

const AddAddress = () => {
  const [activeAdd, setActiveAdd] = useState(false);
  const [defaultAddress, setDefaultAddress] = useState(false);

  const handleCheckboxChange = (e: any) => {
    setDefaultAddress(!defaultAddress);
  };

  return (
    <div>
      {/* add Address button */}
      <div className="flex gap-2 py-5">
        <GoPlus />
        <p
          onClick={() => setActiveAdd(!activeAdd)}
          className="text-[12px] tracking-[3px] cursor-pointer uppercase font-semibold"
        >
          ADD ADDRESS
        </p>
      </div>
      {/* add address form */}
      <Collapse isOpened={activeAdd}>
        <form className="">
          {/* first Name */}
          <div className=" text-[12px] py-2 flex items-center">
            <h2 className="uppercase font-semibold w-[200px] max-w-[100%]">
              FIRST NAME
            </h2>
            <InputText type="text" name="frist_name" />
          </div>
          {/* Last Name */}
          <div className=" text-[12px] py-2 flex items-center">
            <h2 className="uppercase font-semibold w-[200px] max-w-[100%]">
              LAST NAME
            </h2>
            <InputText type="text" name="last_name" />
          </div>
          {/* COMPANY*/}
          <div className=" text-[12px] py-2 flex items-center">
            <h2 className="uppercase font-semibold w-[200px] max-w-[100%]">
              COMPANY
            </h2>
            <InputText type="text" name="company" />
          </div>
          {/* address 1*/}
          <div className=" text-[12px] py-2 flex items-center">
            <h2 className="uppercase font-semibold w-[200px] max-w-[100%]">
              Address 1
            </h2>
            <InputText type="text" name="address1" />
          </div>
          {/* address 2*/}
          <div className=" text-[12px] py-2 flex items-center">
            <h2 className="uppercase font-semibold w-[200px] max-w-[100%]">
              Address 2
            </h2>
            <InputText type="text" name="address2" />
          </div>
          {/* CITY */}
          <div className=" text-[12px] py-2 flex items-center">
            <h2 className="uppercase font-semibold w-[200px] max-w-[100%]">
              CITY
            </h2>
            <InputText type="text" name="city" />
          </div>
          {/* COUNTRY */}
          <div className=" text-[12px] py-2 flex items-center">
            <h2 className="uppercase font-semibold w-[200px] max-w-[100%]">
              COUNTRY
            </h2>
            <InputText type="text" name="country" />
          </div>
          {/* COUNTRY */}
          <div className=" text-[12px] py-2 flex items-center">
            <h2 className="uppercase font-semibold w-[200px] max-w-[100%]">
              COUNTRY
            </h2>
            <InputText type="text" name="country" />
          </div>
          {/* POSTAL/ZIP CODE */}
          <div className=" text-[12px] py-2 flex items-center">
            <h2 className="uppercase font-semibold w-[200px] max-w-[100%]">
              POSTAL/ZIP CODE
            </h2>
            <InputText type="text" name="zip_code" />
          </div>
          {/* mobile */}
          <div className=" text-[12px] py-2 flex items-center">
            <h2 className="uppercase font-semibold w-[200px] max-w-[100%]">
              MOBILE PHONE ONLY (COMPULSORY)
            </h2>
            <InputText type="text" name="zip_code" />
          </div>
          <div className=" text-[12px] py-2 flex items-center">
            <h2 className="uppercase font-semibold w-[200px] max-w-[100%] flex items-center gap-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="D"
                  id="checkbox"
                  className="hidden"
                  value={"male"}
                  onChange={handleCheckboxChange}
                />

                <label
                  htmlFor="checkbox"
                  className={`cursor-pointer inline-block  w-[15px] h-[15px] ${defaultAddress == true
                    ? "bg-black text-black"
                    : "bg-white text-black"
                    }`}
                >
                  <p className=" font-normal w-[15px]  h-[15px]  border-[2px] border-black b " />
                </label>
              </div>
              <span> SET AS DEFAULT ADDRESS</span>
            </h2>
          </div>
          <div className="w-[150px] mt-4">
            <Button text={"Add Address"} />
          </div>
        </form>
      </Collapse>
    </div>
  );
};

export default AddAddress;
