import { LangNumber } from "./LangNumber"
import { MapTranslate } from "./mapTranlate"




export const SelectOptionCategory = (array =[])=>{
    const LangCode = LangNumber()
    return array.map(c => ({
        value:c.id,
        label:MapTranslate(c?.category_translations , 'name' , LangCode) 
    }))
}