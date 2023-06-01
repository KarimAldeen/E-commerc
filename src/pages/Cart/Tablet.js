import React, { useState } from 'react'
import { baseURL } from '../../api/config';
import Tomato from '../../Images/Tomato.jpg'
import { MapTranslate } from '../../utils/mapTranlate';
import { LangNumber } from '../../utils/LangNumber';
import { useAddCart, useDeletCart } from '../../api/cart';
import CartForm from './CartForm';
const Tablet = ({ data }) => {
    const { mutate } = useAddCart()
    const { mutate: Del } = useDeletCart()
    const LangCode = LangNumber()
    function increment(item) {

        mutate({
            product_id: item?.product?.id,
            quantity: item?.product?.product_quantity + 1,
        })
        console.log(item?.product);

    }

    function decriment(item) {
        mutate({
            product_id: item?.product?.id,
            quantity: item?.product?.product_quantity - 1,
        })
    }

    function Delet(item) {
        Del({
            product_id: item?.product?.id,
        })
    }

    return (

        <div className='Tablet'>
            <table class="table">
                <thead>
                    <tr >

                        <th className='Product' scope="col">Product</th>
                        <th className='Price' scope="col">Price</th>
                        <th className='Quantity' scope="col">Quantity</th>
                        <th className='Total' scope="col">Total</th>
                        <th className='x' scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data?.cart_items?.map((item, index) => (
                            <tr key={index}>
                                <td className='Product_App'>
                                    <img className='Prodeuct_Image' src={baseURL + item?.product_main_image} onError={(e) => e.target.src = Tomato} alt='' />
                                    <div className=''>
                                        {MapTranslate(item?.product?.product_translations, 'name', LangCode)}
                                    </div>

                                </td>

                                <td>
                                    <strong>  {item?.product?.product_price}</strong>
                                </td>
                                <td>
                                    <div className="pro-qty">
                                        <span className="dec qtybtn" onClick={(e) => decriment(item)}>-</span>
                                        <div className='Counter'>
                                            {item?.product?.product_quantity}

                                        </div>
                                        <span className="inc qtybtn" onClick={(e) => increment(item)}>+</span>
                                    </div>

                                </td>
                                <td>
                                    <strong> {`${item?.product?.product_price}` * `${item?.product?.product_quantity}`} </strong>

                                </td>
                                <td>
                                    <span className="close" onClick={(e) => Delet(item)}>✕</span>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
            <div className='Cart_Forms'>
              

            <CartForm/>  
            </div>
          
        </div>
    )
}

export default Tablet