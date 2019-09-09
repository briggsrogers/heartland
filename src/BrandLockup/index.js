import React, { Component } from 'react';

import './style.scss';

import brand1 from './images/brand-1-white.svg';
import brand2 from './images/brand-2-white.svg';
import brand3 from './images/brand-3-white.svg';
import brand4 from './images/brand-4-white.svg';
import brand5 from './images/brand-5-white.svg';
import brand6 from './images/brand-6-white.svg';
import brand7 from './images/brand-7-white.svg';

let images;

export default class BrandLockup extends Component {

    constructor(props){
        super(props);

        //Make image array
        images = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

        //Binding
        this.setIndex = this.setIndex.bind(this);

        this.state = {
            index: 0
        }
    }

    componentDidMount() {

        let self = this;
        
        window.addEventListener( "scroll", this.throttle(this.setIndex, 200) );
    }

   componentWillUnmount() {
        window.removeEventListener( "scroll", this.throttle(this.setIndex, 200) );
   }

   setIndex() {

    let noOfImages = images.length;
    let docHeight = document.body.clientHeight;

    let percentageScrolled = ((window.pageYOffset/docHeight ));
    let index = (Math.round( noOfImages * percentageScrolled) );

    // let intialOffset = window.pageYOffset;

    this.setState({
        index: index
    })
}

   provideIndex(offset) {
        let noOfImages = images.length;
        let { index } = this.state;

       // return (index + offset) % noOfImages;
        
        if( this.coinFlip()){
            return (index + offset) % noOfImages;
        }
        else{
            return (offset) % noOfImages;
        }    
   }

    coinFlip() {
        return (Math.floor(Math.random() * 9) == 0);
    }

    throttle(fn, wait) {
        var time = Date.now();
        return function() {
          if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
          }
        }
      }

    render() {

        return (        
            <div className="brand-lockup-container">
                <div className="brand-lockup-container-inner">
                        <div className="brand-container">
                            <img src={images[this.provideIndex(3)]} alt=""/>
                        </div>
                        <div className="brand-container">
                            <img src={images[this.provideIndex(2)]} alt=""/>
                        </div>                 
                        <div className="brand-container">
                            <img src={images[this.provideIndex(5)]} alt=""/>
                        </div>
                        <div className="brand-container">
                            <img src={images[this.provideIndex(6)]} alt=""/>
                        </div>
                        <div className="brand-container">
                            <img src={images[this.provideIndex(4)]} alt=""/>
                        </div>
                        <div className="brand-container">
                            <img src={images[this.provideIndex(0)]} alt=""/>
                        </div>
                        <div className="brand-container">
                            <img src={images[this.provideIndex(1)]} alt=""/>
                        </div>
                </div>           
            </div>
        )
    }
}
