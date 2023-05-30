import { useTranslation } from "react-i18next"
import { LangNumber } from "./LangNumber";

export const MapTranslate = (array=[],  key , lanCOde='en') =>{

    
   
    if(array.length<=1){
        return ''
    }

    for (let index = 0; index < array.length; index++) {
            if(array[index].locale ==lanCOde)
            {
                return array[index][key]
            }
        
    }
    return array[0][key]
}