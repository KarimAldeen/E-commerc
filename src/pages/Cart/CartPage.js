import React from 'react'
import Header from '../../components/Utils/Header'
import MidBar from '../../components/Utils/MidBar'
import CartView from './CartView'
import CartForm from './CartForm'
import { useGetCart } from '../../api/cart'
import Loader from '../../components/Utils/Loader'
import { useTranslation } from 'react-i18next'

const CartPage = () => {
  const [t] = useTranslation();
  const {data ,isError ,isLoading } = useGetCart()

  const cart  = data?.cart
  console.log(cart);
  if(isLoading){
    return <Loader/>
   }

   
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
                    <b>{t("Shopping Cart")}</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  {cart?.cart_items_count} {t("items")}
                </div>
              </div>
            </div>
           <div className='cart-product-container'>
           {
              cart?.cart_items?.map(product =>(
            <CartView product={product}  key={product?.id}/>
              ))
            }

           </div>
            

          </div>
          <CartForm  cart={cart} />
        </div>
      </div>

    </div>
  )
}

export default CartPage