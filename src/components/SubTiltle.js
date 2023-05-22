import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import Title_Button from './Button/Title_Button'

const SubTiltle = ({title , show_more =true}) => {
    const [t, il8n] = useTranslation()
    const { id } = useParams()

    return (
        <div className="SubTiltle">
            {/* {!isNaN(id) ? */}
                <>
                   {
                    show_more ?<Title_Button/> :<span></span>
                   } 
                    <div>
                        <h1 className="subtitle__Mid"> {title} </h1>
                    </div>
                </>

                {/* :

                <>
                    <h3 className="subtitle__Right">{lenght}  {t(`${type}`)} </h3>
                    <div>
                        <h1 className="subtitle__Mid">{t(`${title}`)} </h1>
                    </div>
                    <Link to={t(`${path}`)} className="subtitle__Left" >
                        <button>{t(`${btntitle}`)} </button>
                    </Link>
                </>
            } */}


        </div>
    )
}

export default SubTiltle