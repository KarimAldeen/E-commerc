import React from 'react'
import { useTranslation } from 'react-i18next'

const Orders = () => {
  const [t] = useTranslation()
  return (
    <div className='Orders'>
      <div className="card">
  <div className="card__info">
    <h1 className="card__logo">{t("Orders info")}</h1>
    
    </div>
    <h3>
      {t("Total Price :")} 211$
    </h3>
    <h4>
      {t("Count :")} 2
    </h4>
 
</div>

    </div>
  )
}

export default Orders