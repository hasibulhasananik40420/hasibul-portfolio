import React from "react";
import Container from "../Shared/Container/Container";
import { AiOutlineThunderbolt } from "react-icons/ai";
import Image from "next/image";
import anik from '@/assets/Anik webiste.png'
import FadeIn from "../Animation/FadeIn";
const AboutMe = () => {
  return (

    <div className="bg-[#0F172A] pt-24" id="aboutSection">
      <Container>
      <FadeIn>
        <div className="lg:flex gap-24 items-center ">
         

          <div className="" >
            <p className="text-[16px] text-textDark font-Montserrat font-medium leading-8">
              ABOUT ME
            </p>
            <h1 className="md:text-[46px] text-[24px] text-white mt-3 font-Exo font-bold md:leading-[56px] leading-10 tracking-[0.5px]">
              Why hire me for your next project?
            </h1>

            <p className="text-[16px] mt-6 text-textDark font-Montserrat font-medium leading-8">
              Hello! My name is Hasibul Hasan and I enjoy creating things that
              live on the internet. My interest in web development started back
              in 2021 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>

            <p className="text-[16px] mt-4 text-textDark font-Montserrat font-medium leading-8">
              Fast-forward to today, and I had the privilege of working at an
              advertising agency,{" "}
              <span className="font-medium text-textGreen font-titleFont">
                a start-up, a huge corporation, and a student-led design
              </span>{" "}
              
             
            </p>

    

            <p className="text-[16px] text-textDark font-Montserrat font-medium leading-8">
              Here are a few technologies I have been working with recently:
            </p>

            <div className="max-w-[400px] grid grid-cols-2 gap-2 mt-6 font-Montserrat font-medium">
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineThunderbolt className="text-textGreen" size={20} />
                </span>
                <span className="text-[18px] font-medium text-textDark font-Montserrat">
                  JavaScript (ES6+)
                </span>
              </div>{" "}
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineThunderbolt className="text-textGreen" size={20} />
                </span>
                <span className="text-[18px] font-medium text-textDark font-Montserrat">
                  React.js
                </span>
              </div>{" "}
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineThunderbolt className="text-textGreen" size={20} />
                </span>
                <span className="text-[18px] font-medium text-textDark font-Montserrat">
                  MongoDB
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineThunderbolt className="text-textGreen" size={20} />
                </span>
                <span className="text-[18px] font-medium text-textDark font-Montserrat">
                  Node.js
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineThunderbolt className="text-textGreen" size={20} />
                </span>
                <span className="text-[18px] font-medium text-textDark font-Montserrat">
                  Express.js
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineThunderbolt className="text-textGreen" size={20} />
                </span>
                <span className="text-[18px] font-medium text-textDark font-Montserrat">
                  Tailwind css
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineThunderbolt className="text-textGreen" size={20} />
                </span>
                <span className="text-[18px] font-medium text-textDark font-Montserrat">
                  Bootstrap
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineThunderbolt className="text-textGreen" size={20} />
                </span>
                <span className="text-[18px] font-medium text-textDark font-Montserrat">
                  Mongoose
                </span>
              </div>{" "}
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineThunderbolt className="text-textGreen" size={20} />
                </span>
                <span className="text-[18px] font-medium text-textDark font-Montserrat">
                  Redux
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineThunderbolt className="text-textGreen" size={20} />
                </span>
                <span className="text-[18px] font-medium text-textDark font-Montserrat">
                  Firebase
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineThunderbolt className="text-textGreen" size={20} />
                </span>
                <span className="text-[18px] font-medium text-textDark font-Montserrat">
                  Next js
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineThunderbolt className="text-textGreen" size={20} />
                </span>
                <span className="text-[18px] font-medium text-textDark font-Montserrat">
                  Next Auth
                </span>
              </div>
               <div className="flex items-center gap-2">
                <span>
                  <AiOutlineThunderbolt className="text-textGreen" size={20} />
                </span>
                <span className="text-[18px] font-medium text-textDark font-Montserrat">
                  Shadcn Ui
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineThunderbolt className="text-textGreen" size={20} />
                </span>
                <span className="text-[18px] font-medium text-textDark font-Montserrat">
                  Ant Design
                </span>
              </div>
            </div>
          </div>

          <div className="lg:w-[1200px] w-full p-1 h-[450px] md:h-[700px] lg:h-[450px] border-[4px] border-[#2C304A] rounded-sm mt-14 md:mt-16 lg:mt-0">
            <Image className="w-full h-full" src={anik} alt="anik" placeholder="blur"/>
          </div>

        </div>
        </FadeIn>
      </Container>
    </div>
  );
};

export default AboutMe;
