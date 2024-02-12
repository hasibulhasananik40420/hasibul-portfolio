import Container from '../Shared/Container/Container'
import ReviewSlider from '../ReviewSlider/ReviewSlider'
// import effect from '@/assets/effect-3.svg'
import Image from 'next/image'
const ClientReviews = () => {
  return (
    <div className='bg-[#0F172A] py-24 '>
        <Container>
         {/* <Image className='size-16' src={effect} alt=''/> */}
        <p className="ttext-[16px] text-textDark font-Montserrat font-medium leading-8">
        TESTIMONIALS
          </p>
          <h1 className="md:text-[46px] text-[24px] text-white mt-3 font-Exo font-bold md:leading-[56px] leading-10 tracking-[0.5px]">
          Happy Clients Says
          </h1>

            <div className='mt-10'>
                <ReviewSlider/>
            </div>
        </Container>
    </div>
  )
}

export default ClientReviews