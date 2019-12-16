import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import GuideSidebarDiv from './GuideSidebarStyle';
import AuthService from './../../../services/AuthService';
import GuideService from '../../../services/GuideService';
import TourService from '../../../services/TourService';

export default class GuideSidebar extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        this.authService = new AuthService();
        this.guideService = new GuideService();
        this.tourService = new TourService();
    }
    state = {
        user: null,
        guide: null,
    }

    //    notGuide(){
    //         this.history.push('/book')
    //    }
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

    fetchGuide = () => {
        if (this.state.user) {
            this._isMounted = true;
            this.guideService.getGuide(this.state.user.id)
                .then((guide) => {
                    if (this._isMounted) {
                        this.setState({
                            ...this.state,
                            guide: guide,
                        })
                    }
                })
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        this.fetchUser()
        if (!this.state.guide) {
            this.fetchGuide()
        }
        
        return (
            <GuideSidebarDiv>
                
                <ReactSVG src="./dingologo.svg"></ReactSVG>
                <div className="guide-info">
                {this.state.guide && <img src={this.state.guide.info.img} alt=""/>}
                {this.state.guide && <h2>{this.state.guide.info.name}</h2>}
                </div>
                <ul class="main-guidemenu">
                    <li>
                        <Link
                            to={{
                                pathname: "/guides/adminpanel/",
                                guide: this.state.guide
                            }}><i class="fas fa-user-circle"></i> Mi resumen</Link></li>
                    <li><Link
                            to={{
                                pathname: "/guides/adminpanel/sessions",
                                guide: this.state.guide
                            }}><i class="fas fa-stopwatch"></i> Sesiones Pendientes</Link></li>
                    <li><Link
                            to={{
                                pathname: "/guides/adminpanel/calendar",
                                guide: this.state.guide
                            }}><i class="far fa-calendar-alt"></i> Planificación Semanal</Link></li>
                    <li><Link
                            to={{
                                pathname: "/guides/adminpanel/tours",
                                guide: this.state.guide
                            }}><i class="fas fa-lightbulb"></i> Mis Tours</Link></li>
                    <li><Link
                            to={{
                                pathname: "/guides/adminpanel/comments",
                                guide: this.state.guide
                            }}><i class="fas fa-star"></i> Mis valoraciones</Link></li>
                    <li><Link
                            to={{
                                pathname: "/guides/adminpanel/profile",
                                guide: this.state.guide
                            }}><i class="fas fa-user-edit"></i> Editar Perfil</Link></li>
                            <li><Link
                            to={{
                                pathname: "/guides/logout",
                                guide: this.state.guide
                            }}><i class="fas fa-user-edit"></i> Logout</Link></li>
                </ul>
               
            </GuideSidebarDiv>
        )
    }
}

