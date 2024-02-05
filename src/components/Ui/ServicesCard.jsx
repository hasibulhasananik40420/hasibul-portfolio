import { SiXdadevelopers } from "react-icons/si";
import { IoLogoWebComponent } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { TbBoxMultiple } from "react-icons/tb";
import { GrServerCluster } from "react-icons/gr";
import { SiW3C } from "react-icons/si";



const ServicesCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-16">
    
    
      <div className="relative group hover:cursor-pointer">

        <div className="size-16 bg-[#72E2AE] absolute top-[-32px] left-10 rounded-full flex justify-center items-center group-hover:bg-transparent group-hover:ring-[2px] group-hover:ring-[#72E2AE] group-hover:translate-x-10 duration-300 ease-out">
          <FaCode className="size-6 text-white group-hover:text-[#72E2AE]" />
        </div>
        <div className="xl:w-[400px] lg:w-[380px] w-full h-[270px] bg-[#162033] flex flex-col justify-center items-center rounded-sm border-[0.5px] border-[#2C304A] group-hover:border-[#72E2AE] duration-300 p-4">
          <h1 className="md:text-[30px] text-[24px] text-white font-Exo font-bold leading-6 mt-6">
              Web Development
          </h1>
          <p className="text-[16px] text-center text-textDark pt-7 font-Montserrat font-normal leading-6">
          Transform your online vision into reality with our expert Web Development services. Elevate your digital presence and captivate your audience with our innovative and tailored solutions.
          </p>
        </div>
      </div>

         <div className="relative group hover:cursor-pointer">

        <div className="size-16 bg-[#72E2AE] absolute top-[-32px] left-10 rounded-full flex justify-center items-center group-hover:bg-transparent group-hover:ring-[2px] group-hover:ring-[#72E2AE] group-hover:translate-x-10 duration-300 ease-out">
          <IoLogoWebComponent className="size-6 text-white group-hover:text-[#72E2AE]" />
        </div>
        <div className="xl:w-[400px] lg:w-[380px] w-full h-[270px] bg-[#162033] flex flex-col justify-center items-center rounded-sm border-[0.5px] border-[#2C304A] group-hover:border-[#72E2AE] duration-300 p-4">
          <h1 className="md:text-[30px] text-[24px] text-white font-Exo font-bold leading-6 mt-6">
          Web Application
          </h1>
          <p className="text-[16px] text-center text-textDark pt-7 font-Montserrat font-normal leading-6">
          Empower your business with cutting-edge Web Application development. We craft seamless, user-centric solutions that drive engagement and elevate your online experience.
          </p>
        </div>
      </div>

       <div className="relative group hover:cursor-pointer">

        <div className="size-16 bg-[#72E2AE] absolute top-[-32px] left-10 rounded-full flex justify-center items-center group-hover:bg-transparent group-hover:ring-[2px] group-hover:ring-[#72E2AE] group-hover:translate-x-10 duration-300 ease-out">
          <TbBoxMultiple  className="size-6 text-white group-hover:text-[#72E2AE]" />
        </div>
        <div className="xl:w-[400px] lg:w-[380px] w-full h-[270px] bg-[#162033] flex flex-col justify-center items-center rounded-sm border-[0.5px] border-[#2C304A] group-hover:border-[#72E2AE] duration-300 p-4">
          <h1 className="md:text-[30px] text-[24px] text-white font-Exo font-bold leading-6 mt-6">
          Responsive Design
          </h1>
          <p className="text-[16px] text-center text-textDark pt-7 font-Montserrat font-normal leading-6">
          Elevate user experience across all devices with our Responsive Design expertise. Our solutions ensure your website adapts flawlessly, delivering a consistent and engaging interface on every screen size.
          </p>
        </div>
      </div>


       
     <div className="relative group hover:cursor-pointer">

        <div className="size-16 bg-[#72E2AE] absolute top-[-32px] left-10 rounded-full flex justify-center items-center group-hover:bg-transparent group-hover:ring-[2px] group-hover:ring-[#72E2AE] group-hover:translate-x-10 duration-300 ease-out">
          <GrServerCluster  className="size-6 text-white group-hover:text-[#72E2AE]" />
        </div>
        <div className="xl:w-[400px] lg:w-[380px] w-full h-[270px] bg-[#162033] flex flex-col justify-center items-center rounded-sm border-[0.5px] border-[#2C304A] group-hover:border-[#72E2AE] duration-300 p-4">
          <h1 className="md:text-[30px] text-[24px] text-white font-Exo font-bold leading-6 mt-6">
          Backend Development
          </h1>
          <p className="text-[16px] text-center text-textDark pt-7 font-Montserrat font-normal leading-6">
          Empower your applications with the agility of Node.js. Our Backend Development expertise leverages Node.js to create scalable, high-performance solutions that drive your digital ambitions forward.
          </p>
        </div>
      </div>

        <div className="relative group hover:cursor-pointer">

        <div className="size-16 bg-[#72E2AE] absolute top-[-32px] left-10 rounded-full flex justify-center items-center group-hover:bg-transparent group-hover:ring-[2px] group-hover:ring-[#72E2AE] group-hover:translate-x-10 duration-300 ease-out">
          <SiXdadevelopers  className="size-6 text-white group-hover:text-[#72E2AE]" />
        </div>
        <div className="xl:w-[400px] lg:w-[380px] w-full h-[270px] bg-[#162033] flex flex-col justify-center items-center rounded-sm border-[0.5px] border-[#2C304A] group-hover:border-[#72E2AE] duration-300 p-4">
          <h1 className="md:text-[30px] text-[24px] text-white font-Exo font-bold leading-6 mt-6">
          Web Design
          </h1>
          <p className="text-[16px] text-center text-textDark pt-7 font-Montserrat font-normal leading-6">
          Crafting captivating online experiences through innovative Web Design. We blend creativity with functionality to ensure your website not only looks stunning but also engages and converts visitors effectively.
          </p>
        </div>
      </div>


        <div className="relative group hover:cursor-pointer">

        <div className="size-16 bg-[#72E2AE] absolute top-[-32px] left-10 rounded-full flex justify-center items-center group-hover:bg-transparent group-hover:ring-[2px] group-hover:ring-[#72E2AE] group-hover:translate-x-10 duration-300 ease-out">
          <SiW3C  className="size-6 text-white group-hover:text-[#72E2AE]" />
        </div>
        <div className="xl:w-[400px] lg:w-[380px] w-full h-[270px] bg-[#162033] flex flex-col justify-center items-center rounded-sm border-[0.5px] border-[#2C304A] group-hover:border-[#72E2AE] duration-300 p-4">
          <h1 className="md:text-[30px] text-[24px] text-white font-Exo font-bold leading-6 mt-6">
          W3C Validation Code
          </h1>
          <p className="text-[16px] text-center text-textDark pt-7 font-Montserrat font-normal leading-6">
          Crafting websites with W3C validated code for optimal performance and industry compliance. Elevate your online presence with precision and reliability.
          </p>
        </div>
      </div>


       


   
















    </div>
  );
};

export default ServicesCard;
