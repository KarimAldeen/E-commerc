import React from 'react'
import Header from '../../components/Utils/Header'
import MidBar from '../../components/Utils/MidBar'
import Footer from '../../layout/Footer/Footer'
import { useTranslation } from 'react-i18next'

const AllOrder = () => {
  const [t] = useTranslation();

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
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="text-center">

                        </th>
                        <th>{t("Order")} </th>
                        <th>{t("place Name")} </th>
                        <th>{t("status")}</th>
                        <th>{t("Total")}</th>
                        <th>{t("Created")}</th>
                      </tr>
                    </thead>

                    {
                      [1, 2, 3, 4, 5]?.map((i, index) => (
                        <tbody className="table-body">
                          <tr className="cell-1">
                            <td className="text-center">
                            </td>
                            <td>13487</td>
                            <td>Jeser Alheat </td>
                            <td>
                              <span className="badge rejicted">rejicted</span>
                            </td>
                            <td>$200.00</td>
                            <td>Today</td>

                          </tr>

                        </tbody>

                      ))
                    }

                  </table>
                  <div className='tfoot'>
                    <div className='tfoot_in'><div>{t("Order Count :")}</div> <div> 6</div></div>
                    <div className='tfoot_in'><div>{t("Total :")}</div> <div>20000</div></div>
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