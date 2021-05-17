import React, { Component } from 'react'
import Card from './Card'

export default class Cards extends Component {
    render() {
        return (
            <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        )
    }
}
