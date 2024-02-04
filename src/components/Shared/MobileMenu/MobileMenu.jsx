'use client'

import Logo from "@/components/Ui/Logo";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { VscChromeClose } from "react-icons/vsc";


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

             <div className="mt-10">
                  <div onClick={handleMenuClick} className="bg-[#0F172A] text-[20px] text-white font-Exo font-medium py-2 px-4 rounded cursor-pointer">
                    Home
                  </div>
             </div>
        </div>
      )}
    </div>
  )
}

export default MobileMenu