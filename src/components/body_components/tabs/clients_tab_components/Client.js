import React, { Component } from 'react';


class Client extends Component {

    constructor(){
        super()
        this.deleteItem = this.deleteItem.bind(this)
    }

    componentWillReceiveProps(){
    }

    deleteItem(){

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