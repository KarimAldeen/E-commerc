import React from 'react'
import Header from '../../components/Utils/Header'
import MidBar from '../../components/Utils/MidBar'
import CartView from './CartView'
import CartForm from './CartForm'

const CartPage = () => {
  return (
    <div className='CartPage'>
      <div className='Top_Product'>
        <Header />
        <MidBar />

      </div>
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  3 items
                </div>
              </div>
            </div>
            <CartView />

            <div className="back-to-shop">
              <a href="#">←</a>
              <span className="text-muted">Back to shop</span>
            </div>
          </div>
          <CartForm />
        </div>
      </div>

    </div>
  )
}

export default CartPage