import React from 'react'
import Card from './Card'
import Fillter from '../../components/Button/Fillter'

const Product_Card = ({data}) => {
  return (
    <div className="col-lg-9 col_Product col_Fillter Right_Side ">
      <div className='header-products'>

        <div className='Card_Top'>
          
          <Fillter/>
          Showing  {data?.pagination?.total} results</div>
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
        {[1, 2, 3, 4, 5, 1].map((i, index) => (
          <div key={index} className='card-product-page'>
            <Card />
          </div>

        ))}
      </div>
    </div>
  )
}

export default Product_Card