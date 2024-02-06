'use client'

import { useState } from "react";
import { HiArrowSmDown } from "react-icons/hi"

const ScrollDown = () => {
    const handleScroll = () => {
        window.scrollBy({
          top: 650,
          behavior: 'smooth',
        });
      };

  return (
    <div className="py-10 2xl:py-14 flex items-center gap-1 " onClick={handleScroll}>
    <HiArrowSmDown className="size-5 text-textDark animate-bounce cursor-pointer" />
    <span className="text-textDark text-[14px] font-Montserrat font-semibold leading-6 tracking-[0.09px] cursor-pointer">
      SCROLL DOWN
    </span>
  </div>
  )
}

export default ScrollDown