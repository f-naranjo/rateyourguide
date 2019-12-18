import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import AuthService from './../../../services/AuthService';
import GuideMainDiv from '../GuideStyles';
import GuideService from '../../../services/GuideService';
import CreateSessionsForm from './GuideCreateSessionsStyle';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';


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
        date: new Date(),
        time: "10:30"
    }


    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value })
    }

    handleDate = (date) => {
        console.log(date)
        this.setState({ ...this.state, date: date })
    }

    handleTime = (time) => {
        console.log(time)
        this.setState({ ...this.state, time: time })
    }

    setUser = (user) => {
        this.setState({ ...this.state, user })
    }

    fetchUser = () => {
        if (this.state.owner === null) {
            this.setState({
                owner: this.props.location.state.owner,
                tourId: this.props.location.state.id,
                tour: this.props.location.state
            })
        }
    }

    createSession = (e) => {
        e.preventDefault()
        console.log("llama para crear")
        const hour = this.state.time.split(":")
        const date = new Date(this.state.date.setHours(+hour[0]+1, +hour[1]))
        const { owner, tourId, maxPeople, duration, language } = this.state
        this.guideService.createSession(owner, tourId, maxPeople, duration, language, date)
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
                        <h2>Estas creando sesiones para el Tour: {this.state.tour.title}</h2>
                        <div className="session-date">
                        <p>Elige la fecha y hora de la sesión:</p>
                        <DatePicker onChange={this.handleDate} value={this.state.date} />
                        <TimePicker onChange={this.handleTime} value={this.state.time} />
                        </div>
                        

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


