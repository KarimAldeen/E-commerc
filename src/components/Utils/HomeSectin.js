import React from 'react'
import { FaAngleDown,FaPhoneAlt } from "react-icons/fa";
import HomeSec from '../../Images/HomeSec.jpg'
import { baseURL } from '../../api/config';
import { useTranslation } from 'react-i18next';
import { Phone } from '../../config/LOCALSTORAGEKEY';
import { MapTranslate } from '../../utils/mapTranlate';
import { LangNumber } from '../../utils/LangNumber';
const HomeSectin = ({sliders , categories}) => {
    const [t] = useTranslation();


    const LangCode = LangNumber()
 

  return (
    <div className='HomeSectin'>
        <div className="row">
                <div className="col-lg-3">
                <div className="btn-group open">
                <button className="btn Drop_Btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true" >
                    {/* <i className="fa fa-bars"></i> */}
                    <h3> {t("All Category")}</h3>
                </button>
                <ul className="dropdown-menu" style={{display:'block'}}>
                    {categories?.map((i,index)=>(
                    <li key={index}>{MapTranslate(i?.category_translations , 'name' ,LangCode)}</li>
                    )
                    )}
                  
                    
                </ul>
            </div>
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
                <h5>{Phone}</h5>
                
                </div>
                </div>
                    </div>
                    <div className='Button_Section'>
                            <img className='HomeSec' alt='' src={baseURL + sliders?.slider_link} onError={HomeSec} />
                        </div>
                </div>
                </div> 
                   </div>
  )
}

export default HomeSectin