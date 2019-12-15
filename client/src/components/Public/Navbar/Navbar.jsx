import React, { Component } from 'react'
import MainNav from './NavbarStyle'
import TourService from '../../../services/TourService'
import { ReactSVG } from 'react-svg'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.tourService = new TourService();
    }

    state = {
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
        return (
            <MainNav>
                
                <ReactSVG className="icon direction" src="./direction_icon.svg"/>
                
                <div className="app-logo"><Link to="/"><ReactSVG src="./dingologo.svg"></ReactSVG></Link></div>
             
                <ReactSVG className="icon ham-close" src="./close_icon.svg"/>
                <ReactSVG className="icon ham-menu" src="./ham_icon.svg"/>
                
            </MainNav>
        )
    }
}
