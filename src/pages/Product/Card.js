import React from 'react'
import Image from '../../Images/P1.png'
import { Link } from 'react-router-dom'
import {MdOutlineSell} from 'react-icons/md'
import { baseURL } from '../../api/config'
const Card = ({product}) => {
  return (
  <div className='Cards'>
      <div className="product-card">
    <div className="badge">{product?.product_purchasing_count}<MdOutlineSell/></div>
    <div className="product-tumb">
      <img src={baseURL+ product?.category_image} alt="" />
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
            {product?.product_price} ريال
        </div>
        <div className="product-links">
          <Link to="">
            <i className="fa fa-heart" />
          </Link>
          <Link to="">
            <i className="fa fa-shopping-cart" />
          </Link>
          <Link to={`/product/${product?.id}`}>
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