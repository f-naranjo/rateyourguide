import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import AuthService from './../../../services/AuthService';
import GuideMainDiv from '../GuideStyles';
import GuideService from '../../../services/GuideService';
import SessionsDiv from './GuideSessionsStyle';
import SessionManagement from '../SessionManagement/SessionManagement';

export default class GuideTourSessions extends Component {
    constructor(props) {
        super(props)
        this.authService = new AuthService();
        this.guideService = new GuideService();
    }

    state = {
        sessions:null,
    }

    setUser = (user) => {
        this.setState({ ...this.state, 
            user: user,
         })
    }

    updateSessions() {
        this.authService.loggedIn()
        .then(
            (user) => {
                console.log(user)
                this.guideService.getSessions(user.id)
                .then((sessions)=>{
                    this.setState({
                        sessions
                    })
                })
                //this.setUser(user)
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

    fetchSession= (userId) => {
        console.log("ni entra")
        this.guideService.getSessions(userId)
        .then((sessions)=>{
            console.log("hola")
            this.setState({
                sessions
            })
        })
    }

    fetchUser = () => {
        if (this.state.sessions === null) {
            this.authService.loggedIn()
                .then(
                    (user) => {
                     console.log(user.id)
                       this.fetchSession(user.id)
                        //this.setUser(user)
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
        if (this.state.sessions) { 
            let sessions = 
            this.state.sessions.filter(session=> session.currentPeople > 0 )
            .sort((a,b) => {
                let c= new Date(a.date)
                let d=new Date(b.date)
                return c - d })
            return sessions.map((session, i) => <SessionManagement key={i} session={session} updateSessions={()=>this.updateSessions()}/>)
        }
    }


    componentDidMount() {
        this.fetchUser()
    }

    render() {
        if (this.state.sessions !== null) {
            return (
                <GuideMainDiv>
                    <div className="breadcrumbs"><h4>Mi panel / Sesiones Pendientes</h4><p>Estas son las sesiones que tienen reservas. Confírmalas y ponte en contacto con los usuarios para darle los detalles de la experiencia</p></div>
                    <SessionsDiv>
                       {this.displaySessions()}
                    </SessionsDiv>
                    
                </GuideMainDiv>
            )
        }
        return (<GuideMainDiv><h1>Cargando fuerte...</h1></GuideMainDiv>)
    }
}
