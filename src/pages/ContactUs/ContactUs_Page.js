import React, { useEffect } from 'react'
import contact from '../../Images/Contact.svg'
import Page from '../../layout/Page'
import { useTranslation } from 'react-i18next';
import Contact_Svg from './Contact_Svg';
import { useEmailJS } from '../../Extensions/email/useEmailSend';
import { useSendContactUs } from '../../api/contact_Us';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
   
  name: Yup.string().required('required'),
  email: Yup.string().email().required('required'),
  subject:Yup.string().required('required'),
  message:Yup.string().required('required'),

});


const ContactUs_Page = () => {
  const [t] = useTranslation();


  const {mutate , isSuccess} = useSendContactUs()

 
  const handelSubmit = (values ,{ resetForm }) =>{
    mutate(values);

    resetForm()

    document.getElementById('message').value =''
  } 
  return (

    <Page>
   <div className='ContactUs_Page'>
<div className="container">
  <div className="row justify-content-center">
    <div className="col-md-10">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3 className="heading mb-4">{t("Let's talk about everything!")}</h3>
      
          <p>
            {/* <img
              src={contact}
              alt="Immage"
              className="img-fluid image-contact-us"
            /> */}
            <Contact_Svg/>
          </p>
        </div>
        <div className="col-md-6">
          <Formik
          initialValues={{
            name:"",
            email:"",
            message:"",
            subject:""
          }}
          onSubmit={handelSubmit}
          validationSchema={validationSchema}
          >
            {
              (formik)=>(
                <Form   className="mb-5"
                id="contactForm">
    
          <div className="row">
                  <div className="col-md-12 form-group">
                    <Field
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder={t("Your name")}
                    />
                       <ErrorMessage name={'name'}>
                      {(msg) => <span className="error">{t(msg)}</span>}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <Field
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder={t("Email")}
                    />
                     <ErrorMessage name={'email'}>
                      {(msg) => <span className="error">{t(msg)}</span>}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <Field
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder={t("Subject")}
                    />
                     <ErrorMessage name={'subject'}>
                      {(msg) => <span className="error">{t(msg)}</span>}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      cols={30}
                      onChange={(e)=>formik.setFieldValue('message', e.target.value)}
                      rows={7}
                      placeholder={t("Write your message")}
                      defaultValue={""}
                    />
                     <ErrorMessage name={'message'}>
                      {(msg) => <span className="error">{t(msg)}</span>}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <input
                      type="submit"
                      onClick={()=>{
                       
                      }}
                      defaultValue="Send Message"
                      value={t('Submit')}
                        style={{margin:'10px'}}
                      className="btn btn-primary rounded-0 py-2 px-2 button-submit"
                    />
                    <span className="submitting" />
                  </div>
                </div>
                </Form>
              )
            }
          
          </Formik>
         

          <div id="form-message-warning mt-4" />
          <div id="form-message-success">{t("Your message was sent, thank you!")}</div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
    </Page>
 
  )
}

export default ContactUs_Page