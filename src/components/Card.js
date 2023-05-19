import React from 'react'
import Image from '../Images/HomeSec.jpg'
function Card() {
  return (
    <div className='card'>
      <div>
          <img src={Image} alt=';wrgw'  />
      </div>
      <div className='card-down'>
        
        <div className='product-name'>حليب ماعز مجفف  </div>
        <div className='product-price'>$ 0.85 :السعر</div>
        <div className='product-we'>  170  :الوزن</div>
        <div className='product-dis'>حليب ماعز مجفف بالطريقية تقليدية</div>
        <div className='button-con'>
          <button>
            Add To Cart
          </button>
        </div>
        <div></div>
      </div>
      
    </div>
  )
}

export default Card