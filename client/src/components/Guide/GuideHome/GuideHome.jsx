import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import AuthService from './../../../services/AuthService';
import GuideMainDiv from '../GuideStyles';
import GuideService from '../../../services/GuideService';
import TourService from '../../../services/TourService';
import HomeAdmin from './GuideHomeStyle';

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
                        this.setUser(false)
                    }
                )
                .catch(() => {
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
        if(this.state.user){
            const {info, tourSessions, toursCreated, comments, rates, searchDisplays, profileViews} = this.state.user
            const mediumrate = Math.round((rates.reduce((ac, cu) => {
                return ac + cu
            }, 0) / rates.length))
        return (
            <GuideMainDiv>
                 <div className="breadcrumbs"><h4>Mi panel</h4><p>Bienvenido de nuevo {info.name}! Estas son tus estadísticas actualizadas :)</p></div>
                <HomeAdmin>
                <div className="stats-main">
                    <div className="stat">
                    <i class="fas fa-star"></i>
                        <h2>Tu valoración:</h2>
        <p><span>{mediumrate}</span>/10</p>
                        <p>Basado en {rates.length} opiniones</p>
                    </div>
                    <div className="stat">
                    <i class="fas fa-euro-sign"></i>
                    <h2>Facturado este mes:</h2>
                        <p><span>643</span>€</p>
                       
                    </div>
                    <div className="stat">
                    <i class="fas fa-eye"></i>
                    <h2>Visitas a tu perfil:</h2>
                        <p><span>{profileViews}</span></p>
                    </div>
                    <div className="stat">
                    <i class="fas fa-search"></i>
                    <h2>Aparición en búsquedas:</h2>
        <p><span>{searchDisplays}</span></p>
                    </div>
                </div>
                <div className="stats-secondary">
                    <div className="stat">
                    <i class="fas fa-directions"></i>
                    <h2>Tours Creados:</h2>
                        <p><span>{toursCreated.length}</span></p>
                        </div>
                    <div className="stat">
                    <i class="fas fa-calendar-alt"></i>
                    <h2>Sesiones Activas:</h2>
                        <p><span>{tourSessions.length}</span></p>
                        </div>
                    
                    <div className="stat">
                    <i class="fas fa-comments"></i>
                    <h2>Comentarios de tus tours:</h2>
                        <p><span>32</span></p>
                        </div>
                    
                    <div className="stat">
                    <i class="fas fa-comment-dots"></i>
                    <h2>Comentarios Sobre ti:</h2>
                        <p><span>12</span></p>
                    </div>
                </div>
                {/* <div className="social">
                    <h4>Últimas valoraciones hechas por clientes:</h4>
                    <div className="comments-wrapper">
                    <div className="comment">1</div>
                    <div className="comment">2</div>
                    <div className="comment">3</div>
                    <div className="comment">4</div>
                    <div className="comment">5</div>
                    <div className="comment">6</div>
                    </div>            
                </div> */}
                </HomeAdmin>
                
            </GuideMainDiv>
        )


        }
        return (<h1>Loading...</h1>)
    
    }
}
