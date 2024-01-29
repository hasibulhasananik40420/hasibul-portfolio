import { FaDribbble, FaSlack } from 'react-icons/fa6';
import Container from '../Shared/Container/Container'
import { FaFacebookF } from "react-icons/fa";
import anik from '@/assets/Anik webiste.png'
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className='bg-[#1F2235] py-24'>
        <Container>
           <div className='max-w-[1100px] mx-auto '>
             <div className='bg-[#05284A] h-[200px] rounded-t-md p-10 flex gap-20 border border-[#102131]'> 

               <div className='w-[300px] h-[320px] border rounded'>
                 <Image className='w-full h-full' src={anik} alt='anik' placeholder='blur'/>
                 </div>

              <div>
              <h1 className="text-[46px] text-white font-Exo font-bold leading-[56px] tracking-[0.5px]">Let’s Discuss Your Project</h1>
                <p className="text-[18px] text-[#F2B95F] pt-3 font-Montserrat font-normal leading-8">Always available for freelancing if the right project comes along, Feel free to contact me.</p>
              </div>

              
             </div>

               
               <div className='bg-[#05335C] rounded-b-md flex gap-32 p-10'>
                  <div className='mt-40'>
                     <p className='text-white text-[16px] font-Montserrat font-normal'>WRITE AN E-MAIL</p>

                     <h4 className="text-[24px] text-white mt-2 font-Exo font-semibold tracking-[0.5px]">hasibulhasan40420@gmail.com</h4> 
                     
                     
                     <p className='text-white text-[16px] mt-10 font-Montserrat font-normal'>WRITE A Number</p>

                     <h4 className="text-[24px] text-white mt-2 font-Exo font-semibold tracking-[0.5px]">+8801790170749</h4>


                      <div className='flex items-center gap-6 mt-16'>
                         <span className='size-10 flex justify-center items-center bg-[#1877F2] ring-4 ring-white rounded-full hover:translate-y-3 duration-300 cursor-pointer'>
                         <FaFacebookF className='size-5 text-white'/>
                         </span>
                         
                          <span className='size-10 flex justify-center items-center bg-[#1877F2] ring-4 ring-white rounded-full hover:translate-y-3 duration-300 cursor-pointer'>
                         <FaDribbble  className='size-5 text-white'/>
                         </span>
                         
                          <span className='size-10 flex justify-center items-center bg-[#1877F2] ring-4 ring-white rounded-full hover:translate-y-3 duration-300 cursor-pointer'>
                         <FaSlack  className='size-5 text-white'/>
                         </span>
                      </div>
                  </div>



                  <div className='w-[500px]'>
                  <div className="w-full transform border-b-[1px] border-b-white bg-transparent text-white font-Exo font-medium duration-300 focus-within:border-indigo-500">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border-none bg-transparent outline-none focus:outline-none pb-6"
              />
            </div>


                 <div className="w-full mt-10 transform border-b-[1px] border-b-white bg-transparent text-white font-Exo font-medium duration-300 focus-within:border-indigo-500">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border-none bg-transparent outline-none focus:outline-none pb-6"
              />
            </div> 
            
            <div className="w-full mt-10 transform border-b-[1px] border-b-white bg-transparent text-white font-Exo font-medium duration-300 focus-within:border-indigo-500">
              <input
                type="email"
                placeholder="Your Subject"
                className="w-full border-none bg-transparent outline-none focus:outline-none pb-6"
              />
            </div>

             <div className="w-full mt-10 transform border-b-[1px] border-b-white bg-transparent text-white font-Exo font-medium duration-300 focus-within:border-indigo-500">
              <input
                type="email"
                placeholder="Message"
                className="w-full border-none bg-transparent outline-none focus:outline-none pb-20"
              />
            </div>

            <button className="text-[18px] font-Exo font-normal tracking-[0.9px] rounded mt-8 w-[170px] h-[50px] bg-hoverColor text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-sky-600 w-[190px] h-[190px] rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-sky-800 w-[230px] h-[230px] -left-8 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Sent Message</button>








                  </div>






               </div>

           </div>
        </Container>
    </div>
  )
}

export default ContactUs