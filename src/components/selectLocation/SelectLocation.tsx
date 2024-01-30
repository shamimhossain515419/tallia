import { location } from "@/utils/location";
import Link from "next/link";

const SelectLocation = () => {
     return (
          <div className=" py-10">
               <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                    <div className="md:col-span-1 lg:col-span-1 max-h-[650px] overflow-y-auto">
                         {
                              location?.map((item, index) => <div key={index} className=" py-2">
                                   <strong className="text-[18px]   font-semibold">{item?.title}</strong>
                                   <p className="text-[15px]  font-normal">{item?.shop_name}</p>
                                   <p className="text-[15px]  font-normal">{item?.postal_code}</p>
                                   <p className="text-[15px]  font-normal">{item?.country}</p>
                                   <button type='submit' className='px-5 py-[7px]  my-2 text-[12px]  tracking-[0.5px]  uppercase bg-primary hover:bg-secondary duration-500  text-white  rounded-[100px]'> view map</button>
                                   <p className="text-[15px]  font-normal"> {item?.radius} </p>
                                   <Link href={`/${item?.view_map}`} className="text-secondary text-[13px] font-medium tracking-[0.5px]  uppercase">DIRECTIONS</Link>
                              </div>)
                         }

                    </div>
                    <div className="md:col-span-1 lg:col-span-2 ">
                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187894154!2d90.33728812288359!3d23.780975728197344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1706584545299!5m2!1sen!2sbd" width="100%" height="650" loading="lazy" ></iframe>
                    </div>
               </div>
          </div>
     );
};

export default SelectLocation;