"use client"
import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import Logo from "@/components/Ui/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
 
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 100;
    const scrolled = window.scrollY;

    if (scrolled > scrollThreshold && !isFixed) {
      setIsFixed(true);
    } else if (scrolled <= scrollThreshold && isFixed) {
      setIsFixed(false);
    }

   
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);   // Re-run effect only when isFixed changes









  return (
     <div>
       <div className={`h-[12vh] lg:block hidden z-50 w-full  ${isFixed ? 'nav-bg fixed top-0' : ''}`}>
      <Container>
        <div className="flex justify-between items-center h-[12vh]">
          <div>
            <Logo />
          </div>

          <div>
            <ul className="flex gap-2 justify-center items-center">
            <ScrollLink 
               to="homeSection"  
                  spy={true}
                  smooth={true}
                  duration={1000}>
             <button className=" text-[18px] text-white font-Exo font-normal cursor-pointer leading-7 tracking-[0.9px] relative w-28 h-12 rounded-sm duration-500 overflow-hidden z-50 group">
                Home
                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                  Home
                </span>
                <span className="bg-[#72E2AE] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-[#72E2AE] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-[#72E2AE] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                <span className="bg-[#72E2AE] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
              </button> 
              </ScrollLink>





              <ScrollLink 
               to="aboutSection"  
                  spy={true}
                  smooth={true}
                  duration={1000}>

              <button className=" text-[18px] text-white font-Exo font-normal cursor-pointer leading-7 tracking-[0.9px] relative w-28 h-12 rounded-sm duration-500 overflow-hidden z-50 group">
                About
                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                  About
                </span>
                <span className="bg-[#72E2AE] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-[#72E2AE] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-[#72E2AE] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                <span className="bg-[#72E2AE] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
              </button>
              </ScrollLink>
               
             

              <ScrollLink 
               to="servicesSection"  
                  spy={true}
                  smooth={true}
                  duration={1000}>
              <button className="text-[18px] text-white font-Exo font-normal cursor-pointer leading-7 tracking-[0.9px] relative w-28 h-12 rounded-sm duration-500 overflow-hidden z-50 group">
                Services
                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                  Services
                </span>
                <span className="bg-[#72E2AE] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-[#72E2AE] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-[#72E2AE] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                <span className="bg-[#72E2AE] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
              </button>

              </ScrollLink>




              <ScrollLink 
               to="projectsSection"  
                  spy={true}
                  smooth={true}
                  duration={1000}>
              <button className="text-[18px] text-white font-Exo font-normal cursor-pointer leading-7 tracking-[0.9px] relative w-28 h-12 rounded-sm duration-500 overflow-hidden z-50 group">
                Projects
                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                  Projects
                </span>
                <span className="bg-[#72E2AE] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-[#72E2AE] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-[#72E2AE] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                <span className="bg-[#72E2AE] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
              </button>
              </ScrollLink>


              <ScrollLink 
               to="resumeSection"  
                  spy={true}
                  smooth={true}
                  duration={1000}>
              <button className="text-[18px] text-white font-Exo font-normal cursor-pointer leading-7 tracking-[0.9px] relative w-28 h-12 rounded-sm duration-500 overflow-hidden z-50 group">
                Resume
                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                  Resume
                </span>
                <span className="bg-[#72E2AE] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-[#72E2AE] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-[#72E2AE] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                <span className="bg-[#72E2AE] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
              </button>
              </ScrollLink> 
              
              
              <ScrollLink 
               to="contactSection"  
                  spy={true}
                  smooth={true}
                  duration={1000}>
              <button className="text-[18px] text-white font-Exo font-normal cursor-pointer leading-7 tracking-[0.9px] relative w-28 h-12 rounded-sm duration-500 overflow-hidden z-50 group">
                Contact
                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                  Contact
                </span>
                <span className="bg-[#72E2AE] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-[#72E2AE] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-[#72E2AE] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                <span className="bg-[#72E2AE] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
              </button>
              </ScrollLink>
            </ul>
          </div>

           <div>

            
           <button className="text-[16px] font-Exo font-normal tracking-[0.9px] rounded-sm relative px-4 h-12 bg-[#72E2AE] text-white  duration-500 overflow-hidden z-50 group">Download Resume<span className="absolute rounded-sm opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">Download Resume</span><span className="bg-sky-950 rounded-sm absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span><span className="bg-sky-950 rounded-sm absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span><span className="bg-sky-950 rounded-sm absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span><span className="bg-sky-950 rounded-sm absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span></button>
           </div>
        </div>
      </Container>


      
    </div>
    <div className='xl:hidden lg:hidden md:block block'>
         <MobileMenu/>
       </div>
     </div>
  );
};

export default Navbar;
