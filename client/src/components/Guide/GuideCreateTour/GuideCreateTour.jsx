import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import AuthService from './../../../services/AuthService';
import GuideMainDiv from '../GuideStyles';
import TourAdminPreview from '../TourAdminPreview/TourAdminPreview';
import GuideService from '../../../services/GuideService';
import CreateTourForm from './GuideCreateTourStyles';
import GmapsPlaces from '../../Gmaps/GmapsPlaces/GmapsPlaces';


export default class GuideCreateTour extends Component {
    constructor(props) {
        super(props)
        this.authService = new AuthService();
        this.guideService = new GuideService();
    }
    state = {
        img:"https://glowvarietyshow.com/wp-content/uploads/2017/03/placeholder-image.jpg",
        title:"",
        claim:"",
        description:"",
        price:0,
        location:{},
        guideId:null,
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

    setUser = (user) => {
    console.log("entra al set")
    console.log(user)
        this.setState({ ...this.state, guideId: user.id })
      }

    fetchUser = () => {
        console.log("Entra al fetch")
        if (this.state.guideId === null) {   
            this.authService.loggedIn()
                .then(
                    (user) => {
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

    getData = (data) =>{
        this.setState({
            ...this.state,
            location: data
        })
    }


    createTour = (e) => {
        e.preventDefault()
        console.log("llama para crear")
        console.log(this.state.location)
        console.log(this.state.guideId)
        this.guideService.createTour(this.state.guideId,this.state.img,this.state.title,this.state.claim,this.state.description,this.state.price,this.state.location)
        .then(
          (tourCreated) => {
            this.setUser(null)
            this.props.updateUser()
          }
        ).catch(err=>console.log(err))
    }

    componentDidMount(){
        this.fetchUser()
   }

   
    render() {
            return (
                <GuideMainDiv>
                    <div className="breadcrumbs"><h4>Mi panel / Mis Tours / Crear Tour</h4><p>Aquí puedes crear un Tour nuevo</p></div>
                    <div className="page-controls">
                    </div>
                    <CreateTourForm className="create-tour-form" >
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
                            <GmapsPlaces getData = {(data => this.getData(data))}></GmapsPlaces>
                            {/* <input className="meetingPoint" type="text" name="meetingPoint" value={this.state.meetingPoint} required onChange={this.handleChange} /> */}
                        </div>
                        <div className="form-right">
                            <div className="tour-img"><img src={this.state.img} alt="La imagen del Tour"/></div>
                        <label htmlFor="description">Descripción Larga: </label>
                        <textarea className="description" name="description" value={this.state.description} required onChange={this.handleChange} />
                    
                        <input type="submit" onClick={this.createTour}/>
                        </div>
                        
                    </CreateTourForm>

                </GuideMainDiv>
            )
        

    }
}


