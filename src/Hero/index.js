import React, { Component } from 'react';
import Parallax from '../Parallax';

import './style.scss';

import hero from './images/hero@2x.jpg';

import brand1 from './images/brand-1-white.svg';
import brand2 from './images/brand-2-white.svg';
import brand3 from './images/brand-3-white.svg';
import brand4 from './images/brand-4-white.svg';
import brand5 from './images/brand-5-white.svg';
import brand6 from './images/brand-6-white.svg';
import brand7 from './images/brand-7-white.svg';

export default class Hero extends Component {
    render() {
        return (
            <div className='Container'>
               
                <Parallax id={'intro'} drag={.04}>
                    <span className={['intro']}>
                        <h1>Heartland: A Trans-American Bike Trip</h1>
                    </span>
                </Parallax>

                <div className="brand-lockup-container">
                    <div className="brand-lockup-container-inner">
                            <div className="brand-container">
                                <img src={brand2} alt=""/>
                            </div>
                            <div className="brand-container">
                                <img src={brand1} alt=""/>
                            </div>
                           
                            <div className="brand-container">
                                <img src={brand3} alt=""/>
                            </div>
                            <div className="brand-container">
                                <img src={brand7} alt=""/>
                            </div>
                            <div className="brand-container">
                                <img src={brand4} alt=""/>
                            </div>
                            <div className="brand-container">
                                <img src={brand5} alt=""/>
                            </div>
                            <div className="brand-container">
                                <img src={brand6} alt=""/>
                            </div>    
                    </div>           
                </div>

                <Parallax id={'outro'} drag={.04}>
                    <span className={['outro']}>
                        <h1>June & July<br />2019</h1>
                    </span>
                </Parallax>

                

                <img className="hero-image-intro" src={hero} alt=""/>
                

            </div>
        )
    }
}
