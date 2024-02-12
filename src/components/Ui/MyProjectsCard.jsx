import Image from "next/image";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.png";
import project6 from "@/assets/project6.jpg";

import { CiImageOn } from "react-icons/ci";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import FadeIn, { FadeInStagger } from "../Animation/FadeIn";

const MyProjectsCard = () => {
  return (
    <FadeInStagger>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FadeIn>
          <div className="card-container">
            <div className="bg-[#162033] bg-anik lg:w-[400px] w-full h-[400px] border-[0.5px] border-[#2C304A] rounded-sm relative">
              <div className="lg:w-[400px] w-full h-[300px] p-4">
                <Image
                  className="w-full h-full"
                  src={project1}
                  alt="project image"
                  placeholder="blur"
                />
              </div>

              <div className="hover-content">
                <div className="lg:w-[369px] w-full lg:h-[269px] h-[284px] card-bgg lg:m-4 m-0 absolute top-0 flex justify-center items-center gap-3">
                  <span className="bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer">
                    <CiImageOn className="size-5" />
                  </span>

                  <a href="https://homi-fy.netlify.app/" target="_blank">
                    <span className="bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer">
                      <BsBoxArrowInUpRight className="size-5" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="px-4">
                <h1 className="md:text-[30px] text-[24px] text-white mt-3 font-Exo font-semibold tracking-[0.5px]">
                  Homify
                </h1>
                <p className="md:text-[18px] text-[16px] text-textDark font-Montserrat font-medium">
                New standard for nw living 
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="card-container">
            <div className="bg-[#162033] bg-anik lg:w-[400px] w-full h-[400px] border-[0.5px] border-[#2C304A] rounded-sm relative">
              <div className="lg:w-[400px] w-full h-[300px] p-4">
                <Image
                  className="w-full h-full"
                  src={project2}
                  alt="project image"
                  placeholder="blur"
                />
              </div>

              <div className="hover-content">
                <div className="lg:w-[369px] w-full lg:h-[269px] h-[284px] card-bgg lg:m-4 m-0 absolute top-0 flex justify-center items-center gap-3">
                  <span className="bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer">
                    <CiImageOn className="size-5" />
                  </span>

                  <a href="https://medikshop-9b9ed.web.app/" target="_blank">
                    <span className="bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer">
                      <BsBoxArrowInUpRight className="size-5" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="px-4">
                <h1 className="md:text-[30px] text-[24px] text-white mt-3 font-Exo font-semibold tracking-[0.5px]">
                  MadikShop
                </h1>
                <p className="md:text-[18px] text-[16px] text-textDark font-Montserrat font-medium">
                  Expertise Help To Get
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="card-container">
            <div className="bg-[#162033] bg-anik lg:w-[400px] w-full h-[400px] border-[0.5px] border-[#2C304A] rounded-sm relative">
              <div className="lg:w-[400px] w-full h-[300px] p-4">
                <Image
                  className="w-full h-full"
                  src={project3}
                  alt="project image"
                  placeholder="blur"
                />
              </div>

              <div className="hover-content">
                <div className="lg:w-[369px] w-full lg:h-[269px] h-[284px] card-bgg lg:m-4 m-0 absolute top-0 flex justify-center items-center gap-3">
                  <span className="bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer">
                    <CiImageOn className="size-5" />
                  </span>

                   <a href="https://chadxsmith.co/" target="_blank" >
                   <span className="bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer">
                    <BsBoxArrowInUpRight className="size-5" />
                  </span>
                   </a>
                </div>
              </div>

              <div className="px-4">
                <h1 className="md:text-[30px] text-[24px] text-white mt-3 font-Exo font-semibold tracking-[0.5px]">
                  Chad smith
                </h1>
                <p className="md:text-[18px] text-[16px] text-textDark font-Montserrat font-medium">
                Senior UX Researcher
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="card-container">
            <div className="bg-[#162033] bg-anik lg:w-[400px] w-full h-[400px] border-[0.5px] border-[#2C304A] rounded-sm relative">
              <div className="lg:w-[400px] w-full h-[300px] p-4">
                <Image
                  className="w-full h-full"
                  src={project4}
                  alt="project image"
                  placeholder="blur"
                />
              </div>

              <div className="hover-content">
                <div className="lg:w-[369px] w-full lg:h-[269px] h-[284px] card-bgg lg:m-4 m-0 absolute top-0 flex justify-center items-center gap-3">
                  <span className="bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer">
                    <CiImageOn className="size-5" />
                  </span>

                  <a href="https://food-store-6eb9c.web.app/" target="_blank" >
                  <span className="bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer">
                    <BsBoxArrowInUpRight className="size-5" />
                  </span>
                  </a>
                </div>
              </div>

              <div className="px-4">
                <h1 className="md:text-[30px] text-[24px] text-white mt-3 font-Exo font-semibold tracking-[0.5px]">
                 Ecommerce
                </h1>
                <p className="md:text-[18px] text-[16px] text-textDark font-Montserrat font-medium">
                   Buy product for you
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="card-container">
            <div className="bg-[#162033] bg-anik lg:w-[400px] w-full h-[400px] border-[0.5px] border-[#2C304A] rounded-sm relative">
              <div className="lg:w-[400px] w-full h-[300px] p-4">
                <Image
                  className="w-full h-full"
                  src={project5}
                  alt="project image"
                  placeholder="blur"
                />
              </div>

              <div className="hover-content">
                <div className="lg:w-[369px] w-full lg:h-[269px] h-[284px] card-bgg lg:m-4 m-0 absolute top-0 flex justify-center items-center gap-3">
                  <span className="bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer">
                    <CiImageOn className="size-5" />
                  </span>

                 <a href="https://cycure.azrafnetworks.net/" target="_blank">
                 <span className="bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer">
                    <BsBoxArrowInUpRight className="size-5" />
                  </span>
                 </a>
                </div>
              </div>

              <div className="px-4">
                <h1 className="md:text-[30px] text-[24px] text-white mt-3 font-Exo font-semibold tracking-[0.5px]">
                Cyber Security Risk
                </h1>
                <p className="md:text-[18px] text-[16px] text-textDark font-Montserrat font-medium">
                Defend Your Business Against
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="card-container">
            <div className="bg-[#162033] bg-anik lg:w-[400px] w-full h-[400px] border-[0.5px] border-[#2C304A] rounded-sm relative">
              <div className="lg:w-[400px] w-full h-[300px] p-4">
                <Image
                  className="w-full h-full"
                  src={project6}
                  alt="project image"
                  placeholder="blur"
                />
              </div>

              <div className="hover-content">
                <div className="lg:w-[369px] w-full lg:h-[269px] h-[284px] card-bgg lg:m-4 m-0 absolute top-0 flex justify-center items-center gap-3">
                  <span className="bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer">
                    <CiImageOn className="size-5" />
                  </span>

                  <span className="bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer">
                    <BsBoxArrowInUpRight className="size-5" />
                  </span>
                </div>
              </div>

              <div className="px-4">
                <h1 className="md:text-[30px] text-[24px] text-white mt-3 font-Exo font-semibold tracking-[0.5px]">
                 Bor bari
                </h1>
                <p className="md:text-[18px] text-[16px] text-textDark font-Montserrat font-medium">
                  Marriage dastination 
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </FadeInStagger>
  );
};

export default MyProjectsCard;
