import React, { useEffect, useRef, useState } from 'react'
import { FaWindowClose, FaDollarSign } from "react-icons/fa";
import { useSelector } from 'react-redux';

import SelectCategory from '../../components/SelectCategory';
import { useTranslation } from 'react-i18next';
import { SelectOptionCategory } from '../../utils/SelectOption';
import { memo } from "react";
import { useMemo } from 'react';
import SearchFilter from './SearchFilter';
import { useLocation } from 'react-router';

const Product_Fillter = ({setFilterObject ,category_id , handlePageChange}) => {
    const {category , subCategory , subSubCategory} = useSelector(state => state.category)
    const input = useRef(null)
    const [t] = useTranslation();

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get('search');
    function Close(){
        const Left_Side = document.getElementById('Left_Side');
        Left_Side.classList.remove("FillterON");
        }

       
        
        const [Category , setCategory] = useState(SelectOptionCategory(category.filter(f => f.id ==category_id)))
        const [subcategory , setsubCategory] = useState(0)
        const [subsubcategory , setsubsubCategory] = useState(0)
        const [search , setSearch] = useState(searchValue || "")


        useEffect(()=>{

            setsubCategory(null)
            setsubsubCategory(null)
        },[Category])

        useEffect(()=>{

            setsubsubCategory(null)
        },[subcategory])



        ;
        const handelFilter  = ()=>{
            
            let obj = {
                filter_category_id :(subsubcategory?.value  ??  (subcategory?.value ?? Category?.value)),
                search:search

            }
            // input.current.value
            
            setFilterObject(obj);
            handlePageChange({selected: 0})

        }
    return (
        <div className="col-lg-3 col_Product  fillter-con Left_Side position-st"   id='Left_Side'>
            <div className="close_Fillter"onClick={()=>Close()} >
                <i >  <FaWindowClose  /></i>
          
            </div>
                           

            <div className='col_Product_Top'>
                <h4>{t("Search in All Prouct")}</h4>
            </div>

            <div>
                <div className="slidecontainer">
                    <div className='col_Product_Mid'>
                            <SearchFilter  setSearch={setSearch} search={search}/>
                    </div>
                </div>

            </div>

            <div className='col_Product_Down'>
                <div className='Category_sel'>
                    <h4>{t("Category")}</h4>
                    <SelectCategory
                          
                          Options={category}
                          parentId={null}
                          setOb={setCategory}
                          Ob={Category}
                      />
                </div>
                <div className='Category_sel'>
                    <h4>{t("SubCategory")}</h4>
                    <SelectCategory
                          Options={subCategory}
                          parentId={Category?.value}
                          setOb={setsubCategory}
                          Ob={subcategory}
                      />
                </div>
                <div className='Category_sel'>
                    <h4>{t("SubSubCategory")}</h4>
                    <SelectCategory
                          Options={subSubCategory}
                          parentId={subcategory?.value}
                          setOb={setsubsubCategory}
                          Ob={subsubcategory}
                      />
                </div>
                <div className='Button'>
                    <button className="btn-donate"  onClick={handelFilter}>
                        {t("Fillter")}
                    </button>
                    <button className="btn-donate"  onClick={()=>  {
                        setCategory(null)
                        setFilterObject({search:null,
                            filter_category_id:null})
                        setSearch('')
                        handlePageChange({selected: 0})
                    }}>
                        {t("Reset")}
                    </button>
                </div>

            </div>
 
        </div>
    )
}

export default (Product_Fillter)



