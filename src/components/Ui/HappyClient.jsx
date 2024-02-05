"use client"

import { useState } from 'react';
import Container from '../Shared/Container/Container'
import WorldWide from '../Work/WorldWide'
import { BsArrowRight } from "react-icons/bs";
import England from '../Work/England';
import Canada from '../Work/Canada';
import Australia from '../Work/Australia';

const HappyClient = () => {

    const [worldWide, setWorldWide] = useState(true)
    const [england, setEngland] = useState(false)
    const [canada, setCanada] = useState(false)
    const [australia, setAustralia] = useState(false)
    const [active , setActive] = useState(false)


    const handleWorldWide = ()=>{
        setWorldWide(true)
        setEngland(false)
        setCanada(false)
        setAustralia(false)
         setActive(!active)
     }

    const handleEngland = ()=>{
        setWorldWide(false)
        setEngland(true)
        setCanada(false)
        setAustralia(false)
        setActive(!active)
     }

   const handleCanada = ()=>{
        setWorldWide(false)
        setEngland(false)
        setCanada(true)
        setAustralia(false)
        setActive(!active)
     }

  const handleAustralia = ()=>{
        setWorldWide(false)
        setEngland(false)
        setCanada(false)
        setAustralia(true)
        setActive(!active)
     }


  return (
    <div className='bg-[#0F172A] py-24'>
        <Container>
       
           <div className='lg:flex  gap-20'>
               <div className='lg:w-[280px] w-full'>
               <p className="text-[16px] text-textDark font-Montserrat font-medium leading-8 uppercase">
            my honorable
          </p>
          <h1 className="md:text-[46px] text-[24px] text-white mt-3 font-Exo font-bold md:leading-[56px] leading-10 tracking-[0.5px]">
            Clients
          </h1>

              <div className='flex flex-col mt-10'>
                 <div onClick={handleWorldWide} className={`${worldWide ? 'border-l-textGreen text-textGreen bg-[#172a4b]' :'border-l-hoverColor text-textDark'} flex gap-3 items-center border-l-2 bg-transparent hover:bg-[#112240] py-2 cursor-pointer duration-300 px-6 group`}>
                    <span className="text-[20px] mt-2 font-Exo font-medium leading-[50px] tracking-[0.9px]">WORLDWIDE</span>
                    <BsArrowRight className='size-6 mt-2 group-hover:translate-x-2 duration-300'/>
                 </div>
                 
                  <div onClick={handleEngland} className={`${england ? 'border-l-textGreen text-textGreen bg-[#172a4b]' :'border-l-hoverColor text-textDark'} flex gap-3 items-center border-l-2 bg-transparent hover:bg-[#112240] py-2 cursor-pointer duration-300 px-6 group`}>
                    <span className="text-[20px] mt-2 font-Exo font-medium leading-[50px] tracking-[0.9px]">England</span>
                    <BsArrowRight className='size-6 mt-2 group-hover:translate-x-2 duration-300'/>
                 </div>

              <div onClick={handleCanada} className={`${canada ? 'border-l-textGreen text-textGreen bg-[#172a4b]' :'border-l-hoverColor text-textDark'} flex gap-3 items-center border-l-2 bg-transparent hover:bg-[#112240] py-2 cursor-pointer duration-300 px-6 group`}>
                    <span className="text-[20px] mt-2 font-Exo font-medium leading-[50px] tracking-[0.9px]">Canada</span>
                    <BsArrowRight className='size-6 mt-2 group-hover:translate-x-2 duration-300'/>
                 </div>

                <div onClick={handleAustralia} className={`${australia ? 'border-l-textGreen text-textGreen bg-[#172a4b]' :'border-l-hoverColor text-textDark'} flex gap-3 items-center border-l-2 bg-transparent hover:bg-[#112240] py-2 cursor-pointer duration-300 px-6 group`}>
                    <span className="text-[20px] mt-2 font-Exo font-medium leading-[50px] tracking-[0.9px]">Australia</span>
                    <BsArrowRight className='size-6 mt-2 group-hover:translate-x-2 duration-300'/>
                 </div>



              </div>
            
               </div>


                <div className='lg:w-[900px] w-full mt-10 md:mt-10 lg:mt-0'>
                  {worldWide &&   <WorldWide/>}
                   {england &&  <England/>}
                   {canada &&  <Canada/>}
                   {australia &&  <Australia/>}
                </div>
           </div>
        </Container>
    </div>
  )
}

export default HappyClient