import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import AuthService from './../../../services/AuthService';
import GuideMainDiv from '../GuideStyles';
import GuideService from '../../../services/GuideService';
import CreateSessionsForm from './GuideCreateSessionsStyle';
import DatePicker from 'react-date-picker';


export default class GuideCreateSessions extends Component {
    constructor(props) {
        super(props)
        this.authService = new AuthService();
        this.guideService = new GuideService();
    }
    state = {
        owner: null,
        tour: "",
        maxPeople: 10,
        duration: 4,
        language: "",
        date: "",
    }


    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value })
    }

    setUser = (user) => {
        console.log("entra al set")
        console.log(user)
        this.setState({ ...this.state, user })
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

    createSession = (e) => {
        e.preventDefault()
        console.log("llama para crear")
        const { owner, tour, maxPeople, duration, language, date } = this.state
        this.guideService.createSession(owner, tour, maxPeople, duration, language, date)
            .then(
                (sessionCreated) => {
                    this.setUser(null)
                    this.props.updateUser()
                }
            ).catch(err => console.log(err))
    }

    componentDidMount() {
        this.fetchUser()
    }

    render() {
        return (
            <GuideMainDiv>
                <div className="breadcrumbs"><h4>Mi panel / Mis Tours / Crear Sesiones</h4><p>Aquí puedes crear sesiones de los tours para que los usuarios puedan reservar el día y la hora que mejor les convenga:</p></div>
                <div className="page-controls">
                </div>
                <CreateSessionsForm className="create-tour-form" >
                    <div className="form-left">
                        <h2>Estas creando sesiones para el Tour y su nombre de la BD</h2>
                        <DatePicker name="date" onChange={this.handleChange} value={this.state.date}/>
                        <label htmlFor="language">¿En qué idioma vas a hacer esta sesión?: </label>
                        <select name="language" onChange={this.handleChange}>
                            <option value="spanish" defaultValue>Español</option>
                            <option value="english" >Inglés</option>
                            <option value="french">Francés</option>
                            <option value="german">Alemán</option>
                            <option value="russian">Ruso</option>
                        </select>
                        <label htmlFor="duration">¿Cuántas horas dura esta sesión del tour?: </label>
                        <input className="duration" type="number" name="duration" value={this.state.duration} required onChange={this.handleChange} />
                        <label htmlFor="maxPeople">Establece el número máximo de personas para esta sesión: </label>
                        <input className="maxPeople" type="number" name="maxPeople" value={this.state.maxPeople} required onChange={this.handleChange} />
                        <input type="submit" onClick={this.createSession} />
                    </div>
                    <div className="form-right">

                    </div>
                </CreateSessionsForm>
            </GuideMainDiv>
        )


    }
}


