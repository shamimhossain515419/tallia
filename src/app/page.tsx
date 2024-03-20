import CustomLinkButton from "@/components/customButton/CustomLinkButton";
import hero1 from "../assets/Home/hero (1).jpg"
import hero2 from "../assets/Home/hero (2).jpg"
import hero3 from "../assets/Home/hero (3).jpg"
import Image from "next/image";
import Title_Marquee from "@/components/title-marquee/Title_Marquee";
import ShadowTitle_Marquee from "@/components/title-marquee/ShadowTitle_Marquee";
import Hero from "@/components/home/hero/Hero";
import Instagram from "@/components/home/instagram/Instagram";
async function getData() {
  const url = `${process.env.BASE_URL}/api/group-information/${process.env.GROUP_ID}`;
  let res = await fetch(url, {
    next: { revalidate: 300 },
  });
  const groupDetails = await res.json();
  return groupDetails;
}

export default async function Home() {
  const groupDetails = await getData();
  return (
    <main className=" w-full overflow-hidden">
      <Hero></Hero>
      <div className=' relative  max-h-[90vh] overflow-hidden'>
        <Image width={1000} height={600} className=' relative w-full  h-full' src={process.env.BASE_URL + "/images/" + groupDetails?.banner} alt='hero'></Image>
        <div className=' absolute  w-full h-full  top-[45%] lg:top-2/3 '>
          <div className="   flex justify-center items-center ">
            <div className=" inline-block">
              <CustomLinkButton title="ABOUT US" path="/about-us"></CustomLinkButton>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative h-full  py-5">
        {/* text marquee */}
        <div className="  leading-10 lg:leading-[80px] relative">
          <Title_Marquee title="CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE	"></Title_Marquee>
        </div>

        <div className="leading-10  lg:leading-[80px] ">
          <ShadowTitle_Marquee title="CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE		" />
        </div>
      </div>
      {/* shop image 1 */}
      <div className=' relative  max-h-[90vh] overflow-hidden'>
        <Image className=' relative w-full    h-full' src={hero1} alt='hero'></Image>
        <div className=' absolute  w-full h-full  top-[45%] lg:top-2/3 '>
          <div className="   flex justify-center items-center ">
            <div className=" inline-block">
              <CustomLinkButton title="WHERE TO BUY" path="/store-locator"></CustomLinkButton>
            </div>
          </div>
        </div>
      </div>
      {/* shop image2 */}
      <div className=' relative  max-h-[90vh] overflow-hidden  border-t border-[#fff]'>
        <Image className=' relative w-full    h-full' src={hero3} alt='hero'></Image>
        <div className=' absolute  w-full h-full  top-[45%] lg:top-2/3 '>
          <div className="   flex justify-center items-center ">
            <div className=" inline-block">
              <CustomLinkButton title="CONTACT" path="/contact"></CustomLinkButton>
            </div>
          </div>
        </div>
      </div>
      <Instagram></Instagram>

    </main>
  );
}
