import React, { Component } from 'react'
import ButtonForward from '../../../styles/buttons'

export default class GuidePreview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        const { info, rate, img, toursCreated } = this.props.guide;
        return (
            <div>
                <div className="info-wrapper">
                    <div className="personal-info">
                        <h2>{info.name} {info.surname}</h2>
                        <p>{info.description}</p>
                    </div>
                    <div className="personal-img">
                        <img src={img} alt="" className="avatar" />
                        <p><span className="rate">{rate}</span>/10</p>
                    </div>
                </div>
                <div className="featured-tour">
                    <h3>El tour estrella de {info.name}:</h3>
                    <div className="tour-preview">
                        <h1>{toursCreated[0].title}</h1>
                        <p>{toursCreated[0].claim}</p>
                    </div>
                </div>
                <ButtonForward>VER LAS EXPERIENCIAS DE {info.name}</ButtonForward>
            </div>
        )
    }
}
