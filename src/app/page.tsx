import CustomLinkButton from "@/components/customButton/CustomLinkButton";
import hero1 from "../assets/Home/hero (1).jpg"
import hero2 from "../assets/Home/hero (2).jpg"
import hero3 from "../assets/Home/hero (3).jpg"
import Image from "next/image";
import Title_Marquee from "@/components/title-marquee/Title_Marquee";
import ShadowTitle_Marquee from "@/components/title-marquee/ShadowTitle_Marquee";
import Hero from "@/components/home/hero/Hero";
import Instagram from "@/components/home/instagram/Instagram";
export default function Home() {
  return (
    <main className=" w-full overflow-hidden">
      <Hero></Hero>
      <div className=' relative  max-h-[90vh] overflow-hidden'>
        <Image className=' relative w-full  h-full' src={hero2} alt='hero'></Image>
        <div className=' absolute  left-1/2 top-2/3 '>
          <CustomLinkButton title="ABOUT US" path="/about-us"></CustomLinkButton>
        </div>
      </div>
      <div className=" relative h-full pb-[65px]">
        {/* text marquee */}
        <div className="   relative">
          <Title_Marquee title="CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE	"></Title_Marquee>
        </div>

        <div className="  absolute top-10  lg:top-20">
          <ShadowTitle_Marquee title="CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE CLOTHING WITH A BOLD ATTITUDE		" />
        </div>
      </div>

      <div className=' relative  max-h-[90vh] overflow-hidden'>
        <Image className=' relative w-full    h-full' src={hero1} alt='hero'></Image>
        <div className=' absolute  left-1/2 top-2/3 '>
          <CustomLinkButton title="WHERE TO BUY" path="/store-locator"></CustomLinkButton>
        </div>
      </div>
      <div className=' relative  max-h-[90vh] overflow-hidden  border-t border-[#fff]'>
        <Image className=' relative w-full    h-full' src={hero3} alt='hero'></Image>
        <div className=' absolute  left-1/2 top-2/3 '>
          <CustomLinkButton title="CONTACT" path="/contact"></CustomLinkButton>
        </div>
      </div>
      <Instagram></Instagram>

    </main>
  );
}
