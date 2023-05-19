import React from 'react'
import Header from '../../components/Utils/Header'
import MidBar from '../../components/Utils/MidBar'
import DownBar from '../../components/Utils/DownBar'
import HomeSectin from '../../components/Utils/HomeSectin'
import FeaturedProduct from './FeaturedProduct'


const HomePage = () => {
  return (
    <div className='HomePage'>
          <Header/>
          <MidBar/>
          {/* <DownBar/> */}
          <HomeSectin/>


          <FeaturedProduct />

          
    </div>
  )
}

export default HomePage