import React from 'react'
import { Link } from 'react-router-dom'
import { baseURL } from '../../api/config'
import { MapTranslate } from '../../utils/mapTranlate'
import { useTranslation } from 'react-i18next'

function SpadCard({product , lang}) {
    const {t} = useTranslation()
  return (
        <Link to={"/product/"+product?.id} class="latest-product__item">
            <div class="latest-product__item__pic">
                <img src={baseURL + product?.product_main_image} alt="" />
            </div>
            <div class="latest-product__item__text">
                <h6>{MapTranslate(product?.product_translations , 'name' , lang)}</h6>
                <span>{product?.product_price}  {t('ريال')}</span>
            </div>
        </Link> 
     )
}

export default SpadCard