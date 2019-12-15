import React, { Component } from 'react'
import PageTitle from '../../../fontStyles/PageTitle'
import AuthService from '../../../services/AuthService';
import TourService from '../../../services/TourService';
import colors from '../../../styles/colors';
import TourPreview from '../TourPreview/TourPreview';
import HeroInfo from '../../../styles/heroinfo';
import ButtonBack from '../../../styles/buttonBack';

export default class PageAvailableTours extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.authService = new AuthService();
        this.tourService = new TourService();
    }

    state = {
        
    }

    componentDidMount() {
        this._isMounted = true

        if(this.props.location.state.filterParams.duration){
            const {toursCreated, tourSessions} = this.props.location.state.guide
            const {location, language, duration, people} = this.props.location.state.filterParams
            let now = new Date()
            let hourLimit = 24
            let timeLimit = new Date(new Date().setUTCHours(hourLimit))
            const availableSessions = tourSessions.filter((session)=>{
                return session.language === language 
                && session.duration < duration 
                && (session.maxPeople - session.currentPeople ) > people 
                && new Date(session.date) > now &&
                new Date(session.date) < timeLimit 
            })
            let availableToursId =[] 
            availableSessions.forEach(session => {
                if(!availableToursId.includes(session.tour)){
                    availableToursId.push(session.tour)
                }
            })
            let availableTours = toursCreated.filter((tour)=>{
                let comp = false
                availableToursId.forEach((tourId)=>{
                    if(tourId === tour.id){
                        comp = true
                    }
                })
                if(comp) return true
            })
            //  Sort in ascending... WIP
            // availableTours = availableTours.sort((a,b)=>{
            //     let mediumA = a.rates.reduce((ac,cu)=>{
            //         ac+cu
            //     },0)/a.rates.length
            //     let mediumB = b.rates.reduce((ac,cu)=>{
            //         ac+cu
            //     },0)/b.rates.length
            //     return mediumA - mediumB
            // })
         
            this.setState({
                ...this.state,
                tours: availableTours,
                sessions: availableSessions,
            })
        }
        
        if(!this.props.location.state.filterParams.duration){
            const {toursCreated, tourSessions} = this.props.location.state.guide
            const {location, language, people, dateFrom, dateTo} = this.props.location.state.filterParams
            const availableSessions = tourSessions.filter((session)=>{
                return session.language === language 
                && (session.maxPeople - session.currentPeople ) > people 
                && new Date(session.date) > new Date(dateFrom) &&
                new Date(session.date) < new Date(dateTo) 
            })
            let availableToursId =[] 
            availableSessions.forEach(session => {
                if(!availableToursId.includes(session.tour)){
                    availableToursId.push(session.tour)
                }
            })
            let availableTours = toursCreated.filter((tour)=>{
                let comp = false
                availableToursId.forEach((tourId)=>{
                    if(tourId === tour.id){
                        comp = true
                    }
                })
                if(comp) return true
            })


            this.setState({
                ...this.state,
                tours: availableTours,
                sessions: availableSessions,
            })
        }

    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    displayTours = () => {
        return this.state.tours.map((tour, i) => <TourPreview key={i} tour={tour} sessionId={this.state.sessions[i]._id}></TourPreview>)
    }

    render() {
        console.log(this.state.tours)
        return (
            <div>
                {(this.state.tours) && <HeroInfo><h1>Estas son las experiencias que {this.state.tours[0].owner.info.name} tiene disponibles:</h1></HeroInfo>}
                {(this.state.tours) && this.displayTours()}
                {(this.state.tours) && <ButtonBack>VOLVER</ButtonBack>}
            </div>
        )
    }
}
