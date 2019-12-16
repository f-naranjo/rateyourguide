import React, { Component } from 'react'
import TourService from '../../../services/TourService'
import { Link } from 'react-router-dom'
import ButtonBack from '../../../styles/buttonBack';
import ButtonForward from '../../../styles/buttons';
import AuthNav from './AuthButtonsStyle';
export default class AuthButtons extends Component {
    constructor(props) {
        super(props)
        this.tourService = new TourService();
    }

    state = {

    }

    render() {

        return (
         <AuthNav>
             <Link to="/signup"><ButtonBack>Sign Up</ButtonBack></Link>
             <Link to="/login"><ButtonForward>Login</ButtonForward></Link>
         </AuthNav>
        )
    }
}
