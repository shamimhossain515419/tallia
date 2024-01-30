import { winterProduct } from "@/utils/winter";
import Image from "next/image";


const WinterImage = () => {
     return (
          <div className=" max-w-[970px] mx-auto py-16">
               <div className=" grid  lg:grid-cols-2  grid-cols-1    gap-3">
                    {
                         winterProduct?.map((item, index) => <div className={`w-full ${item?.call == 1 ? " col-span-2" : ""}  h-[600px]`} key={index}>
                              <Image className=" w-full h-full object-fill" src={item?.image} alt="image"></Image>
                         </div>)
                    }
               </div>
          </div>
     );
};

export default WinterImage;