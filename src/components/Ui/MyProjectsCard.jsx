import Image from 'next/image'
import project1 from '@/assets/project1.jpg'
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { CiImageOn } from "react-icons/ci";
import { BsBoxArrowInUpRight } from 'react-icons/bs';

const MyProjectsCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        
      
       {/* <div className='bg-[#162033] w-[400px] h-[400px] border-[0.5px] border-[#2C304A] rounded-sm relative'>
           <div className='w-[400px] h-[300px] p-4'>
               <Image className='w-full h-full' src={project1} alt='project image' placeholder='blur'/>
           </div>

            <div className='w-[369px] h-[269px] bg-red-400 m-4 border absolute top-0  '>
               <span>anik</span>
               <span>anik</span>
            </div>
            

            <div className='px-4'>
                <h1 className='text-[30px] text-white mt-3 font-Exo font-semibold tracking-[0.5px]'>Candle</h1>
                  <p className='text-[18px] text-textDark font-Montserrat font-medium'>Creative Candle Light</p>
            </div>
        </div> */}



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
          <h1 className='text-[30px] text-white mt-3 font-Exo font-semibold tracking-[0.5px]'>Candle</h1>
          <p className='text-[18px] text-textDark font-Montserrat font-medium'>Creative Candle Light</p>
        </div>
      </div>
    </div>







    </div>
  )
}

export default MyProjectsCard