import React from 'react'
import { useGetHomeStatics } from '../../api/home';
import { baseURL } from '../../api/config';
import { About_the_company, CopyRight, Email, Location1, Location2, Phone } from '../../config/LOCALSTORAGEKEY';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LangNumber } from '../../utils/LangNumber';

function Footer() {
  const [t] = useTranslation();

  const state = useSelector(state => state.auth)
  const Lang = LangNumber()
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
          {/* <a href="/" className="link-1">{t("Home")}</a> */}
          
          
        </p>

        <p className="footer-company-name">{t(`${CopyRight}`)}</p>
      </div>

      <div className="footer-center">

        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>{t(`${state?.Location1}`)}</span></p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>{state?.Phone}</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>{state?.email}</p>
        </div>

      </div>  

      <div className="footer-right">

        <p className="footer-company-about">
          <span>{t("About the company")}</span>

          <div  
          
             dangerouslySetInnerHTML={{ __html: (state?.About_the_company || [])?.find(e => e.local == Lang)?.value }}
              />
       
        </p>

        <div className="footer-icons" style={{display:'flex ', justifyContent:'space-around' , flexWrap:"wrap"}}>
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