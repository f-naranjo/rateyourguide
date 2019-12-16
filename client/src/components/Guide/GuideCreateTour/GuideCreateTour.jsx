import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import AuthService from './../../../services/AuthService';
import GuideMainDiv from '../GuideStyles';
import TourAdminPreview from '../TourAdminPreview/TourAdminPreview';
import GuideService from '../../../services/GuideService';
import CreateTourForm from './GuideCreateTourStyles';


export default class GuideCreateTour extends Component {
    constructor(props) {
        super(props)
        this.authService = new AuthService();
        this.guideService = new GuideService();
    }
    state = {
        user: null,
        img:"https://glowvarietyshow.com/wp-content/uploads/2017/03/placeholder-image.jpg",
        title:"",
        claim:"",
        description:"",
        price:0,
        meetingPoint:"",
    }

    //    notGuide(){
    //         this.history.push('/book')
    //    }
    setUser = (user) => {

        this.setState({ ...this.state, 
                        user,
                        userId:user.id })
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
        console.log(this.state)
    }


    fetchUser = () => {
        if (this.state.user === null) {
            this.authService.loggedIn()
                .then(
                    (user) => {
                        console.log(user)
                        this.setUser(user)
                    },
                    (error) => {
                        console.log("2")
                        this.setUser(false)
                    }
                )
                .catch(() => {
                    console.log("3")
                    this.setUser(false)
                })
        }
    }

    setGuide = () => {
        if (this.state.user) {
            this.setState({
                ...this.state,
                guideId: this.state.user.id,
            })
        }
    }

    createTour = (e) => {
        e.preventDefault()
        this.guideService.createTour(this.state.userId,this.state.img,this.state.title,this.state.claim,this.state.description,this.state.price,this.state.meetingPoint)
        .then(
          (tourCreated) => {
            //history.push("/guides/adminpanel/tour")
          },
          (error) => {
            console.error(error)
          }
        )
    }

    render() {
        this.fetchUser()
        if (this.state.user === null) {
            this.setGuide()
        }
        if (this.state.user !== null) {
            return (
                <GuideMainDiv>
                    <div className="breadcrumbs"><h4>Mi panel / Mis Tours / Crear Tour</h4><p>Aquí puedes crear un Tour nuevo</p></div>
                    <div className="page-controls">
                    </div>
                    <CreateTourForm className="create-tour-form" onSubmit={this.createTour}>
                        <div className="form-left"> 
                            <label htmlFor="picture">Elige la imagen del Tour: </label>
                            <input type="file" name="picture" onChange={this.handleUpload} />
                            <label htmlFor="title">Nombre del Tour: </label>
                            <input className="title" type="text" name="title" value={this.state.title} required onChange={this.handleChange} />
                            <label htmlFor="claim">Descripción Corta: </label>
                            <input className="claim" type="text" name="claim" value={this.state.claim} required onChange={this.handleChange} />
                            <label htmlFor="price">Precio por persona en €: </label>
                            <input className="price" type="number" name="price"  value={this.state.price} required onChange={this.handleChange} />
                            <label htmlFor="meetingPoint">Busca en Google el Punto de Encuentro: </label>
                            <input className="meetingPoint" type="text" name="meetingPoint" value={this.state.meetingPoint} required onChange={this.handleChange} />
                        </div>
                        <div className="form-right">
                            <div className="tour-img"><img src={this.state.img} alt="La imagen del Tour"/></div>
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
                        <input type="submit" value="CREAR TOUR"/>
                        </div>
                        
                    </CreateTourForm>

                </GuideMainDiv>
            )
        }
        return (<h1>Cargando...</h1>)
    }
}


