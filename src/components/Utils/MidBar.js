import React from 'react'
import Arabic from '../../Images/Logo_Arabic.svg'
import Width from '../../Images/Width.svg'
import { NavLink } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
const MidBar = () => {
    return (
        <div className='MidBar'>
            <div className='MidBar__Left'>
                <img className='Logo_Arabic' alt='' src={Width} width={200} />
            </div>
            <div className='MidBar__Center'>
                <NavLink to="/"> Home   </NavLink>
                <NavLink to="/product">products</NavLink>
              
                <NavLink to="/contactus">  Contact  </NavLink>
                <NavLink to="/login">signin-up</NavLink>
                <NavLink to="/order">Order</NavLink>


            </div>

            <div className='MidBar__Right'>
                <NavLink to="/allorder" className='Like Tool'>
                    <i className="fas fa-luggage-cart fa-lg " data-tooltip-id="AllOrder" data-tooltip-content="All Order"></i>
                    <Tooltip id="AllOrder" className='ToolTip' />


                    <span className="badge rounded-pill badge-notification ">1</span>
                </NavLink>
                <NavLink to="/cart" className='Cart Tool'>
                    <i className="fa fa-shopping-bag fa-lg "  data-tooltip-id="Cart" data-tooltip-content="Cart"></i>
                    <Tooltip id="Cart" className='ToolTip' />

                    <span className="badge rounded-pill badge-notification ">4</span>
                </NavLink>

                <p> item:<strong> $150.00</strong></p>


            </div>

        </div>
    )
}

export default MidBar