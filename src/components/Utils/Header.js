import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaGoogle, FaInstagram, FaFacebookSquare, FaTwitter, FaUserAlt, FaBars } from "react-icons/fa";
import English from '../../Images/English.svg'
import Word from '../../Images/Word.svg'
import LanguageDropdown from './LangDropDown';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/AuthReducer';
import BtnTranslate from './translate/BtnTranslate';
import { Email, HeaderText } from '../../config/LOCALSTORAGEKEY';
import DropDown from './DropDown/DropDown';
import ReactCountryFlag from "react-country-flag";

const Header = () => {
  const [t] = useTranslation();
  const { user } = useAuth();
  
  const [refreash , setRefreash] = useState(false)
  const dispatch = useDispatch()
  
  const [Open, setOpen] = useState(false)

  return (
    <div className='Header d-flex'>
      {Open ? <div className='BlackScreen'></div> : ''}
      <div className={Open ? `Bars SideBar` : 'Bars '}>

        <div className='BarsLogo' onClick={() => setOpen(v => !v)}> <FaBars /></div>
        {Open ? <img alt='' src={Word} className='Word' /> : ""}

        {Open ?
          <div className='in_SideBar'>
            <div className='Mid'>
              <a href="" className='Like'>
                <i className="fa fa-heart fa-lg"></i>
                <span className="badge rounded-pill badge-notification ">1</span>
              </a>
              <a href="" className='Cart'>
                <i className="fa fa-shopping-bag fa-lg "></i>
                <span className="badge rounded-pill badge-notification ">4</span>
              </a>

              <strong> $150.00</strong>


            </div>
            <div className='Top'>
              <NavLink to="/"> {t("Home")} </NavLink>
              <NavLink to="/product"> {t("Product")}</NavLink>
              <NavLink to="/contactus">{t("Contact Us")}</NavLink>
       
              <NavLink to="/cart">{t("Cart")}</NavLink>
            </div>
            <div className='Down'>
            <div className="btn-group open">
                <button className="btn Drop_Btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true" >
                    <i className="fa fa-bars"></i>
                    <h3> {t("All Departments")}</h3>
                </button>
                <ul className="dropdown-menu">
                    {["Home","Product","Contact","Cart",]?.map((i,index)=>(
                    <li key={index}><a href="#"  >{i}</a></li>
                    )
                    )}
                  
                    
                </ul>
              </div>

            </div>

          </div>


          : ""}
      </div>
      <div className='Header__Left'>


        <div><FaEnvelope /> {Email}</div>||
        <div> {t(`${HeaderText}`)} </div>
      </div>

      <div className='Header__Right'>
        <div className='Header__Right_1'>
          <Link to="/">  <FaGoogle /></Link>
          <Link to="/"> <FaInstagram /></Link>
          <Link to="/"> <FaFacebookSquare /></Link>
          <Link to="/"> <FaTwitter /></Link>
        </div>
        <div className='Header__Right_2'>
          {/* <LanguageDropdown /> */}
          {/* <BtnTranslate/> */}
          <DropDown/>
        </div>
        <div className='Header__Right_3' >
          {
           user?.phone? (
                <div onClick={()=>{
                  dispatch(logout())
                  setRefreash(v => !v)
                }}>
                    <FaUserAlt size={15}/>
                {t("Logout")}
                </div>
            ) : (
              <NavLink to={'/login'}>
               <FaUserAlt size={15}/>
                {t("Login")}
              </NavLink>
             
            )
          }
          
        </div>


      </div>

    </div>
  )
}

export default Header