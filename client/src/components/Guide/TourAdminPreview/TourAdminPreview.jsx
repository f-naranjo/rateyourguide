import React, { Component } from 'react'
import ButtonForward from '../../../styles/buttons'
import { Link } from 'react-router-dom';
import AdminTourDiv from './TourAdminPreviewStyle';

export default class TourAdminPreview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, img, claim, date, price, rates,id } = this.props.tour;
        console.log(this.props.tour)
        const mediumrate = Math.round((rates.reduce((ac, cu) => {
            return ac + cu
        }, 0) / rates.length))
        console.log("es"+typeof(mediurate))
        return (
            <AdminTourDiv imgsource={img}>
                <div className="preview-wrapper">
                    <div className="tour-img">
                        <img className="tourimg" src={img} alt="" />
                    </div>
                    <div className="tour-info">
                        <div className="tour-title">
                        <h2>{title}</h2>
                        <p><i class="fas fa-star"></i> <span>{typeof(mediumrate) === Number && mediumrate}</span>/10</p>
                        </div>

                        
                        <p>{claim}</p>
                        <p><i class="fas fa-map-marker-alt"></i> Madrid Centro</p>
                        
                        <div className="admin-btns">
                        <Link className="admin-btn edit"
                            to={{
                                pathname: '/guides/adminpanel/tour/edit',
                                state: id,
                            }}
                        ><i class="fas fa-edit"></i> EDITAR</Link>
                         <Link className="admin-btn delete"
                            to={{
                                pathname: '/guides/adminpanel/tour/delete',
                                state: id,
                            }}
                        ><i class="fas fa-trash-alt"></i> ELIMINAR</Link>
                         <Link className="admin-btn create"
                            to={{
                                pathname: '/guides/adminpanel/tour/sessions',
                                state: id,
                            }}
                        ><i class="far fa-calendar-plus"></i> CREAR SESIONES</Link>

                        </div>
                        
                    </div>
                </div>

            </AdminTourDiv>
        )
    }
}
