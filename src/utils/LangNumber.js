import { useTranslation } from "react-i18next"


export const LangNumber = ()=>{
    const {i18n} = useTranslation()


    return i18n.language =='en' ?0 :1
}