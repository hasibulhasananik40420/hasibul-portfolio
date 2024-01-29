import React from 'react'
import Container from '../Container/Container'
import Logo from '@/components/Ui/Logo'

const Navbar = () => {
  return (
    <div className='h-[12vh] bg-[#2C304A] shadow-sm'>

         <Container>
           <div className='flex justify-between items-center h-[12vh]'>
              <div>
                <Logo/>
              </div>

               <div>
                 <ul className='flex justify-center items-center'>
                


                 <button className="text-[18px] text-white font-Exo font-normal cursor-pointer leading-7 tracking-[0.9px] relative w-28 h-12 rounded-sm duration-500 overflow-hidden z-50 group">Home<span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">Home</span><span className="bg-[#F2B95F] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span><span className="bg-[#F2B95F] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span><span className="bg-[#F2B95F] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span><span className="bg-[#F2B95F] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span></button>

                 <button className="text-[18px] text-white font-Exo font-normal cursor-pointer leading-7 tracking-[0.9px] relative w-28 h-12 rounded-sm duration-500 overflow-hidden z-50 group">About<span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">About</span><span className="bg-[#F2B95F] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span><span className="bg-[#F2B95F] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span><span className="bg-[#F2B95F] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span><span className="bg-[#F2B95F] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span></button>

    <button className="text-[18px] text-white font-Exo font-normal cursor-pointer leading-7 tracking-[0.9px] relative w-28 h-12 rounded-sm duration-500 overflow-hidden z-50 group">Projects<span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">Projects</span><span className="bg-[#F2B95F] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span><span className="bg-[#F2B95F] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span><span className="bg-[#F2B95F] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span><span className="bg-[#F2B95F] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span></button>

    <button className="text-[18px] text-white font-Exo font-normal cursor-pointer leading-7 tracking-[0.9px] relative w-28 h-12 rounded-sm duration-500 overflow-hidden z-50 group">Services<span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">Services</span><span className="bg-[#F2B95F] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span><span className="bg-[#F2B95F] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span><span className="bg-[#F2B95F] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span><span className="bg-[#F2B95F] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span></button>

 <button className="text-[18px] text-white font-Exo font-normal cursor-pointer leading-7 tracking-[0.9px] relative w-28 h-12 rounded-sm duration-500 overflow-hidden z-50 group">Contact<span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">Contact</span><span className="bg-[#F2B95F] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span><span className="bg-[#F2B95F] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span><span className="bg-[#F2B95F] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span><span className="bg-[#F2B95F] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span></button>


                 </ul>
               </div>
           </div>
         </Container>

    </div>
  )
}

export default Navbar