import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import AuthService from './../../../services/AuthService';
import GuideMainDiv from '../GuideStyles';
import GuideService from '../../../services/GuideService';
import EditTourForm from './GuideEditTourStyles';


export default class GuideEditTour extends Component {
    constructor(props) {
        super(props)
        this.authService = new AuthService();
        this.guideService = new GuideService();
    }
    state = {
        img: "",
        title: "",
        claim: "",
        description: "",
        price: 0,
        meetingPoint: "",
        tourId: null,
    }

    handleUpload = (e) => {
        const uploadData = new FormData();
        uploadData.append('picture', e.target.files[0])
        this.authService.upload(uploadData)
            .then(
                (data) => {
                    this.setState({ ...this.state, img: data.secure_url })
                },
                (error) => {
                    console.error(error)
                }
            )
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value })

    }


    editTour = (e) => {
        e.preventDefault()
        this.guideService.editTour(this.state.tourId, this.state.img, this.state.title, this.state.claim, this.state.description, this.state.price, this.state.meetingPoint)
            .then(
                (tourCreated) => {
                   
                }
            ).catch(err => console.log(err))
    }

    componentDidMount() {
        if (this.state.tourId === null) {
            this.setState({
                ...this.state,
                img: this.props.location.tour.img,
                title: this.props.location.tour.title,
                claim: this.props.location.tour.claim,
                description: this.props.location.tour.description,
                price: this.props.location.tour.price,
                meetingPoint: this.props.location.tour.meetingPoint,
                tourId: this.props.location.tour.id
            })
        }
    }


    render() {
        if (this.props.location.tour) {
            return (
                <GuideMainDiv>
        <div className="breadcrumbs"><h4>Mi panel / Mis Tours / Editar Tour</h4><p>Aquí puedes editar lo que necesites del tour: {this.state.title}</p></div>
                    <div className="page-controls">
                    </div>
                    <EditTourForm className="create-tour-form" >
                        <div className="form-left">
                            <label htmlFor="picture">Elige la imagen del Tour: </label>
                            <input type="file" name="picture" onChange={this.handleUpload} />
                            <label htmlFor="title">Nombre del Tour: </label>
                            <input className="title" type="text" name="title" value={this.state.title} required onChange={this.handleChange} />
                            <label htmlFor="claim">Descripción Corta: </label>
                            <input className="claim" type="text" name="claim" value={this.state.claim} required onChange={this.handleChange} />
                            <label htmlFor="price">Precio por persona en €: </label>
                            <input className="price" type="number" name="price" value={this.state.price} required onChange={this.handleChange} />
                            <label htmlFor="meetingPoint">Busca en Google el Punto de Encuentro: </label>
                            <input className="meetingPoint" type="text" name="meetingPoint" value={this.state.meetingPoint} required onChange={this.handleChange} />
                        </div>
                        <div className="form-right">
                            <div className="tour-img"><img src={this.state.img} alt="La imagen del Tour" /></div>
                            <label htmlFor="description">Descripción Larga: </label>
                            <textarea className="description" name="description" value={this.state.description} required onChange={this.handleChange} />
                            {/* <fieldset>
                        <legend>Selecciona las categorías que más se ajustan al Tour:</legend>
                        <input type="checkbox" name="category" value="Aventura">Aventura</input>
                        <input type="checkbox" name="category" value="Deporte">Deporte</input>
                        <input type="checkbox" name="category" value="Estilo de Vida">Estilo de Vida</input>
                        <input type="checkbox" name="category" value="Arte y Cultura">Arte y Cultura</input>
                        <input type="checkbox" name="category" value="Gastronomía">Gastronomía</input>
                        <input type="checkbox" name="category" value="Naturaleza">Naturaleza</input>
                        <input type="checkbox" name="category" value="Mar">Mar</input>
                    </fieldset> */}
                            <input type="submit" onClick={this.editTour} />
                        </div>

                    </EditTourForm>

                </GuideMainDiv>
            )

        } else {
            return (<p>loading...</p>)
        }



    }
}


