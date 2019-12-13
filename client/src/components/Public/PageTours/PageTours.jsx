import React, { Component } from 'react'
import PageTitle from '../../../fontStyles/PageTitle'
import AuthService from '../../../services/AuthService';
import TourService from '../../../services/TourService';
import colors from '../../../styles/colors';

export default class PageTours extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.authService = new AuthService();
        this.tourService = new TourService();
    }

    state = {
        tours: [],
    }

    componentDidMount() {
        this._isMounted = true;


        // this.tourService.allTours()
        //     .then((tours) => {
        //         if (this._isMounted) {
        //             this.setState({
        //                 ...this.state,
        //                 tours: tours,
        //             })
        //         }
        //     })
    }

    componentWillUnmount() {
        this._isMounted = false;

      }

    displayTours = () => {
        return this.props.location.info.guide.toursCreated.map((tour, i) => <PageTitle key={i}>{tour.title}</PageTitle>)
    }

    render() {
        return (
            <div>
                {(this.props.location.info.guide.toursCreated.length > 0) && this.displayTours()}
        <h1>{this.props.info.filterParams.language}</h1>
            </div>
        )
    }
}
