import React from 'react'

function InfoBar(props) {

    return (
        <div className="content__bar">
            <svg xmlns={props.xmlns} width={props.width} height={props.height} viewBox={props.viewBox} className="content__bar--icon"><path d={props.d} /></svg>
            <div className="content__bar--progress">
                <span> </span>
            </div>
        </div>
    )
}

export default InfoBar
