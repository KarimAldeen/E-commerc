import React from 'react'
import Card from './Card'

const Product_Card = () => {
  return (
    <div className="col-lg-9 col_Product col_Fillter">
      <div className='header-products'>
      <div className='Card_Top'>Showing 1–9 of 48 results</div>
      <div className='button-con'>
          
            <button className='pre-button'>
              Perv Page
            </button>
            <button className='next-button'>
              Next Page
            </button>
          
      </div>
      </div>
      
    <div className='Product_Card'>
      {[1,2,3,4,5,1].map((i,index)=>(
        <div key={index}>
            <Card/>
        </div>

      ))}
    </div>
</div>
  )
}

export default Product_Card