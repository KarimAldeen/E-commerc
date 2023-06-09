import React from 'react'
import { baseURL } from '../../api/config';
import { MapTranslate } from '../../utils/mapTranlate';
import { LangNumber } from '../../utils/LangNumber';
import Delete from '../../components/Button/Delete';

const CartView = ({product}) => {

  const LangCode = LangNumber()
  
  const item = product?.product;
  return  (
    <div className="row border-top border-bottom">
    <div className="row main align-items-center">
      <div className="col-2">
        <img className="img-fluid" src={baseURL + item?.product_main_image} />
      </div>
      <div className="col">
        <div className="row text-muted">{MapTranslate(item?.product_translations ,'name' , LangCode)}</div>
      </div>
      <div className="col">
        {/* <Delete/> */}
        <a href="#">-</a>
        <a href="#" className="border">
          {product?.quantity}
        </a>
        <a href="#">+</a>
      </div>
      <div className="col">
        {item?.product_price} <span className="close">✕</span>
      </div>
    </div>
  </div>
  )
}

export default CartView