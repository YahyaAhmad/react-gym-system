import React, { Component } from 'react';
import MonthSelector from './MonthSelector';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios';
import Loader from '../../Loader';
import globalStore from '../../../../store';
import { getClients, getINOUTS, getFinance } from '../../../externals/Helper';
library.add(faTimes);

class AddClientsForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            month: 'none',
            monthID: null,
            isLoading: false,
        }
        this.inputUpdate = this.inputUpdate.bind(this)
    }

    inputUpdate(event, type) {
        let state = {};
        switch (type) {
            case 'name':
                state.name = event.target.value;
                break;
            case 'email':
                state.email = event.target.value;
                break;
            case 'month':
                state.month = event.target.options[event.target.selectedIndex].getAttribute('duration');
                state.monthID = event.target.value;
                break;
        }
        this.setState(state);
    }

    addClientToState(client){
        let action = {
            type: 'ADD_CLIENT',
            client: client,
        }
        globalStore.dispatch(action);
    }

    addClient() {
        let array = [this.state.name,this.state.email]
        if(array.includes('') || this.state.month=='none'){
            window.alert("Please enter the required fields");
            return;
        }
        this.setState({isLoading:true});
        Axios.post('http://localhost/gym/clients/add.php',this.state,{
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded', 
            }
        }).then((res) => {
            getClients();
            getINOUTS();
            getFinance();
            this.setState({isLoading:false});
            this.props.onCreate();
        })
    }

    render() {
        let { name, email, month, isLoading } = this.state;
        console.log(this.state)

        return (

            <div className='add-clients-form gym-form'>
                <FontAwesomeIcon icon={faTimes} />
                <input placeholder='Full Name' value={name} onChange={(event) => this.inputUpdate(event, 'name')} />
                <input placeholder='Email' onChange={(event) => this.inputUpdate(event, 'email')}/>
                <MonthSelector onChange={(event) => this.inputUpdate(event, 'month')} />
                <button disabled={isLoading} onClick={this.addClient.bind(this)}>Add Client</button>
                <Loader isLoading={isLoading}/>
            </div>
        );
    }
}

export default AddClientsForm;