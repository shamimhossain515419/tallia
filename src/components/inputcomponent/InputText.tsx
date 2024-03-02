import React from "react";

const InputText = ({ type, name }: any) => {
  return (
    <input
      className=" w-full  py-[3px] px-2 outline-0 border-2 border-black  "
      type={type}
      name={name}
    />
  );
};

export default InputText;
