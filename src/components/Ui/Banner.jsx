"use client"
import Navbar from "../Shared/Navbar/Navbar";
import Container from "../Shared/Container/Container";
import Image from "next/image";
import anik from '@/assets/Anik 3.jpg'

import Icons from "./Icons";
import ScrollDown from "../ScrollDown/ScrollDown";
import { motion } from 'framer-motion';

const Banner = () => {

  const intro = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.25,
        delayChildren: 0.75,
      },
    },
  };
  
  const introChildren = {
    hidden: { opacity: 0, y: -200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, type: 'spring', bounce: 0.5 },
    },
  };

  const laptop = {
    initial: { y: 0, rotate: 0},
    animate: {
      y: 10,
     
      transition: {
        duration: 1,
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        },
      },
    },
  };
  return (
    <div className="bg-[#0B1224] bg-[url('https://learnwithsumit.com/_next/static/media/pattern-dark.20747baf.svg')]  min-h-[100vh] h-screen" id="homeSection">
      <Navbar />

      <Container>


        <motion.div variants={intro} initial="hidden" animate="visible" className="flex flex-col justify-center items-center max-w-[1100px] mx-auto min-h-[100vh]">

          

      <motion.div variants={laptop}
          initial="initial"
          animate="animate" className="mt-36 lg:mt-0 2xl:mt-0   2xl:size-64 lg:size-44 md:size-72 size-44 rounded-full p-1 ring-animation">
      <div className="w-full h-full rounded-full ring-border"></div>
      <Image
        className="w-full h-full rounded-full "
        src={anik}
        alt="anik image"
        placeholder="blur"
      />
      </motion.div>



          <motion.h1 variants={introChildren} className="md:text-[60px] lg:text-[60px] 2xl:text-[80px] text-[26px] text-white font-Exo mt-8 2xl:mt-14 font-bold tracking-[0.9px] leading-10">
            Hi, I am <span className="text-[#72E2AE]">Hasibul Hasan</span>
          </motion.h1>

          <motion.p variants={introChildren} className="text-textDark lg:mt-10 md:mt-10 mt-6 2xl:mt-14 lg:text-[20px] md:text-[20px] text-[16px] text-center font-Montserrat font-medium leading-6">
            I am a full stack web developer. I can provide clean code and pixel
            perfect design. I also make website more & more interactive with web
            animations.
          </motion.p>

          <motion.div variants={introChildren} className="mt-10 2xl:mt-14">
            <Icons />
          </motion.div>


          
          <motion.div variants={introChildren}>
          <ScrollDown/>
          </motion.div>
        

        </motion.div>
      </Container>
    </div>
  );
};

export default Banner;
