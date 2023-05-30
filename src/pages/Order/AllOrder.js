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

import { useNavigate } from 'react-router'
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
      name: t('Payment Methode'),
      selector: row => <PaymentStatus payment_status='cash' />,
    },
    {
      name: t('Created At'),
      cell: row => row?.created_at,
    },
    {
      name: ' ',
      cell:(row)=> <>
    <GrView
        onClick={() => navigate(`/order/${row?.id}`)}
        size={22}
        style={{ cursor: "pointer" }}
    />
      </>
    }
];
  return (
    <div className='AllOrder'>
      <div className='Top_Order'>
        <Header />
        <MidBar />
      </div>
      <div className='AllOrder_Sectiom'>
        <div className="container mt-5">
          <div className="d-flex justify-content-center row">
            <div className="col-md-10">
              <div className="rounded">
                <div className="table-responsive table-borderless">
                  {/* <table className="table">
                    <thead>
                      <tr  style={{textAlign:"center"}}>
                        <th className="text-center">

                        </th>
                        <th>{t("Order")} </th>
                        <th>{t("Payment Method")} </th>
                        <th>{t("status")}</th>
                        <th>{t("Total")}</th>
                        <th>{t("Created")}</th>
                        <th> &&</th>
                      </tr>
                    </thead> */}

                    {/* {
                      order?.map((i, index) => (
                        <tbody key={index} className="table-body">
                          <tr className="cell-1" style={{textAlign:"center"}}>
                            <td className="text-center">
                            </td>
                            <td>{i?.order_code}</td>
                            <td ><PaymentStatus payment_status='cash' /></td>
                            <td>
                            <OrderStatus  order_status={(i?.order_status || 'pending')} />
                            </td>
                            <td>{i?.order_total}</td>
                            <td>{i?.created_at}</td>
                            <td>   <GrView
                                  onClick={() => navigate(`/order/${i?.id}`)}
                                  size={22}
                                  style={{ cursor: "pointer" }}
                              />
                    </td>
                          </tr>

                        </tbody>

                      ))
                    } */}

                  {/* </table> */}
                  <div className='all-order-table'>
                    
                  <DataTable

                    columns={columns}
                    data={order}
                />
                  </div>
                  <div className='tfoot'>
                    <div className='tfoot_in'><div>{t("Order Count :")}</div> <div>{order?.length}</div></div>
                    <div className='tfoot_in'><div>{t("Total :")}</div> <div>{data?.order_all_total}</div></div>
                    <div className='tfoot_in'><div></div> <div></div></div>
                  </div>
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