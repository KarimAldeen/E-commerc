import React, { useEffect, useState } from 'react'
import Header from '../../components/Utils/Header'
import MidBar from '../../components/Utils/MidBar'
import { FaShoppingBasket, FaDollarSign } from "react-icons/fa";
import Product_Fillter from './Product_Fillter';
import Product_Card from './Product_Card';
import Footer from '../../layout/Footer/Footer';
import { useGetProducts } from '../../api/products';
import Loader from '../../components/Utils/Loader';
import { usePaginationWithURL } from '../../hooks/usePaginationWithURL';
import { useLocation } from 'react-router';

const Product = (props) => {

    const location = useLocation()

    const { page, per_page, handlePageChange } =
    usePaginationWithURL(location);
    console.log(location?.search);
    const [filterObject , setFilterObject] = useState({})
    const [isPageLoaded, setIsPageLoaded] = useState(false); // Track if data for the current page has been loaded

    
    
 


    const {data , isLoading } = useGetProducts({
        page,
        per_page:6,
        ...filterObject
      },
      {
    
        retry:false
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
    
                   <Product_Fillter setFilterObject={setFilterObject}/>
                   <Product_Card data={data} page={page} handlePageChange={handlePageChange}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product