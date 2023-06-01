import React from 'react'
import Width from '../../Images/Width.svg'
import { NavLink } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import { useGetCartCount } from '../../api/home'
import { useAuth } from '../../hooks/useAuth'
import { useTranslation } from 'react-i18next'
const MidBar = () => {
    const [t] = useTranslation();
    const {isAuthenticated} = useAuth()
    const {data } = useGetCartCount({} , {
        enabled: isAuthenticated ? true  :false,
        retry:false
      })

    return (
        <div className='MidBar'>
            <div className='MidBar__Left'>
                <img className='Logo_Arabic' alt='' src={Width} width={200} />
            </div>
            <div className='MidBar__Center'>
                <NavLink to="/"> {t("Home")}   </NavLink>
                <NavLink to="/product">{t("Product")}</NavLink>
              
                <NavLink to="/contactus">{t("Contact")}</NavLink>
              
                <NavLink to="/allorder">{t("Orders")}</NavLink>


            </div>
            {
               
                      <div className='MidBar__Right'>

                <NavLink to="/allorder" className='Like Tool'>
                    <i className="fas fa-luggage-cart fa-lg  small-size"   data-tooltip-id="AllOrder" data-tooltip-content={t("All Order")}></i>
                    <Tooltip id="AllOrder" className='ToolTip' />


                    <span className="badge rounded-pill badge-notification ">{data?.order_count}</span>
                </NavLink>
                <NavLink to="/cart" className='Cart Tool'>
                    <i className="fa fa-shopping-bag fa-lg small-size "  data-tooltip-id="Cart" data-tooltip-content={t("Cart")}></i>
                    <Tooltip id="Cart" className='ToolTip' />

                    <span className="badge rounded-pill badge-notification ">{data?.cart_items_count}</span>
                    
                </NavLink>
                <p className='item-count'> item: <b>$150.00</b></p>
                


            </div> 
            }
          

        </div>
    )
}

export default MidBar