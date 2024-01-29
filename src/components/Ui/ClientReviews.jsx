import React from 'react'
import Container from '../Shared/Container/Container'
import ReviewSlider from '../ReviewSlider/ReviewSlider'
// import effect from '@/assets/effect-3.svg'
import Image from 'next/image'
const ClientReviews = () => {
  return (
    <div className='bg-[#23263D] py-24 shadow-md'>
        <Container>
         {/* <Image className='size-16' src={effect} alt=''/> */}
        <p className="text-[18px] text-[#F2B95F] uppercase font-Montserrat font-normal leading-8">
        TESTIMONIALS
          </p>
          <h1 className="text-[46px] text-white mt-3 font-Exo font-bold leading-[56px] tracking-[0.5px]">
          Happy Clients Says
          </h1>

            <div className='mt-8'>
                <ReviewSlider/>
            </div>
        </Container>
    </div>
  )
}

export default ClientReviews