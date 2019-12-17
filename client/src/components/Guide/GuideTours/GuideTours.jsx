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
    // state = {
    //     user: null,
    // }

    //    notGuide(){
    //         this.history.push('/book')
    //    }
    // setUser = (user) => {  
    //     const{toursCreated, tourSessions} = user
    //     this.setState({ ...this.state, user,toursCreated, tourSessions })
    // }

    // fetchUser = () => {
    //     if (this.state.user === null) {
            
    //         this.authService.loggedIn()
    //             .then(
    //                 (user) => {
                       
    //                     console.log(user)
    //                     this.setUser(user)
    //                 },
    //                 (error) => {
    //                     console.log("2")
    //                     this.setUser(false)
    //                 }
    //             )
    //             .catch(() => {
    //                 console.log("3")
    //                 this.setUser(false)
    //             })
    //     }
    // }

    // setGuide = () =>{
    //     if(this.props.location.guide){
    //         const{toursCreated, tourSessions} = this.props.location.guide
    //         this.setState({
    //             ...this.state,
    //             guide:this.props.location.guide,
    //             tours: toursCreated,
    //             sessions: tourSessions,
    //         })
    //     }
    //     console.log("1")
    //     console.log(this.props.location.guide)
    // }

    setHome = () =>{
       return <Redirect to='/guides/adminpanel'/>
    }

    displayTours = () => {
        if(this.props.location.guide){return this.props.location.guide.toursCreated.map((tour, i) => <TourAdminPreview key={i} tour={tour}></TourAdminPreview>)}
    }

    

    render() {
        if(this.props.location.guide!== null){
            return (
                <GuideMainDiv>
                <div className="breadcrumbs"><h4>Mi panel / Mis Tours</h4><p>Este es tu panel de administración de Tours. Aquí puedes editar los tours existentes o crear nuevos.</p></div>
                <div className="page-controls">
                <Link className="admin-btn-xl create"
                            to={{
                                pathname: '/guides/adminpanel/tour/create',
                                guide:this.props.location.guide
                            }}
                        ><i class="far fa-calendar-plus"></i>CREAR NUEVO TOUR</Link>

                </div>
                {this.displayTours()}
                </GuideMainDiv>
            )
        }
      return(<h1>Cargando...</h1>)
    }
}
