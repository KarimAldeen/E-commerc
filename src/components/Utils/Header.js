import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { FaEnvelope,FaGoogle, FaInstagram, FaFacebookSquare,FaTwitter,FaChevronDown,FaUserAlt } from "react-icons/fa";
import English from '../../Images/English.svg'
const Header = () => {
const [t] = useTranslation();
  return (
    <div className='Header d-flex'>
      <div className='Header__Left'>
        <div><FaEnvelope/> hello@colorlib.com</div>||
        <div> Free Shipping for all Order of $99 </div>
      </div>
      
      <div className='Header__Right'>
        <div className='Header__Right_1'>
        <Link to="/">  <FaGoogle /></Link>
        <Link to="/"> <FaInstagram/></Link>
        <Link to="/"> <FaFacebookSquare/></Link>
        <Link to="/"> <FaTwitter/></Link>
        </div>|
        <div className='Header__Right_2'>
        <img className='Flag' alt='' src={English} width={20} height={20}/>
        English
        <FaChevronDown/>
        </div>
        <div className='Header__Right_3'>
      <FaUserAlt/>
      Login
        </div>

    
      </div>

    </div>
  )
}

export default Header