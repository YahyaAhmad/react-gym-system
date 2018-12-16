import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Loader from '../../Loader';
import MonthSelector from '../clients_tab_components/MonthSelector';
import Axios from 'axios';
import { getFinance } from '../../../externals/Helper';
library.add(faTimes);

export default class Subscription extends Component {

    constructor() {
        super()
        this.state = {
            isLoading: false,
            months: null,
            monthID: null,
        }
        this.inputChange = this.inputChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    inputChange(event){
        this.setState({
            months: event.target.options[event.target.selectedIndex].getAttribute('duration'),
            monthID: event.target.value,
        })
    }

    submitForm(){
        let data ={
            months: this.state.months,
            id: this.props.data.ID,
            expDate: this.props.data.expDate,
            monthID: this.state.monthID,
        }
        Axios.post('http://localhost/gym/clients/subscribe.php', data, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded', 
            }
        }).then( () => {
            alert('Subscribed successfully!');
            this.props.onCreate();
            getFinance();
        } )
    }

    render() {
        let { isLoading } = this.state
        return (
            <div className='gym-form add-clients-form'>
                <FontAwesomeIcon icon={faTimes} onClick={() => this.props.onClickOut()} />
                <label>Months</label>
                <MonthSelector onChange={this.inputChange} />
                <button disabled={isLoading} onClick={this.submitForm} >Add Offer</button>
                <Loader isLoading={isLoading} />
            </div>
        )
    }
}
