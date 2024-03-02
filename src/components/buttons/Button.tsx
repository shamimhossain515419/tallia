const Button = ({ text, submit, handleFuncation }: any) => {
  return (
    <div onClick={handleFuncation} className=" relative overflow-hidden">
      <button type={submit} className="text-[13px] w-full group relative   bg-black text-white  uppercase font-semibold p-2  tracking-[2px]">
        {text}
        <span className="absolute w-full h-full   top-0  transform translate-x-full group-hover:-translate-x-[200%] duration-700 ease-out  bg-white  opacity-20  "></span>
      </button>
    </div>
  );
};
export default Button;