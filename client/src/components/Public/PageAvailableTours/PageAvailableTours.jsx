import React, { Component } from 'react'
import PageTitle from '../../../fontStyles/PageTitle'
import AuthService from '../../../services/AuthService';
import TourService from '../../../services/TourService';
import colors from '../../../styles/colors';
import TourPreview from '../TourPreview/TourPreview';
import HeroInfo from '../../../styles/heroinfo';
import ButtonBack from '../../../styles/buttonBack';
import _ from 'lodash'
import AdminTourDiv from '../../Guide/TourAdminPreview/TourAdminPreviewStyle';
export default class PageAvailableTours extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.authService = new AuthService();
        this.tourService = new TourService();
    }

    state = {
        availables:null,
    }

    // function calcDistance(lat1, lng1, lat2, lng2) {
    //     const R = 6371; // earth radius in km
    //     let dLat = toRad(lat2 - lat1);
    //     let dLng = toRad(lng2 - lng1);
    //     lat1 = toRad(lat1);
    //     lat2 = toRad(lat2);
    //   ​
    //     let a =
    //       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    //       Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);
    //     let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    //     let d = R * c;
    //     return d;
    //   }
    //   ​
    //   function toRad(value) {
    //     return (value * Math.PI) / 180;
    //   }
    //   Contraer
      
      
      
      
      

    componentDidMount() {
        this._isMounted = true
        if(!this.props.location.state.filterParams.duration){
         
            const {toursCreated, tourSessions} = this.props.location.state.guide
            console.log("TORUSCREATECD")
            console.log(toursCreated)
                const {location, language, people, dateFrom, dateTo} = this.props.location.state.filterParams
                const availableSessions = tourSessions.filter((session)=>{
                    return session.language === language 
                    && (session.maxPeople - session.currentPeople ) > people 
                    && new Date(session.date) > new Date(dateFrom) &&
                    new Date(session.date) < new Date(dateTo) 
                })

                let availables =[]
                var grouped = _.groupBy(availableSessions, 'tour');
                class AvailableTour{
                    constructor(tourId,sessions){
                      this.tour = tourId;
                      this.sessions =  sessions;
                    }
                  }
                for(let id in grouped){
                    console.log("----un tour-----")
                    let group = grouped[id]
                    let tour = toursCreated.filter(tour => tour.id === group[0].tour)
                    availables.push(new AvailableTour(...tour,group))
                }
   
                console.log("-----AVAILABLES----------")
                console.log(availables)
                this.setState({
                    ...this.state,
                    availables
                })
        }
        // if(this.props.location.state.filterParams.duration){
        //     const {toursCreated, tourSessions} = this.props.location.state.guide
        //     const {location, language, duration, people} = this.props.location.state.filterParams
        //     let now = new Date()
        //     let hourLimit = 24
        //     let timeLimit = new Date(new Date().setUTCHours(hourLimit))
        //     const availableSessions = tourSessions.filter((session)=>{
        //         return session.language === language 
        //         && session.duration < duration 
        //         && (session.maxPeople - session.currentPeople ) > people 
        //         && new Date(session.date) > now &&
        //         new Date(session.date) < timeLimit 
        //     })
        //     let availableToursId =[] 
        //     availableSessions.forEach(session => {
        //         if(!availableToursId.includes(session.tour)){
        //             availableToursId.push(session.tour)
        //         }
        //     })
        //     let availableTours = toursCreated.filter((tour)=>{
        //         let comp = false
        //         availableToursId.forEach((tourId)=>{
        //             if(tourId === tour.id){
        //                 comp = true
        //             }
        //         })
        //         if(comp) return true
        //     })


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
         
        //     this.setState({
        //         ...this.state,
        //         tours: availableTours,
        //         sessions: availableSessions,
        //     })
        // }

    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    displayTours = () => {
        return this.state.availables.map((tour, i) => <TourPreview key={i} tour={tour.tour} sessions={tour.sessions}></TourPreview>)
    }

    render() {
        if(this.state.availables){
           
            return (
                <div>
                    {(this.state.availables) && <HeroInfo><h1>Estas son las experiencias que {this.props.location.state.guide.info.name} tiene disponibles:</h1></HeroInfo>}
                    {(this.state.availables) && this.displayTours()}
                    {(this.state.availables) && <ButtonBack>VOLVER</ButtonBack>}
                </div>
            )
        }else{
            return(<h1>Vaya, parece que no hay experiencias disponibles para tu búsqueda :(</h1>)
        }
       
    }
}
