import React from 'react'
import { useGetHomeStatics } from '../../api/home'
import Loader from '../../components/Utils/Loader'
import { useEffect } from 'react'
import { baseURL } from '../../api/config'

const CartImage = () => {
    const {data , isLoading , isSuccess} = useGetHomeStatics()

        useEffect(()=>{

            if(isSuccess){
                document.getElementById('breadcrumb-section').style.backgroundImage =`url(${baseURL+ data?.sliders[0]?.slider_link})`
            }

        },[isSuccess , data])
    if(isLoading){
        return <Loader />
    }
  return (
    <div className='CartImage'>
        <section class="breadcrumb-section set-bg" id='breadcrumb-section' >
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
    </div>
  )
}

export default CartImage