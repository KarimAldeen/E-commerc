import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion"

// Import Swiper styles

import Card from '../../pages/Product/Card';
import SwiperComponent from '../../components/SwiperComponents';
import SubTiltle from '../../components/SubTiltle';
import { useTranslation } from 'react-i18next';

function FeaturedProduct({product:data}) {
const [t] = useTranslation()
 
        
  return (

    <motion.div className='FeaturedProduct'
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    >
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
    </motion.div>
  )
}

export default FeaturedProduct