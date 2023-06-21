import React from 'react'
import { useGetHomeStatics } from '../../api/home'
import Loader from '../../components/Utils/Loader'
import { useEffect } from 'react'
import { baseURL } from '../../api/config'
import SwiperComponent from '../../components/SwiperComponents'
import { SwiperSlide } from 'swiper/react'

const CartImage = () => {
    const {data , isLoading , isSuccess} = useGetHomeStatics()

        // useEffect(()=>{

        //     if(isSuccess){
        //         let slider =
          
        //         document.getElementById('breadcrumb-section').style.backgroundImage =`url(${baseURL+ slider?.slider_link})`
        //     }

        // },[isSuccess , data])
    if(isLoading){
        return <Loader />
    }
  return (


    <div className='CartImage'>

        <SwiperComponent
        slidesPerView={1}
        >
        {
            data?.sliders?.filter(s => s.is_ads && s.is_active ==true)?.map(
                (s) =>{
                
                    return (
                    
                 <SwiperSlide key={s.id}>
                    <section class="breadcrumb-section set-bg" style={{backgroundImage:`url(${baseURL+ s?.slider_link})`}} id='breadcrumb-section' >
                                <div className='Black_Sec'></div>
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12 text-center">
                                        <div class="breadcrumb__text">
                                            <h1>Shopping Cart</h1>
                                            <div class="breadcrumb__option">
                                                <h5> <strong> Home </strong>   -  Shopping Cart</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        </SwiperSlide>
                    )
                }
            )
        }
        </SwiperComponent>
      
    </div>
  )
}

export default CartImage