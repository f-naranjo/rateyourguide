import React, { Component } from 'react'
import TourService from '../../../services/TourService'
import GuidePreview from '../GuidePreview/GuidePreview'
import { Link } from 'react-router-dom'
import ButtonBack from '../../../styles/buttonBack';
import HeroInfo from '../../../styles/heroinfo';

export default class PageGuidesNow extends Component {
    _isMounted = false;


    constructor(props) {
        super(props)
        this.tourService = new TourService();
        
    }

    state = {
        guides: [],
    }

    componentDidMount() {
       if(this.props.location.filterParams){
        const {location,language,duration,people} = this.props.location.filterParams
        this._isMounted = true;
        this.tourService.filterGuidesNow(location,language,duration,people)
            .then((guides) => {
                console.log(guides)
                if (this._isMounted) {
                    this.setState({
                        ...this.state,
                        guides: guides,
                        filterParams: this.props.location.filterParams
                    })
                }
            })
       }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    displayGuides = () => {
        const { guides } = this.state;
        const { filterParams } = this.state;
        return guides.map((guide, i) => <GuidePreview key={i} filterParams={filterParams} guide={guide}></GuidePreview>)
    }

    render() {

        return (
            
            <div className="guides-wrapper">
               <HeroInfo><h1>Estos son los guías que hemos encontrado con actividades disponibles para ti:</h1></HeroInfo>
                {(this.state.guides.length > 0) && this.displayGuides()}
                {(this.state.guides.length > 0) && <Link className="big" to="/book"><ButtonBack className="big">VOLVER</ButtonBack></Link>}
                {(this.state.guides.length === 0) && <h1>CARGANDO...</h1>}
            </div>
         
        )
    }
}