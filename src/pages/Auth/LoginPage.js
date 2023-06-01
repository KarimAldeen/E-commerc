import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Field, ErrorMessage, Form, useFormikContext } from 'formik';

import Footer from '../../layout/Footer/Footer';
import Header from '../../components/Utils/Header';
import MidBar from '../../components/Utils/MidBar';
import * as Yup from 'yup';
import { useLogin, useRegister, useSendCode } from '../../api/auth';
import { LoadingButton } from '../../components/LoadingButton';
import {history} from '../../history'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { login, register } from '../../redux/AuthReducer';


const LoginPage = () => {
  const formik = useFormikContext()

  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [ phone , setPhone] = useState()
  const {mutate:mutateLogin  , isLoading:LoadingLogin ,isSuccess:SuccessLogin , data:dataLogin ,status ,isError ,error } = useLogin()

  const {mutate:SendCode} =useSendCode()
  const {mutate  , isLoading ,isSuccess , data} = useRegister()
  const signUp = () => {
    const container = document.getElementById('container');
    container.classList.add('right-panel-active');
  };

  const signIn = () => {
    const container = document.getElementById('container');
    container.classList.remove('right-panel-active');
  };
 


  const handleSubmit = (values) => {
   
    mutate(values)

  };

  
  useEffect(()=>{
   
    if(isError && error?.response?.status ===402){
      dispatch(register({
        phone
      }))

      SendCode({
        phone
      })
      navigate('/verification');
    }
  },[isError ,navigate  , dispatch , error , SendCode])


  useEffect(()=>{
   
    if(SuccessLogin){
  
     dispatch(login(dataLogin?.data))
      navigate('/');
    }
  },[SuccessLogin ,navigate ,dataLogin , dispatch])

  useEffect(()=>{
   
    if(isSuccess){
       
      dispatch(register(data?.data))
      navigate('/verification');
    }
  },[isSuccess ,navigate , data , dispatch])
  const validationSchema = Yup.object().shape({
    full_name: Yup.string().required('required'),
    phone: Yup.string().required('required'),
    password: Yup.string().required('required'),
    password_confirmation: Yup.string()
      .required('required')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  });
  const validationSchema2 = Yup.object().shape({
   
    phone: Yup.string().required('required'),
    password: Yup.string().required('required'),
    
  });
  const handleSubmit2 = (values) =>{
    setPhone(values?.phone)
    mutateLogin(values)
  }
  return (
    <>
      <Header />
      <MidBar />
      <div className="LoginPage">
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <Formik
              initialValues={{
                full_name: '',
                phone: '',
                password: '',
                password_confirmation: '',
              }}
           
              validationSchema={validationSchema}
                
              onSubmit={handleSubmit}
            >
              {({ handleSubmit }) => (
                <form className="register-form" onSubmit={handleSubmit}>
                  <h1>{t("Create Account")}</h1>

                  <span className="Sign_in">{t("or use your email for registration")}</span>

                  <label htmlFor="full_name">{t('full_name')}</label>
                  <Field type="text" id="full_name" name="full_name" />
                  <ErrorMessage name="full_name" component="div" className="error" />

                  <label htmlFor="phone">{t('phone')}</label>
                  <Field type="text" id="phone" name="phone" />
                  <ErrorMessage name="phone" component="div" className="error" />

                  <label htmlFor="password">{t('password')}</label>
                  <Field type="password" id="password" name="password" />
                  <ErrorMessage name="password" component="div" className="error" />

                  <label htmlFor="password_confirmation">{t('confirm_password')}</label>
                  <Field type="password" id="password_confirmation" name="password_confirmation" />
                  <ErrorMessage name="password_confirmation" component="div" className="error" />

                  <h3 onClick={signIn} className="Pointer">{t("Have Account")}?</h3>

                  <LoadingButton
                            type="submit"
                            color="primary"
                            isLoading={isLoading}
                            className="M_Top"
                        >
                            {t("Sign Up")}
                  </LoadingButton>
       
                </form>
              )}
            </Formik>
          </div>

          <div className="form-container sign-in-container">
            
              <Formik 
               initialValues={{
                phone: '',
                password: '',
              
              }}
              validationSchema={validationSchema2}
              onSubmit={handleSubmit2}
              >

      <Form >
      <h1 className="Sign_in">Sign in</h1>

      <span>or use your account</span>

        <label htmlFor="phone">{t('phone')}</label>
          <Field type="text"  name="phone"  />
          <ErrorMessage name="phone" component="div" className="error" />

          
          <label htmlFor="password">{t('password')}</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" className="error" />

          <h3 onClick={()=>navigate('/verification')} style={{marginBottom:"10px" , marginTop:'10px'}} className="Pointer">{t("Verify Your Account")}</h3>

      <h3 onClick={signUp} className="Pointer">{t("Create New Account?")}</h3>
           <LoadingButton
                            type="submit"
                            color="primary"
                            isLoading={LoadingLogin}
                            className="M_Top M2_Top"
                        >
                            {t("Sign in")}
                 </LoadingButton>
           </Form> 
             </Formik>
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>{t("Welcome Back!")}</h1>
                <p>{t("To keep connected with us, please login with your personal info")}</p>
                <button className="ghost" id="signIn" onClick={signIn}>
                  {t("Sign In")}
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>{t("Hello, Friend!")}</h1>
                <p>{t("Enter your personal details and start your journey with us")}</p>
                
                <button className="ghost" id="signUp" onClick={signUp}>
                  {t("Sign Up")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LoginPage;