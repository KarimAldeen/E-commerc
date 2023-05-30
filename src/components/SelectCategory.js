import React from 'react'
import { SelectOptionCategory } from '../utils/SelectOption'
import Select  from 'react-select';
import { useTranslation } from 'react-i18next';

function SelectCategory({
    Options,
    parentId,
    setOb,
    Ob
}) {
   

    let Option= (Options.filter(op => op.parent_id == parentId));
    const [t] = useTranslation()
  return (
    <Select   
    onChange={(opt)=>{setOb(opt)}}
    value={Ob}
    options={SelectOptionCategory(Options)}
    isDisabled={Option.length ===0  || parentId ==0? true :false}
    placeholder={t("Select...")}

  />
  )
}

export default SelectCategory