import React from 'react'
import Header from '../../components/Utils/Header'
import MidBar from '../../components/Utils/MidBar'
import { FaShoppingBasket ,FaDollarSign} from "react-icons/fa";

const Product = () => {
    return (
        <div className='Product'>
            <div className='Top_Product'>
                <Header />
                <MidBar />
            </div>


            <div className='Down_Product'>
                <div className="row">
                    <div className="col-lg-3 col_Product">
                        <div className='col_Product_Top'>
                            {/* <FaShoppingBasket /> */}
                            <h4>Search in All Prouct</h4>
                        </div>
                        <div>
                            <div className="slidecontainer">
                                <div className='slidecontainer_Top'><h4>Price</h4> <FaDollarSign/></div>
                                <input
                                    type="range"
                                    min={1}
                                    max={100}
                                    defaultValue={50}
                                    className="slider"
                                    id="myRange"
                                />
                            </div>

                        </div>
                        <div className='col_Product_Down'>
                            <h4>Category

                            </h4>

                        </div>

                    </div>
                    <div className="col-lg-9 col_Product">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product