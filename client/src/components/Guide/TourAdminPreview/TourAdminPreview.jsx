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
            console.log("tour borrado")
        })
    }

    componentDidMount(){
        // const { title, img, claim, date, price, rates,id } = this.props.tour;
        // console.log(this.props.tour)
        // const mediumrate = Math.round((rates.reduce((ac, cu) => {
        //     return ac + cu
        // }, 0) / rates.length))
        // console.log("es"+typeof(mediurate))
        console.log(this.props)
    }

    render() {
       
        
        return (
            <React.Fragment>
            {this.props.tour?

            <AdminTourDiv>
                <div className="preview-wrapper">
                    <div className="tour-img">
                        <img className="tourimg" src={this.props.tour.img} alt="" />
                    </div>
                    {/* <div className="tour-info">
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
                                pathname: '/guides/adminpanel/tours',
                                state: id,
                            }}
                            onClick={(e) => this.deleteTour(id)}
                        ><i class="fas fa-trash-alt"></i> ELIMINAR</Link>
                         <Link className="admin-btn create"
                            to={{
                                pathname: '/guides/adminpanel/tours',
                                state: id,
                            }}
                        ><i class="far fa-calendar-plus"></i> CREAR SESIONES</Link>

                        </div>
                        
                    </div> */}
                </div>

            </AdminTourDiv>:<p>cargando...</p>}
            </React.Fragment>
            
        )
    }
}
