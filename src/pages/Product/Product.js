import React, { useEffect, useState } from 'react'
import Header from '../../components/Utils/Header'
import MidBar from '../../components/Utils/MidBar'
import { FaShoppingBasket, FaDollarSign } from "react-icons/fa";
import Product_Fillter from './Product_Fillter';
import Product_Card from './Product_Card';
import "./Pagination.scss"
import Footer from '../../layout/Footer/Footer';
import { useGetProducts } from '../../api/products';
import Loader from '../../components/Utils/Loader';
import { usePaginationWithURL } from '../../hooks/usePaginationWithURL';
import { useLocation } from 'react-router';
import ProductPaginations from './ProductPaginations';

const Product = (props) => {

    const location = useLocation()

    const { page, per_page, handlePageChange } =
    usePaginationWithURL(location);
    

    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get('search');

    const category_id = searchParams.get('category_id');

   
    const [filterObject , setFilterObject] = useState({})


    const {data , isLoading } = useGetProducts({
        page,
        per_page:6,
        search:searchValue,

        filter_category_id:category_id,
        ...filterObject
      },
      {
    
        retry:false
      })


    
   
    
    return (
        <div className='Product'>
            <div className='Top_Product'>
                <Header />
                <MidBar />
            </div>

 
            <div className='Down_Product'>

                <div className="row">
    
                   <Product_Fillter setFilterObject={setFilterObject} category_id={category_id}/>
                   <Product_Card data={data} page={page} handlePageChange={handlePageChange}  isLoading={isLoading}/>
                   
                
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product