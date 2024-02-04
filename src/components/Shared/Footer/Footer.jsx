import Icons from '@/components/Ui/Icons'
import React from 'react'
import Container from '../Container/Container'

const Footer = () => {
  return (
    <div className='bg-[#0F172A] py-10 border-t-[0.5px] border-[#2C304A]'>
      <Container>
         <div className='md:flex justify-between items-center'>
         <div>
         <Icons/>
       </div>
        <div>
          <p className='text-textDark md:text-[20px] text-[16px] mt-6 md:mt-0 font-Montserrat font-medium leading-6'>© 2024, All right reserved by Hasibul Hasan</p>
        </div>
         </div>
      </Container>
    </div>
  )
}

export default Footer