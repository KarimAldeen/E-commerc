import React from 'react'
import { baseURL } from '../../api/config';
import Tomato from '../../Images/Tomato.jpg'
const Tablet = ({product}) => {
    const item = product?.product;

  return (

    <div className='Tablet'>
        <table class="table">
  <thead>
    <tr >

      <th  className='Product'  scope="col">Product</th>
      <th  className='Price' scope="col">Price</th>
      <th  className='Quantity' scope="col">Quantity</th>
      <th  className='Total' scope="col">Total</th>

    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td className='Product_App'>
      <img className='Prodeuct_Image' src={Tomato} alt='' />
      <div className=''> Prodyct Name</div>

      </td>

      <td>
        <strong> 500$</strong>
      </td>
      <td>

      </td>
      <td>

      </td>
    </tr>
  </tbody>
  
</table>
    </div>
  )
}

export default Tablet