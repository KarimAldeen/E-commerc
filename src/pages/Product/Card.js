import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineSell} from 'react-icons/md'
import { baseURL } from '../../api/config'
import { useAddCart } from '../../api/cart'

const Card = ({product}) => {
  const {mutate} = useAddCart()
  function addToCart (){
    mutate({
      product_id : product?.id ,
      quantity : 1,
    })
  }
  return (
  <div className='Cards'>
      <div className="product-card">
    <div className="badge">{product?.product_purchasing_count}<MdOutlineSell/></div>
    <div className="product-tumb">
      <img src={baseURL+ product?.category_image} alt="" />
    </div>
    <div className="product-details">
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
          <Link onClick={()=> addToCart()}>
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