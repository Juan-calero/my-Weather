import React, { Component } from 'react'
import Card from '../1.cards/Card'
import InfoBar from './InfoBar'
import progressBarData from '../utils/ProgressBarData'

export default class Info extends Component {
    render() {
        const mapped = progressBarData.map(e => {
            return (
                <InfoBar
                    id={e.id}
                    xmlns={e.xmlns}
                    width={e.width}
                    height={e.height}
                    viewBox={e.viewBox}
                    d={e.d} />
            )
        })
        return (
            <div className="info">
                <div className="info__card">
                    <Card className="info__card--big" />
                </div>
                <div className="content">
                    {mapped}
                    <div className="content__text">
                        <div className="content__max">
                            <h4 className="content__max--title">Máx</h4>
                            <h4 className="content__max--value">36C</h4>
                        </div>
                        <div className="content__divider"></div>
                        <div className="content__min">
                            <h4 className="content__min--title">Min</h4>
                            <h4 className="content__min--value">36C</h4>
                        </div>
                        <p className="content__quote">
                            Belo dia de Praia.<br />
                            Não te esqueças do protetor solar!
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
