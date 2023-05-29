import React from 'react'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import SubTiltle from '../../../components/SubTiltle'
import { baseURL } from '../../../api/config'
function Categories({categories:data}) {
 
  return (
    <section className='category-section'>
        <SubTiltle title="Categories" show_more={false}/>

      <div className='category-con' >
        
        {
          data.map((category)=>{
            return (
              <div className='category-card' key={category?.id}>
                <img src={baseURL+category.category_image} alt='few' />
                <h2> {category.id} </h2>
               
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