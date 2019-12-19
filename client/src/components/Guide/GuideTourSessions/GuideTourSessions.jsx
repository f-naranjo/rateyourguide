import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import AuthService from './../../../services/AuthService';
import GuideMainDiv from '../GuideStyles';
import GuideService from '../../../services/GuideService';
import SessionsDiv from './GuideTourSessionsStyle';
import SessionAdminPreview from '../SessionPreview/SessionPreview';

export default class GuideTourSessions extends Component {
    constructor(props) {
        super(props)
        this.authService = new AuthService();
        this.guideService = new GuideService();
    }

    state = {
        user: null,
        tour:null,
    }

    setUser = (user) => {
        this.setState({ ...this.state, 
            user: user,
            tour: this.props.location.state.tour
         })
    }

    updateUser() {
        this.authService.loggedIn()
            .then(
                (user) => {
                    console.log(user)
                    this.setState({
                        ...this.state,user})
                    
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


    displaySessions = () => {
        if (this.state.tour) { 
            let sessions = this.state.user.tourSessions.filter(session=> session.tour === this.state.tour.id).sort((a,b) => {
                let c= new Date(a.date)
                let d=new Date(b.date)
                return c - d })
            return sessions.map((session, i) => <SessionAdminPreview key={i} session={session} updateUser={()=>this.updateUser()}/>) }
    }

    componentDidMount() {
        console.log(this.props.location.state.tour)
        this.fetchUser()
    }

    render() {
        if (this.state.user !== null) {
            return (
                <GuideMainDiv>
                    <div className="breadcrumbs"><h4>Mi panel / Mis Tours / {this.props.location.state.tour.title}</h4><p>Edita las sesiones que están disponibles para los usuarios de este tour.</p></div>
                    <div className="page-controls">
                        {/* <Link className="admin-btn-xl create"
                            to={{
                                pathname: '/guides/adminpanel/session/create',
                                state:this.props.location.state.tour
                            }}
                        ><i class="far fa-calendar-plus"></i>CREAR NUEVA SESION</Link> */}
                    </div>
                    <SessionsDiv>
                       {this.displaySessions()}
                    </SessionsDiv>
                    
                </GuideMainDiv>
            )
        }
        return (<GuideMainDiv><h1>Cargando...</h1></GuideMainDiv>)
    }
}
