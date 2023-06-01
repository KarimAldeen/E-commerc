import React from 'react'
import Header from '../../components/Utils/Header'
import MidBar from '../../components/Utils/MidBar'
import Footer from '../../layout/Footer/Footer'
import { useTranslation } from 'react-i18next'
import { useGetOrder } from '../../api/order'
import Loader from '../../components/Utils/Loader'
import OrderStatus from '../../components/OrderStatus.js'
import PaymentStatus from '../../components/PaymentStatus'
import { GrView } from "react-icons/gr";
import {history} from '../../history'
import DataTable from 'react-data-table-component';
import DownSec from '../../components/Utils/DownSec';
import CartImage from '../Cart/CartImage';

import { useNavigate } from 'react-router'
import Orders from './Orders'
const AllOrder = () => {
  const [t] = useTranslation();
  const navigate = useNavigate()
  const {data , isLoading} = useGetOrder()
    const order =  data?.order

  if(isLoading){
    return <Loader/>
  }
  
  

const columns = [
   
    {
        name: t('Code'),
        selector: row => row.order_code,
    },
    {
          name: t('Price'),
          selector: row => row.order_total,
      },
      {
        name: t('Order Status'),
        selector: row =>   <OrderStatus  order_status={(row?.order_status || 'pending')} />,
    },
   
    {
      name: t('Created At'),
      cell: row => row?.created_at,
    },
    
];
  return (
    <div className='AllOrder'>
      <div className='Top_Order'>
        <Header />
        <MidBar />
        <DownSec />
      </div>
      <div className='AllOrder_Sectiom'>
        <div className="container mt-5">
          <div className="d-flex justify-content-center row">
            <div className="col-md-10">
              <div className="rounded">
                <div className="table-responsive table-borderless">
        
                  <div className='all-order-table'>
                    
                  <DataTable

                    columns={columns}
                    data={order}
                />
                  </div>
                 <Orders/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default AllOrder