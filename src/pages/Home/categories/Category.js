import React from 'react'
import { baseURL } from '../../../api/config'
import { MapTranslate } from '../../../utils/mapTranlate'
import { LangNumber } from '../../../utils/LangNumber'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import './CategoryHome.scss';

import { MdOutlineArrowForwardIos } from 'react-icons/md'

function Category({category , lang}) {
  const navigate = useNavigate()
    const LangCode = LangNumber()
  return (
   
    <NavLink
    className={"Container"}
    to={'/product?category_id='+category?.id}
>

    <img className={"image"} src={`${baseURL}${category.category_image}`} alt="" />
    <div className={"titleContainer"}>

        <h6 className={"name"}>{MapTranslate(category?.category_translations , 'name' , lang)}</h6>
    
        <MdOutlineArrowForwardIos size={20} className={"Icon"} />
    </div>
</NavLink>


  )
}

export default Category