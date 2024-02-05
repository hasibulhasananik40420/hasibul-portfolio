import Image from 'next/image'
import project1 from '@/assets/project1.jpg'
import project2 from '@/assets/project2.jpg'
import project3 from '@/assets/project3.jpg'
import project4 from '@/assets/project4.jpg'
import project5 from '@/assets/project5.jpg'
import project6 from '@/assets/project6.jpg'

import { CiImageOn } from "react-icons/ci";
import { BsBoxArrowInUpRight } from 'react-icons/bs';

const MyProjectsCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        
      

     <div className='card-container'>
      <div className='bg-[#162033] bg-anik lg:w-[400px] w-full h-[400px] border-[0.5px] border-[#2C304A] rounded-sm relative'>
        <div className='lg:w-[400px] w-full h-[300px] p-4'>
        <Image className='w-full h-full' src={project1} alt='project image' placeholder='blur'/>
        </div>

        <div className='hover-content'>
          <div className='lg:w-[369px] w-full lg:h-[269px] h-[284px] card-bgg lg:m-4 m-0 absolute top-0 flex justify-center items-center gap-3'>
            <span className='bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer'><CiImageOn className='size-5'/></span>
            
             <span className='bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer'><BsBoxArrowInUpRight className='size-5'/></span>
          </div>
        </div>

        <div className='px-4'>
          <h1 className='md:text-[30px] text-[24px] text-white mt-3 font-Exo font-semibold tracking-[0.5px]'>Candle</h1>
          <p className='md:text-[18px] text-[16px] text-textDark font-Montserrat font-medium'>Creative Candle Light</p>
        </div>
      </div>
    </div>


    <div className='card-container'>
      <div className='bg-[#162033] bg-anik lg:w-[400px] w-full h-[400px] border-[0.5px] border-[#2C304A] rounded-sm relative'>
        <div className='lg:w-[400px] w-full h-[300px] p-4'>
        <Image className='w-full h-full' src={project2} alt='project image' placeholder='blur'/>
        </div>

        <div className='hover-content'>
          <div className='lg:w-[369px] w-full lg:h-[269px] h-[284px] card-bgg lg:m-4 m-0 absolute top-0 flex justify-center items-center gap-3'>
            <span className='bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer'><CiImageOn className='size-5'/></span>
            
             <span className='bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer'><BsBoxArrowInUpRight className='size-5'/></span>
          </div>
        </div>

        <div className='px-4'>
          <h1 className='md:text-[30px] text-[24px] text-white mt-3 font-Exo font-semibold tracking-[0.5px]'>Candle</h1>
          <p className='md:text-[18px] text-[16px] text-textDark font-Montserrat font-medium'>Creative Candle Light</p>
        </div>
      </div>
    </div>


 <div className='card-container'>
      <div className='bg-[#162033] bg-anik lg:w-[400px] w-full h-[400px] border-[0.5px] border-[#2C304A] rounded-sm relative'>
        <div className='lg:w-[400px] w-full h-[300px] p-4'>
        <Image className='w-full h-full' src={project3} alt='project image' placeholder='blur'/>
        </div>

        <div className='hover-content'>
          <div className='lg:w-[369px] w-full lg:h-[269px] h-[284px] card-bgg lg:m-4 m-0 absolute top-0 flex justify-center items-center gap-3'>
            <span className='bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer'><CiImageOn className='size-5'/></span>
            
             <span className='bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer'><BsBoxArrowInUpRight className='size-5'/></span>
          </div>
        </div>

        <div className='px-4'>
          <h1 className='md:text-[30px] text-[24px] text-white mt-3 font-Exo font-semibold tracking-[0.5px]'>Candle</h1>
          <p className='md:text-[18px] text-[16px] text-textDark font-Montserrat font-medium'>Creative Candle Light</p>
        </div>
      </div>
    </div>


 <div className='card-container'>
      <div className='bg-[#162033] bg-anik lg:w-[400px] w-full h-[400px] border-[0.5px] border-[#2C304A] rounded-sm relative'>
        <div className='lg:w-[400px] w-full h-[300px] p-4'>
        <Image className='w-full h-full' src={project4} alt='project image' placeholder='blur'/>
        </div>

        <div className='hover-content'>
          <div className='lg:w-[369px] w-full lg:h-[269px] h-[284px] card-bgg lg:m-4 m-0 absolute top-0 flex justify-center items-center gap-3'>
            <span className='bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer'><CiImageOn className='size-5'/></span>
            
             <span className='bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer'><BsBoxArrowInUpRight className='size-5'/></span>
          </div>
        </div>

        <div className='px-4'>
          <h1 className='md:text-[30px] text-[24px] text-white mt-3 font-Exo font-semibold tracking-[0.5px]'>Candle</h1>
          <p className='md:text-[18px] text-[16px] text-textDark font-Montserrat font-medium'>Creative Candle Light</p>
        </div>
      </div>
    </div>


<div className='card-container'>
      <div className='bg-[#162033] bg-anik lg:w-[400px] w-full h-[400px] border-[0.5px] border-[#2C304A] rounded-sm relative'>
        <div className='lg:w-[400px] w-full h-[300px] p-4'>
        <Image className='w-full h-full' src={project5} alt='project image' placeholder='blur'/>
        </div>

        <div className='hover-content'>
          <div className='lg:w-[369px] w-full lg:h-[269px] h-[284px] card-bgg lg:m-4 m-0 absolute top-0 flex justify-center items-center gap-3'>
            <span className='bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer'><CiImageOn className='size-5'/></span>
            
             <span className='bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer'><BsBoxArrowInUpRight className='size-5'/></span>
          </div>
        </div>

        <div className='px-4'>
          <h1 className='md:text-[30px] text-[24px] text-white mt-3 font-Exo font-semibold tracking-[0.5px]'>Candle</h1>
          <p className='md:text-[18px] text-[16px] text-textDark font-Montserrat font-medium'>Creative Candle Light</p>
        </div>
      </div>
    </div>


        <div className='card-container'>
      <div className='bg-[#162033] bg-anik lg:w-[400px] w-full h-[400px] border-[0.5px] border-[#2C304A] rounded-sm relative'>
        <div className='lg:w-[400px] w-full h-[300px] p-4'>
        <Image className='w-full h-full' src={project6} alt='project image' placeholder='blur'/>
        </div>

        <div className='hover-content'>
          <div className='lg:w-[369px] w-full lg:h-[269px] h-[284px] card-bgg lg:m-4 m-0 absolute top-0 flex justify-center items-center gap-3'>
            <span className='bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer'><CiImageOn className='size-5'/></span>
            
             <span className='bg-[#72E2AE] size-10 flex justify-center items-center rounded-full cursor-pointer'><BsBoxArrowInUpRight className='size-5'/></span>
          </div>
        </div>

        <div className='px-4'>
          <h1 className='md:text-[30px] text-[24px] text-white mt-3 font-Exo font-semibold tracking-[0.5px]'>Candle</h1>
          <p className='md:text-[18px] text-[16px] text-textDark font-Montserrat font-medium'>Creative Candle Light</p>
        </div>
      </div>
    </div>







    </div>
  )
}

export default MyProjectsCard