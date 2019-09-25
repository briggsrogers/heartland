import React, { Component } from 'react'
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";

import './style.scss';

class Navigator extends Component {
    render() {

            const Map = withScriptjs(withGoogleMap(props => (
                
                <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}/>
                )));

            return(    
                
                <div className="NavigatorContainer">
                    <Map 
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100vh` }} />}
                        mapElement={<div style={{ height: `100vh` }} />}       
                    /> 
                </div>
                
            )
    }
}

export default Navigator;
