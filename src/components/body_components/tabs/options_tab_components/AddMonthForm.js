import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios';
import Loader from '../../Loader';
import { getClients } from '../../../externals/Helper';
library.add(faTimes);

class AddMonthForm extends Component {

    constructor() {
        super()
        this.state = {
            months: 0,
            price: 0,
            isLoading: false,
        }
        this.inputUpdate = this.inputUpdate.bind(this)
    }

    inputUpdate(event, type) {
        let state = {};
        let value = parseInt(event.target.value) || 0;
        switch (type) {
            case 'months':
                state.months = value;
                break;
            case 'price':
                state.price = value;
                break;
        }
        this.setState(state);
    }

    addClient() {
        let array = [this.state.months,this.state.price]
        if(array.includes('')){
            window.alert("Please enter the required fields");
            return;
        }
        this.setState({isLoading:true});
        Axios.post('http://localhost/gym/offers/add.php',this.state,{
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded', 
            }
        }).then((res) => {
            this.setState({isLoading:false});
            this.props.onCreate();
        })
    }

    render() {
        let {months, price, isLoading } = this.state;
        return (

            <div className='add-clients-form gym-form'>
                <FontAwesomeIcon icon={faTimes} onClick={() => this.props.onClickOut()} />
                <label>Months</label>
                <input placeholder='Months' value={months} onChange={(event) => this.inputUpdate(event, 'months')} />
                <label>Price</label>
                <input placeholder='Price' value={price} onChange={(event) => this.inputUpdate(event, 'price')}/>
                <button disabled={isLoading} onClick={this.addClient.bind(this)}>Add Offer</button>
                <Loader isLoading={isLoading}/>
            </div>
        );
    }
}

export default AddMonthForm;