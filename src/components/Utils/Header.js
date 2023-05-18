import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { FaGoogle, FaInstagram, FaFacebookSquare,FaTwitter } from "react-icons/fa";

const Header = () => {
const [t] = useTranslation();
  return (
    <div className='Header d-flex'>
      <div className='Header__Left'>
        <Link to="/">{t("FAQs")}</Link><>|</><Link to="/">{t("Help")}</Link><>|</><Link to="/">{t("Support")}</Link>
      </div>
      <div className='Header__Center'>
       
      </div>
     
      <div className='Header__Right'>
        <Link to="/">  <FaGoogle /></Link>
        <Link to="/"> <FaInstagram/></Link>
        <Link to="/"> <FaFacebookSquare/></Link>
        <Link to="/"> <FaTwitter/></Link>

      </div>

    </div>
  )
}

export default Header