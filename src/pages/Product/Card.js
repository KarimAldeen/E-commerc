import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {MdOutlineSell} from 'react-icons/md'
import { baseURL } from '../../api/config'
import { useAddCart } from '../../api/cart'
import { MapTranslate } from '../../utils/mapTranlate'
import { AiFillHeart } from 'react-icons/ai'
import { useAddProductToWishList, useRemoveProductToWishList } from '../../api/products'
import { useTranslation } from 'react-i18next'
import { LangNumber } from '../../utils/LangNumber'
import { toast } from 'react-toastify'

const Card = ({product}) => {
  const [t] = useTranslation();

  const LangCode =LangNumber()
const navigate = useNavigate()
  const {mutate , isSuccess} = useAddCart()
  const {mutate:addWishList } = useAddProductToWishList()
  const {mutate:removeWithList } = useRemoveProductToWishList()

  useEffect(()=>{
  if(isSuccess){
    // console.log('ADD ');
    toast.success(t('Add Successful'))
  }
  },[isSuccess , t])


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
    <div className="product-tumb"  onClick={()=>navigate('/product/' + product?.id)} >
      <img src={baseURL+ product?.product_main_image} alt="" />
    </div>
    <div className="product-details">
      <p>
      {MapTranslate(product?.product_translations , 'name' , LangCode)}
      </p>
      <div className="product-bottom-details">
        <div className="product-price">
            {product?.product_price} {t("ريال")}
        </div>
        <div className="product-links">
          <Link to="" onClick={()=>{
            if(product?.wishlist){
              removeWithList({product_id:product?.id})
            }else{
                          addWishList({product_id:product?.id})} }

            }
            >
            <AiFillHeart  color={product?.wishlist ? '#8a1e41' :'#e1e1e1'}/>
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