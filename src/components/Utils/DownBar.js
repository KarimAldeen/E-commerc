import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { FaUserCircle } from "react-icons/fa";
const DownBar = () => {
    // const [t] = useTranslation();
  
    return (
        <div className='DownBar'>
            <div className="btn-group">
                <button className="btn Drop_Btn btn-lg dropdown-toggle" type="button" data-toggle="dropdown"  >
                    <i className="fa fa-bars"></i>
                    <h3> All Categories</h3>
                </button>
                <ul className="dropdown-menu">
                    <li className="dropdown-header">Honey Type</li>
                    <li><a href="#">Honey1</a></li>
                    <li><a href="#">Honey2</a></li>
                    <li><a href="#">Honey3</a></li>
                    <li className="divider"></li>
                    <li className="dropdown-header">Cotton Type</li>
                    <li><a href="#">Cotton2</a></li>
                </ul>
            </div>
            <nav className='NavBar'>
               <form className="example" action="action_page.php">
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit">
                        <i className="fa fa-search" />
                    </button>
                </form>

            </nav>
        <div className='Login'>
        <a href="" className='Like'>
         <FaUserCircle/>
        </a>
        <div className='In-Login'>
            <p>Sign-In</p>
            <h2>Account</h2>
        </div>
        </div>
        </div>
    )
}

export default DownBar