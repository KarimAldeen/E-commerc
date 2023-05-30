import React from 'react'
import { useGetHomeStatics } from '../../api/home';
import { baseURL } from '../../api/config';
import { About_the_company, CopyRight, Email, Location1, Location2, Phone } from '../../config/LOCALSTORAGEKEY';
import { useTranslation } from 'react-i18next';

function Footer() {
  const [t] = useTranslation();

  const {data , isLoading , isError } = useGetHomeStatics({id:1} ,
    {
      staleTime: Infinity,
      cacheTime: Infinity
    });


  return (
    
    <div className="Footer">
    
<footer className="footer-distributed">

      <div className="footer-left">

        <h3>{t("Alnokbah")}<span> {t("Alarbi")}</span></h3>

        <p className="footer-links">
          <a href="/" className="link-1">{t("Home")}</a>
          
          <a href="/">{t("Blog")}</a>
        
          <a href="/">{t("Pricing")}</a>
        
          <a href="/">{t("About")}</a>
          
          <a href="/">{t("Faq")}</a>
          
          <a href="/">{t("Contact")}</a>
        </p>

        <p className="footer-company-name">{t(`${CopyRight}`)}</p>
      </div>

      <div className="footer-center">

        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>{t(`${Location1}`)}</span> {t(`${Location2}`)}</p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>{Phone}</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p><a href={Email}>{Email}</a></p>
        </div>

      </div>

      <div className="footer-right">

        <p className="footer-company-about">
          <span>{t("About the company")}</span>
          {t(`${About_the_company}`)}
        </p>

        <div className="footer-icons">
        {
          data?.social_medias?.map((media)=>(
            <div key={media?.id}>
                <a href={media?.social_media_link}>
                  <img  alt='media' src={baseURL+media?.social_media_image} style={{
                    width:"40px"
                  }}/>
                </a>
            </div>
          ))
        }
          
          

        </div>

      </div>

    </footer>
    </div>
  )
}

export default Footer