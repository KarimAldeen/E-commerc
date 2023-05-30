import React from 'react'
import Arabic from '../../Images/Logo_Arabic.svg'
import { FaPhoneAlt } from "react-icons/fa";
import Header from '../../components/Utils/Header';
import MidBar from '../../components/Utils/MidBar';
import Footer from '../../layout/Footer/Footer';
import { useTranslation } from 'react-i18next';
const OrderPage = () => {
  const [t] = useTranslation();

  return (
    <div className='OrderPage'>
      <div className='Top_Order'>
      <Header />
        <MidBar />
      </div>
        <div className="card">
  <div className="title">{t("Purchase Reciept")}</div>
  <div className="info">
    <div className="row">
      <div className="col-7">
        <span id="heading " className='Infos'>{t("Date")}</span>
        <br />
        <span id="details " className='Infos'>10 October 2018</span>
      </div>
      <div className="col-5 pull-right">
        <span id="heading " className='Infos'>{t("Order Number")}</span>
        <br />
        <span id="details " className='Infos'>012j1gvs356c</span>
      </div>
    </div>
  </div>
  <div className="pricing">
    <div className="row">
      <div className="col-9">
        <span id="name"className='infos'>{t("Order Cost")}</span>
      </div>
      <div className="col-3">
        <span id="price"className='infos'>299.99 {t("Ryal")} </span>
      </div>
    </div>
    <div className="row">
      <div className="col-9">
        <span id="name"className='infos'>{t("Shipping")}</span>
      </div>
      <div className="col-3">
        <span id="price"className='infos'>£33.00</span>
      </div>
    </div>
  </div>
  <div className="total">
    <div className="row">
      <div className="col-9" />
      <div className="col-3">
        <big className='infos'>£262.99</big>
      </div>
    </div>
  </div>
  <div className="tracking">
    <div className="title">{t("Tracking Order")}</div>
  </div>
  <div className="progress-track">
    <ul id="progressbar">
      <li className="step0 active " id="step1">

        {t("Ordered")}
      </li>
      <li className="step0 active text-center" id="step2">
        {t("Shipped")}
      </li>
      <li className="step0 active text-right" id="step3">
        {t("On the way")}
      </li>
      <li className="step0  text-right" id="step4">
        {t("Delivered")}
      </li>
    </ul>
  </div>
  <div className="footer">
    <div className="row">
      <div className="col-2">
        <img className="img-fluid" src={Arabic} />
      </div>
      <div className="col-10">
        {t("Want any help?")}
        <FaPhoneAlt/>
      </div>
    </div>
  </div>
</div>
<Footer/>

    </div>
  )
}

export default OrderPage