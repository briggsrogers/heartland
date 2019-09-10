import React, { Component } from 'react';
import Parallax from '../Parallax';

import './style.scss';

import hero from './images/hero@2x.jpg';
import BrandLockup from '../BrandLockup';

export default class Hero extends Component {

    render() {

        return (
            <div className='Container'>
                
                <Parallax drag={.1}>
                    <img className="hero-image-intro" src={hero} alt=""/>
                </Parallax>
                
                
                <span className='intro'>
                    <h1>Heartland: A Trans-American Bike Trip</h1>
                </span>

                <BrandLockup/>

                {/* <Parallax id={'outro'} drag={.1}> */}
                {/* <span className='outro'>
                    <h1>Words and photos from Brian Rogers</h1>
                </span> */}
                {/* </Parallax> */}
    
            </div>
        )
    }
}
