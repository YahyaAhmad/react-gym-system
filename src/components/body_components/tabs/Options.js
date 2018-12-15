import React, { Component } from 'react';
import MonthList from './options_tab_components/MonthList';
import '../../../css/options_tab.css'

class Options extends Component {
    render() {
        return (
            <div className="options_tab gym_tab">
                <div className="options_header">
                    <a href="#" className='change-login-button'>Change Login Info</a>
                    <i class="fas fa-plus-square add-button"></i>
                </div>
                <MonthList />
            </div>
        );
    }
}

export default Options;