import React, { Component } from 'react';
import InOuts from './hr_tab_components/InOuts';
import '../../../css/hr.css'

class HRTab extends Component {
    render() {
        return (
            <div className="hr_tab gym_tab">
                <InOuts/>
            </div>
        );
    }
}

export default HRTab;