import React, { Component } from 'react';
import globalStore from '../../../../store/index';
import axios from 'axios';

class ClientInfo extends Component {
    constructor() {
        super()
        this.state = {
            scannedClient: null,
        }
    }

    componentWillMount() {
        globalStore.subscribe(() => {
            this.setState({
                scannedClient: globalStore.getState().scannedClient,
            })
        })
    }

    render() {
        let renderedInfo = "";
        let scannedClient = this.state.scannedClient
        if (scannedClient) {
            if (scannedClient.status != 'invalid_qrcode')
                renderedInfo = <div>
                    <div className="client_name" >
                        <span className="client_stat">Full Name:</span>
                        {scannedClient.fullName}
                    </div>
                    <div className="client_exp" >
                        <span className="client_stat">Exp. Date:</span>
                        {scannedClient.expDate}
                    </div>
                    <div className="client_email" >
                        <span className="client_stat">Email:</span>
                        {scannedClient.email}
                    </div>
                    <div className="client_code" >
                        <span className="client_stat">Code:</span>
                        <span className="qrcode">{scannedClient.code}</span>
                    </div>
                    <div className={"client_status" + (scannedClient.status=='rejected'?" rejected":"")} >{capitalizeFirstLetter(scannedClient.status)}</div>
                </div>
            else
                renderedInfo = <div className="invalid code">
                    Invalid QRCode.
                </div>
        }
        return (
            <div className="clients_info">
                {renderedInfo}
            </div>
        );
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default ClientInfo;