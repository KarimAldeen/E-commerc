import React from 'react'
import Card from './Card'
import Fillter from '../../components/Button/Fillter'
import { useTranslation } from 'react-i18next';

const Product_Card = ({data , handlePageChange , page}) => {
  const [t] = useTranslation();

  
  let total_page  =  data?.pagination?.total_pages
  return (
    <div className="col-lg-9 col_Product col_Fillter Right_Side ">
      <div className='header-products'>

        <div className='Card_Top'>
          
          <Fillter/>
          {t('Showing')}  {data?.pagination?.total} {t('Results')}
          </div>
        <div className='button-con'>

          <button className='pre-button' onClick={()=> handlePageChange({
            selected: page-2
          })} 
          disabled={page <=1 ? true :false}
          style={{cursor: page <=1 ?'not-allowed' :"pointer" , background:page<=1 ?"gray" :'#8a1e41'}}
          >
            {t("Perv Page")}
          </button>
          <button className='next-button' onClick={()=> handlePageChange({
            selected: page
          })}
          disabled={page >=total_page ? true :false}
          style={{cursor: page >=total_page ?'not-allowed' :"pointer" , background:page >=total_page ?"gray" :'#8a1e41'}}>
            {t("Next Page")}
          </button>

        </div>
      </div>

      <div className='Product_Card'>
        {data?.data?.map((i, index) => (
          <div key={index} className='card-product-page'>
            <Card  product={i}/>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Product_Card