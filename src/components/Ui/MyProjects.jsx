import React from 'react'
import Container from '../Shared/Container/Container'
import MyProjectsCard from './MyProjectsCard'
import FadeIn from '../Animation/FadeIn'

const MyProjects = () => {
  return (
    <div className='bg-[#0F172A] py-24' id='projectsSection'>
        <Container>
            <div>
            <FadeIn>
            <p className="text-[16px] text-textDark font-Montserrat font-medium leading-8">
           PROJECTS
           </p>
          <h1 className="md:text-[46px] text-[24px] text-white mt-3 font-Exo font-bold md:leading-[56px] leading-10 tracking-[0.5px]">
           Recent Projects
          </h1>
          </FadeIn>
            </div>

              <div className='mt-10'>
                <MyProjectsCard/>
              </div>



        </Container>
    </div>
  )
}

export default MyProjects