// "use client"

// import { useScroll, useTransform } from "framer-motion"
// import { useRef } from "react"

// const useScrollGrowHook = () => {

//   const componentsRef = useRef(null)
//   const {scrollYProgress} = useScroll({
//     target:componentsRef,
//     offset:['0 1' , '2 1']
//   })

//   const scaleValues = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
// //   const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

//   const style = {
//     scale: scaleValues,
//     // opacity: opacityValues,
//   };


//   return { componentsRef, style };
// }

// export default useScrollGrowHook



'use client'



import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrollGrowHook = () => {
  const componentsRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: componentsRef,
    offset: [0, 1],
  });

  const leftPartY = useTransform(scrollYProgress, [0, 0.5], [0, -500]);
  const rightPartY = useTransform(scrollYProgress, [0.5, 1], [1000, 0]);
  const scaleValues = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const styleLeftPart = {
    x: leftPartY,
    scale: scaleValues,
  };

  const styleRightPart = {
    x: rightPartY,
    scale: scaleValues,
  };

  return { componentsRef, styleLeftPart, styleRightPart };
};

export default useScrollGrowHook;
