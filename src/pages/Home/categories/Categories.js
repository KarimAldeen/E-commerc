import React from 'react'
import SubTiltle from '../../../components/SubTiltle'
import { useTranslation } from 'react-i18next'
import Category from './Category'
import { motion } from "framer-motion"
function Categories({categories:data}) {
 const [t] = useTranslation()
  return (
    <motion.section className='category-section'
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: [1 ,1.2 ,1] }}
    transition={{ duration: 1.5 }}
    >
        <h1>{t("Categories")}</h1>
      <div className='category-con' >
        
        {
          data.map((category)=>{
            return (
              <Category key={category.id} category={category}/>
          )
        }
          )}
      </div>
    </motion.section>
  )
}

export default Categories