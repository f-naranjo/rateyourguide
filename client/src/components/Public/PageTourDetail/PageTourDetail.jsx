import React, { Component } from 'react'
import TourService from '../../../services/TourService'
import { Link,Redirect } from 'react-router-dom'
import TourDetail from './PageTourDetailStyle'
import ButtonForward from '../../../styles/buttons';
import ButtonBack from '../../../styles/buttonBack';
import HeroInfo from '../../../styles/heroinfo';
import GmapMap from '../../Gmaps/Gmaps Map/GmapsMap';
import AuthService from '../../../services/AuthService';




export default class PageTourDetail extends Component {
    _isMounted = false;


    constructor(props) {
        super(props)
        this.tourService = new TourService();
        this.authService = new AuthService();

    }

    state = {
        tour: null,
        sessions: null,
        owner: null,
        tourSession: null,
        status: "pending",
        people: null,
    }

    fetchUser = () => {
        if (this.state.owner === null) {
          this.authService.loggedIn()
            .then(
              (user) => {
                this.setState({
                    ...this.state,
                    owner: user.id
                })
              },
              (error) => {
                this.setUser(false)
              }
            )
            .catch(() => {
              this.setUser(false)
            })
        }
      }

    componentDidMount() {
        if(!this.state.tour){
            this.setState({
                ...this.state,
                tour: this.props.location.state.tour,
                sessions:this.props.location.state.sessions,
            })
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value })
        console.log(this.state)
    }

    createBooking = (e) => {
        const {owner,tourSession,status,people} = this.state
        this.tourService.createBooking({owner,tourSession,status,people})
        .then(
            (bookingCreated) => {
              //return <Redirect to="/user/book/success"/>
            this.props.history.push("/user/book/success")
            
            }
        ).catch(err => console.log(err))
            
    }
    

    displaySessions(){
        let languageToDisplay ={
            spanish : "Español",
            english: "Inglés",
            russian: "Ruso",
            german: "Alemán",
            french: "Francés",
        }
    return this.state.sessions.map((session, i) => <option key={i} value={session._id}>Fecha: {new Date(session.date).getDate()}/{new Date(session.date).getMonth() + 1}/{new Date(session.date).getFullYear()} a las {new Date(session.date).getHours()}:{new Date(session.date).getMinutes()}  / Idioma: {languageToDisplay[session.language]} / Duración: {session.duration} horas / </option>)
    }

    render() {
       this.fetchUser()
        if (this.state.tour) {
           
            const { img,title,price, location,duration,description,rates} = this.state.tour
            let mediumRate = Math.round((rates.reduce((ac, cu) => {
                return ac + cu
            }, 0) / rates.length))
            
            return (

                <div className="guides-wrapper">
                    <HeroInfo><h1>Aquí tienes todos los detalles de tu experiencia:</h1></HeroInfo>
                    <TourDetail>

                        <div className="img-container"><img src={img} /></div>
                        <div className="tour-header">
                        <h1>{title}</h1>
                        <div className="tour-maininfo"><p className="rate"><i class="fas fa-star"></i><span> {mediumRate}</span>/10</p><p><i class="fas fa-euro-sign"></i>{price}</p>
                                </div>
                        </div>
                            
                            <div className="info-wrapper">
                                <h3>Sobre la experiencia:</h3>
                                <p>{description}</p>
                                <h3>Punto de encuentro:</h3>
                                <p>{location.address}</p>
                                <GmapMap pos={location.coords} marker={true}/>
                            
                            <div className="session-wrapper">
                                <p>Elige la sesión que quieres reservar:</p>
                        <select className="session-picker" name="tourSession" onChange={this.handleChange} onClick={this.handleChange}>
                        {this.displaySessions()}
                        </select>
                        <p>¿Cuantos sois?</p>
                        <select className="session-picker" name="people" onClick={this.handleChange}>
                        <option value="1" defaultValue>1</option>
                        <option value="2" >2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        </select>
                            </div>
                            <p>Cuando reserves, el guía se pondrá en contacto contigo para confirmar todos los detalles :)</p>
                            <div className="nav-buttons">
                                <ButtonBack><i class="fas fa-arrow-left"></i> Volver</ButtonBack>   
                                <ButtonForward onClick={this.createBooking}><i class="fas fa-check"></i> <span> Reservar</span></ButtonForward>
                            </div> 

                        </div>
                        {/* Aqui toda la info de la sesión con el estate */}
                    </TourDetail>



                </div>

            )
        } else return (
            <div className="loading">CARGANDO...</div>
        )
    }
}