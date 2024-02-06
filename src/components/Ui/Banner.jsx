
import Navbar from "../Shared/Navbar/Navbar";
import Container from "../Shared/Container/Container";
import Image from "next/image";
import anik from "@/assets/Anik webiste.png";
import Icons from "./Icons";
import ScrollDown from "../ScrollDown/ScrollDown";

const Banner = () => {
  return (
    <div className="bg-[#0B1224] bg-[url('https://learnwithsumit.com/_next/static/media/pattern-dark.20747baf.svg')]  min-h-[100vh] h-screen" id="homeSection">
      <Navbar />

      <Container>
        <div className="flex flex-col justify-center items-center max-w-[1100px] mx-auto min-h-[100vh]">

          

      <div className="mt-36 lg:mt-0 2xl:mt-0   2xl:size-64 lg:size-44 md:size-72 size-44 rounded-full p-1 ring-animation">
      <div className="w-full h-full rounded-full ring-border"></div>
      <Image
        className="w-full h-full rounded-full "
        src={anik}
        alt="anik image"
        placeholder="blur"
      />
    </div>



          <h1 className="md:text-[60px] lg:text-[60px] 2xl:text-[80px] text-[26px] text-white font-Exo mt-8 2xl:mt-14 font-bold tracking-[0.9px] leading-10">
            Hi, I am <span className="text-[#72E2AE]">Hasibul Hasan</span>
          </h1>

          <p className="text-textDark lg:mt-10 md:mt-10 mt-6 2xl:mt-14 lg:text-[20px] md:text-[20px] text-[16px] text-center font-Montserrat font-medium leading-6">
            I am a full stack web developer. I can provide clean code and pixel
            perfect design. I also make website more & more interactive with web
            animations.
          </p>

          <div className="mt-10 2xl:mt-14">
            <Icons />
          </div>


          
          <ScrollDown/>
        

        </div>
      </Container>
    </div>
  );
};

export default Banner;
