import React from 'react'
import Header from '../../components/Utils/Header'
import MidBar from '../../components/Utils/MidBar'
import Image from '../../Images/P1.png'
import { FaAngleLeft, FaHeart } from "react-icons/fa";
import FeaturedProduct from '../Home/FeaturedProduct';
import Footer from '../../layout/Footer/Footer';
import { history } from '../../history';
import { useGetProducts, useGetSingleProduct } from '../../api/products';
import { useParams } from 'react-router';
import Loader from '../../components/Utils/Loader';
import { baseURL } from '../../api/config';
// import { MapTranslate } from '../../utils/mapTranlate';
import CardDetails from './CardDetails';

const CardInfo = () => {
  const {id} = useParams()
  const {data , isLoading} = useGetSingleProduct({product_id:id})
   console.log(data);

   
   if(isLoading){
    return <Loader/>
   }
  return (
    <div className='CardInfo'>
      <div className='Top_Product'>
        <Header />
        <MidBar />
      </div>
      <div className='Info_Section'>
       <CardDetails product={data} />
      </div>
      <div>
      {/* <FeaturedProduct  /> */}

      </div>
      <Footer/>
    </div>
  )
}

export default CardInfo