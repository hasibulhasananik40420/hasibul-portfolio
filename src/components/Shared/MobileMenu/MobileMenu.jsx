'use client'

import Logo from "@/components/Ui/Logo";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-scroll";


const MobileMenu = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

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

        const handleMenuClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };


  return (
    <div className={`h-[12vh] z-50 w-full  fixed top-0 nav-bg`}>
        <div className="flex justify-between items-center h-[12vh] px-4">
           <div>
            <Logo/>
           </div>
            <div>
               <CiMenuFries onClick={handleMenuClick} className="size-10 text-white cursor-pointer"/>
            </div>
        </div>

        {isMenuVisible && (
      
        <div className="fixed top-0 right-0 h-screen w-[80%] z-50 bg-[#2C304A] p-4 text-white">
            <span className="flex justify-end cursor-pointer">
            <VscChromeClose onClick={handleMenuClick} className="size-10 text-red-500 "/>
             </span>

               <div className="mt-10 flex flex-col gap-5">
                 

              <Link
              to="homeSection"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset according to your layout
              duration={1000}
              onClick={handleMenuClick}
              className="bg-[#0F172A] text-[20px] text-white font-Exo font-medium py-2 px-4 rounded cursor-pointer"
            >
              Home
            </Link>
            
            
            <Link
              to="aboutSection"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset according to your layout
              duration={1000}
              onClick={handleMenuClick}
              className="bg-[#0F172A] text-[20px] text-white font-Exo font-medium py-2 px-4 rounded cursor-pointer"
            >
              About
            </Link>


             <Link
              to="servicesSection"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset according to your layout
              duration={1000}
              onClick={handleMenuClick}
              className="bg-[#0F172A] text-[20px] text-white font-Exo font-medium py-2 px-4 rounded cursor-pointer"
            >
              Services
            </Link>
            
            
            
             <Link
              to="projectsSection"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset according to your layout
              duration={1000}
              onClick={handleMenuClick}
              className="bg-[#0F172A] text-[20px] text-white font-Exo font-medium py-2 px-4 rounded cursor-pointer"
            >
              Projects
            </Link>


             <Link
              to="contactSection"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset according to your layout
              duration={1000}
              onClick={handleMenuClick}
              className="bg-[#0F172A] text-[20px] text-white font-Exo font-medium py-2 px-4 rounded cursor-pointer"
            >
              Contact
            </Link>


            <button className="text-[16px] font-Exo font-normal tracking-[0.9px] rounded-sm relative px-4 h-12 bg-[#72E2AE] text-white  duration-500 overflow-hidden z-50 group">Download Resume<span className="absolute rounded-sm opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">Download Resume</span><span className="bg-sky-950 rounded-sm absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span><span className="bg-sky-950 rounded-sm absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span><span className="bg-sky-950 rounded-sm absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span><span className="bg-sky-950 rounded-sm absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span></button>






             </div>
        </div>
      )}
    </div>
  )
}

export default MobileMenu