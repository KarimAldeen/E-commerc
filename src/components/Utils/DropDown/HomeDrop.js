import React from 'react'
import { MapTranslate } from '../../../utils/mapTranlate';
import { useNavigate } from 'react-router';
import { LangNumber } from '../../../utils/LangNumber';
import { useTranslation } from 'react-i18next';

const HomeDrop = ({Categories , styles=""}) => {
      const [t] = useTranslation();
  const navigate = useNavigate()
  const LangCode = LangNumber()
  return (
    <div className={"btn-group " +styles}>
                <button className="btn Drop_Btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true" >
                    <i className="fa fa-bars"></i>
                    <h3> {t("All Category")}</h3>
                </button>
                <ul className="dropdown-menu">
                    {Categories?.map((i,index)=>(
                    <li key={index}  onClick={()=>navigate('/product?category_id=' + i?.id)}>{MapTranslate(i?.category_translations , 'name' ,LangCode)}</li>
                    )
                    )}
                  
                    
                </ul>
            </div>
  )
}

export default HomeDrop