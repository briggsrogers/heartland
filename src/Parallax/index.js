import React, { Component } from 'react'

export default class Parallax extends Component {

    constructor(props){
        super(props);

        this.myRef = React.createRef();

        this.state = {
            translateY: 0
        }
    }

    componentDidMount() {

        let self = this;
        
        window.onscroll = function(e) {

            let intialOffset = window.pageYOffset;

            self.setState({
                translateY: intialOffset * self.props.drag
            })
        };
    }
        
    render() {

        let { translateY } = this.state;

        return (
            <div 
            ref={this.el}
            style={{ transform: `translateY( ${translateY}px )` }}>
                {this.props.children}
            </div>
        )
    }
}
