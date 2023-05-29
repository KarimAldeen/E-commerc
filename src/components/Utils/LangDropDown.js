import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";

import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import languageConfig from "../../config/langConfig";
import { useTranslation } from "react-i18next";

const LanguageDropdown = ({ menuDirection = "right", ...props }) => {
  const [t, i18n] = useTranslation();
  const [langDropdown, setLangDropdown] = useState(false);
  const handleLangDropdown = () =>{ setLangDropdown(!langDropdown);} 
  function lungAR() {
    //  i18n.changeLanguage('ar');
     document.body.setAttribute('dir', 'rtl');
     document.body.classList.add('ar');
     localStorage.setItem("Lung", "ar");}
  
  return (
    <Dropdown
      // tag="li"
      {...props}
      className="dropdown-language nav-item"
      isOpen={langDropdown}
      toggle={handleLangDropdown}
      data-tour="language"
    >
      <DropdownToggle tag="a" className="nav-link">
        <ReactCountryFlag
          className="country-flag"
          countryCode={languageConfig[i18n.language].countryCode}
          svg
        />
        <span className="d-sm-inline-block d-none text-capitalize align-middle ml-50">
          {languageConfig[i18n.language].name}
        </span>
      </DropdownToggle>
      <DropdownMenu right={menuDirection === "right"}>
        {Object.keys(languageConfig).map((locale) => {
          const langObj = languageConfig[locale];

          return (
            <DropdownItem
              key={locale}
              tag="a"
              onClick={() => lungAR()}            >
              <ReactCountryFlag
                className="country-flag"
                countryCode={langObj.countryCode}
                svg
              />
              <span className="ml-1">{langObj.name}</span>
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};


export default LanguageDropdown;
