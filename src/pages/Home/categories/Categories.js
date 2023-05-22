import React from 'react'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import SubTiltle from '../../../components/SubTiltle'
function Categories() {
  const data  = [
    {id:1,
    category_image:'/1.jpg',
    category_name:'first'
  },
  {id:2,
    category_image:'/1.jpg',
    category_name:'first'
  },
  {id:3,
    category_image:'/1.jpg',
    category_name:'first'
  },
  {id:4,
    category_image:'/1.jpg',
    category_name:'first'
  }
  ]
  return (
    <section className='category-section'>
        <SubTiltle title="Categories Product"/>

      <div className='category-con' >
        
        {
          data.map((category)=>{
            return (
              <div className='category-card'>
                <img src={category.category_image} alt='few' />
                <h2> {category.category_name} </h2>
               
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