import React, { Component } from 'react';

import brand1 from './images/brand-1.svg';
import brand2 from './images/brand-2.svg';
import brand3 from './images/brand-3.svg';
import brand4 from './images/brand-4.svg';
import brand5 from './images/brand-5.svg';
import brand6 from './images/brand-6.svg';
import brand7 from './images/brand-7.svg';

import './style.scss';

export default class Type extends Component {
    render() {
        return (
            <div className='type-container'>
                <img src={brand1} alt="Cattle Brand"/>
                <h1>Forward</h1>
                <p>It’s been obvious to me for a long time what the best way to travel would be: to tour. Not on a bicycle, of course not– but as a musician. To move from one community to another, unpacking and re-packing a set of songs, to have an immediate purpose in every new place you visit.   To substitute a bicycle for a band requires some mental gymnastics. To position exertion as artistry,  endurance as expression, is of course impossible. But I’m curious how wide this gulf really is. How different does it feel to remember a musical performance than a physical one?  There must be people at the intersection of the touring musician / touring cyclist Venn diagram who could answer. Without knowing any, and without a band or a van, I would have to investigate for myself. </p>
            </div>
        )
    }
}
