import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import AuthService from './../../../services/AuthService';
import GuideMainDiv from '../GuideStyles';
import GuideService from '../../../services/GuideService';
import TourService from '../../../services/TourService';

export default class GuideHome extends Component {
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
        if(this.state.user){
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
        if(!this.state.guide){
            this.fetchGuide()
        }
        if(this.state.guide){
            const {info, tourSessions, toursCreated, comments, rates, searchdisplays, profileViews} = this.state.guide
        
        return (
            <GuideMainDiv>
                 <h1>HOLA! {info.name}, Bienvenido a tu panel de administración</h1>
            </GuideMainDiv>
        )


        }
        return (<h1>Loading...</h1>)
    
    }
}
