import React from 'react'
import Header from '../../components/Utils/Header'
import MidBar from '../../components/Utils/MidBar'
import CartImage from './CartImage'
import Tablet from './Tablet'

const Cart = () => {
  return (
    <div className='New_Cart'>
        <Header />
         <MidBar />
         
         <div>
            <CartImage/>
            <Tablet/>
         </div>
        
    </div>
  )
}

export default Cart