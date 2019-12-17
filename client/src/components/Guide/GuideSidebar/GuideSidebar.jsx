import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import GuideSidebarDiv from './GuideSidebarStyle';
import AuthService from './../../../services/AuthService';
import GuideService from '../../../services/GuideService';
import TourService from '../../../services/TourService';

class GuideSidebar extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        this.authService = new AuthService();
    }
    state = {
        user: null,
    }

    //    notGuide(){
    //         this.history.push('/book')
    //    }
    setUser = (user) => {
        this.setState({ ...this.state, user })
    }

    logout(){
        this.authService.logout()
        .then(
            this.props.history.push("/book")
        )
    }

    fetchUser = () => {
        if (this.state.user === null) {
            this.authService.loggedIn()
                .then(
                    (user) => {
           
                        this.setUser(user)
                    },
                    (error) => {
                        this.setUser(false)
                    }
                )
                .catch(() => {
                    this.setUser(false)
                })
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        if (!this.state.user) {
            this.fetchUser()
        }
        
        return (
            <GuideSidebarDiv>           
                <ReactSVG src="./dingologo.svg"></ReactSVG>
                <div className="guide-info">
                {this.state.user && <img src={this.state.user.info.img} alt=""/>}
                {this.state.user && <h2>{this.state.user.info.name}</h2>}
                </div>
                <ul className="main-guidemenu">
                    <li>
                        <Link
                            to={{
                                pathname: "/guides/adminpanel/",
                               // guide: this.state.user
                            }}><i className="fas fa-user-circle"></i> Mi resumen</Link></li>
                    <li><Link
                            to={{
                                pathname: "/guides/adminpanel/sessions",
                               // guide: this.state.user
                            }}><i className="fas fa-stopwatch"></i> Sesiones Pendientes</Link></li>
                    <li><Link
                            to={{
                                pathname: "/guides/adminpanel/calendar",
                               // guide: this.state.user
                            }}><i className="far fa-calendar-alt"></i> Planificación Semanal</Link></li>
                    <li><Link
                            to={{
                                pathname: "/guides/adminpanel/tours",
                               // guide: this.state.user
                            }}><i className="fas fa-lightbulb"></i> Mis Tours</Link></li>
                    <li><Link
                            to={{
                                pathname: "/guides/adminpanel/comments",
                                //guide: this.state.user
                            }}><i className="fas fa-star"></i> Mis valoraciones</Link></li>
                    <li><Link
                            to={{
                                pathname: "/guides/adminpanel/profile",
                               // guide: this.state.user
                            }}><i className="fas fa-user-edit"></i> Editar Perfil</Link></li>
                            <li onClick={()=>this.logout()}><i className="fas fa-user-edit"></i> Logout</li>
                </ul>
               
            </GuideSidebarDiv>
        )
    }
}

export default withRouter (GuideSidebar);