import React, { Component } from 'react'
import BookForm from './FormBookStyle'
import TourService from '../../../services/TourService'

import { Link } from 'react-router-dom'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import ButtonBack from '../../../styles/buttonBack';
import ButtonForward from '../../../styles/buttons';
export default class FormBook extends Component {
    constructor(props) {
        super(props)
        this.tourService = new TourService();
    }

    state = {
        location: "España",
        date: [new Date(), new Date()],
        dateTo:"",
        dateFrom:"",
        language: "spanish",
        people: "1",
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value })
        console.log(this.state)
    }

    handleDate = (date) =>{
        console.log(date[0])
        this.setState({...this.state, dateFrom: date[0], dateTo: date[1],date: date})
    }

    render() {
        const { location, dateFrom, dateTo, language } = this.state;
        return (
            <BookForm>
                <form onSubmit={this.handleSignUp}>
                    <label htmlFor="location">¿A dónde viajas? </label>
                    <input className="location" type="text" name="location" value={location} required onChange={this.handleChange} />
                     <label>Selecciona las fechas: </label>
                     <DateRangePicker className="date-range" onChange={this.handleDate}
          value={this.state.date}></DateRangePicker>
                    <label htmlFor="people">¿Cuantos Sois?: </label>
                    <select name="people" onChange={this.handleChange}>
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
                    <select name="language" onChange={this.handleChange}>
                        <option value="spanish" defaultValue>Español</option>
                        <option value="english" >English</option>
                        <option value="french">Français</option>
                        <option value="german">Deutsch</option>
                        <option value="russian">Russian</option>
                    </select>
                    <Link to={{
                        pathname: "/book/guides",
                        filterParams: this.state
                        }}>
                    <ButtonForward>ENCONTRAR GUÍAS</ButtonForward></Link>
                    <Link to="/book/guides"><ButtonBack>VOLVER</ButtonBack></Link>
                </form>
            </BookForm>
        )
    }
}
