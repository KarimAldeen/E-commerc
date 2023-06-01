import React from 'react'
import { FaAngleDown,FaPhoneAlt } from "react-icons/fa";
import HomeSec from '../../Images/HomeSec.jpg'
import { baseURL } from '../../api/config';
import { useTranslation } from 'react-i18next';
import { Phone } from '../../config/LOCALSTORAGEKEY';
import { LangNumber } from '../../utils/LangNumber';
import { useNavigate } from 'react-router';
import HomeDrop from './DropDown/HomeDrop';
const HomeSectin = ({sliders , categories}) => {
    const [t] = useTranslation();
    const navigate = useNavigate()

    const LangCode = LangNumber()
 

  return (
    <div className='HomeSectin'>
        <div className="row">
                <div className="col-lg-3">
               <HomeDrop Categories={categories}/>
                </div>
                <div className="col-lg-9">
                    <div className='Top_Section'>
                    <form className="example" action="product">
                        <div className='AllCategories'>
                        <h3 > {t("All Product")}    </h3>
                        {/* <FaAngleDown/> */}
                        </div>

                    <input type="text" placeholder={t("What Do You Need?")} name="search" />
                    <button type="submit">
                        {t("Search")}
                    </button>
                </form>
                <div className='Top_Section_Right'>
                    <div className='Phone1'>
                <FaPhoneAlt/>
                </div>
                <div className='Phone2'>
                <h3>{Phone}</h3>
                <h5>{t("support 24/7 time")}</h5>
                
                </div>
                </div>
                    </div>
                    <div className='Button_Section'>
                            <img className='HomeSec' alt='' src={baseURL + sliders?.slider_link}  />
                        </div>
                </div>
                </div> 
                   </div>
  )
}

export default HomeSectin