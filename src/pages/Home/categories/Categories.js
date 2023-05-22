import React from 'react'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import SubTiltle from '../../../components/SubTiltle'
function Categories() {
  const data  = [
    {id:1,
    category_image:'/1.jpg',
    category_name:'First'
  },
  {id:2,
    category_image:'/1.jpg',
    category_name:'Second'
  },
  {id:3,
    category_image:'/1.jpg',
    category_name:'Third'
  },
  {id:4,
    category_image:'/1.jpg',
    category_name:'Fourth'
  }
  ]
  return (
    <section className='category-section'>
        <SubTiltle title="Categories" show_more={false}/>

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