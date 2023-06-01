import React from 'react'
import { useTranslation } from 'react-i18next'

const Orders = ({order}) => {

  console.log(order);
  const [t] = useTranslation()
  return (
    <div className='Orders'>
      <div className="card">
  <div className="card__info">
    <h1 className="card__logo">{t("Orders info")}</h1>
    
    </div>
    <h3>
      {t("Total Price :")} {order?.order_all_total} {t('ريال')}
    </h3>
    <h4>
      {t("Count :")}  {order?.order?.length}
    </h4>
 
</div>

    </div>
  )
}

export default Orders