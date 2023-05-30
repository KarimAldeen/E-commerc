import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles

import Card from '../../pages/Product/Card';
import SwiperComponent from '../../components/SwiperComponents';
import SubTiltle from '../../components/SubTiltle';
import { useTranslation } from 'react-i18next';

function FeaturedProduct({product:data}) {
const [t] = useTranslation()
 
        
  return (

    <div className='FeaturedProduct'>
        <SubTiltle title={t("Featured Product")}/>
        <SwiperComponent>
        {
            (data||[]).map(
                (product) =>{
                
                    return (
                        <SwiperSlide key={product.id}><Card  product={product} /></SwiperSlide>
                    )
                }
            )
        }
     
    
    </SwiperComponent>
    </div>
  )
}

export default FeaturedProduct