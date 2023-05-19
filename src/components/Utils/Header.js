import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaGoogle, FaInstagram, FaFacebookSquare, FaTwitter, FaChevronDown, FaUserAlt, FaBars } from "react-icons/fa";
import English from '../../Images/English.svg'
import Word from '../../Images/Word.svg'

const Header = () => {
  const [t] = useTranslation();
  const [Open, setOpen] = useState(false)
  const departments = [ "FreshMeat","Vegetables","Fruit","Fresh","Ocean","Butter","Fastfood","Fresh","Papayaya","Oatmeal","Bananas"]

  return (
    <div className='Header d-flex'>
      {Open ? <div className='BlackScreen'></div> : ''}
      <div className={Open ? `Bars SideBar` : 'Bars '}>

        <div className='BarsLogo'  onClick={() => setOpen(v => !v)}> <FaBars /></div>
        {Open? <img alt='' src={Word} className='Word'/>:""}

        {Open ?
          <div className='in_SideBar'>
            <div className='Mid'>
              <a href="" className='Like'>
                    <i className="fa fa-heart fa-lg "></i>
                    <span className="badge rounded-pill badge-notification ">1</span>
                </a>
                <a href="" className='Cart'>
                    <i className="fa fa-shopping-bag fa-lg "></i>
                    <span className="badge rounded-pill badge-notification ">4</span>
                </a>

                <strong> $150.00</strong>


              </div>
            <div className='Top'> 
              <NavLink to="/"> Home   </NavLink>
            <NavLink to="/SHOP">  SHOP</NavLink>
            <NavLink to="/PAGES">   PAGES  </NavLink>
            <NavLink to="/BLOG">   BLOG  </NavLink>
            <NavLink to="/Contact">  Contact  </NavLink>
            </div>
           <div className="btn-group open">
                <button className="btn Drop_Btn btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true" >
                    <i className="fa fa-bars"></i>
                    <h3> All Departments</h3>
                </button>
                <ul className="dropdown-menu">
                    {departments?.map((i,index)=>(
                    <li key={index}><a href="#"  >{i}</a></li>
                    )
                    )}
                  
                    
                </ul>
            </div>
              
          </div>


          : ""}
      </div>
      <div className='Header__Left'>


        <div><FaEnvelope /> hello@colorlib.com</div>||
        <div> Free Shipping for all Order of $99 </div>
      </div>

      <div className='Header__Right'>
        <div className='Header__Right_1'>
          <Link to="/">  <FaGoogle /></Link>
          <Link to="/"> <FaInstagram /></Link>
          <Link to="/"> <FaFacebookSquare /></Link>
          <Link to="/"> <FaTwitter /></Link>
        </div>|
        <div className='Header__Right_2'>
          <img className='Flag' alt='' src={English} width={20} height={20} />
          English
          <FaChevronDown />
        </div>
        <div className='Header__Right_3'>
          <FaUserAlt />
          Login
        </div>


      </div>

    </div>
  )
}

export default Header