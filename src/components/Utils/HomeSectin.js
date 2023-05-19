import React from 'react'
import { FaAngleDown,FaPhoneAlt } from "react-icons/fa";
import HomeSec from '../../Images/HomeSec.jpg'
const HomeSectin = () => {
    const departments = [ "FreshMeat","Vegetables","Fruit","Fresh","Ocean","Butter","Fastfood","Fresh","Papayaya","Oatmeal","Bananas"]
  return (
    <div className='HomeSectin'>
        <div class="row">
                <div class="col-lg-3">
                <div className="btn-group open">
                <button className="btn Drop_Btn btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true" >
                    <i className="fa fa-bars"></i>
                    <h3> All Departments</h3>
                </button>
                <ul className="dropdown-menu">
                    {/* <li className="dropdown-header">All Food Type</li> */}
                    {departments?.map((i,index)=>(
                    <li><a href="#" key={index} >{i}</a></li>
                    )
                    )}
                  
                    {/* <li className="divider"></li> */}
                    
                </ul>
            </div>
                </div>
                <div class="col-lg-9">
                    <div className='Top_Section'>
                    <form className="example" action="action_page.php">
                        <div className='AllCategories'>
                        <h3 > All Categories    </h3>
                        <FaAngleDown/>
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
                <h4>+65 11.188.888</h4>
                <h6>support 24/7 time</h6>
                </div>
                </div>
                    </div>
                    <div className='Button_Section'>
                            <img className='HomeSec' alt='' src={HomeSec} />
                        </div>
                </div>
                </div> 
                   </div>
  )
}

export default HomeSectin