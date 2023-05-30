import React from 'react'
import contact from '../../Images/Contact.svg'
import Page from '../../layout/Page'
import { useTranslation } from 'react-i18next';
const ContactUs_Page = () => {
  const [t] = useTranslation();

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
            <img
              src={contact}
              alt="Immage"
              className="img-fluid image-contact-us"
            />
          </p>
        </div>
        <div className="col-md-6">
          <form
            className="mb-5"
            
            id="contactForm"

            >
            <div className="row">
              <div className="col-md-12 form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder={t("Your name")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder={t("Email")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder={t("Subject")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  cols={30}
                  rows={7}
                  placeholder={t("Write your message")}
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <input
                  type="submit"
                  defaultValue="Send Message"
                  value={t('Submit')}
                    style={{margin:'10px'}}
                  className="btn btn-primary rounded-0 py-2 px-2 button-submit"
                />
                <span className="submitting" />
              </div>
            </div>
          </form>
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