import React, { useEffect } from 'react'
import Header from '../../components/Utils/Header'
import MidBar from '../../components/Utils/MidBar'
import DownBar from '../../components/Utils/DownBar'
import HomeSectin from '../../components/Utils/HomeSectin'
import FeaturedProduct from './FeaturedProduct'
import Categories from './categories/Categories'
import Footer from '../../layout/Footer/Footer'
import Test from '../../components/Utils/Loader'
import Loader from '../../components/Utils/Loader'
import { useGetCartCount, useGetHomeStatics } from '../../api/home'
import { useAuth } from '../../hooks/useAuth'
import { authStorage } from '../Auth/AuthStorage'
import { useDispatch } from 'react-redux'
import { getAllNformation } from '../../redux/CategoryReducer'
import { useGetCategory } from '../../api/category'


const HomePage = () => {
 

  
 
  
    const {data , isLoading } = useGetHomeStatics()

      if(false ){
        return < Loader />
      }
      
  return (
    <div className='HomePage'>
          <Header/>
          <MidBar />
          <HomeSectin sliders={data?.sliders[0]} categories={data?.categories ||[]}/>

          
          <FeaturedProduct  product={data?.featured_products||[]} />
          <Categories categories={data?.categories ||[]} />

          <Footer/>

          
    </div>
  )
}

export default HomePage