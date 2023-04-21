import './areasCard.css'
export function AreasCard({title, description, icon, link}){
    return(
        <div className="areasCard">
            <h1 className='txtTitle'>{title}</h1>
            <h2 className='txtSubtitle'>{description}</h2>
            <div className="acFooter">
                <img src={icon} className='areasIcon'></img>
                <button className='btn acKnowMore'>Saiba Mais</button>
            </div>
        </div>
    )
}