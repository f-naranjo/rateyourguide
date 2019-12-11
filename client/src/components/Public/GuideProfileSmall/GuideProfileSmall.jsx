import React, { Component } from 'react'
import TourService from '../../../services/TourService'
import ButtonForward from '../../../styles/buttons'

export default class GuideProfileSmall extends Component {
    constructor(props) {
        super(props)
        this.tourService = new TourService();
    }

    render() {
        const { name, surname, description, rate, img, featuredTour } = this.props.guide;
        return (
            <div>
                <div className="info-wrapper">
                    <div className="personal-info">
                        <h2>{name} {surname}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="personal-img">
                        <img src={img} alt="" className="avatar" />
                        <p><span className="rate">{rate}</span>/10</p>
                    </div>
                </div>
                <div className="featured-tour">
                    <h3>El tour estrella de {name}:</h3>
                    <div className="tour-preview">
                        <h1>{featuredTour.title}</h1>
                        <p>{featuredTour.claim}</p>
                    </div>
                </div>
                <ButtonForward>VER LAS EXPERIENCIAS DE {name}</ButtonForward>
            </div>
        )
    }
}
