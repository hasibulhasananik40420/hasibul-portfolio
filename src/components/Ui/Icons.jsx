import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram, FaTwitter,  FaWhatsapp } from 'react-icons/fa';

const Icons = () => {
  return (

    <div className='flex gap-3 items-center'>
    <a href="#" className='socialContainer containerOne'>
    <FaFacebookF className='socialSvg size-5' />
    </a>
    
    <a href="#" className='socialContainer containerOne'>
      <FaInstagram className='socialSvg size-5' />
    </a>

    <a href="#" className='socialContainer containerTwo'>
      <FaTwitter className='socialSvg size-4' />
    </a>

    <a href="#" className='socialContainer containerThree'>
      <FaLinkedinIn  className='socialSvg size-5' />
    </a>

    <a href="#" className='socialContainer containerFour'>
      <FaWhatsapp className='socialSvg size-5' />
    </a>
  </div>








  )



}

export default Icons