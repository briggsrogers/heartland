import React, { Component } from 'react';
import Parallax from '../Parallax';

import './style.scss';

import hero from './images/hero@2x.jpg';

export default class Hero extends Component {
    render() {
        return (
            <div className='Container'>
               
                <Parallax drag={.1}>
                    <span className={['intro']}>
                        <h1>Heartland: A Trans-American Bike Trip</h1>
                    </span>
                </Parallax>

                <img src={hero} alt=""/>
                

            </div>
        )
    }
}
