import React, { Component } from 'react';
import Axios from 'axios';
import globalStore from '../../../../store';
import { mouseLoad } from '../../../externals/Helper';


class Client extends Component {

    constructor(){
        super()
        this.deleteItem = this.deleteItem.bind(this)
    }

    componentWillReceiveProps(){
    }

    deleteItem(){
        let client = {
            id: this.props.data.UserID,
        }
        mouseLoad();
        this.forceUpdate();
        Axios.post('http://localhost/gym/clients/delete.php', client,{
            headers:{
            'Content-Type': 'application/x-www-form-urlencoded', 
        }}).then(() => {
            let action = {
                type: 'DELETE_CLIENT',
                id: this.props.data.ID,
            }
            globalStore.dispatch(action);
        })
    }

    render() {
        let client = this.props.data;
        return (
            <tr>
                <td>{client.Full_Name}</td>
                <td>{client.Email}</td>
                <td>{client.Exp_Date}</td>
                <td><i className="fas fa-envelope send-qrcode"></i></td>
                <td><i onClick={this.deleteItem} class="fas fa-minus-square remove-button"></i></td>
            </tr>
        );
    }
}

export default Client;