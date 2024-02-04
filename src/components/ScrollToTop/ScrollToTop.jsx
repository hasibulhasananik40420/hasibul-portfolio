"use client"
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const ScrollToTop = () => {
 
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY > 550) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const distanceFromBottom = maxScroll - scrollPosition;
    const ringFillPercentage = Math.min((distanceFromBottom / maxScroll) * 100, 100);



  return (
   
    <div
      onClick={handleScrollToTop}
      className={`fixed bottom-3 right-2 z-50 w-[45px] h-[45px] flex justify-center items-center cursor-pointer ${
        isVisible ? 'visible' : 'hidden'
      }`}
    >
      <div
        style={{ background: `conic-gradient(#162033 ${ringFillPercentage}%, #72E2AE ${ringFillPercentage}% 100%)` }}
        className={`ring-2 ring-[#72E2AE] bg-[#162033] rounded-full w-full h-full flex justify-center items-center transition-all`}
      >
        <IoIosArrowDown 
          className={`size-5 text-white ${scrollPosition > 550 ? 'animate-bounce' : ''}`}
        />
      </div>
    </div>
  )
}

export default ScrollToTop