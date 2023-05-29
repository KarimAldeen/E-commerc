import React from 'react'
import { FaAngleDown,FaPhoneAlt } from "react-icons/fa";
import HomeSec from '../../Images/HomeSec.jpg'
import { baseURL } from '../../api/config';
const HomeSectin = ({sliders , categories}) => {
  return (
    <div className='HomeSectin'>
        <div class="row">
                <div class="col-lg-3">
                <div className="btn-group open">
                <button className="btn Drop_Btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true" >
                    <i className="fa fa-bars"></i>
                    <h3> All Category</h3>
                </button>
                <ul className="dropdown-menu">
                    {categories?.map((i,index)=>(
                    <li key={index}>{i?.id}</li>
                    )
                    )}
                  
                    
                </ul>
            </div>
                </div>
                <div className="col-lg-9">
                    <div className='Top_Section'>
                    <form className="example" action="action_page.php">
                        <div className='AllCategories'>
                        <h3 > All Product    </h3>
                        {/* <FaAngleDown/> */}
                        </div>

                    <input type="text" placeholder=" What Do You Need?" name="search" />
                    <button type="submit">
                        Search
                    </button>
                </form>
                <div className='Top_Section_Right'>
                    <div className='Phone1'>
                <FaPhoneAlt/>
                </div>
                <div className='Phone2'>
                <h5>+963-951968994</h5>
                
                </div>
                </div>
                    </div>
                    <div className='Button_Section'>
                            <img className='HomeSec' alt='' src={baseURL + sliders?.slider_link} />
                        </div>
                </div>
                </div> 
                   </div>
  )
}

export default HomeSectin