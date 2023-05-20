import React from 'react'
import Image from '../../Images/P1.png'
import { Link } from 'react-router-dom'
const Card = () => {
  return (
  <div className='Cards'>
      <div className="product-card">
    <div className="badge">160غ</div>
    <div className="product-tumb">
      <img src={Image} alt="" />
    </div>
    <div className="product-details">
        {/* <div className='Flex'>
        <h4>
        <a href="">البان واجبان</a>
      </h4>
     
        </div> */}
     
      <p>
      حليب ماعز مجفف بالطريقية تقليدية
      </p>
      <div className="product-bottom-details">
        <div className="product-price">
            230.99ل.س
        </div>
        <div className="product-links">
          <Link to="">
            <i className="fa fa-heart" />
          </Link>
          <Link to="">
            <i className="fa fa-shopping-cart" />
          </Link>
          <Link to="">
            <i className="fa fa-eye" />
          </Link>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  )
}

export default Card