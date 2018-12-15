import React, { Component } from 'react';
import '../../css/react-dynamic-popup.css';

class Popup extends Component {

    onClickOut(){
        if(this.props.onClickOut)
            this.props.onClickOut();
    }

    render() {
        return (
            <div className={'react-dynamic-popup-wrapper ' + (this.props.isShown ? 'visible' : '')}>
                <div onClick={this.onClickOut.bind(this)} className='react-dynamic-popup-shadow'></div>
                <div className='react-dynamic-popup'>
                    {this.props.children}
                </div>
            </div>

        );
    }
}

export default Popup;