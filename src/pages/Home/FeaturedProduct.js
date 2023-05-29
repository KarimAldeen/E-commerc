import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles

import Card from '../../pages/Product/Card';
import SwiperComponent from '../../components/SwiperComponents';
import SubTiltle from '../../components/SubTiltle';

function FeaturedProduct({product:data}) {

 
        
  return (

    <div className='FeaturedProduct'>
        <SubTiltle title="Featured Product"/>
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