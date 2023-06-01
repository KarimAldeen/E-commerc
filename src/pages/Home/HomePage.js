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

const HomePage = () => {
   
    const {data , isLoading } = useGetHomeStatics()

      if(isLoading ){
        return < Loader />
      }
      console.log(data);
  return (
    <div className='HomePage' style={{overflow:'hidden'}}>
          <Header/>
          <MidBar />
          <HomeSectin sliders={data?.sliders[0] || []} categories={data?.categories ||[]}/>

          <Categories categories={data?.categories ||[]} />

          <FeaturedProduct  product={data?.featured_products||[]} />

          <ProductSpad  latest_products={data?.latest_products}  cheapest_products={data?.cheapest_products}  most_purchasing_count_product={data?.most_purchasing_count_product}/>
          <Footer/>

          
    </div>
  )
}

export default HomePage