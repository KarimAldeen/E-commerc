import React from 'react'
import Arabic from '../../Images/Logo_Arabic.svg'
import Width from '../../Images/Width.svg'
import { NavLink } from 'react-router-dom'
const MidBar = () => {
    return (
        <div className='MidBar'>
            <div className='MidBar__Left'>
                <img className='Logo_Arabic' alt='' src={Width} width={200} />
            </div>
            <div className='MidBar__Center'>
                <NavLink to="/"> Home   </NavLink>
                <NavLink to="/SHOP">  SHOP</NavLink>
                <NavLink to="/PAGES">   PAGES  </NavLink>
                <NavLink to="/BLOG">   BLOG  </NavLink>
                <NavLink to="/Contact">  Contact  </NavLink>


            </div>

            <div className='MidBar__Right'>
                <a href="" className='Like'>
                    <i className="fa fa-heart fa-lg "></i>
                    <span className="badge rounded-pill badge-notification ">1</span>
                </a>
                <a href="" className='Cart'>
                    <i className="fa fa-shopping-bag fa-lg "></i>
                    <span className="badge rounded-pill badge-notification ">4</span>
                </a>

                <p> item:<strong> $150.00</strong></p>


            </div>

        </div>
    )
}

export default MidBar