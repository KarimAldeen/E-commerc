import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { Phone } from '../../config/LOCALSTORAGEKEY';

import HomeDrop from './DropDown/HomeDrop';
import { useTranslation } from 'react-i18next';
import { useGetHomeStatics } from '../../api/home';
import { useSelector } from 'react-redux';
const DownSec = () => {


    const [t] = useTranslation();
    const {data , isLoading } = useGetHomeStatics()
       const categories = data?.categories ||[]
       const state = useSelector(state => state.auth)

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
                    <h3 > {t("Search Product")}    </h3>
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
            <h3>{state?.Phone}</h3>
            <h5>{t("support 24/7 time")}</h5>
            
            </div>
            </div>
                </div>
              
            </div>
            </div> 
               </div>
  )
}

export default DownSec