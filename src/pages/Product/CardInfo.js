import React from 'react'
import Header from '../../components/Utils/Header'
import MidBar from '../../components/Utils/MidBar'
import Image from '../../Images/P1.png'
import { FaAngleLeft, FaHeart } from "react-icons/fa";
import FeaturedProduct from '../Home/FeaturedProduct';
import Footer from '../../layout/Footer/Footer';

const CardInfo = () => {
  return (
    <div className='CardInfo'>
      <div className='Top_Product'>
        <Header />
        <MidBar />
      </div>
      <div className='Info_Section'>
        <div className="card_info">
          <nav>
            <div>
              <FaAngleLeft />
              Back to home page
            </div>

            <FaHeart />
          </nav>
          <div className="photo">
            <img src={Image} />
          </div>
          <div className="description">
            <h2>Classic Peace Lily</h2>
            <h4>Popular House Plant</h4>
            <h1>$18</h1>
            <p>
              Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo
              planter with a blue &amp; red ribbom and butterfly pick.
            </p>
            <button>Add to Cart</button>
            <button>Wishlist</button>
          </div>
        </div>
      </div>
      <div>
      <FeaturedProduct  />

      </div>
      <Footer/>
    </div>
  )
}

export default CardInfo