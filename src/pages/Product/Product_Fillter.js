import React, { useEffect, useRef, useState } from 'react'
import { FaWindowClose, FaDollarSign } from "react-icons/fa";
import { useSelector } from 'react-redux';

import SelectCategory from '../../components/SelectCategory';
import { useTranslation } from 'react-i18next';

const Product_Fillter = ({setFilterObject}) => {
    const {category , subCategory , subSubCategory} = useSelector(state => state.category)
    const input = useRef(null)
    const [t] = useTranslation();

 
    function Close(){
        const Left_Side = document.getElementById('Left_Side');
        Left_Side.classList.remove("FillterON");
        }

        
        const [Category , setCategory] = useState(null)
        const [subcategory , setsubCategory] = useState(0)
        const [subsubcategory , setsubsubCategory] = useState(0)

        useEffect(()=>{

            setsubCategory(null)
            setsubsubCategory(null)
        },[Category])

        useEffect(()=>{

            setsubsubCategory(null)
        },[subcategory])
        const handelFilter  = ()=>{
            
            let obj = {
                filter_category_id :(subsubcategory?.value  ??  (subcategory?.value ?? Category?.value)),
                search:input.current.value

            }
            input.current.value=""
            setFilterObject(obj);
        }
    return (
        <div className="col-lg-3 col_Product  fillter-con Left_Side position-st" id='Left_Side'>
            <div className="close_Fillter"onClick={()=>Close()} >
                <i >  <FaWindowClose  /></i>
          
            </div>
                           

            <div className='col_Product_Top'>
                <h4>{t("Search in All Prouct")}</h4>
            </div>

            <div>
                <div className="slidecontainer">
                    <div className='col_Product_Mid'>
                        <input className="form-control" ref={input} type="text" placeholder={t("Search")} aria-label="Search"></input>

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
                        {t("Fillter It Now")}
                    </button>
                </div>

            </div>
 
        </div>
    )
}

export default Product_Fillter



