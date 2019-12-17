import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/Marker';



export default class GmapMap extends Component {
    constructor(props){
        super(props)
        
    }

    state = {
        lat:40.4167754,
        lng:-3.7037901999999576,
    }

    static defaultProps = {
        center: {
            lat: 40.4167754,
            lng: -3.7037901999999576
        },
        zoom: 11
    };

    handleDrag(e){
        console.log(e)
     
    }
    render() {
        const handleApiLoaded = (map, maps) => {
            // use map and maps objects
          };
        return (
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCm0meO5cjbh70YvG6BIQVh5GqRHXHG7Uw" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                    <Marker
                        
                        lat={this.state.lat}
                        lng={this.state.lng}
                        draggable={true}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}