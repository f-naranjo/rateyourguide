import React, { Component } from 'react'
import ButtonForward from '../../../styles/buttons'
import DivPreviewTour from './TourPreviewStyle';
import { Link } from 'react-router-dom';

export default class TourPreview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, img, claim,date,price,rates} = this.props.tour;
        const mediumrate = Math.round((rates.reduce((ac, cu) => {
            return ac + cu
        }, 0) / rates.length))
        return (
            <DivPreviewTour>
                <div className="info-wrapper">
                    <div className="personal-info">
                        <h2>{title}</h2>
                        <p>{claim}</p>
                    </div>
                    <div className="personal-img">
                        <img src={img} alt="" className="avatar" />
                        <p><span className="rate">{mediumrate}</span>/10</p>
                    </div>
                </div>
                <div className="featured-tour">
                    <h3>Información Clave:</h3>
                    <div className="tour-preview">
                        <h4>⭐ El tour tiene un precio por persona de {price}€</h4>
                        <p>Ahora mismo esta sesion tiene 10 personas apuntadas.</p>
                    </div>
                </div>
                <Link
                    to={{
                        pathname: '/book/tour/tours',
                        state: {
                            tour: this.props.tour,
                            filterParams: this.props.filterParams
                        }
                    }}

                ><ButtonForward>RESERVAR</ButtonForward></Link>
            </DivPreviewTour>
        )
    }
}
