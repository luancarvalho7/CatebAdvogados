import './areasCard.css'
import { Link } from 'react-router-dom';

export function AreasCard({title, description, icon, link}){
    return(
        <div className="areasCard">
            <h1 className='txtTitle'>{title}</h1>
            <h2 className='txtSubtitle'>{description}</h2>
            <div className="acFooter">
                <img src={icon} className='areasIcon'></img>
                <Link to={link} className='btn acKnowMore'>Saiba Mais</Link>
            </div>
        </div>
    )
}