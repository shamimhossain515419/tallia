import { Title_Marquee } from "@/types/Title_Marquee";
import Marquee from "react-fast-marquee";


const ShadowTitle_Marquee = ({ title, classStyle }: Title_Marquee) => {
     return (
          <Marquee direction={"right"} speed={200}>
               <h1 className={`text-shadow  text-[40px] lg:text-[100px]   font-extrabold  ${classStyle}`}> {title}</h1>
          </Marquee>
     )
};

export default ShadowTitle_Marquee;