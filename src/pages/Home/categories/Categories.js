import React from 'react'
import SubTiltle from '../../../components/SubTiltle'
import { useTranslation } from 'react-i18next'
import Category from './Category'
import { motion } from "framer-motion"
function Categories({categories:data}) {
 const [t] = useTranslation()
  return (
    <motion.section className='category-section'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.4 }}
    >
        <SubTiltle title={t("Categories")} show_more={false}/>

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