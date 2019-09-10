import React, { Component } from 'react'

import './style.scss';

import img1 from './images/test1.jpg';
import img2 from './images/test2.jpg';
import img3 from './images/test3.jpg';

export default class Gallery extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             veilOpacity : 0
        }

        this.container = React.createRef();
    }

    componentDidMount() {
        //Scroll listener
        this.container.current.addEventListener( "scroll", (e) => {
            let xOffset = this.container.current.scrollLeft;
            let innerWidth = window.innerWidth;
            let pctOfWindowScrolled = (xOffset / innerWidth);
            let twicePct = (pctOfWindowScrolled * 4);
            
            let veilOpacity = twicePct > 1 ? 1 : twicePct;

            this.setState({
                veilOpacity : veilOpacity
            })
            
        });
        
    }
    
    
    render() {
        return (
            <div 
                className="gallery-container" 
                ref={this.container}
                style={
                    { 
                        backgroundColor: `rgba(43,43,43, ${this.state.veilOpacity} )`, 
                    }}>
                
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
            </div>
        )
    }
}
