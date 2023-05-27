import React from 'react'
import { FaWindowClose, FaDollarSign } from "react-icons/fa";

const Product_Fillter = () => {
    const departments = ["", "FreshMeat", "Vegetables", "Fruit", "Fresh", "Ocean", "Butter", "Fastfood", "Fresh", "Papayaya", "Oatmeal", "Bananas"]
    function Close(){
        const Left_Side = document.getElementById('Left_Side');
        Left_Side.classList.remove("FillterON");
        }
    return (
        <div className="col-lg-3 col_Product  fillter-con Left_Side position-st" id='Left_Side'>
            <div className="close_Fillter"onClick={()=>Close()} >
                <i >  <FaWindowClose  /></i>
          
            </div>
                           

            <div className='col_Product_Top'>
                <h4>Search in All Prouct</h4>
            </div>

            <div>
                <div className="slidecontainer">
                    <div className='col_Product_Mid'>
                        <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>

                    </div>
                    {/* <div className='slidecontainer_Top'><h4>Price</h4></div>
                    <input
                        type="range"
                        min={1}
                        max={100}
                        defaultValue={50}
                        className="slider"
                        id="myRange"
                    /> */}
                </div>

            </div>

            <div className='col_Product_Down'>
                <div className='Category_sel'>
                    <h4>Category</h4>
                    <select class="form-select">
                        {departments?.map((i, index) => (<option key={index}>{i}</option>))}
                    </select>
                </div>
                <div className='Category_sel'>
                    <h4>SubCategory</h4>
                    <select class="form-select">
                        {departments?.map((i, index) => (<option key={index}>{i}</option>))}
                    </select>
                </div>
                <div className='Category_sel'>
                    <h4>SubSubCategory</h4>
                    <select class="form-select">
                        {departments?.map((i, index) => (<option key={index}>{i}</option>))}
                    </select>
                </div>
                <div className='Button'>
                    <button className="btn-donate">
                        Fillter It Now
                    </button>
                </div>

            </div>
 
        </div>
    )
}

export default Product_Fillter