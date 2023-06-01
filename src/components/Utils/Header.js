import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaGoogle, FaInstagram, FaFacebookSquare, FaTwitter, FaUser, FaBars } from "react-icons/fa";
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
import { Tooltip } from 'react-tooltip';

const Header = () => {
  const [t] = useTranslation();
  const { isAuthenticated } = useAuth();
  
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
                    {
                      
                      <div className='MidBar__Right'>
                <NavLink to="/allorder" className='Like Tool'>
                    <i className="fas fa-luggage-cart fa-lg " data-tooltip-id="AllOrder" data-tooltip-content={t("All Order")}></i>
                    <Tooltip id="AllOrder" className='ToolTip' />


                    {/* <span className="badge rounded-pill badge-notification ">{data?.order_count}</span> */}
                </NavLink>
                <NavLink to="/cart" className='Cart Tool'>
                    <i className="fa fa-shopping-bag fa-lg "  data-tooltip-id="Cart" data-tooltip-content={t("Cart")}></i>
                    <Tooltip id="Cart" className='ToolTip' />

                    {/* <span className="badge rounded-pill badge-notification ">{data?.cart_items_count}</span> */}
                </NavLink>

                


            </div> 
            }

            </div>
            <div className='Top'>
              <NavLink to="/"> {t("Home")} </NavLink>
              <NavLink to="/product"> {t("Product")}</NavLink>
              <NavLink to="/contactus">{t("Contact")}</NavLink>
       
              <NavLink to="/cart">{t("Cart")}</NavLink>
              <NavLink to="/allorder">{t("Orders")}</NavLink>

            </div>
            <div className='Down'>
            <div className="btn-group open">
                 
                  
                    
                
              </div>

            </div>

          </div>


          : ""}
      </div>
      <div className='Header__Left'>


        <div className='Sha5da'><FaEnvelope /> {Email}</div>
        <div> {t(`${HeaderText}`)} </div>
      </div>

      <div className='Header__Right'>
        {/* <div className='Header__Right_1'>
          <Link to="/">  <FaGoogle /></Link>
          <Link to="/"> <FaInstagram /></Link>
          <Link to="/"> <FaFacebookSquare /></Link>
          <Link to="/"> <FaTwitter /></Link>
        </div> */}
        <div className='Header__Right_2'>
          {/* <LanguageDropdown /> */}
          {/* <BtnTranslate/> */}
          <DropDown/>
        </div>
        <div className='Header__Right_3' >
          {
          isAuthenticated? (
                <div onClick={()=>{
                  dispatch(logout())
                  setRefreash(v => !v)
                }}>
                    <FaUser size={13}/>
                {t("Logout")}
                </div>
            ) : (
              <NavLink to={'/login'}>
               <FaUser size={13}/>
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