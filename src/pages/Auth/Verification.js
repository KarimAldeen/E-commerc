import React from 'react'
import privacy from '../../Images/privacy.svg'

const Verification  = () => {
  return (
    <div className='Verification'>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row justify-content-center">
            <div className="col-md-6">
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
        
        <input
          className="m-2 text-center form-control rounded"
          type="text"
          id="first"
          maxLength={1}
        />
        <input
          className="m-2 text-center form-control rounded"
          type="text"
          id="second"
          maxLength={1}
        />
        <input
          className="m-2 text-center form-control rounded"
          type="text"
          id="third"
          maxLength={1}
        />
        <input
          className="m-2 text-center form-control rounded"
          type="text"
          id="fourth"
          maxLength={1}
        />
        <input
          className="m-2 text-center form-control rounded"
          type="text"
          id="fifth"
          maxLength={1}
        />
        <input
          className="m-2 text-center form-control rounded"
          type="text"
          id="sixth"
          maxLength={1}
        />
      </div>
      <div className="mt-4">
        
        <button className="btn btn-danger px-4 validate">Validate</button>
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
    
    
        </div>
  )
}

export default Verification 