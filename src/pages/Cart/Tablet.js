import React, { useState } from 'react'
import { baseURL } from '../../api/config';
import Tomato from '../../Images/Tomato.jpg'
import { MapTranslate } from '../../utils/mapTranlate';
import { LangNumber } from '../../utils/LangNumber';
import { useAddCart, useDeletCart } from '../../api/cart';
import CartForm from './CartForm';
import { t } from 'i18next';
import { LoadingButton } from '../../components/LoadingButton';
const Tablet = ({ data }) => {
    const { mutate , isLoading} = useAddCart()
    const { mutate: Del } = useDeletCart()
    const LangCode = LangNumber()


    function increment(item) {

        if(item?.product?.product_quantity <=item?.quantity){

        }else{
            mutate({
                product_id: item?.product?.id,
                quantity: item?.quantity + 1,
            })
        }
       

    }

    function decriment(item) {
        if(item?.quantity - 1 ===0){
            Del({
                product_id: item?.product?.id,
            })

        }else{
               mutate({
            product_id: item?.product?.id,
            quantity: item?.quantity - 1,
        })
        }
     
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

                        <th className='Product' scope="col">{t('Product')}</th>
                        <th className='Price' scope="col">{t('Price')}</th>
                        <th className='Quantity' scope="col">{t('Quantity')}</th>
                        <th className='Total' scope="col">{t('Total')}</th>
                        <th className='x' scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data?.cart_items?.map((item, index) => (
                            <tr key={index}>
                                <td className='Product_App'>
                                    <img className='Prodeuct_Image' src={baseURL + item?.product?.product_main_image} onError={(e) => e.target.src = Tomato} alt='' />
                                    <div className=''>
                                        {MapTranslate(item?.product?.product_translations, 'name', LangCode)}
                                    </div>

                                </td>

                                <td>
                                    <strong>  {item?.product?.product_price}</strong>
                                </td>
                                <td>
                                    <div className="pro-qty">
                                        <LoadingButton className="dec qtybtn"
                                        isLoading={isLoading}
                                        onClick={(e) => decriment(item)}>-</LoadingButton>
                                        <div className='Counter'>
                                            {item?.quantity}

                                        </div>
                                        <LoadingButton className={"inc qtybtn " +(item?.product?.product_quantity <=item?.quantity ? "not-allowed" :"pointer")}
                                       
                                        isLoading={isLoading}
                                        

                                         onClick={(e) => increment(item)}>+</LoadingButton>
                                         
                                    </div>

                                </td>
                                <td>
                                    <strong> {`${item?.product?.product_price}` * `${item?.quantity}`}{t('ريال')} </strong>

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
              

            <CartForm data={data}/>  
            </div>
          
        </div>
    )
}

export default Tablet