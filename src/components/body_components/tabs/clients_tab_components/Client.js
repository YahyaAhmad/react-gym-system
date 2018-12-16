import React, { Component } from 'react';
import Axios from 'axios';
import globalStore from '../../../../store';
import { mouseLoad } from '../../../externals/Helper';


class Client extends Component {

    constructor(){
        super()
        this.deleteItem = this.deleteItem.bind(this)
        this.resendQrcode = this.resendQrcode.bind(this)
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

    resendQrcode(){
        let confirmSend = window.confirm('You are about to resend the QRCode.');
        if(confirmSend){
            let data = {
                email: this.props.data.Email,
                code: this.props.data.Code,
                date: this.props.data.Exp_Date,

            }
            Axios.post('http://localhost/gym/clients/resend.php', data, {
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded', 
                }
            }).then( () => {
                alert("Email send successfully!");
            } )
        }
    }

    render() {
        let client = this.props.data;
        return (
            <tr>
                <td>{client.Full_Name}</td>
                <td>{client.Email}</td>
                <td>{client.Exp_Date}</td>
                <td><i onClick={this.resendQrcode} className="fas fa-envelope send-qrcode"></i></td>
                <td><i onClick={this.deleteItem} class="fas fa-minus-square remove-button"></i></td>
            </tr>
        );
    }
}

export default Client;