import React from 'react'
import Header from '../../components/Utils/Header'
import MidBar from '../../components/Utils/MidBar'
import { FaShoppingBasket, FaDollarSign } from "react-icons/fa";
import Product_Fillter from './Product_Fillter';
import Product_Card from './Product_Card';
import Footer from '../../layout/Footer/Footer';

const Product = () => {
    const departments = ["", "FreshMeat", "Vegetables", "Fruit", "Fresh", "Ocean", "Butter", "Fastfood", "Fresh", "Papayaya", "Oatmeal", "Bananas"]
    return (
        <div className='Product'>
            <div className='Top_Product'>
                <Header />
                <MidBar />
            </div>


            <div className='Down_Product'>

                <div className="row">
    
                   <Product_Fillter/>
                   <Product_Card/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product