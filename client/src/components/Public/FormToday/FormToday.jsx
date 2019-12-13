import React, { Component } from 'react'
import BookForm from './FormTodayStyle'
import TourService from '../../../services/TourService'
import ButtonForward from '../../../styles/buttons'
import ButtonBack from '../../../styles/buttons'
import { Link } from 'react-router-dom'


export default class FormToday extends Component {
    constructor(props) {
        super(props)
        this.tourService = new TourService();
    }

    state = {
        location: "",
        dateFrom: "",
        dateTo: "",
        language: "spanish",
        duration: "4",
        people:"2",
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value })
        console.log(this.state)
    }

    handlePeopleSelect = (e) => {
        console.log(this.state)
       this.setState({
           ...this.state, 
           "people": this.refs.people.value
        })
        
    }

    handleDurationSelect = (e) => {
        console.log(this.state)
       this.setState({
           ...this.state, 
           "duration": this.refs.duration.value
        })
        
    }

    handleLanguageSelect = (e) => {
        console.log(this.state)
       this.setState({
           ...this.state, 
           "language": this.refs.language.value
        })
        
    }


    handleSignUp = (e) => {
        e.preventDefault()
        const { history, setUser } = this.props;
        this.authService.signup(this.state)
            .then(
                (user) => {
                    setUser(user);
                    history.push("/")
                },
                (error) => {
                    console.error(error)
                }
            )
    }
    handleUpload = (e) => {
        const uploadData = new FormData();
        uploadData.append('picture', e.target.files[0])
        this.authService.upload(uploadData)
            .then(
                (data) => {
                    this.setState({ ...this.state, picture: data.secure_url })
                },
                (error) => {
                    console.error(error)
                }
            )
    }

    sendFilterParams = (e) => {
        const { location,language,duration,people } = this.state
        // const filterParams = [location,language,duration,people]
        //console.log("EN FORMTODAY --->  " + filterParams)
        this.props.handleFilterParams(location,language,duration,people)
    }
    render() {
        const { location, dateFrom, dateTo, language } = this.state;
        return (
            <BookForm>
                <form onSubmit={this.handleSignUp}>
                    <label htmlFor="location">Ubicación Actual: </label>
                    <input type="text" name="location" value={location} required onChange={this.handleChange} />
                    <label htmlFor="people">¿Cuantos Sois?: </label>
                    <select ref="people" name="people" onChange={this.handlePeopleSelect}>
                        <option value="1" defaultValue>1</option>
                        <option value="2" >2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                    <label htmlFor="duration">¿Qué duración prefieres?: </label>
                    <select ref="duration" name="duration" onChange={this.handleDurationSelect}>
                        <option value="1" defaultValue>1 Hora</option>
                        <option value="2" >2 Horas</option>
                        <option value="4">4 Horas</option>
                        <option value="10">No me importa</option>
                    </select>
                    <label htmlFor="language">¿En qué idioma?: </label>
                    <select ref="language" name="language" onChange={this.handleLanguageSelect}>
                        <option value="spanish" defaultValue>Español</option>
                        <option value="english" >English</option>
                        <option value="french">Français</option>
                        <option value="german">Deutsch</option>
                        <option value="russian">Russian</option>
                    </select>
                    <Link to={{
                        pathname:"/book/guides",
                        filterParams:this.state }}> <ButtonForward>ENCONTRAR GUÍAS</ButtonForward></Link>
                    <Link to="/book"><ButtonBack>VOLVER</ButtonBack></Link>
                </form>
            </BookForm>
        )
    }
}
