import React, { Component } from 'react'
import ButtonForward from '../../../styles/buttons'
import DivPreviewTour from './TourPreviewStyle';
import { Link } from 'react-router-dom';
import SessionInfo from '../SessionInfo/SessionInfo'
export default class TourPreview extends Component {
    constructor(props) {
        super(props)
    }

    displaySessions(){
        return this.props.sessions.map((session, i) => <SessionInfo key={i} session={session} ></SessionInfo>)
    }

    render() {
        const { title, img, claim, date, price, rates, location } = this.props.tour;
        console.log(this.props.tour)
        const mediumrate = Math.round((rates.reduce((ac, cu) => {
            return ac + cu
        }, 0) / rates.length))
        return (
            <DivPreviewTour imgsource={img}>
                <div className="preview-wrapper">
                    <div className="tour-img">
                        <img className="tourimg" src={img} alt="" />
                    </div>
                    <div className="tour-info">
                        <div className="tour-title">
                        <h2>{title}</h2>
                        <p><i class="fas fa-star"></i> <span>{mediumrate}</span>/10</p>
                        </div>
                        <div className="tour-items">
                        <p>{claim}</p>
                        
                        {this.props.sessions && <p>Sessiones Disponibles:</p>}
                        {this.props.sessions && this.displaySessions()}
                    
                        </div>
                        <div className="location-price">
                        <p><i class="fas fa-map-marker-alt"></i>{location.address}</p>
                        <p class="price"><i class="fas fa-euro-sign"></i> {price}</p>

                        </div>
                        
                        
                        {this.props.sessions &&  
                        <Link
                            to={{
                                pathname: '/book/guide/tour/detail',
                                state: {
                                    tour: this.props.tour,
                                    sessions: this.props.sessions,
                                }
                            }}
                        ><i class="fas fa-check"></i> RESERVAR</Link>   
                        }
                        {this.props.sessionId && 
                        <Link
                            to={{
                                pathname: '/book/guide/tour/session',
                                state:{
                                    sessionId: this.props.sessionId
                                }
                            }}
                        >RESERVAR</Link>}
                    </div>
                </div>

            {/* </DivPreviewTour>
              <DivPreviewTour imgsource={img}>
              <div className="preview-wrapper">
                  <div className="tour-img">
                      <img className="tourimg" src={img} alt="" />
                  </div>
                  <div className="tour-info">
                      <div className="tour-title">
                      <h2>{title}</h2>
                      <p><i class="fas fa-star"></i> <span>{mediumrate}</span>/10</p>
                      </div>
                      <div className="tour-items">
                      <p><i class="fas fa-stopwatch"></i> 2h</p>
                      <p><i class="fas fa-stopwatch"></i> 2h</p>
                      <p><i class="fas fa-clock"></i> Hoy a las 10:00</p>
                      </div>
                      
                      <p>{claim}</p>
                      <p><i class="fas fa-map-marker-alt"></i>{location.address}</p>
                      
                      
                      <Link
                          to={{
                              pathname: '/book/guide/tour/session',
                              state: {
                                  sessionId: this.props.sessionId

                              }
                          }}
                      ><i class="fas fa-check"></i> RESERVAR</Link>
                  </div>
              </div>*/}

          </DivPreviewTour> 
        )
    }
}
