import React from 'react'

const MidBar = () => {
    return (
        <div className='MidBar'>
            <div className='MidBar__Left'>
                <h1>Your</h1>
                <h3>Shop</h3>
            </div>
            <div className='MidBar__Center'>
                <form className="example" action="action_page.php">
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit">
                        <i className="fa fa-search" />
                    </button>
                </form>


            </div>

            <div className='MidBar__Right'>
                <a href="" className='Cart'>
                    <i className="fa fa-shopping-cart fa-lg "></i>
                    <span className="badge rounded-pill badge-notification ">4</span>
                </a>

                <a href="" className='Like'>
                    <i className="fa fa-heart fa-lg "></i>
                    <span className="badge rounded-pill badge-notification ">1</span>
                </a>
                
                <a href="" className='Like'>
                    <i className="fa fa-cog fa-lg "></i>
                </a>
            </div>

        </div>
    )
}

export default MidBar