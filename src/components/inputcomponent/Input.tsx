const Input = ({ title, type, name, width }: any) => {
  return (
    <div className=" flex w-full  flex-col sm:flex-row justify-between items-start  overflow-hidden gap-2">
      <label
        className=" sm:w-[30%] uppercase  font-normal     text-[15px]   tracking-[2px]"
        htmlFor={title}
      >
        {title}
      </label>
      <div className={`  ${width ? width : "sm:w-[260px] "}  w-full`}>
        <input
          className=" w-full py-[3px] px-2 outline-0 border-2 border-black  "
          type={type}
          name={name}
          id={name}
        />
      </div>
    </div>
  );
};

export default Input;

