import React from 'react'

const CartForm = () => {
  return (
    <div className="col-md-4 summary">
    <div>
      <h5>
        <b>Summary</b>
      </h5>
    </div>
    <hr />
    <div className="row">
      <div className="col" style={{ paddingLeft: 0 }}>
        ITEMS 3
      </div>
      <div className="col text-right">€ 132.00</div>
    </div>
     
    <button className="btn">CHECKOUT</button>
  </div>
  )
}

export default CartForm