import React from 'react'
import Header from '../../components/Utils/Header'
import MidBar from '../../components/Utils/MidBar'
import { FaShoppingBasket, FaDollarSign } from "react-icons/fa";
import Product_Fillter from './Product_Fillter';
import Product_Card from './Product_Card';
import Footer from '../../layout/Footer/Footer';
import { useGetProducts } from '../../api/products';
import Loader from '../../components/Utils/Loader';
import { usePaginationWithURL } from '../../hooks/usePaginationWithURL';

const Product = (props) => {


    const { page, per_page, handlePageChange } =
    usePaginationWithURL(props.location);
  


 


    const {data , isLoading , isError} = useGetProducts({
        page,
        per_page:6,
      })


    if(isLoading){
        return <Loader />
    }
    return (
        <div className='Product'>
            <div className='Top_Product'>
                <Header />
                <MidBar />
            </div>


            <div className='Down_Product'>

                <div className="row">
    
                   <Product_Fillter/>
                   <Product_Card data={data}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product