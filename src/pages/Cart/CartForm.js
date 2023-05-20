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
    <form>
      <p>SHIPPING</p>
      <select>
        <option className="text-muted">Standard-Delivery- €5.00</option>
      </select>
      <p>GIVE CODE</p>
      <input id="code" placeholder="Enter your code" />
    </form>
    <div
      className="row"
      style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
    >
      <div className="col">TOTAL PRICE</div>
      <div className="col text-right">€ 137.00</div>
    </div>
    <button className="btn">CHECKOUT</button>
  </div>
  )
}

export default CartForm