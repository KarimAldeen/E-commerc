import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import Title_Button from './Button/Title_Button'

const SubTiltle = ({title , show_more =true}) => {
    const [t, il8n] = useTranslation()
    const { id } = useParams()

    return (
        <div className="SubTiltle">
        
                <>
                   {
                    show_more ?<Title_Button/> :<span></span>
                   } 
                    <div>
                        <h1 className="subtitle__Mid"> {title} </h1>
                    </div>
                </>

    
        </div>
    )
}

export default SubTiltle