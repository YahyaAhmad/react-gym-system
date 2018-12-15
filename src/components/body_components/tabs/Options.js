import React, { Component } from 'react';
import MonthList from './options_tab_components/MonthList';
import '../../../css/options_tab.css'
import Popup from '../../externals/Popup';
import AddMonthForm from './options_tab_components/AddMonthForm';
import { getMonths } from '../../externals/Helper';

class Options extends Component {

    constructor(){
        super();
        this.state = {
            showForm: false,
        }
        this.addMonth = this.addMonth.bind(this);
    }

    addMonth(){
        getMonths();
        this.setState({showForm:false})
    }

    render() {
        return (
            <div className="options_tab gym_tab">
                <div className="options_header">
                    <a href="#" className='change-login-button'>Change Login Info</a>
                    <i class="fas fa-plus-square add-button" onClick={() => {this.setState({showForm:true})}}></i>
                </div>
                <Popup onClickOut={() => this.setState({showForm:false})} isShown={this.state.showForm}>
                    <AddMonthForm onClickOut={() => this.setState({showForm:false})} onCreate={this.addMonth}/>
                </Popup>
                <MonthList />
            </div>
        );
    }
}

export default Options;