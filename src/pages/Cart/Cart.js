import React from 'react'
import Header from '../../components/Utils/Header'
import MidBar from '../../components/Utils/MidBar'
import CartImage from './CartImage'
import Tablet from './Tablet'
import DownSec from '../../components/Utils/DownSec'

const Cart = ({data}) => {
  return (
    <div className='New_Cart'>
        <Header />
         <MidBar />
         <DownSec/>
         <div>
            <CartImage/>
            <Tablet data={data}/>

         </div>
        
    </div>
  )
}

export default Cart