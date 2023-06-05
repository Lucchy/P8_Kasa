import React from "react";


function Card ({img, cardTitle}) {
    return (
        <div className="card">
            <img src={img} alt="card_image" className="card-img"/>
            <h2>{cardTitle}</h2>
        </div>
    )
}

export default Card;