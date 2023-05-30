import React from 'react'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import SubTiltle from '../../../components/SubTiltle'
import { baseURL } from '../../../api/config'
import { useTranslation } from 'react-i18next'
// import { MapTranslate } from '../../../utils/mapTranlate'
function Categories({categories:data}) {
 const [t] = useTranslation()
  return (
    <section className='category-section'>
        <SubTiltle title={t("Categories")} show_more={false}/>

      <div className='category-con' >
        
        {
          data.map((category)=>{
            return (
              <div className='category-card' key={category?.id}>
                <img src={baseURL+category.category_image} alt='few' />
                {/* <h2> {MapTranslate(category?.category_translations , 'name')} </h2> */}
               
                {/* <button className='category-button'>
                   {category.category_name} 
                </button> */}
               
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Categories