import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles

import Card from '../../components/Card';
import SwiperComponent from '../../components/SwiperComponents';

function FeaturedProduct() {

    const data  = [
        {
            id:1,
            name:"First Product" ,
            price:160 ,
            weight:30,
            image : '../Images/HomeSec.jpg'
        },
        {
            id:1,
            name:"First Product" ,
            price:160 ,
            weight:30,
            image : '../Images/HomeSec.jpg'
        },
        {
            id:1,
            name:"First Product" ,
            price:160 ,
            weight:30,
            image : '../Images/HomeSec.jpg'
        },
        {
            id:1,
            name:"First Product" ,
            price:160 ,
            weight:30,
            image : '../Images/HomeSec.jpg'
        },
        {
            id:1,
            name:"First Product" ,
            price:160 ,
            weight:30,
            image : '../Images/HomeSec.jpg'
        }
    ]


  return (

    <div className='FeaturedProduct'>
        <div className='header-FeaturedProduct'> 
            <p>
               FeaturedProduct
            </p>
        </div>
        <SwiperComponent>
        {
            data.map(
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