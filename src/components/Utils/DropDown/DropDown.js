import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';

const DropDown = () => {
    const [t, i18n] = useTranslation();
  const [Language, setLanguage] = useState([{Flag : "flag-icon flag-icon-us me-1" , Name : "English"}])
    function Ar(){
        setLanguage([{Flag : "flag-icon flag-icon-sa me-1" , Name : "Arabic" }])
        console.log(Language[0]);
        i18n.changeLanguage('ar');
        document.body.setAttribute('dir', 'rtl'); document.body.classList.add('ar');localStorage.setItem("Lung", "ar");
    } 
    function En(){
        setLanguage([{Flag : "flag-icon flag-icon-us me-1" , Name : "English"}])
        i18n.changeLanguage('en'); 
        document.body.setAttribute('dir', 'ltr'); document.body.classList.remove('ar');localStorage.setItem("Lung", "en") }
     
    
  return (
    <div class="dropdown" style={{borderLeft: "1px solid rgb(201, 201, 201)"
    }}>
    <button class="btn btn-lg dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <span class={`${Language[0]?.Flag}`}></span> <span>{t(`${Language[0]?.Name}`)}</span></button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li onClick={()=>En()}>
            <a class="dropdown-item active" href="#"><span class="flag-icon flag-icon-us me-1"></span> <span>{t("English")}</span></a>
        </li>
        <li onClick={()=>Ar()}>
            <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-sa me-1"></span> <span>{t("Arabic")}</span></a>
        </li>
    </ul>
</div>


  )
}

export default DropDown