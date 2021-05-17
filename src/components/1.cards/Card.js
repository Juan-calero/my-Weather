import React from 'react'

function Card() {
    return (
        <div className="card">
            <p className="card__dayOfWeek">Hoje</p>
            <svg className="card__icon"></svg>
            <h2 className="card__degs">15ºC</h2>
            <h4 className="card__weatherType">Chuva</h4>
        </div>
    )
}

export default Card
