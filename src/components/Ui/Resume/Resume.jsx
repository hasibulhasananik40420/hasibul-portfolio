/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/Shared/Container/Container";
import React from "react";

const Resume = () => {
  return (
    <div className="bg-[#0F172A]" id="resumeSection">
      <Container>
        <p className="text-[16px] text-textDark font-Montserrat font-medium leading-8 uppercase">
          reseme
        </p>
        <h1 className="md:text-[46px] text-[24px] text-white mt-3 font-Exo font-bold md:leading-[56px] leading-10 tracking-[0.5px]">
          My Resume
        </h1>

        <div className="flex gap-10 mt-10">
          <div className="lg:w-[600px] w-full bg-[#162033] border-[0.5px] border-[#2C304A] rounded-sm py-8 px-6">
            <h1 className=" text-[24px] text-white font-Montserrat font-semibold ">
              Working Experience
            </h1>

            <div className="flex mt-3">
              <div className=" h-[3px] w-[160px] bg-[#72E2AE] rounded-l"></div>
              <div className=" h-[3px] w-full bg-[#2C304A] rounded-e"></div>
            </div>

            <div className="flex items-center gap-5 mt-6">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-[#72E2AE] size-2 ring-2 ring-black rounded-full"></div>
                <div className="bg-[#2C304A] h-[150px] w-[2px]"></div>
                <div className="bg-[#72E2AE] size-2 ring-2 ring-black rounded-full"></div>
              </div>

              <div>
                <h1 className="text-[20px] text-white font-Montserrat font-medium">
                  Frontend Web Developer
                </h1>
                <p className="text-textDark mt-3 text-[16px] font-normal font-Montserrat">
                  Ayana Network Ltd
                </p>

                 <p className="text-textDark mt-3 text-[15px] font-normal font-Montserrat">Frontend Web Developer at Ayana Network Ltd, leveraging expertise in crafting responsive and user-friendly interfaces to enhance overall user experience.</p>
              </div>
            </div>

            <div className="flex items-center gap-5 mt-6">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-[#72E2AE] size-2 ring-2 ring-black rounded-full"></div>
                <div className="bg-[#2C304A] h-[150px] w-[2px]"></div>
                <div className="bg-[#72E2AE] size-2 ring-2 ring-black rounded-full"></div>
              </div>

              <div>
                <h1 className="text-[20px] text-white font-Montserrat font-medium">
                  Full Stack Web Developer
                </h1>
                <p className="text-textDark mt-3 text-[16px] font-normal font-Montserrat">
                  Did'nt work anywhere
                </p>

                 <p className="text-textDark mt-3 text-[15px] font-normal font-Montserrat">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit porro.</p>
              </div>
            </div>










          </div>

         <div className="lg:w-[600px] w-full bg-[#162033] border-[0.5px] border-[#2C304A] rounded-sm py-8 px-6">
            <h1 className=" text-[24px] text-white font-Montserrat font-semibold ">
            Educational Qualifications
            </h1>

            <div className="flex mt-3">
              <div className=" h-[3px] w-[160px] bg-[#72E2AE] rounded-l"></div>
              <div className=" h-[3px] w-full bg-[#2C304A] rounded-e"></div>
            </div>

            <div className="flex items-center gap-5 mt-6">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-[#72E2AE] size-2 ring-2 ring-black rounded-full"></div>
                <div className="bg-[#2C304A] h-[150px] w-[2px]"></div>
                <div className="bg-[#72E2AE] size-2 ring-2 ring-black rounded-full"></div>
              </div>

              <div>
                <h1 className="text-[20px] text-white font-Montserrat font-medium">
                 Bachelor of Science
                </h1>
                <p className="text-textDark mt-3 text-[16px] font-normal font-Montserrat">
                 Varendra University
                </p>

                 <p className="text-textDark mt-3 text-[15px] font-normal font-Montserrat">2020-2025</p>
              </div>
            </div>

            <div className="flex items-center gap-5 mt-6">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-[#72E2AE] size-2 ring-2 ring-black rounded-full"></div>
                <div className="bg-[#2C304A] h-[150px] w-[2px]"></div>
                <div className="bg-[#72E2AE] size-2 ring-2 ring-black rounded-full"></div>
              </div>

              <div>
                <h1 className="text-[20px] text-white font-Montserrat font-medium">
                Higher Schoold Graduation
                </h1>
                <p className="text-textDark mt-3 text-[16px] font-normal font-Montserrat">
                  Ishwardi Government College
                </p>

                 <p className="text-textDark mt-3 text-[15px] font-normal font-Montserrat">2016-2018</p>
              </div>
            </div>










          </div>






        </div>
      </Container>
    </div>
  );
};

export default Resume;
