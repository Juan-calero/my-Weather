import React from 'react'
import cardDynamicBg from '../utils/cardDynamicBg';
import weatherTypes from '../utils/weatherTypes'
import arrWeatherIcons from '../utils/arrWeatherIcons'

function Card(props) {
    const arr = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    const now = new Date();
    console.log(props.type > 0 && arrWeatherIcons[props.type].viewBox)
    return (
        <div className={"card " + cardDynamicBg(props.tMax)}>
            <p className="card__dayOfWeek">{now.getDay() === props.date ? 'Hoje' : arr[props.date]}</p>
            <svg className="card__icon"
                key={arrWeatherIcons.id}
                xmlns="http://www.w3.org/2000/svg"
                viewBox={props.type > 0 && arrWeatherIcons[props.type].viewBox}>
                <path d={props.type > 0 && arrWeatherIcons[props.type].d} /></svg>
            <h2 className="card__degs">{props.tMax}</h2>
            <h2 className="card__degs">{props.tMin}</h2>
            <h4 className="card__weatherType">{weatherTypes[props.type]}</h4>
        </div>
    )
}

export default Card
