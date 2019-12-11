import React, { Component } from 'react'
import ButtonForward from '../../../styles/buttons'
import DivPreview from './GuidePreviewStyle';

export default class GuidePreview extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { info, rates, toursCreated } = this.props.guide;
        const mediumrate = Math.round((rates.reduce((ac, cu) => {
            return ac + cu
        }, 0) / rates.length))
        return (
            <DivPreview>
                <div className="info-wrapper">
                    <div className="personal-info">
                        <h2>{info.name} {info.surname}</h2>
                        <p>{info.description}</p>
                    </div>
                    <div className="personal-img">
                        <img src={info.img} alt="" className="avatar" />
                        <p><span className="rate">{mediumrate}</span>/10</p>
                    </div>
                </div>
                <div className="featured-tour">
                    <h3>El tour estrella de {info.name}:</h3>
                    <div className="tour-preview">
                        <h4>⭐ {toursCreated[0].title}</h4>
                        <p>{toursCreated[0].claim}</p>
                    </div>
                </div>
                <ButtonForward>VER LAS EXPERIENCIAS</ButtonForward>
            </DivPreview>
        )
    }
}
