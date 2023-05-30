import React from 'react'
import { baseURL } from '../../../api/config'
import { MapTranslate } from '../../../utils/mapTranlate'
import { LangNumber } from '../../../utils/LangNumber'

function Category({category}) {
    const LangCode = LangNumber()
  return (
    <div className='category-card' key={category?.id}>
    <img src={baseURL+category.category_image} alt='few' />
    <h2> {MapTranslate(category?.category_translations , 'name' , LangCode)} </h2>
   
    {/* <button className='category-button'>
       {category.category_name} 
    </button> */}

  </div>

  )
}

export default Category