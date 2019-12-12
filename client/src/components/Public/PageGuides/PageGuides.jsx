import React, { Component } from 'react'
import TourService from '../../../services/TourService'
import ButtonForward from '../../../styles/buttons'
import ButtonBack from '../../../styles/buttons'
import GuidePreview from '../GuidePreview/GuidePreview'
import { Link } from 'react-router-dom'


export default class PageGuides extends Component {
    _isMounted = false;


    constructor(props) {
        super(props)
        this.tourService = new TourService();
        
    }

    state = {
        guides: [],
        filterParams : this.props.location.filterParams
    }

    componentDidMount() {
       const {location,language,duration,people} = this.props.location.filterParams
        this._isMounted = true;
        this.tourService.filterGuides(location,language,duration,people)
            .then((guides) => {
                console.log(guides)
                if (this._isMounted) {
                    this.setState({
                        ...this.state,
                        guides: guides,
                    })
                }
            })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    displayGuides = () => {

        const { guides } = this.state;
        return guides.map((guide, i) => <GuidePreview key={i} guide={guide}></GuidePreview>)
    }

    render() {

        return (
            <div className="guides-wrapper">
                {(this.state.guides.length > 0) && this.displayGuides()}
                {(this.state.guides.length > 0) && <Link className="big" to="/book"><ButtonForward className="big">VOLVER</ButtonForward></Link>}
                {(this.state.guides.length === 0) && <h1>CARGANDO...</h1>}
       
            </div>
         
        )
    }
}