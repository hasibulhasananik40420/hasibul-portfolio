import React from 'react'
import Container from '../Shared/Container/Container'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div className='bg-[#0F172A] pt-24' id='servicesSection'>
        <Container>
            <div>
            <p className="text-[16px] text-textDark font-Montserrat font-medium leading-8">
              SERVICES
          </p>
          <h1 className="md:text-[46px] text-[30px] text-white mt-3 font-Exo font-bold md:leading-[56px] leading-10 tracking-[0.5px]">
          What I Do for My Clients
          </h1>

             
            
             <div className='mt-20 relative z-10'>
                
                <ServicesCard/>
                <div className='bg-color absolute top-[50px] -z-10 left-[330px] rounded-[50%] w-[600px] h-[500px] flex justify-center items-center mx-auto'></div>
             </div>

            
            </div>



        </Container>
    </div>
  )
}

export default Services