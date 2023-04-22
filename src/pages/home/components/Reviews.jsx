import './Reviews.css'
export function Reviews({name, review}) {
    return (
        <div className="reviewCard">
            <h1 className="txtTitle">{name}</h1>
            <h2 className="reviewText">{review}</h2>
        </div>
    )
}