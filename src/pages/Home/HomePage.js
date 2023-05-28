import React from 'react'
import Header from '../../components/Utils/Header'
import MidBar from '../../components/Utils/MidBar'
import DownBar from '../../components/Utils/DownBar'
import HomeSectin from '../../components/Utils/HomeSectin'
import FeaturedProduct from './FeaturedProduct'
import Categories from './categories/Categories'
import Footer from '../../layout/Footer/Footer'
import Test from '../../components/Utils/Loader'
import Loader from '../../components/Utils/Loader'
import { useGetHomeStatics } from '../../api/home'


const HomePage = () => {


    const {data , isLoading , isError } = useGetHomeStatics()


      if(isLoading){
        return < Loader />
      }

  return (
    <div className='HomePage'>
          <Header/>
          <MidBar/>
          <HomeSectin/>

          
          <FeaturedProduct  />
          <Categories />

          <Footer/>

          
    </div>
  )
}

export default HomePage