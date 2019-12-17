import React, { Component, Fragment } from 'react'
import ButtonForward from '../../../styles/buttons'
import { Link } from 'react-router-dom';
import AdminTourDiv from './TourAdminPreviewStyle';
import GuideService from '../../../services/GuideService';

export default class TourAdminPreview extends Component {
    constructor(props) {
        super(props)
        this.guideService = new GuideService();
    }

    deleteTour = (id) =>{
        console.log("entro a borrar")
        this.guideService.deleteTour(id)
        .then((deleteTour)=>{
            this.props.updateUser()
        })
    }

    render() {
        if(this.props.tour){
            const { title, location, img, claim, date, price, rates,id } = this.props.tour;
            let mediumrate;
            if(rates.length === 0){
                 mediumrate = 0
            }else {mediumrate = Math.round((rates.reduce((ac, cu) => {
                return ac + cu
            }, 0) / rates.length))} 
           
        
       
        return (
            <AdminTourDiv>
                <div className="preview-wrapper">
                    <div className="tour-img">
                        <img className="tourimg" src={this.props.tour.img} alt="" />
                    </div>
                    <div className="tour-info">
                        <div className="tour-title">
                        <h2>{title}</h2>
                        <p><i className="fas fa-star"></i> <span>{mediumrate}</span>/10</p>
                        </div>

                        <p>{claim}</p>
                        <p><i className="fas fa-map-marker-alt"></i>{location.address}</p>
                        <p><i className="fas fa-euro-sign"></i> {price}</p>
                        <div className="admin-btns">
                        <Link className="admin-btn edit"
                            to={{
                                pathname: '/guides/adminpanel/tour/edit',
                                tour: this.props.tour,
                            }}
                        ><i className="fas fa-edit"></i> EDITAR</Link>
                         <Link className="admin-btn delete"
                            to={{
                                pathname: '/guides/adminpanel/tours',
                                state: id,
                            }}
                            onClick={(e) => this.deleteTour(id)}
                        ><i className="fas fa-trash-alt"></i> ELIMINAR</Link>
                         <Link className="admin-btn create"
                            to={{
                                pathname: '/guides/adminpanel/tours',
                                state: id,
                            }}
                        ><i className="far fa-calendar-plus"></i> CREAR SESIONES</Link>

                        </div>
                        
                    </div>
                </div>
            </AdminTourDiv>
            
        )
    }else return(<p>cargando</p>)
    }
}
