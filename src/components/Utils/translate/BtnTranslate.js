import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import './BtnTranslate.scss'
const BtnTranslate = () => {
  const [t, i18n] = useTranslation();
function lungAR() { 
  i18n.changeLanguage('ar');
   document.body.setAttribute('dir', 'rtl'); document.body.classList.add('ar');localStorage.setItem("Lung", "ar");}
function lungEN() {
   i18n.changeLanguage('en'); 
   document.body.setAttribute('dir', 'ltr'); document.body.classList.remove('ar');localStorage.setItem("Lung", "en") }

  return (
    <div className='Lung'>
    <label className="rocker rocker-small">
    <input type="checkbox"/>
    <span className="switch-left" onClick={() => lungAR()}>{t("Ar")}</span>
    <span className="switch-right" onClick={() => lungEN()}>{t("En")}</span>
</label>
</div>
  )
}

export default BtnTranslate