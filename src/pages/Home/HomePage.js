import React from 'react'
import Header from '../../components/Utils/Header'
import MidBar from '../../components/Utils/MidBar'
import DownBar from '../../components/Utils/DownBar'
import HomeSectin from '../../components/Utils/HomeSectin'


const HomePage = () => {
  return (
    <div className='HomePage'>
          <Header/>
          <MidBar/>
          {/* <DownBar/> */}
          <HomeSectin/>

          
    </div>
  )
}

export default HomePage