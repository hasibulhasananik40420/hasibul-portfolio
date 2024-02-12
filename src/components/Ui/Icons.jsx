import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram, FaTwitter,  FaWhatsapp } from 'react-icons/fa';

const Icons = () => {
  return (

    <div className='flex gap-3 items-center'>
    <a href="https://www.facebook.com/profile.php?id=100048178763954&mibextid=2JQ9oc" target='_blank' className='socialContainer containerOne'>
    <FaFacebookF className='socialSvg size-5' />
    </a>
    
    <a href="#" className='socialContainer containerOne'>
      <FaInstagram className='socialSvg size-5' />
    </a>

    <a href="#" className='socialContainer containerTwo'>
      <FaTwitter className='socialSvg size-4' />
    </a>

    <a href="https://www.linkedin.com/in/hasibul-hasan-06a987229/" target='_blank' className='socialContainer containerThree'>
      <FaLinkedinIn  className='socialSvg size-5' />
    </a>

    <a href="https://wa.me/qr/SYZJMRDCTMOBP1" target='_blank' className='socialContainer containerFour'>
      <FaWhatsapp className='socialSvg size-5' />
    </a>
  </div>








  )



}

export default Icons