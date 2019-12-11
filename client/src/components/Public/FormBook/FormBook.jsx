import React, { Component } from 'react'
import BookForm from './FormBookStyle'
import TourService from '../../../services/TourService'
import ButtonForward from '../../../styles/buttons'
import ButtonBack from '../../../styles/buttons'


export default class FormBook extends Component {
    constructor(props) {
        super(props)
        this.tourService = new TourService();
    }

    state = {
        location: "",
        dateFrom: "",
        dateTo: "",
        language: "",
        people: 0,
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value })
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

    render() {
        const { location, dateFrom, dateTo, language } = this.state;
        return (
            <BookForm>
                <form onSubmit={this.handleSignUp}>
                    <label htmlFor="location">¿A dónde viajas? </label>
                    <input type="text" name="location" value={location} required onChange={this.handleChange} />
                    <label htmlFor="dateFrom">¿Cuándo llegas?: </label>
                    <input type="date" value={dateFrom} name="dateFrom" required onChange={this.handleChange} />
                    <label htmlFor="dateTo">¿Hasta cuando te quedas?: </label>
                    <input type="date" value={dateFrom} name="dateTo" required onChange={this.handleChange} />
                    <label htmlFor="people">¿Cuantos Sois?: </label>
                    <select name="people">
                        <option value="1" defaultValue>1</option>
                        <option value="2" >2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                    <label htmlFor="language">¿En qué idioma?: </label>
                    <select name="language">
                        <option value="spanish" defaultValue>Español</option>
                        <option value="english" >English</option>
                        <option value="french">Français</option>
                        <option value="german">Deutsch</option>
                        <option value="russian">Russian</option>
                    </select>
                    <ButtonForward>ENCONTRAR GUÍAS</ButtonForward>
                   <ButtonBack>VOLVER</ButtonBack>
                </form>
            </BookForm>
        )
    }
}
