import React from 'react'
import { MapTranslate } from '../../utils/mapTranlate'
import { baseURL } from '../../api/config'
import { FaAngleLeft } from 'react-icons/fa'
import { history } from '../../history'
import { useAddProductToWishList, useRemoveProductToWishList } from '../../api/products'
import { AiFillHeart } from 'react-icons/ai'
import { LoadingButton } from '../../components/LoadingButton'
import { useAddCart } from '../../api/cart'
import { useTranslation } from 'react-i18next'
import { LangNumber } from '../../utils/LangNumber'

function CardDetails({product}) {
    const {mutate , isLoading:AddLoading} = useAddProductToWishList()
    const {mutate:mutate2 , isLoading:RemoveLoading} = useRemoveProductToWishList()
    const {mutate:addToCart , isLoading} = useAddCart()
    const [t] = useTranslation();
  const lanCOde = LangNumber()

  return (
    <div className="card_info">
    <nav>
      <div  onClick={()=>history.back()} style={{cursor:"pointer"}}>
        <FaAngleLeft />
        {t("Back")}
      </div>
      <div>
        <AiFillHeart  size={25} color={product?.wishlist ? '#8a1e41' :'gray'}/>
      </div>

      
    </nav>
    <div className="photo">
      <img src={baseURL + product?.product_main_image} />
    </div>
    <div className="description description-product-detailes">
      {/* <h2 className='product_title'>{MapTranslate(product?.product_translations , 'name')}</h2> */}
      <h3 style={{margin:'10px'}}>{product?.product_price}ريال</h3>

      <h4 style={{margin:"10px"}}>purchasing count:{product?.product_purchasing_count}</h4>
      <p style={{fontSize:'1.3em' , margin:"10px"}}>
        {MapTranslate(product?.product_translations , 'description' ,lanCOde)}
      </p>
      <LoadingButton
      isLoading={isLoading}
      onClick={()=>addToCart({product_id:product?.id , quantity:1})}
      >{t("Add to Cart")}</LoadingButton>
      {
        product?.wishlist ?<LoadingButton 
        onClick={()=>mutate2({product_id:product?.id})}
        isLoading={RemoveLoading}>{t("Remove Wishlist")}</LoadingButton>
        :<LoadingButton 
        isLoading={AddLoading}
        onClick={()=>mutate({product_id:product?.id})}>{t("Wishlist")}</LoadingButton>

      }

    </div>
  </div>  )
}

export default CardDetails