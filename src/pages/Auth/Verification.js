import React, { useEffect } from 'react'
import privacy from '../../Images/privacy.svg'
import { useDispatch, useSelector } from 'react-redux'
import { Field, Formik } from 'formik'
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '../../components/LoadingButton';
import { useVirfayCode } from '../../api/auth';
import { useNavigate } from 'react-router';
import Header from '../../components/Utils/Header';
import MidBar from '../../components/Utils/MidBar';
import Footer from '../../layout/Footer/Footer';
import { verify } from '../../redux/AuthReducer';
const validationSchema = Yup.object().shape({
  first: Yup.string().required('Required'),
  second: Yup.string().required('Required'),
  third: Yup.string().required('Required'),
  fourth: Yup.string().required('Required'),
  fifth: Yup.string().required('Required'),
  sixth: Yup.string().required('Required'),
});
const  initialValues =  {
  first: '',
  second: '',
  third: '',
  fourth: '',
  fifth: '',
  sixth: '',
} 
const Verification  = () => {

  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const {mutate , isLoading  , isSuccess , data} = useVirfayCode()
  const {t} = useTranslation()


  const handleSubmit = (values)=>{

    const {first , second , third , fourth , fifth , sixth} = values
  let code = first + second + third + fourth +fifth + sixth   
  mutate({
    phone:user?.phone ,
    code
  })

}
useEffect(()=>{

  if(isSuccess){
    dispatch(verify(data?.data))
    navigate('/')

  }
  
},[isSuccess , navigate] )

  return (
    <>
            <Header/>
          <MidBar/>
          <div className='Verification'>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row justify-content-center">
            <div className="col-md-6 none-phone" >
              <h3 className="heading mb-4">Let's check your privacy !</h3>
          
              <p>
                <img
                  src={privacy}
                  alt="Immage"
                  className="img-fluid image-contact-us"
                />
              </p>
            </div>
            <div className="col-md-6">
            <div className="container height-100 d-flex justify-content-center align-items-center">
  
  <div className="position-relative">
    
    <div className="card p-2 text-center">
      
      <h6>
        Please enter the code <br /> 
      </h6>
      <div>
        
        <span>A code has been sent to</span>
      </div>
      <div
        id="otp"
        className="inputs d-flex flex-row justify-content-center mt-2"
      >
         <Formik
         
              initialValues={initialValues}
           
              validationSchema={validationSchema}
                
              onSubmit={handleSubmit}
            >
              {({ handleSubmit }) => (
              
           <form onSubmit={handleSubmit} className=''>
              <div className='form-vir'>
              <Field
                className="m-2 text-center form-control rounded"
                type="text"
                id="first"
                maxLength={1}
                name='first'
              />
              <Field
                className="m-2 text-center form-control rounded"
                type="text"
                id="second"
                maxLength={1}
                name='second'
              />
              <Field
                className="m-2 text-center form-control rounded"
                type="text"
                id="third"
                name='third'
                maxLength={1}
              />
              <Field
                className="m-2 text-center form-control rounded"
                type="text"
                name='fourth'
                id="fourth"
                maxLength={1}
              />
              <Field
                className="m-2 text-center form-control rounded"
                type="text"
                id="fifth"
                name='fifth'
                maxLength={1}
              />
              <Field
                className="m-2 text-center form-control rounded"
                type="text"
                name='sixth'
                id="sixth"
                maxLength={1}
              />
              </div>
  
               
                <LoadingButton
                            type="submit"
                            color="primary"
                            isLoading={isLoading}
                            className="M_Top"
                        >
                           Validate
                  </LoadingButton>
                </form>
                
              )}
            </Formik>
          </div>

      
      </div>
  
    </div>
    <div className="card-2">
      
      <div className="content d-flex justify-content-center align-items-center">
        

          </div>
        </div>
      </div>
    </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    <Footer/>
    </>
   
    
        
  )
}

export default Verification 