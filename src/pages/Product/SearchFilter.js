import React from 'react'
import { useTranslation } from 'react-i18next'

function SearchFilter({setSearch ,search}) {
    const {t} = useTranslation()
  return (
    <input className="form-control" value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder={t("Search")} aria-label="Search"></input>

  )
}

export default SearchFilter