import React, { Component } from 'react'
import MainNav from './NavbarStyle'
import TourService from '../../../services/TourService'
import { ReactSVG } from 'react-svg'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';
import AuthService from '../../../services/AuthService'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.tourService = new TourService();
        this.authService = new AuthService();
    }

    state = {
    }

    logout(){
        this.authService.logout()
        .then(
            //his.history.push("/")
        )
    }

    render() {
        return (
            <MainNav>
                
                <Link onClick={()=>this.logout()}><ReactSVG className="icon direction" src="./direction_icon.svg"/></Link>
                
                <div className="app-logo"><Link to="/"><ReactSVG src="./dingologo.svg"></ReactSVG></Link></div>
             
                <ReactSVG className="icon ham-close" src="./close_icon.svg"/>
                <ReactSVG className="icon ham-menu" src="./ham_icon.svg"/>
                
            </MainNav>
        )
    }
}
