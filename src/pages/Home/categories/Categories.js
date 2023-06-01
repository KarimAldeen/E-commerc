import React from 'react'
import SubTiltle from '../../../components/SubTiltle'
import { useTranslation } from 'react-i18next'
import Category from './Category'
import { motion } from "framer-motion"
import { LangNumber } from '../../../utils/LangNumber'
function Categories({categories:data}) {
 const [t] = useTranslation()
 const lang =LangNumber()
  return (
    <motion.section className='category-section Category-home'
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: [1 ,1.2 ,1] }}
    transition={{ duration: 1.5 }}
    >
       
      <SubTiltle title={t("Categories")}/>
      <div className='category-con' >
        
        {
          data.map((category)=>{
            return (
              <Category key={category.id} category={category} lang={lang}/>
          )
        }
          )}
      </div>
    </motion.section>
  )
}

export default Categories