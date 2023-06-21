import React, { useEffect } from 'react'
import Header from '../../components/Utils/Header'
import MidBar from '../../components/Utils/MidBar'
import HomeSectin from '../../components/Utils/HomeSectin'
import FeaturedProduct from './FeaturedProduct'
import Categories from './categories/Categories'
import Footer from '../../layout/Footer/Footer'
import Loader from '../../components/Utils/Loader'
import { useGetHomeStatics } from '../../api/home'
import ProductSpad from './ProductSpad'
import { useDispatch } from 'react-redux'
import { SetAboutthecompany, setEmail, setLocation1, setPhone } from '../../redux/AuthReducer'
import { LangNumber } from '../../utils/LangNumber'

const HomePage = () => {
   
    const {data , isLoading , isSuccess} = useGetHomeStatics()
  const dispatch = useDispatch()
  const Lang = LangNumber()
    useEffect(()=>{

      if(isSuccess){

        console.log();

        dispatch(setPhone(data?.statics?.filter(d => d.key ==='phone')[0]?.value));
        dispatch(setEmail(data?.statics?.filter(d => d.key ==='email')[0]?.value));
        dispatch(setLocation1(data?.statics?.filter(d => d.key ==='location')[0]?.value));
        dispatch(SetAboutthecompany(data?.statics?.filter(d => d.key ==='about_the_company')[0]?.translate));
      }
    },[isSuccess, data])
      if(isLoading ){
        return < Loader />
      }

   
  return (
    <div className='HomePage' style={{overflow:'hidden'}}>
          <Header/>
          <MidBar />
          <HomeSectin sliders={data?.sliders?.filter(s=> s?.is_ads !=true && s?.is_active ==true)|| []} categories={data?.categories ||[]}/>

          <Categories categories={data?.categories ||[]} />

          <FeaturedProduct  product={data?.featured_products||[]} />

          <ProductSpad  latest_products={data?.latest_products}  cheapest_products={data?.cheapest_products}  most_purchasing_count_product={data?.most_purchasing_count_product}/>
          <Footer/>

          
    </div>
  )
}

export default HomePage