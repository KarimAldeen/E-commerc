import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import Autocomplete from "react-google-autocomplete";
import { useTranslation } from 'react-i18next';

const initialValues ={
  address:'',
  address2:'',
  address3:'',
  address4:'',
}
const CartForm = ({cart}) => {
  const [t] = useTranslation();

  const handelSubmut =(values)=>{

  }
  return (
    <div className="col-md-4 summary">
    <div>
      <h5>
        <b>{t("Order")}</b>
      </h5>
    </div>
    <hr />
    <div className="row">
      <div className="col over-total" style={{ paddingLeft: 0 }}>
        {t("item")} {cart?.cart_items_count}
      </div>
      <div className="col text-right over-total">{t("over-total")}:{cart?.overall_total}</div>
    </div>
     
     <Formik onSubmit={handelSubmut}
     initialValues={initialValues}>
      <Form className='checkout-form'>
        <label>{t("search for place")}</label>
      <Autocomplete
  apiKey={'AIzaSyAIO-8bXHu3gUxOXDpxCr6cz91i20Ex8IA'}
  onPlaceSelected={(place) => {
    console.log(place?.geometry?.location?.lat());
  }}
/>
        <label>{t("zone number")}</label>
        <Field name="zone_number" type="text" />
        <label>{t("additional Info")}</label>
        <Field name="additional_info"      as="textarea" />
       
          <ErrorMessage name="address4" component="div" className="error" />

        <button className="">{t("CHECKOUT")}</button>

      </Form>
     </Formik>
  </div>
  )
}

export default CartForm