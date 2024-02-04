import Container from '../Shared/Container/Container'
import anik from '@/assets/Anik webiste.png'
import Image from 'next/image';


const ContactUs = () => {
  return (
    <div className='bg-[#0F172A] pb-24' id='contactSection'>
        <Container>
           <div className='max-w-[1100px] mx-auto '>
             <div className='bg-[#0F172A] lg:h-[200px] h-full rounded-t-md p-10 flex gap-20 border border-[#102131]'> 

               <div className='w-[300px] h-[320px] border rounded lg:block hidden'>
                 <Image className='w-full h-full ' src={anik} alt='anik' placeholder='blur'/>
                 </div>

              <div>
              <h1 className="md:text-[46px] text-[30px] text-white font-Exo font-bold md:leading-[56px] leading-10 tracking-[0.5px]">Let’s Discuss Your Project</h1>
                <p className="text-[16px] text-textDark font-Montserrat font-medium leading-8">Always available for freelancing if the right project comes along, Feel free to contact me.</p>
              </div>

              
             </div>

               
               <div className='bg-[#162033] rounded-b-md lg:flex gap-32 lg:p-10 p-8'>
                  <div className='lg:mt-40 mt-0'>
                     <p className='text-white md:text-[16px] text-[14px] font-Montserrat font-normal'>WRITE AN E-MAIL</p>

                     <h4 className="md:text-[24px] text-[18px] text-white mt-2 font-Exo font-semibold tracking-[0.5px]">hasibulhasan40420@gmail.com</h4> 
                     
                     
                     <p className='text-white md:text-[16px] text-[14px] mt-10 font-Montserrat font-normal'>WRITE A NUMBER</p>

                     <h4 className="md:text-[24px] text-[18px] text-white mt-2 font-Exo font-semibold tracking-[0.5px]">+8801790170749</h4>


                     
                  </div>



                  <div className='lg:w-[500px] w-full mt-10 md:mt-10 lg:mt-10'>
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