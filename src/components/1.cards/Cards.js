import React, { Component } from 'react'
import Card from './Card'
import apiMeteo from '../utils/apiMeteo'

class Cards extends Component {
    constructor() {
        super()
        this.state = {
            previsao: []
        }
    }
    async componentDidMount() {
        const response = await apiMeteo.get('');
        this.setState({
            previsao: response.data.data
        })

    }
    render() {
        const now = new Date()
        let i = now.getDay() - 1
        return (
            <div className="cards">
                {this.state.previsao.map(e => {
                    i++
                    return (
                        <Card tMin={e.tMin}
                            tMax={e.tMax}
                            type={e.idWeatherType}
                            date={i % 7}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Cards
