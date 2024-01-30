"use client"
import React, { useEffect, useState } from 'react';
import "./index.css"
import Marquee from 'react-fast-marquee';
import Link from 'next/link';
const Page = () => {

     const [scrollPosition, setScrollPosition] = useState(0);
     const [beBold, setBeBold] = useState("");
     console.log(scrollPosition);
     console.log(beBold);

     useEffect(() => {
          const handleScroll = () => {
               const currentPosition = window.scrollY;

               // Set the scroll position state
               setScrollPosition(currentPosition);

               // Define the threshold scroll position to change the style
               const threshold = 1956;

               // Update the navbar style based on the scroll position
               if (currentPosition > threshold) {
                    setBeBold("sm:text-[80px] md:text-[100px] lg:text-[130px] xl:text-[150px] 2xl:text-[190px]");
               } else {
                    setBeBold("sm:text-[100px] md:text-[120px] lg:text-[140px] xl:text-[190px] 2xl:text-[240px] ");
               }
          };
          window.addEventListener("scroll", handleScroll);
     })

     // Add the scroll event listener

     return (
          <div className=' pt-5 w-full'>
               <div>
                    <div className=' max-w-[1300px] mx-auto' >
                         {/* about title  */}
                         <div>
                              <div>
                                   <h1 className={` ternaryFont  text-[40px] lg:text-[70px] text-center md:text-start  text-primary  font-semibold    leading-[50px]  lg:leading-[100px] uppercase`}> Fashion <span className='text-shadow'>is an  expression</span> of  Individuality  And  <span className='text-shadow'>personality.</span> </h1>
                              </div>
                         </div>
                    </div>
                    <div className='about_bg'>
                    </div>

                    <div className='  max-w-[800px] mx-auto py-20'>
                         {/* TALLIA  BORN  */}

                         <p className='text-[22px] text-center  font-light text-primary uppercase    leading-[40px] '>TALLIA WAS BORN IN NEW YORK IN 2006 WITH THE MISSION TO HELP MEN EXPRESS THEMSELVES THROUGH THEIR STYLE.</p>
                         <p className='text-[22px] text-center   font-light text-primary uppercase    leading-[40px] '>WE BELIEVE THAT FASHION SHOULD BE FUN AND INCLUSIVE, AND THAT EVERYONE SHOULD BE ABLE TO WEAR CLOTHES THAT MAKE THEM FEEL CONFIDENT AND MAKE A STATEMENT.</p>
                    </div>
                    <div className=' py-5'>
                         <Marquee speed={200}>
                              <h1 className={`  text-[40px] lg:text-[100px]   font-extrabold  uppercase `}> express your true self <span className='text-shadow'>express your true self</span> </h1>
                         </Marquee>
                    </div>
                    <div className='about_bg-1'>
                    </div>

                    {/* SPECIAL   OCCASION   */}
                    <div className='  relative'>
                         <div className=' bg-[#ECECEC] py-10 pb-20'>
                              <div className='  max-w-[800px] mx-auto py-20'>
                                   {/* TALLIA  BORN  */}

                                   <p className='text-[22px] text-center  font-light text-primary uppercase    leading-[48px] '>WHETHER YOU’RE DRESSING FOR A SPECIAL OCCASION OR ADDING SOME FLAIR TO YOUR EVERYDAY STYLE, WE’VE GOT YOU COVERED.</p>
                                   <p className='text-[22px] text-center  mt-3  font-light text-primary uppercase    leading-[48px] '>WE DESIGN OUR CLOTHING WITH A FOCUS ON VIBRANT COLORS, UNIQUE TEXTURES AND PATTERNS, AND LUXURIOUS FABRICS INSPIRED BY EUROPEAN FASHION AND ITS RICH HISTORY.</p>
                              </div>
                         </div>
                         {/* be Bold  section */}

                         <div className='absolute transform  left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
                              <h1 className={`text-[60px] ${beBold} uppercase duration-500  ease-in-out font-extrabold text-center be_bold text-primary`}>
                                   be Bold  </h1>
                         </div>

                         <div className=' max-w-[680px]  mx-auto mt-20 py-20'>

                              <p className='text-[25px] text-center  font-light text-primary uppercase    leading-[48px] '>WE DESIGN CLOTHING THAT REFLECTS THE BOLD AND ECLECTIC SPIRIT OF OUR CUSTOMERS..</p>
                              <p className='text-[25px] text-center  mt-3  font-light text-primary uppercase    leading-[48px] '>READY TO EXPLORE A COLLECTION AS UNIQUE AND STYLISH AS YOU ARE?</p>

                              <div className='   max-w-[350px] mx-auto  py-6'>
                                   <Link href={"/"} className={` text-[14px] md:text-[18px] w-full  px-6 py-3   bg-black   my-3 flex items-center justify-center rounded-[40px] cursor-pointer relative overflow-hidden transition-all  border border-white  hover:border-[#F15A24]  duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-[#F15A24]
                                            before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[40px]  hover:before:left-0 uppercase  text-white`}>
                                        SHOP OUR CURRENT SEASON
                                   </Link>
                              </div>

                         </div>
                    </div>
               </div>

          </div>
     );
};

export default Page;