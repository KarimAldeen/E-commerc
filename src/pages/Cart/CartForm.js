import { ErrorMessage, Field, Form, Formik, useFormikContext } from 'formik'
import React from 'react'
import Autocomplete from "react-google-autocomplete";
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useAddCheckout } from '../../api/checkout';

const initialValues = {
  lat: '',
  long: '',
  zone_number: '',
  street: '',
  building_number:""
}
const validationSchema = Yup.object().shape({
   
  lat: Yup.string().required('required'),
  long: Yup.string().required('required'),
  zone_number:Yup.string().required('required'),
  
});
const CartForm = ({ data }) => {
  const [t] = useTranslation();
  const {mutate} = useAddCheckout()
  const handelSubmut = (values) => {
    values['payment_method'] = 'cash_on_delivery'
    values['building_number'] =   values['building_number'] + ''

      mutate(values)
  }
  return (
    <div className="col-md-4 summary">
      <div>
        <h1>
          <b>{t("Order Details")}</b>
        </h1>
      </div>
      <div className="row">
        <div className="col over-total">
        </div>
      </div>

      <Formik onSubmit={handelSubmut}
        initialValues={initialValues}
        validationSchema={validationSchema}
        >
          {
            (formik)=>(
              <Form className='checkout-form'>
              <label className='white'>{t("search for place")}</label>
              <Autocomplete
                apiKey={'AIzaSyAOcvqeLKcp-lhse3S-S9SAOgDuP2D_mB4'}
                onPlaceSelected={(place) => {
                  formik.setFieldValue('lat' ,place?.geometry?.location?.lat()+"")
                  formik.setFieldValue('long' ,place?.geometry?.location?.lng()+"")

                }}
              />
              <ErrorMessage name="lat" component="div" className="error" />
              <label className='white'>{t("zone number")}</label>
              <Field name="zone_number" type="number" />
              <ErrorMessage name="zone_number" component="div" className="error" />
    
              <label className='white'>{t("building_number")}</label>
              <Field name="building_number" as="input"type="number"  />
              <ErrorMessage name="building_number" component="div" className="error" />
    
              <label className='white'>{t("street")}</label>
              <Field name="street" as="input" />
              <ErrorMessage name="street" component="div" className="error" />
              <div>
                <ul>
                  <li>{t('Sub Total')}<span>{data?.sub_total}</span></li>
                  <li>{t("Delivery Fees")} <span>{data?.delivery_fees}</span></li>
                  <li>{t("Total")} <span>{data?.overall_total}</span></li>
                </ul>
              </div>
              <button className="" type='submit'>{t("CHECKOUT")}</button>
    
            </Form>
            )
          }
       
      </Formik>
    </div>
  )
}

export default CartForm