import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import Title_Button from './Button/Title_Button'
import More from './Button/More'

const SubTiltle = ({title , show_more =false}) => {
    const [t, il8n] = useTranslation()
    const { id } = useParams()

    return (
        <div className="SubTiltle">
        
                <>
                
                    <div>
                        <h1 className="subtitle__Mid"> {title} </h1>
                        <div className='border-title'>.</div>
                    </div>
                </>

    
        </div>
    )
}

export default SubTiltle