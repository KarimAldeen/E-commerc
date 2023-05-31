import React from 'react';
import Arabic from '../../Images/Logo_Arabic.svg';
import { FaPhoneAlt } from "react-icons/fa";
import Header from '../../components/Utils/Header';
import MidBar from '../../components/Utils/MidBar';
import Footer from '../../layout/Footer/Footer';
import { useTranslation } from 'react-i18next';
import { useGetSingleOrder } from '../../api/order';
import { useParams } from 'react-router';
import Loader from '../../components/Utils/Loader';
import { Phone } from '../../config/LOCALSTORAGEKEY';

const OrderPage = () => {
  const [t] = useTranslation();
  const { id } = useParams();
  const { data, isLoading } = useGetSingleOrder({ order_id: id });

  console.log(data);

  if (isLoading)
    return <Loader />;

  const orderStatus = data?.order_status; // Replace 'status' with the actual property name

  const getOrderStatus = (step) => {
    const orderStatuses = {
      ordered: 0,
      pending: 1,
      delivering: 2,
      delivered: 3
    };

    const currentStep = orderStatuses[orderStatus] || 0;

    if (step  <= currentStep) {
      return 'active';
    } else if (step < currentStep) {
      return 'completed';
    }

    return '';
  };

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
              <span id="heading" className='Infos'>{t("Date")}</span>
              <br />
              <span id="details" className='Infos'>{data?.created_at}</span>
            </div>
            <div className="col-5 pull-right">
              <span id="heading" className='Infos'>{t("Order Number")}</span>
              <br />
              <span id="details" className='Infos'>{data?.order_code}</span>
            </div>
          </div>
        </div>
        <div className="pricing">
          <div className="row">
            <div className="col-9">
              <span id="name" className='infos'>{t("Order Cost")}</span>
            </div>
            <div className="col-3">
              <span id="price" className='infos'>{data?.order_total} {t("ريال")}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-9">
              <span id="name" className='infos'>{t("Shipping")}</span>
            </div>
            <div className="col-3">
              <span id="price" className='infos'>0</span>
            </div>
          </div>
        </div>
        <div className="total">
          <div className="row">
            <div className="col-9" />
            <div className="col-3">
              <big className='infos'>{data?.order_total}</big>
            </div>
          </div>
        </div>
        <div className="tracking">
          <div className="title">{t("Tracking Order")}</div>
        </div>
        <div className="progress-track">
          <ul id="progressbar">
            <li className={`step0 ${getOrderStatus(0)}`} id="step1">
              {t("Ordered")}
            </li>
            <li className={`step0 ${getOrderStatus(1)} text-center`} id="step2">
              {t("pending")}
            </li>
            <li className={`step0 ${getOrderStatus(2)} text-right`} id="step3">
              {t("Delivering")}
            </li>
            <li className={`step0 ${getOrderStatus(3)} text-right`} id="step4">
              {t("Delivered")}
            </li>
          </ul>
        </div>
        <div className="footer">
          <div className="row">
            <div className="col-2">
              <img className="img-fluid" src={Arabic} alt='LOGO' />
            </div>
            <div className="col-10">
              {t("Want any help?")}
              <FaPhoneAlt />
              {Phone}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPage;