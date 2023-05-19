import React from 'react'
function Card({product}) {

  const { name , price  ,weight , image } = product
  return (
    <div className='card'>
      <div>
          <img src={image} alt=';wrgw'  />
      </div>
      <div className='card-down'>
        
        <div className='product-name'>{name}</div>
        <div className='product-price'>$ {price} :السعر</div>
        <div className='product-we'>  {weight}  :الوزن</div>
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