import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import AuthService from './../../../services/AuthService';
import GuideMainDiv from '../GuideStyles';
import TourAdminPreview from '../TourAdminPreview/TourAdminPreview';

export default class GuideTour extends Component {
    constructor(props) {
        super(props)
        this.authService = new AuthService();
    }

    state = {
        user: null,
    }

    setUser = (user) => {
        this.setState({ ...this.state, user })
    }

    fetchUser = () => {
        if (this.state.user === null) {

            this.authService.loggedIn()
                .then(
                    (user) => {
                        console.log(user)
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

    updateUser() {
        this.authService.loggedIn()
            .then(
                (user) => {
                    console.log(user)
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

    setHome = () => {
        return <Redirect to='/users/adminpanel/' />
    }

    displayTours = () => {
        console.log("entra al display")
        if (this.state.user) { return this.state.user.toursCreated.map((tour, i) => <TourAdminPreview key={i} tour={tour} updateUser={()=>this.updateUser()}></TourAdminPreview>) }
    }

    componentDidMount() {
        this.fetchUser()
    }

    render() {
        if (this.state.user !== null) {
            return (
                <GuideMainDiv>
                    <div className="breadcrumbs"><h4>Mi panel / Mis Tours</h4><p>Este es tu panel de administración de Tours. Aquí puedes editar los tours existentes o crear nuevos.</p></div>
                    <div className="page-controls">
                        <Link className="admin-btn-xl create"
                            to={{
                                pathname: '/guides/adminpanel/tour/create',
                                //user:this.state.user
                            }}
                        ><i class="far fa-calendar-plus"></i>CREAR NUEVO TOUR</Link>

                    </div>
                    {this.displayTours()}
                </GuideMainDiv>
            )
        }
        return (<GuideMainDiv><h1>Cargando...</h1></GuideMainDiv>)
    }
}
