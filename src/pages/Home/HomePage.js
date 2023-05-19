import React from 'react'
import Header from '../../components/Utils/Header'
import MidBar from '../../components/Utils/MidBar'
import DownBar from '../../components/Utils/DownBar'
import HomeSectin from '../../components/Utils/HomeSectin'
import FeaturedProduct from './FeaturedProduct'
import Categories from './categories/Categories'
import Footer from '../../layout/Footer/Footer'


const HomePage = () => {
  return (
    <div className='HomePage'>
          <Header/>
          <MidBar/>
          {/* <DownBar/> */}
          <HomeSectin/>


          <FeaturedProduct />
          <Categories />

          <Footer/>

          
    </div>
  )
}

export default HomePage