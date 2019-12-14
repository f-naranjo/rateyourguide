import React, { Component } from 'react'
import ButtonForward from '../../../styles/buttons'
import DivPreviewTour from './TourPreviewStyle';
import { Link } from 'react-router-dom';

export default class TourPreview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, img, claim, date, price, rates } = this.props.tour;
        const mediumrate = Math.round((rates.reduce((ac, cu) => {
            return ac + cu
        }, 0) / rates.length))
        return (
            <DivPreviewTour imgsource={img}>
                <div className="preview-wrapper">
                    <div className="tour-img">
                        <img className="tourimg" src={img} alt="" />
                    </div>
                    <div className="tour-info">
                        <div className="tour-title">
                        <h2>{title}</h2>
                        <p>⭐️<span>{mediumrate}</span>/10</p>
                        </div>
                        
                        <p>{claim}</p>
                        <p>Madrid Centro</p>
                        <div className="tour-items">
                        <p>2h</p>
                        <p>Hoy a las 10:00</p>
                        </div>
                        
                        <Link
                            to={{
                                pathname: '/book/guide/tour/session',
                                state: {
                                    sessionId: this.props.sessionId

                                }
                            }}
                        >RESERVAR</Link>
                    </div>
                </div>

                {/* <div className="info-wrapper">
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
                </div> */}

            </DivPreviewTour>
        )
    }
}
