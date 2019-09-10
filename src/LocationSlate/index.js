import React, { Component } from 'react';
import nyc from './videos/nyc.mp4';

import './style.scss';

export default class LocationSlate extends Component {
    render() {
        return (
            <div className='location-slate-container'>
                <video muted loop autoPlay src={nyc}></video>
                <div className="video-veil"></div>
                <div className="slate-overlay">
                    <h1>New York</h1>
                    <img src="" alt=""/>
                </div>
            </div>
        )
    }
}
