import React from 'react'
import { useTranslation } from 'react-i18next'

const Title_Button = () => {
  const [t] = useTranslation()
  return (
    <div className='Title_Button'>
       <button className="cssbuttons-io-button">
  {" "}
  {t("See More")}
  <div className="icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
      />
    </svg>
  </div>
</button>  
    </div>
   

  )
}

export default Title_Button